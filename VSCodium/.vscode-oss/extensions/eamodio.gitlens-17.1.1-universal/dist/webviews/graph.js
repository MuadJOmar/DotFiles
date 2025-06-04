let e,t,r,n,o,i,c;var u,h,d,p,m,g,b,v,w,_,S,C,x,T={26:(e,t,r)=>{e.exports=r(841)},47:(e,t,r)=>{r(602)},59:(e,t,r)=>{var n=r(975);function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var c={d:{f:i,r:function(){throw Error(o(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},u=Symbol.for("react.portal"),h=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(e,t){return"font"===e?"":"string"==typeof t?"use-credentials"===t?t:"":void 0}t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,t.createPortal=function(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(o(299));return function(e,t,r){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:u,key:null==n?null:""+n,children:e,containerInfo:t,implementation:r}}(e,t,null,r)},t.flushSync=function(e){var t=h.T,r=c.p;try{if(h.T=null,c.p=2,e)return e()}finally{h.T=t,c.p=r,c.d.f()}},t.preconnect=function(e,t){"string"==typeof e&&(t=t?"string"==typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:null,c.d.C(e,t))},t.prefetchDNS=function(e){"string"==typeof e&&c.d.D(e)},t.preinit=function(e,t){if("string"==typeof e&&t&&"string"==typeof t.as){var r=t.as,n=d(r,t.crossOrigin),o="string"==typeof t.integrity?t.integrity:void 0,i="string"==typeof t.fetchPriority?t.fetchPriority:void 0;"style"===r?c.d.S(e,"string"==typeof t.precedence?t.precedence:void 0,{crossOrigin:n,integrity:o,fetchPriority:i}):"script"===r&&c.d.X(e,{crossOrigin:n,integrity:o,fetchPriority:i,nonce:"string"==typeof t.nonce?t.nonce:void 0})}},t.preinitModule=function(e,t){if("string"==typeof e)if("object"==typeof t&&null!==t){if(null==t.as||"script"===t.as){var r=d(t.as,t.crossOrigin);c.d.M(e,{crossOrigin:r,integrity:"string"==typeof t.integrity?t.integrity:void 0,nonce:"string"==typeof t.nonce?t.nonce:void 0})}}else null==t&&c.d.M(e)},t.preload=function(e,t){if("string"==typeof e&&"object"==typeof t&&null!==t&&"string"==typeof t.as){var r=t.as,n=d(r,t.crossOrigin);c.d.L(e,r,{crossOrigin:n,integrity:"string"==typeof t.integrity?t.integrity:void 0,nonce:"string"==typeof t.nonce?t.nonce:void 0,type:"string"==typeof t.type?t.type:void 0,fetchPriority:"string"==typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"==typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"==typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"==typeof t.imageSizes?t.imageSizes:void 0,media:"string"==typeof t.media?t.media:void 0})}},t.preloadModule=function(e,t){if("string"==typeof e)if(t){var r=d(t.as,t.crossOrigin);c.d.m(e,{as:"string"==typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:r,integrity:"string"==typeof t.integrity?t.integrity:void 0})}else c.d.m(e)},t.requestFormReset=function(e){c.d.r(e)},t.unstable_batchedUpdates=function(e,t){return e(t)},t.useFormState=function(e,t,r){return h.H.useFormState(e,t,r)},t.useFormStatus=function(){return h.H.useHostTransitionStatus()},t.version="19.0.0"},169:(e,t,r)=>{var n,o,i=r(26),c=r(975),u=r(723);function h(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d=Symbol.for("react.element"),p=Symbol.for("react.transitional.element"),m=Symbol.for("react.portal"),g=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),_=Symbol.for("react.consumer"),S=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),T=Symbol.for("react.suspense_list"),E=Symbol.for("react.memo"),O=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var A=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.tracing_marker");var D=Symbol.for("react.memo_cache_sentinel"),$=Symbol.iterator;function P(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=$&&e[$]||e["@@iterator"])?e:null}var G,W,F=Symbol.for("react.client.reference"),B=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U=Object.assign;function j(e){if(void 0===G)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);G=t&&t[1]||"",W=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+G+e+W}var Z=!1;function V(e,t){if(!e||Z)return"";Z=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var r=function(){throw Error()};if(Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(r,[])}catch(e){var n=e}Reflect.construct(e,[],r)}else{try{r.call()}catch(e){n=e}e.call(r.prototype)}}else{try{throw Error()}catch(e){n=e}(r=e())&&"function"==typeof r.catch&&r.catch(function(){})}}catch(e){if(e&&n&&"string"==typeof e.stack)return[e.stack,n.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=n.DetermineComponentFrameRoot(),c=i[0],u=i[1];if(c&&u){var h=c.split(`
`),d=u.split(`
`);for(o=n=0;n<h.length&&!h[n].includes("DetermineComponentFrameRoot");)n++;for(;o<d.length&&!d[o].includes("DetermineComponentFrameRoot");)o++;if(n===h.length||o===d.length)for(n=h.length-1,o=d.length-1;1<=n&&0<=o&&h[n]!==d[o];)o--;for(;1<=n&&0<=o;n--,o--)if(h[n]!==d[o]){if(1!==n||1!==o)do if(n--,o--,0>o||h[n]!==d[o]){var p=`
`+h[n].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),p}while(1<=n&&0<=o)break}}}finally{Z=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?j(r):""}function q(e){try{var t="";do t+=function(e){switch(e.tag){case 26:case 27:case 5:return j(e.type);case 16:return j("Lazy");case 13:return j("Suspense");case 19:return j("SuspenseList");case 0:case 15:return e=V(e.type,!1);case 11:return e=V(e.type.render,!1);case 1:return e=V(e.type,!0);default:return""}}(e),e=e.return;while(e)return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}function K(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do 0!=(4098&(t=e).flags)&&(r=t.return),e=t.return;while(e)}return 3===t.tag?r:null}function Q(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&null!==(e=e.alternate)&&(t=e.memoizedState),null!==t)return t.dehydrated}return null}function X(e){if(K(e)!==e)throw Error(h(188))}var J=Array.isArray,ee=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,et={pending:!1,data:null,method:null,action:null},er=[],en=-1;function eo(e){return{current:e}}function ei(e){0>en||(e.current=er[en],er[en]=null,en--)}function es(e,t){er[++en]=e.current,e.current=t}var ea=eo(null),el=eo(null),ec=eo(null),eu=eo(null);function eh(e,t){switch(es(ec,t),es(el,e),es(ea,null),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)&&(t=t.namespaceURI)?cT(t):0;break;default:if(t=(e=8===e?t.parentNode:t).tagName,e=e.namespaceURI)t=cE(e=cT(e),t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ei(ea),es(ea,t)}function ed(){ei(ea),ei(el),ei(ec)}function ep(e){null!==e.memoizedState&&es(eu,e);var t=ea.current,r=cE(t,e.type);t!==r&&(es(el,e),es(ea,r))}function ef(e){el.current===e&&(ei(ea),ei(el)),eu.current===e&&(ei(eu),un._currentValue=et)}var em=Object.prototype.hasOwnProperty,eg=i.unstable_scheduleCallback,eb=i.unstable_cancelCallback,ev=i.unstable_shouldYield,ey=i.unstable_requestPaint,ew=i.unstable_now,e_=i.unstable_getCurrentPriorityLevel,eS=i.unstable_ImmediatePriority,eC=i.unstable_UserBlockingPriority,ex=i.unstable_NormalPriority,ek=i.unstable_LowPriority,eR=i.unstable_IdlePriority,eT=i.log,eE=i.unstable_setDisableYieldValue,eO=null,eM=null;function eI(e){if("function"==typeof eT&&eE(e),eM&&"function"==typeof eM.setStrictMode)try{eM.setStrictMode(eO,e)}catch{}}var eA=Math.clz32?Math.clz32:function(e){return 0==(e>>>=0)?32:31-(eN(e)/eD|0)|0},eN=Math.log,eD=Math.LN2,ez=128,e$=4194304;function eP(e){var t=42&e;if(0!==t)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194176&e;case 4194304:case 8388608:case 0x1000000:case 0x2000000:return 0x3c00000&e;case 0x4000000:return 0x4000000;case 0x8000000:return 0x8000000;case 0x10000000:return 0x10000000;case 0x20000000:return 0x20000000;case 0x40000000:return 0;default:return e}}function eL(e,t){var r=e.pendingLanes;if(0===r)return 0;var n=0,o=e.suspendedLanes,i=e.pingedLanes,c=e.warmLanes;e=0!==e.finishedLanes;var u=0x7ffffff&r;return 0!==u?0!=(r=u&~o)?n=eP(r):0!=(i&=u)?n=eP(i):e||0!=(c=u&~c)&&(n=eP(c)):0!=(u=r&~o)?n=eP(u):0!==i?n=eP(i):e||0!=(c=r&~c)&&(n=eP(c)),0===n?0:0!==t&&t!==n&&0==(t&o)&&((o=n&-n)>=(c=t&-t)||32===o&&0!=(4194176&c))?t:n}function eH(e,t){return 0==(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)}function eG(){var e=ez;return 0==(4194176&(ez<<=1))&&(ez=128),e}function eW(){var e=e$;return 0==(0x3c00000&(e$<<=1))&&(e$=4194304),e}function eF(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function eB(e,t){e.pendingLanes|=t,0x10000000!==t&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function eU(e,t,r){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-eA(t);e.entangledLanes|=t,e.entanglements[n]=0x40000000|e.entanglements[n]|4194218&r}function ej(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-eA(r),o=1<<n;o&t|e[n]&t&&(e[n]|=t),r&=~o}}function eZ(e){return 2<(e&=-e)?8<e?0!=(0x7ffffff&e)?32:0x10000000:8:2}function eV(){var e=ee.p;return 0!==e?e:void 0===(e=window.event)?32:ug(e.type)}var eq=Math.random().toString(36).slice(2),eY="__reactFiber$"+eq,eK="__reactProps$"+eq,eQ="__reactContainer$"+eq,eX="__reactEvents$"+eq,eJ="__reactListeners$"+eq,e0="__reactHandles$"+eq,e1="__reactResources$"+eq,e2="__reactMarker$"+eq;function e5(e){delete e[eY],delete e[eK],delete e[eX],delete e[eJ],delete e[e0]}function e3(e){var t=e[eY];if(t)return t;for(var r=e.parentNode;r;){if(t=r[eQ]||r[eY]){if(r=t.alternate,null!==t.child||null!==r&&null!==r.child)for(e=cH(e);null!==e;){if(r=e[eY])return r;e=cH(e)}return t}r=(e=r).parentNode}return null}function e6(e){if(e=e[eY]||e[eQ]){var t=e.tag;if(5===t||6===t||13===t||26===t||27===t||3===t)return e}return null}function e4(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e.stateNode;throw Error(h(33))}function e8(e){var t=e[e1];return t||(t=e[e1]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function e9(e){e[e2]=!0}var e7=new Set,te={};function tt(e,t){tr(e,t),tr(e+"Capture",t)}function tr(e,t){for(te[e]=t,e=0;e<t.length;e++)e7.add(t[e])}var tn="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,to=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ti={},ts={};function ta(e,t,r){if(em.call(ts,t)||!em.call(ti,t)&&(to.test(t)?ts[t]=!0:(ti[t]=!0,!1)))if(null===r)e.removeAttribute(t);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if("data-"!==n&&"aria-"!==n)return void e.removeAttribute(t)}e.setAttribute(t,""+r)}}function tl(e,t,r){if(null===r)e.removeAttribute(t);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+r)}}function tc(e,t,r,n){if(null===n)e.removeAttribute(r);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(t,r,""+n)}}function tu(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function th(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function td(e){e._valueTracker||(e._valueTracker=function(e){var t=th(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==r&&"function"==typeof r.get&&"function"==typeof r.set){var o=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(e){n=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function tp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=th(e)?e.checked?"true":"false":e.value),(e=n)!==r&&(t.setValue(e),!0)}function tf(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch{return e.body}}var tm=/[\n"\\]/g;function tg(e){return e.replace(tm,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function tb(e,t,r,n,o,i,c,u){e.name="",null!=c&&"function"!=typeof c&&"symbol"!=typeof c&&"boolean"!=typeof c?e.type=c:e.removeAttribute("type"),null!=t?"number"===c?(0===t&&""===e.value||e.value!=t)&&(e.value=""+tu(t)):e.value!==""+tu(t)&&(e.value=""+tu(t)):"submit"!==c&&"reset"!==c||e.removeAttribute("value"),null!=t?ty(e,c,tu(t)):null!=r?ty(e,c,tu(r)):null!=n&&e.removeAttribute("value"),null==o&&null!=i&&(e.defaultChecked=!!i),null!=o&&(e.checked=o&&"function"!=typeof o&&"symbol"!=typeof o),null!=u&&"function"!=typeof u&&"symbol"!=typeof u&&"boolean"!=typeof u?e.name=""+tu(u):e.removeAttribute("name")}function tv(e,t,r,n,o,i,c,u){if(null!=i&&"function"!=typeof i&&"symbol"!=typeof i&&"boolean"!=typeof i&&(e.type=i),null!=t||null!=r){if(("submit"===i||"reset"===i)&&null==t)return;r=null!=r?""+tu(r):"",t=null!=t?""+tu(t):r,u||t===e.value||(e.value=t),e.defaultValue=t}n="function"!=typeof(n=null!=n?n:o)&&"symbol"!=typeof n&&!!n,e.checked=u?e.checked:!!n,e.defaultChecked=!!n,null!=c&&"function"!=typeof c&&"symbol"!=typeof c&&"boolean"!=typeof c&&(e.name=c)}function ty(e,t,r){"number"===t&&tf(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function tw(e,t,r,n){if(e=e.options,t){t={};for(var o=0;o<r.length;o++)t["$"+r[o]]=!0;for(r=0;r<e.length;r++)o=t.hasOwnProperty("$"+e[r].value),e[r].selected!==o&&(e[r].selected=o),o&&n&&(e[r].defaultSelected=!0)}else{for(o=0,r=""+tu(r),t=null;o<e.length;o++){if(e[o].value===r){e[o].selected=!0,n&&(e[o].defaultSelected=!0);return}null!==t||e[o].disabled||(t=e[o])}null!==t&&(t.selected=!0)}}function t_(e,t,r){if(null!=t&&((t=""+tu(t))!==e.value&&(e.value=t),null==r)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=null!=r?""+tu(r):""}function tS(e,t,r,n){if(null==t){if(null!=n){if(null!=r)throw Error(h(92));if(J(n)){if(1<n.length)throw Error(h(93));n=n[0]}r=n}null==r&&(r=""),t=r}e.defaultValue=r=tu(t),(n=e.textContent)===r&&""!==n&&null!==n&&(e.value=n)}function tC(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&3===r.nodeType){r.nodeValue=t;return}}e.textContent=t}var tx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function tk(e,t,r){var n=0===t.indexOf("--");null==r||"boolean"==typeof r||""===r?n?e.setProperty(t,""):"float"===t?e.cssFloat="":e[t]="":n?e.setProperty(t,r):"number"!=typeof r||0===r||tx.has(t)?"float"===t?e.cssFloat=r:e[t]=(""+r).trim():e[t]=r+"px"}function tR(e,t,r){if(null!=t&&"object"!=typeof t)throw Error(h(62));if(e=e.style,null!=r){for(var n in r)!r.hasOwnProperty(n)||null!=t&&t.hasOwnProperty(n)||(0===n.indexOf("--")?e.setProperty(n,""):"float"===n?e.cssFloat="":e[n]="");for(var o in t)n=t[o],t.hasOwnProperty(o)&&r[o]!==n&&tk(e,o,n)}else for(var i in t)t.hasOwnProperty(i)&&tk(e,i,t[i])}function tT(e){if(-1===e.indexOf("-"))return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tE=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),tO=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function tM(e){return tO.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var tI=null;function tA(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var tN=null,tD=null;function tz(e){var t=e6(e);if(t&&(e=t.stateNode)){var r=e[eK]||null;switch(e=t.stateNode,t.type){case"input":if(tb(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),t=r.name,"radio"===r.type&&null!=t){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+tg(""+t)+'"][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var o=n[eK]||null;if(!o)throw Error(h(90));tb(n,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(t=0;t<r.length;t++)(n=r[t]).form===e.form&&tp(n)}break;case"textarea":t_(e,r.value,r.defaultValue);break;case"select":null!=(t=r.value)&&tw(e,!!r.multiple,t,!1)}}}var t$=!1;function tP(e,t,r){if(t$)return e(t,r);t$=!0;try{return e(t)}finally{if(t$=!1,(null!==tN||null!==tD)&&(lT(),tN&&(t=tN,e=tD,tD=tN=null,tz(t),e)))for(t=0;t<e.length;t++)tz(e[t])}}function tL(e,t){var r=e.stateNode;if(null===r)return null;var n=r[eK]||null;if(null===n)return null;switch(r=n[t],t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(n="button"!==(e=e.type)&&"input"!==e&&"select"!==e&&"textarea"!==e),e=!n;break;default:e=!1}if(e)return null;if(r&&"function"!=typeof r)throw Error(h(231,t,typeof r));return r}var tH=!1;if(tn)try{var tG={};Object.defineProperty(tG,"passive",{get:function(){tH=!0}}),window.addEventListener("test",tG,tG),window.removeEventListener("test",tG,tG)}catch{tH=!1}var tW=null,tF=null,tB=null;function tU(){if(tB)return tB;var e,t,r=tF,n=r.length,o="value"in tW?tW.value:tW.textContent,i=o.length;for(e=0;e<n&&r[e]===o[e];e++);var c=n-e;for(t=1;t<=c&&r[n-t]===o[i-t];t++);return tB=o.slice(e,1<t?1-t:void 0)}function tj(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function tZ(){return!0}function tV(){return!1}function tq(e){function t(t,r,n,o,i){for(var c in this._reactName=t,this._targetInst=n,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null,e)e.hasOwnProperty(c)&&(t=e[c],this[c]=t?t(o):o[c]);return this.isDefaultPrevented=(null!=o.defaultPrevented?o.defaultPrevented:!1===o.returnValue)?tZ:tV,this.isPropagationStopped=tV,this}return U(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=tZ)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=tZ)},persist:function(){},isPersistent:tZ}),t}var tY,tK,tQ,tX={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tJ=tq(tX),t0=U({},tX,{view:0,detail:0}),t1=tq(t0),t2=U({},t0,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==tQ&&(tQ&&"mousemove"===e.type?(tY=e.screenX-tQ.screenX,tK=e.screenY-tQ.screenY):tK=tY=0,tQ=e),tY)},movementY:function(e){return"movementY"in e?e.movementY:tK}}),t5=tq(t2),t3=tq(U({},t2,{dataTransfer:0})),t6=tq(U({},t0,{relatedTarget:0})),t4=tq(U({},tX,{animationName:0,elapsedTime:0,pseudoElement:0})),t8=tq(U({},tX,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),t9=tq(U({},tX,{data:0})),t7={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},re={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rt={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rr(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=rt[e])&&!!t[e]}function rn(){return rr}var ro=tq(U({},t0,{key:function(e){if(e.key){var t=t7[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tj(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?re[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rn,charCode:function(e){return"keypress"===e.type?tj(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tj(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),ri=tq(U({},t2,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),rs=tq(U({},t0,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rn})),ra=tq(U({},tX,{propertyName:0,elapsedTime:0,pseudoElement:0})),rl=tq(U({},t2,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),rc=tq(U({},tX,{newState:0,oldState:0})),ru=[9,13,27,32],rh=tn&&"CompositionEvent"in window,rd=null;tn&&"documentMode"in document&&(rd=document.documentMode);var rp=tn&&"TextEvent"in window&&!rd,rf=tn&&(!rh||rd&&8<rd&&11>=rd),rm=!1;function rg(e,t){switch(e){case"keyup":return -1!==ru.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rb(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var rv=!1,ry={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rw(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!ry[e.type]:"textarea"===t}function r_(e,t,r,n){tN?tD?tD.push(n):tD=[n]:tN=n,0<(t=cp(t,"onChange")).length&&(r=new tJ("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var rS=null,rC=null;function rx(e){ci(e,0)}function rk(e){if(tp(e4(e)))return e}function rR(e,t){if("change"===e)return t}var rT=!1;if(tn){if(tn){var rE="oninput"in document;if(!rE){var rO=document.createElement("div");rO.setAttribute("oninput","return;"),rE="function"==typeof rO.oninput}n=rE}else n=!1;rT=n&&(!document.documentMode||9<document.documentMode)}function rM(){rS&&(rS.detachEvent("onpropertychange",rI),rC=rS=null)}function rI(e){if("value"===e.propertyName&&rk(rC)){var t=[];r_(t,rC,e,tA(e)),tP(rx,t)}}function rA(e,t,r){"focusin"===e?(rM(),rS=t,rC=r,rS.attachEvent("onpropertychange",rI)):"focusout"===e&&rM()}function rN(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return rk(rC)}function rD(e,t){if("click"===e)return rk(t)}function rz(e,t){if("input"===e||"change"===e)return rk(t)}var r$="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};function rP(e,t){if(r$(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var o=r[n];if(!em.call(t,o)||!r$(e[o],t[o]))return!1}return!0}function rL(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rH(e,t){var r,n=rL(e);for(e=0;n;){if(3===n.nodeType){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rL(n)}}function rG(e){e=null!=e&&null!=e.ownerDocument&&null!=e.ownerDocument.defaultView?e.ownerDocument.defaultView:window;for(var t=tf(e.document);t instanceof e.HTMLIFrameElement;){try{var r="string"==typeof t.contentWindow.location.href}catch{r=!1}if(r)e=t.contentWindow;else break;t=tf(e.document)}return t}function rW(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var rF=tn&&"documentMode"in document&&11>=document.documentMode,rB=null,rU=null,rj=null,rZ=!1;function rV(e,t,r){var n=r.window===r?r.document:9===r.nodeType?r:r.ownerDocument;rZ||null==rB||rB!==tf(n)||(n="selectionStart"in(n=rB)&&rW(n)?{start:n.selectionStart,end:n.selectionEnd}:{anchorNode:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset},rj&&rP(rj,n)||(rj=n,0<(n=cp(rU,"onSelect")).length&&(t=new tJ("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=rB)))}function rq(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var rY={animationend:rq("Animation","AnimationEnd"),animationiteration:rq("Animation","AnimationIteration"),animationstart:rq("Animation","AnimationStart"),transitionrun:rq("Transition","TransitionRun"),transitionstart:rq("Transition","TransitionStart"),transitioncancel:rq("Transition","TransitionCancel"),transitionend:rq("Transition","TransitionEnd")},rK={},rQ={};function rX(e){if(rK[e])return rK[e];if(!rY[e])return e;var t,r=rY[e];for(t in r)if(r.hasOwnProperty(t)&&t in rQ)return rK[e]=r[t];return e}tn&&(rQ=document.createElement("div").style,"AnimationEvent"in window||(delete rY.animationend.animation,delete rY.animationiteration.animation,delete rY.animationstart.animation),"TransitionEvent"in window||delete rY.transitionend.transition);var rJ=rX("animationend"),r0=rX("animationiteration"),r1=rX("animationstart"),r2=rX("transitionrun"),r5=rX("transitionstart"),r3=rX("transitioncancel"),r6=rX("transitionend"),r4=new Map,r8="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function r9(e,t){r4.set(e,t),tt(t,[e])}var r7=[],ne=0,nt=0;function nr(){for(var e=ne,t=nt=ne=0;t<e;){var r=r7[t];r7[t++]=null;var n=r7[t];r7[t++]=null;var o=r7[t];r7[t++]=null;var i=r7[t];if(r7[t++]=null,null!==n&&null!==o){var c=n.pending;null===c?o.next=o:(o.next=c.next,c.next=o),n.pending=o}0!==i&&nc(r,o,i)}}function no(e,t,r,n){r7[ne++]=e,r7[ne++]=t,r7[ne++]=r,r7[ne++]=n,nt|=n,e.lanes|=n,null!==(e=e.alternate)&&(e.lanes|=n)}function na(e,t,r,n){return no(e,t,r,n),nu(e)}function nl(e,t){return no(e,null,null,t),nu(e)}function nc(e,t,r){e.lanes|=r;var n=e.alternate;null!==n&&(n.lanes|=r);for(var o=!1,i=e.return;null!==i;)i.childLanes|=r,null!==(n=i.alternate)&&(n.childLanes|=r),22===i.tag&&(null===(e=i.stateNode)||1&e._visibility||(o=!0)),e=i,i=i.return;o&&null!==t&&3===e.tag&&(i=e.stateNode,o=31-eA(r),null===(e=(i=i.hiddenUpdates)[o])?i[o]=[t]:e.push(t),t.lane=0x20000000|r)}function nu(e){if(50<lv)throw lv=0,ly=null,Error(h(185));for(var t=e.return;null!==t;)t=(e=t).return;return 3===e.tag?e.stateNode:null}var nh={},nd=new WeakMap;function np(e,t){if("object"==typeof e&&null!==e){var r=nd.get(e);return void 0!==r?r:(t={value:e,source:t,stack:q(t)},nd.set(e,t),t)}return{value:e,source:t,stack:q(t)}}var nm=[],ng=0,nb=null,ny=0,nw=[],n_=0,nS=null,nC=1,nR="";function nT(e,t){nm[ng++]=ny,nm[ng++]=nb,nb=e,ny=t}function nE(e,t,r){nw[n_++]=nC,nw[n_++]=nR,nw[n_++]=nS,nS=e;var n=nC;e=nR;var o=32-eA(n)-1;n&=~(1<<o),r+=1;var i=32-eA(t)+o;if(30<i){var c=o-o%5;i=(n&(1<<c)-1).toString(32),n>>=c,o-=c,nC=1<<32-eA(t)+o|r<<o|n,nR=i+e}else nC=1<<i|r<<o|n,nR=e}function nO(e){null!==e.return&&(nT(e,1),nE(e,1,0))}function nM(e){for(;e===nb;)nb=nm[--ng],nm[ng]=null,ny=nm[--ng],nm[ng]=null;for(;e===nS;)nS=nw[--n_],nw[n_]=null,nR=nw[--n_],nw[n_]=null,nC=nw[--n_],nw[n_]=null}var nI=null,nA=null,nN=!1,nD=null,nz=!1,n$=Error(h(519));function nP(e){throw nF(np(Error(h(418,"")),e)),n$}function nL(e){var t=e.stateNode,r=e.type,n=e.memoizedProps;switch(t[eY]=e,t[eK]=n,r){case"dialog":cs("cancel",t),cs("close",t);break;case"iframe":case"object":case"embed":cs("load",t);break;case"video":case"audio":for(r=0;r<cn.length;r++)cs(cn[r],t);break;case"source":cs("error",t);break;case"img":case"image":case"link":cs("error",t),cs("load",t);break;case"details":cs("toggle",t);break;case"input":cs("invalid",t),tv(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),td(t);break;case"select":cs("invalid",t);break;case"textarea":cs("invalid",t),tS(t,n.value,n.defaultValue,n.children),td(t)}"string"!=typeof(r=n.children)&&"number"!=typeof r&&"bigint"!=typeof r||t.textContent===""+r||!0===n.suppressHydrationWarning||cy(t.textContent,r)?(null!=n.popover&&(cs("beforetoggle",t),cs("toggle",t)),null!=n.onScroll&&cs("scroll",t),null!=n.onScrollEnd&&cs("scrollend",t),null!=n.onClick&&(t.onclick=cw),t=!0):t=!1,t||nP(e)}function nH(e){for(nI=e.return;nI;)switch(nI.tag){case 3:case 27:nz=!0;return;case 5:case 13:nz=!1;return;default:nI=nI.return}}function nG(e){if(e!==nI)return!1;if(!nN)return nH(e),nN=!0,!1;var t,r=!1;if((t=3!==e.tag&&27!==e.tag)&&((t=5===e.tag)&&(t="form"===(t=e.type)||"button"===t||cO(e.type,e.memoizedProps)),t=!t),t&&(r=!0),r&&nA&&nP(e),nH(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(h(317));e:{for(r=0,e=e.nextSibling;e;){if(8===e.nodeType)if("/$"===(t=e.data)){if(0===r){nA=cL(e.nextSibling);break e}r--}else"$"!==t&&"$!"!==t&&"$?"!==t||r++;e=e.nextSibling}nA=null}}else nA=nI?cL(e.stateNode.nextSibling):null;return!0}function nW(){nA=nI=null,nN=!1}function nF(e){null===nD?nD=[e]:nD.push(e)}var nB=Error(h(460)),nU=Error(h(474)),nj={then:function(){}};function nZ(e){return"fulfilled"===(e=e.status)||"rejected"===e}function nV(){}function nY(e,t,r){switch(void 0===(r=e[r])?e.push(t):r!==t&&(t.then(nV,nV),t=r),t.status){case"fulfilled":return t.value;case"rejected":if((e=t.reason)===nB)throw Error(h(483));throw e;default:if("string"==typeof t.status)t.then(nV,nV);else{if(null!==(e=a1)&&100<e.shellSuspendCounter)throw Error(h(482));(e=t).status="pending",e.then(function(e){if("pending"===t.status){var r=t;r.status="fulfilled",r.value=e}},function(e){if("pending"===t.status){var r=t;r.status="rejected",r.reason=e}})}switch(t.status){case"fulfilled":return t.value;case"rejected":if((e=t.reason)===nB)throw Error(h(483));throw e}throw nK=t,nB}}var nK=null;function nQ(){if(null===nK)throw Error(h(459));var e=nK;return nK=null,e}var nJ=null,n0=0;function n2(e){var t=n0;return n0+=1,null===nJ&&(nJ=[]),nY(nJ,e,t)}function n5(e,t){e.ref=void 0!==(t=t.props.ref)?t:null}function n3(e,t){if(t.$$typeof===d)throw Error(h(525));throw Error(h(31,"[object Object]"===(e=Object.prototype.toString.call(t))?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function n4(e){return(0,e._init)(e._payload)}function n8(e){function t(t,r){if(e){var n=t.deletions;null===n?(t.deletions=[r],t.flags|=16):n.push(r)}}function r(r,n){if(!e)return null;for(;null!==n;)t(r,n),n=n.sibling;return null}function n(e){for(var t=new Map;null!==e;)null!==e.key?t.set(e.key,e):t.set(e.index,e),e=e.sibling;return t}function o(e,t){return(e=aH(e,t)).index=0,e.sibling=null,e}function i(t,r,n){return(t.index=n,e)?null!==(n=t.alternate)?(n=n.index)<r?(t.flags|=0x2000002,r):n:(t.flags|=0x2000002,r):(t.flags|=1048576,r)}function c(t){return e&&null===t.alternate&&(t.flags|=0x2000002),t}function u(e,t,r,n){return null===t||6!==t.tag?(t=aU(r,e.mode,n)).return=e:(t=o(t,r)).return=e,t}function d(e,t,r,n){var i=r.type;return i===g?v(e,t,r.props.children,n,r.key):(null!==t&&(t.elementType===i||"object"==typeof i&&null!==i&&i.$$typeof===O&&n4(i)===t.type)?n5(t=o(t,r.props),r):n5(t=aW(r.type,r.key,r.props,null,e.mode,n),r),t.return=e,t)}function b(e,t,r,n){return null===t||4!==t.tag||t.stateNode.containerInfo!==r.containerInfo||t.stateNode.implementation!==r.implementation?(t=aj(r,e.mode,n)).return=e:(t=o(t,r.children||[])).return=e,t}function v(e,t,r,n,i){return null===t||7!==t.tag?(t=aF(r,e.mode,n,i)).return=e:(t=o(t,r)).return=e,t}function w(e,t,r){if("string"==typeof t&&""!==t||"number"==typeof t||"bigint"==typeof t)return(t=aU(""+t,e.mode,r)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case p:return n5(r=aW(t.type,t.key,t.props,null,e.mode,r),t),r.return=e,r;case m:return(t=aj(t,e.mode,r)).return=e,t;case O:return w(e,t=(0,t._init)(t._payload),r)}if(J(t)||P(t))return(t=aF(t,e.mode,r,null)).return=e,t;if("function"==typeof t.then)return w(e,n2(t),r);if(t.$$typeof===S)return w(e,sj(e,t),r);n3(e,t)}return null}function _(e,t,r,n){var o=null!==t?t.key:null;if("string"==typeof r&&""!==r||"number"==typeof r||"bigint"==typeof r)return null!==o?null:u(e,t,""+r,n);if("object"==typeof r&&null!==r){switch(r.$$typeof){case p:return r.key===o?d(e,t,r,n):null;case m:return r.key===o?b(e,t,r,n):null;case O:return _(e,t,r=(o=r._init)(r._payload),n)}if(J(r)||P(r))return null!==o?null:v(e,t,r,n,null);if("function"==typeof r.then)return _(e,t,n2(r),n);if(r.$$typeof===S)return _(e,t,sj(e,r),n);n3(e,r)}return null}function C(e,t,r,n,o){if("string"==typeof n&&""!==n||"number"==typeof n||"bigint"==typeof n)return u(t,e=e.get(r)||null,""+n,o);if("object"==typeof n&&null!==n){switch(n.$$typeof){case p:return d(t,e=e.get(null===n.key?r:n.key)||null,n,o);case m:return b(t,e=e.get(null===n.key?r:n.key)||null,n,o);case O:return C(e,t,r,n=(0,n._init)(n._payload),o)}if(J(n)||P(n))return v(t,e=e.get(r)||null,n,o,null);if("function"==typeof n.then)return C(e,t,r,n2(n),o);if(n.$$typeof===S)return C(e,t,r,sj(t,n),o);n3(t,n)}return null}return function(u,d,b,v){try{n0=0;var x=function u(d,b,v,x){if("object"==typeof v&&null!==v&&v.type===g&&null===v.key&&(v=v.props.children),"object"==typeof v&&null!==v){switch(v.$$typeof){case p:e:{for(var T=v.key;null!==b;){if(b.key===T){if((T=v.type)===g){if(7===b.tag){r(d,b.sibling),(x=o(b,v.props.children)).return=d,d=x;break e}}else if(b.elementType===T||"object"==typeof T&&null!==T&&T.$$typeof===O&&n4(T)===b.type){r(d,b.sibling),n5(x=o(b,v.props),v),x.return=d,d=x;break e}r(d,b);break}t(d,b),b=b.sibling}v.type===g?(x=aF(v.props.children,d.mode,x,v.key)).return=d:(n5(x=aW(v.type,v.key,v.props,null,d.mode,x),v),x.return=d),d=x}return c(d);case m:e:{for(T=v.key;null!==b;){if(b.key===T)if(4===b.tag&&b.stateNode.containerInfo===v.containerInfo&&b.stateNode.implementation===v.implementation){r(d,b.sibling),(x=o(b,v.children||[])).return=d,d=x;break e}else{r(d,b);break}t(d,b),b=b.sibling}(x=aj(v,d.mode,x)).return=d,d=x}return c(d);case O:return u(d,b,v=(T=v._init)(v._payload),x)}if(J(v))return function(o,c,u,h){for(var d=null,p=null,m=c,g=c=0,b=null;null!==m&&g<u.length;g++){m.index>g?(b=m,m=null):b=m.sibling;var v=_(o,m,u[g],h);if(null===v){null===m&&(m=b);break}e&&m&&null===v.alternate&&t(o,m),c=i(v,c,g),null===p?d=v:p.sibling=v,p=v,m=b}if(g===u.length)return r(o,m),nN&&nT(o,g),d;if(null===m){for(;g<u.length;g++)null!==(m=w(o,u[g],h))&&(c=i(m,c,g),null===p?d=m:p.sibling=m,p=m);return nN&&nT(o,g),d}for(m=n(m);g<u.length;g++)null!==(b=C(m,o,g,u[g],h))&&(e&&null!==b.alternate&&m.delete(null===b.key?g:b.key),c=i(b,c,g),null===p?d=b:p.sibling=b,p=b);return e&&m.forEach(function(e){return t(o,e)}),nN&&nT(o,g),d}(d,b,v,x);if(P(v)){if("function"!=typeof(T=P(v)))throw Error(h(150));return function(o,c,u,d){if(null==u)throw Error(h(151));for(var p=null,m=null,g=c,b=c=0,v=null,S=u.next();null!==g&&!S.done;b++,S=u.next()){g.index>b?(v=g,g=null):v=g.sibling;var x=_(o,g,S.value,d);if(null===x){null===g&&(g=v);break}e&&g&&null===x.alternate&&t(o,g),c=i(x,c,b),null===m?p=x:m.sibling=x,m=x,g=v}if(S.done)return r(o,g),nN&&nT(o,b),p;if(null===g){for(;!S.done;b++,S=u.next())null!==(S=w(o,S.value,d))&&(c=i(S,c,b),null===m?p=S:m.sibling=S,m=S);return nN&&nT(o,b),p}for(g=n(g);!S.done;b++,S=u.next())null!==(S=C(g,o,b,S.value,d))&&(e&&null!==S.alternate&&g.delete(null===S.key?b:S.key),c=i(S,c,b),null===m?p=S:m.sibling=S,m=S);return e&&g.forEach(function(e){return t(o,e)}),nN&&nT(o,b),p}(d,b,v=T.call(v),x)}if("function"==typeof v.then)return u(d,b,n2(v),x);if(v.$$typeof===S)return u(d,b,sj(d,v),x);n3(d,v)}return"string"==typeof v&&""!==v||"number"==typeof v||"bigint"==typeof v?(v=""+v,null!==b&&6===b.tag?(r(d,b.sibling),(x=o(b,v)).return=d):(r(d,b),(x=aU(v,d.mode,x)).return=d),c(d=x)):r(d,b)}(u,d,b,v);return nJ=null,x}catch(e){if(e===nB)throw e;var T=aP(29,e,null,u.mode);return T.lanes=v,T.return=u,T}finally{}}}var n9=n8(!0),n7=n8(!1),oe=eo(null),ot=eo(0);function or(e,t){es(ot,e=a7),es(oe,t),a7=e|t.baseLanes}function on(){es(ot,a7),es(oe,oe.current)}function oo(){a7=ot.current,ei(oe),ei(ot)}var oi=eo(null),os=null;function oa(e){var t=e.alternate;es(oh,1&oh.current),es(oi,e),null===os&&(null===t||null!==oe.current?os=e:null!==t.memoizedState&&(os=e))}function ol(e){if(22===e.tag){if(es(oh,oh.current),es(oi,e),null===os){var t=e.alternate;null!==t&&null!==t.memoizedState&&(os=e)}}else oc(e)}function oc(){es(oh,oh.current),es(oi,oi.current)}function ou(e){ei(oi),os===e&&(os=null),ei(oh)}var oh=eo(0);function od(e){for(var t=e;null!==t;){if(13===t.tag){var r=t.memoizedState;if(null!==r&&(null===(r=r.dehydrated)||"$?"===r.data||"$!"===r.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!=(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var op="undefined"!=typeof AbortController?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,r){e.push(r)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},of=i.unstable_scheduleCallback,om=i.unstable_NormalPriority,og={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ov(){return{controller:new op,data:new Map,refCount:0}}function oy(e){e.refCount--,0===e.refCount&&of(om,function(){e.controller.abort()})}var ow=null,o_=0,oS=0,oC=null;function ok(){if(0==--o_&&null!==ow){null!==oC&&(oC.status="fulfilled");var e=ow;ow=null,oS=0,oC=null;for(var t=0;t<e.length;t++)(0,e[t])()}}var oR=B.S;B.S=function(e,t){"object"==typeof t&&null!==t&&"function"==typeof t.then&&function(e,t){if(null===ow){var r=ow=[];o_=0,oS=l9(),oC={status:"pending",value:void 0,then:function(e){r.push(e)}}}o_++,t.then(ok,ok)}(0,t),null!==oR&&oR(e,t)};var oT=eo(null);function oE(){var e=oT.current;return null!==e?e:a1.pooledCache}function oM(e,t){null===t?es(oT,oT.current):es(oT,t.pool)}function oI(){var e=oE();return null===e?null:{parent:og._currentValue,pool:e}}var oA=0,oN=null,oD=null,oz=null,o$=!1,oP=!1,oL=!1,oH=0,oW=0,oF=null,oB=0;function oU(){throw Error(h(321))}function oj(e,t){if(null===t)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!r$(e[r],t[r]))return!1;return!0}function oZ(e,t,r,n,o,i){return oA=i,oN=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,B.H=null===e||null===e.memoizedState?iX:iJ,oL=!1,i=r(n,o),oL=!1,oP&&(i=oq(t,r,n,o)),oV(e),i}function oV(e){B.H=iQ;var t=null!==oD&&null!==oD.next;if(oA=0,oz=oD=oN=null,o$=!1,oW=0,oF=null,t)throw Error(h(300));null===e||sc||null!==(e=e.dependencies)&&sF(e)&&(sc=!0)}function oq(e,t,r,n){oN=e;var o=0;do{if(oP&&(oF=null),oW=0,oP=!1,25<=o)throw Error(h(301));if(o+=1,oz=oD=null,null!=e.updateQueue){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,null!=i.memoCache&&(i.memoCache.index=0)}B.H=i0,i=t(r,n)}while(oP)return i}function oY(){var e=B.H,t=e.useState()[0];return t="function"==typeof t.then?o1(t):t,e=e.useState()[0],(null!==oD?oD.memoizedState:null)!==e&&(oN.flags|=1024),t}function oK(){var e=0!==oH;return oH=0,e}function oQ(e,t,r){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r}function oX(e){if(o$){for(e=e.memoizedState;null!==e;){var t=e.queue;null!==t&&(t.pending=null),e=e.next}o$=!1}oA=0,oz=oD=oN=null,oP=!1,oW=oH=0,oF=null}function oJ(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===oz?oN.memoizedState=oz=e:oz=oz.next=e,oz}function o0(){if(null===oD){var e=oN.alternate;e=null!==e?e.memoizedState:null}else e=oD.next;var t=null===oz?oN.memoizedState:oz.next;if(null!==t)oz=t,oD=e;else{if(null===e){if(null===oN.alternate)throw Error(h(467));throw Error(h(310))}e={memoizedState:(oD=e).memoizedState,baseState:oD.baseState,baseQueue:oD.baseQueue,queue:oD.queue,next:null},null===oz?oN.memoizedState=oz=e:oz=oz.next=e}return oz}function o1(e){var t=oW;return oW+=1,null===oF&&(oF=[]),e=nY(oF,e,t),t=oN,null===(null===oz?t.memoizedState:oz.next)&&(B.H=null===(t=t.alternate)||null===t.memoizedState?iX:iJ),e}function o2(e){if(null!==e&&"object"==typeof e){if("function"==typeof e.then)return o1(e);if(e.$$typeof===S)return sU(e)}throw Error(h(438,String(e)))}function o5(e){var t=null,r=oN.updateQueue;if(null!==r&&(t=r.memoCache),null==t){var n=oN.alternate;null!==n&&null!==(n=n.updateQueue)&&null!=(n=n.memoCache)&&(t={data:n.data.map(function(e){return e.slice()}),index:0})}if(null==t&&(t={data:[],index:0}),null===r&&(r=o(),oN.updateQueue=r),r.memoCache=t,void 0===(r=t.data[t.index]))for(r=t.data[t.index]=Array(e),n=0;n<e;n++)r[n]=D;return t.index++,r}function o3(e,t){return"function"==typeof t?t(e):t}function o6(e){return o4(o0(),oD,e)}function o4(e,t,r){var n=e.queue;if(null===n)throw Error(h(311));n.lastRenderedReducer=r;var o=e.baseQueue,i=n.pending;if(null!==i){if(null!==o){var c=o.next;o.next=i.next,i.next=c}t.baseQueue=o=i,n.pending=null}if(i=e.baseState,null===o)e.memoizedState=i;else{t=o.next;var u=c=null,d=null,p=t,m=!1;do{var g=-0x20000001&p.lane;if(g!==p.lane?(a5&g)===g:(oA&g)===g){var b=p.revertLane;if(0===b)null!==d&&(d=d.next={lane:0,revertLane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),g===oS&&(m=!0);else if((oA&b)===b){p=p.next,b===oS&&(m=!0);continue}else g={lane:0,revertLane:p.revertLane,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},null===d?(u=d=g,c=i):d=d.next=g,oN.lanes|=b,lt|=b;g=p.action,oL&&r(i,g),i=p.hasEagerState?p.eagerState:r(i,g)}else b={lane:g,revertLane:p.revertLane,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},null===d?(u=d=b,c=i):d=d.next=b,oN.lanes|=g,lt|=g;p=p.next}while(null!==p&&p!==t)if(null===d?c=i:d.next=u,!r$(i,e.memoizedState)&&(sc=!0,m&&null!==(r=oC)))throw r;e.memoizedState=i,e.baseState=c,e.baseQueue=d,n.lastRenderedState=i}return null===o&&(n.lanes=0),[e.memoizedState,n.dispatch]}function o8(e){var t=o0(),r=t.queue;if(null===r)throw Error(h(311));r.lastRenderedReducer=e;var n=r.dispatch,o=r.pending,i=t.memoizedState;if(null!==o){r.pending=null;var c=o=o.next;do i=e(i,c.action),c=c.next;while(c!==o)r$(i,t.memoizedState)||(sc=!0),t.memoizedState=i,null===t.baseQueue&&(t.baseState=i),r.lastRenderedState=i}return[i,n]}function o9(e,t,r){var n=oN,o=o0(),i=nN;if(i){if(void 0===r)throw Error(h(407));r=r()}else r=t();var c=!r$((oD||o).memoizedState,r);if(c&&(o.memoizedState=r,sc=!0),o=o.queue,ik(it.bind(null,n,o,e),[e]),o.getSnapshot!==t||c||null!==oz&&1&oz.memoizedState.tag){if(n.flags|=2048,iw(9,ie.bind(null,n,o,r,t),{destroy:void 0},null),null===a1)throw Error(h(349));i||0!=(60&oA)||o7(n,t,r)}return r}function o7(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},null===(t=oN.updateQueue)?(t=o(),oN.updateQueue=t,t.stores=[e]):null===(r=t.stores)?t.stores=[e]:r.push(e)}function ie(e,t,r,n){t.value=r,t.getSnapshot=n,ir(t)&&io(e)}function it(e,t,r){return r(function(){ir(t)&&io(e)})}function ir(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!r$(e,r)}catch{return!0}}function io(e){var t=nl(e,2);null!==t&&lS(t,e,2)}function ii(e){var t=oJ();if("function"==typeof e){var r=e;if(e=r(),oL){eI(!0);try{r()}finally{eI(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:o3,lastRenderedState:e},t}function is(e,t,r,n){return e.baseState=r,o4(e,oD,"function"==typeof n?n:o3)}function ia(e,t,r,n,o){if(iq(e))throw Error(h(485));if(null!==(e=t.action)){var i={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(e){i.listeners.push(e)}};null!==B.T?r(!0):i.isTransition=!1,n(i),null===(r=t.pending)?(i.next=t.pending=i,il(t,i)):(i.next=r.next,t.pending=r.next=i)}}function il(e,t){var r=t.action,n=t.payload,o=e.state;if(t.isTransition){var i=B.T,c={};B.T=c;try{var u=r(o,n),h=B.S;null!==h&&h(c,u),ic(e,t,u)}catch(r){ih(e,t,r)}finally{B.T=i}}else try{i=r(o,n),ic(e,t,i)}catch(r){ih(e,t,r)}}function ic(e,t,r){null!==r&&"object"==typeof r&&"function"==typeof r.then?r.then(function(r){iu(e,t,r)},function(r){return ih(e,t,r)}):iu(e,t,r)}function iu(e,t,r){t.status="fulfilled",t.value=r,id(t),e.state=r,null!==(t=e.pending)&&((r=t.next)===t?e.pending=null:(r=r.next,t.next=r,il(e,r)))}function ih(e,t,r){var n=e.pending;if(e.pending=null,null!==n){n=n.next;do t.status="rejected",t.reason=r,id(t),t=t.next;while(t!==n)}e.action=null}function id(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ip(e,t){return t}function im(e,t){if(nN){var r=a1.formState;if(null!==r){e:{var n=oN;if(nN){if(nA){t:{for(var o=nA,i=nz;8!==o.nodeType;)if(!i||null===(o=cL(o.nextSibling))){o=null;break t}o="F!"===(i=o.data)||"F"===i?o:null}if(o){nA=cL(o.nextSibling),n="F!"===o.data;break e}}nP(n)}n=!1}n&&(t=r[0])}}return(r=oJ()).memoizedState=r.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ip,lastRenderedState:t},r.queue=n,r=ij.bind(null,oN,n),n.dispatch=r,n=ii(!1),i=iV.bind(null,oN,!1,n.queue),n=oJ(),o={state:t,dispatch:null,action:e,pending:null},n.queue=o,r=ia.bind(null,oN,o,i,r),o.dispatch=r,n.memoizedState=e,[t,r,!1]}function ig(e){return ib(o0(),oD,e)}function ib(e,t,r){t=o4(e,t,ip)[0],e=o6(o3)[0],t="object"==typeof t&&null!==t&&"function"==typeof t.then?o1(t):t;var n=o0(),o=n.queue,i=o.dispatch;return r!==n.memoizedState&&(oN.flags|=2048,iw(9,iv.bind(null,o,r),{destroy:void 0},null)),[t,i,e]}function iv(e,t){e.action=t}function iy(e){var t=o0(),r=oD;if(null!==r)return ib(t,r,e);o0(),t=t.memoizedState;var n=(r=o0()).queue.dispatch;return r.memoizedState=e,[t,n,!1]}function iw(e,t,r,n){return e={tag:e,create:t,inst:r,deps:n,next:null},null===(t=oN.updateQueue)&&(t=o(),oN.updateQueue=t),null===(r=t.lastEffect)?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e),e}function i_(){return o0().memoizedState}function iS(e,t,r,n){var o=oJ();oN.flags|=e,o.memoizedState=iw(1|t,r,{destroy:void 0},void 0===n?null:n)}function iC(e,t,r,n){var o=o0();n=void 0===n?null:n;var i=o.memoizedState.inst;null!==oD&&null!==n&&oj(n,oD.memoizedState.deps)?o.memoizedState=iw(t,r,i,n):(oN.flags|=e,o.memoizedState=iw(1|t,r,i,n))}function ix(e,t){iS(8390656,8,e,t)}function ik(e,t){iC(2048,8,e,t)}function iR(e,t){return iC(4,2,e,t)}function iT(e,t){return iC(4,4,e,t)}function iE(e,t){if("function"==typeof t){var r=t(e=e());return function(){"function"==typeof r?r():t(null)}}if(null!=t)return t.current=e=e(),function(){t.current=null}}function iO(e,t,r){r=null!=r?r.concat([e]):null,iC(4,4,iE.bind(null,t,e),r)}function iM(){}function iI(e,t){var r=o0();t=void 0===t?null:t;var n=r.memoizedState;return null!==t&&oj(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function iA(e,t){var r=o0();t=void 0===t?null:t;var n=r.memoizedState;if(null!==t&&oj(t,n[1]))return n[0];if(n=e(),oL){eI(!0);try{e()}finally{eI(!1)}}return r.memoizedState=[n,t],n}function iN(e,t,r){return void 0===r||0!=(0x40000000&oA)?e.memoizedState=t:(e.memoizedState=r,e=l_(),oN.lanes|=e,lt|=e,r)}function iD(e,t,r,n){return r$(r,t)?r:null!==oe.current?(r$(e=iN(e,r,n),t)||(sc=!0),e):0==(42&oA)?(sc=!0,e.memoizedState=r):(e=l_(),oN.lanes|=e,lt|=e,t)}function iz(e,t,r,n,o){var i=ee.p;ee.p=0!==i&&8>i?i:8;var c=B.T,u={};B.T=u,iV(e,!1,t,r);try{var h=o(),d=B.S;if(null!==d&&d(u,h),null!==h&&"object"==typeof h&&"function"==typeof h.then){var p,m,g=(p=[],m={status:"pending",value:null,reason:null,then:function(e){p.push(e)}},h.then(function(){m.status="fulfilled",m.value=n;for(var e=0;e<p.length;e++)(0,p[e])(n)},function(e){for(m.status="rejected",m.reason=e,e=0;e<p.length;e++)(0,p[e])(void 0)}),m);iZ(e,t,g,lw(e))}else iZ(e,t,n,lw(e))}catch(r){iZ(e,t,{then:function(){},status:"rejected",reason:r},lw())}finally{ee.p=i,B.T=c}}function i$(){}function iP(e,t,r,n){if(5!==e.tag)throw Error(h(476));var o=iL(e).queue;iz(e,o,t,et,null===r?i$:function(){return iH(e),r(n)})}function iL(e){var t=e.memoizedState;if(null!==t)return t;var r={};return(t={memoizedState:et,baseState:et,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:o3,lastRenderedState:et},next:null}).next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:o3,lastRenderedState:r},next:null},e.memoizedState=t,null!==(e=e.alternate)&&(e.memoizedState=t),t}function iH(e){var t=iL(e).next.queue;iZ(e,t,{},lw())}function iG(){return sU(un)}function iW(){return o0().memoizedState}function iF(){return o0().memoizedState}function iB(e){for(var t=e.return;null!==t;){switch(t.tag){case 24:case 3:var r=lw(),n=sQ(t,e=sK(r),r);null!==n&&(lS(n,t,r),sX(n,t,r)),t={cache:ov()},e.payload=t;return}t=t.return}}function iU(e,t,r){var n=lw();r={lane:n,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null},iq(e)?iY(t,r):null!==(r=na(e,t,r,n))&&(lS(r,e,n),iK(r,t,n))}function ij(e,t,r){iZ(e,t,r,lw())}function iZ(e,t,r,n){var o={lane:n,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null};if(iq(e))iY(t,o);else{var i=e.alternate;if(0===e.lanes&&(null===i||0===i.lanes)&&null!==(i=t.lastRenderedReducer))try{var c=t.lastRenderedState,u=i(c,r);if(o.hasEagerState=!0,o.eagerState=u,r$(u,c))return no(e,t,o,0),null===a1&&nr(),!1}catch{}finally{}if(null!==(r=na(e,t,o,n)))return lS(r,e,n),iK(r,t,n),!0}return!1}function iV(e,t,r,n){if(n={lane:2,revertLane:l9(),action:n,hasEagerState:!1,eagerState:null,next:null},iq(e)){if(t)throw Error(h(479))}else null!==(t=na(e,r,n,2))&&lS(t,e,2)}function iq(e){var t=e.alternate;return e===oN||null!==t&&t===oN}function iY(e,t){oP=o$=!0;var r=e.pending;null===r?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function iK(e,t,r){if(0!=(4194176&r)){var n=t.lanes;n&=e.pendingLanes,t.lanes=r|=n,ej(e,r)}}o=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};var iQ={readContext:sU,use:o2,useCallback:oU,useContext:oU,useEffect:oU,useImperativeHandle:oU,useLayoutEffect:oU,useInsertionEffect:oU,useMemo:oU,useReducer:oU,useRef:oU,useState:oU,useDebugValue:oU,useDeferredValue:oU,useTransition:oU,useSyncExternalStore:oU,useId:oU};iQ.useCacheRefresh=oU,iQ.useMemoCache=oU,iQ.useHostTransitionStatus=oU,iQ.useFormState=oU,iQ.useActionState=oU,iQ.useOptimistic=oU;var iX={readContext:sU,use:o2,useCallback:function(e,t){return oJ().memoizedState=[e,void 0===t?null:t],e},useContext:sU,useEffect:ix,useImperativeHandle:function(e,t,r){r=null!=r?r.concat([e]):null,iS(4194308,4,iE.bind(null,t,e),r)},useLayoutEffect:function(e,t){return iS(4194308,4,e,t)},useInsertionEffect:function(e,t){iS(4,2,e,t)},useMemo:function(e,t){var r=oJ();t=void 0===t?null:t;var n=e();if(oL){eI(!0);try{e()}finally{eI(!1)}}return r.memoizedState=[n,t],n},useReducer:function(e,t,r){var n=oJ();if(void 0!==r){var o=r(t);if(oL){eI(!0);try{r(t)}finally{eI(!1)}}}else o=t;return n.memoizedState=n.baseState=o,n.queue=e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},e=e.dispatch=iU.bind(null,oN,e),[n.memoizedState,e]},useRef:function(e){return oJ().memoizedState=e={current:e}},useState:function(e){var t=(e=ii(e)).queue,r=ij.bind(null,oN,t);return t.dispatch=r,[e.memoizedState,r]},useDebugValue:iM,useDeferredValue:function(e,t){return iN(oJ(),e,t)},useTransition:function(){var e=ii(!1);return e=iz.bind(null,oN,e.queue,!0,!1),oJ().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,r){var n=oN,o=oJ();if(nN){if(void 0===r)throw Error(h(407));r=r()}else{if(r=t(),null===a1)throw Error(h(349));0!=(60&a5)||o7(n,t,r)}o.memoizedState=r;var i={value:r,getSnapshot:t};return o.queue=i,ix(it.bind(null,n,i,e),[e]),n.flags|=2048,iw(9,ie.bind(null,n,i,r,t),{destroy:void 0},null),r},useId:function(){var e=oJ(),t=a1.identifierPrefix;if(nN){var r=nR,n=nC;t=":"+t+"R"+(r=(n&~(1<<32-eA(n)-1)).toString(32)+r),0<(r=oH++)&&(t+="H"+r.toString(32)),t+=":"}else t=":"+t+"r"+(r=oB++).toString(32)+":";return e.memoizedState=t},useCacheRefresh:function(){return oJ().memoizedState=iB.bind(null,oN)}};iX.useMemoCache=o5,iX.useHostTransitionStatus=iG,iX.useFormState=im,iX.useActionState=im,iX.useOptimistic=function(e){var t=oJ();t.memoizedState=t.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=r,t=iV.bind(null,oN,!0,r),r.dispatch=t,[e,t]};var iJ={readContext:sU,use:o2,useCallback:iI,useContext:sU,useEffect:ik,useImperativeHandle:iO,useInsertionEffect:iR,useLayoutEffect:iT,useMemo:iA,useReducer:o6,useRef:i_,useState:function(){return o6(o3)},useDebugValue:iM,useDeferredValue:function(e,t){return iD(o0(),oD.memoizedState,e,t)},useTransition:function(){var e=o6(o3)[0],t=o0().memoizedState;return["boolean"==typeof e?e:o1(e),t]},useSyncExternalStore:o9,useId:iW};iJ.useCacheRefresh=iF,iJ.useMemoCache=o5,iJ.useHostTransitionStatus=iG,iJ.useFormState=ig,iJ.useActionState=ig,iJ.useOptimistic=function(e,t){return is(o0(),oD,e,t)};var i0={readContext:sU,use:o2,useCallback:iI,useContext:sU,useEffect:ik,useImperativeHandle:iO,useInsertionEffect:iR,useLayoutEffect:iT,useMemo:iA,useReducer:o8,useRef:i_,useState:function(){return o8(o3)},useDebugValue:iM,useDeferredValue:function(e,t){var r=o0();return null===oD?iN(r,e,t):iD(r,oD.memoizedState,e,t)},useTransition:function(){var e=o8(o3)[0],t=o0().memoizedState;return["boolean"==typeof e?e:o1(e),t]},useSyncExternalStore:o9,useId:iW};function i1(e,t,r,n){r=null==(r=r(n,t=e.memoizedState))?t:U({},t,r),e.memoizedState=r,0===e.lanes&&(e.updateQueue.baseState=r)}i0.useCacheRefresh=iF,i0.useMemoCache=o5,i0.useHostTransitionStatus=iG,i0.useFormState=iy,i0.useActionState=iy,i0.useOptimistic=function(e,t){var r=o0();return null!==oD?is(r,oD,e,t):(r.baseState=e,[e,r.queue.dispatch])};var i2={isMounted:function(e){return!!(e=e._reactInternals)&&K(e)===e},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=lw(),o=sK(n);o.payload=t,null!=r&&(o.callback=r),null!==(t=sQ(e,o,n))&&(lS(t,e,n),sX(t,e,n))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=lw(),o=sK(n);o.tag=1,o.payload=t,null!=r&&(o.callback=r),null!==(t=sQ(e,o,n))&&(lS(t,e,n),sX(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=lw(),n=sK(r);n.tag=2,null!=t&&(n.callback=t),null!==(t=sQ(e,n,r))&&(lS(t,e,r),sX(t,e,r))}};function i3(e,t,r,n,o,i,c){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(n,i,c):!t.prototype||!t.prototype.isPureReactComponent||!rP(r,n)||!rP(o,i)}function i6(e,t,r,n){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(r,n),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&i2.enqueueReplaceState(t,t.state,null)}function i4(e,t){var r=t;if("ref"in t)for(var n in r={},t)"ref"!==n&&(r[n]=t[n]);if(e=e.defaultProps)for(var o in r===t&&(r=U({},r)),e)void 0===r[o]&&(r[o]=e[o]);return r}var i8="function"==typeof reportError?reportError:function(e){if("object"==typeof window&&"function"==typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"==typeof e&&null!==e&&"string"==typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"==typeof process&&"function"==typeof process.emit)return void process.emit("uncaughtException",e)};function i9(e){i8(e)}function i7(e){}function st(e){i8(e)}function sn(e,t){try{(0,e.onUncaughtError)(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function so(e,t,r){try{(0,e.onCaughtError)(r.value,{componentStack:r.stack,errorBoundary:1===t.tag?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function si(e,t,r){return(r=sK(r)).tag=3,r.payload={element:null},r.callback=function(){sn(e,t)},r}function ss(e){return(e=sK(e)).tag=3,e}function sa(e,t,r,n){var o=r.type.getDerivedStateFromError;if("function"==typeof o){var i=n.value;e.payload=function(){return o(i)},e.callback=function(){so(t,r,n)}}var c=r.stateNode;null!==c&&"function"==typeof c.componentDidCatch&&(e.callback=function(){so(t,r,n),"function"!=typeof o&&(null===ld?ld=new Set([this]):ld.add(this));var e=n.stack;this.componentDidCatch(n.value,{componentStack:null!==e?e:""})})}var sl=Error(h(461)),sc=!1;function su(e,t,r,n){t.child=null===e?n7(t,null,r,n):n9(t,e.child,r,n)}function sh(e,t,r,n,o){r=r.render;var i=t.ref;if("ref"in n){var c={};for(var u in n)"ref"!==u&&(c[u]=n[u])}else c=n;return(sB(t),n=oZ(e,t,r,c,i,o),u=oK(),null===e||sc)?(nN&&u&&nO(t),t.flags|=1,su(e,t,n,o),t.child):(oQ(e,t,o),sI(e,t,o))}function sd(e,t,r,n,o){if(null===e){var i=r.type;return"function"!=typeof i||aL(i)||void 0!==i.defaultProps||null!==r.compare?((e=aW(r.type,null,n,t,t.mode,o)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=i,sp(e,t,i,n,o))}if(i=e.child,!sA(e,o)){var c=i.memoizedProps;if((r=null!==(r=r.compare)?r:rP)(c,n)&&e.ref===t.ref)return sI(e,t,o)}return t.flags|=1,(e=aH(i,n)).ref=t.ref,e.return=t,t.child=e}function sp(e,t,r,n,o){if(null!==e){var i=e.memoizedProps;if(rP(i,n)&&e.ref===t.ref)if(sc=!1,t.pendingProps=n=i,!sA(e,o))return t.lanes=e.lanes,sI(e,t,o);else 0!=(131072&e.flags)&&(sc=!0)}return sb(e,t,r,n,o)}function sf(e,t,r){var n=t.pendingProps,o=n.children,i=0!=(2&t.stateNode._pendingVisibility),c=null!==e?e.memoizedState:null;if(sg(e,t),"hidden"===n.mode||i){if(0!=(128&t.flags)){if(n=null!==c?c.baseLanes|r:r,null!==e){for(i=0,o=t.child=e.child;null!==o;)i=i|o.lanes|o.childLanes,o=o.sibling;t.childLanes=i&~n}else t.childLanes=0,t.child=null;return sm(e,t,n,r)}if(0==(0x20000000&r))return t.lanes=t.childLanes=0x20000000,sm(e,t,null!==c?c.baseLanes|r:r,r);t.memoizedState={baseLanes:0,cachePool:null},null!==e&&oM(t,null!==c?c.cachePool:null),null!==c?or(t,c):on(),ol(t)}else null!==c?(oM(t,c.cachePool),or(t,c),oc(t),t.memoizedState=null):(null!==e&&oM(t,null),on(),oc(t));return su(e,t,o,r),t.child}function sm(e,t,r,n){var o=oE();return t.memoizedState={baseLanes:r,cachePool:o=null===o?null:{parent:og._currentValue,pool:o}},null!==e&&oM(t,null),on(),ol(t),null!==e&&sW(e,t,n,!0),null}function sg(e,t){var r=t.ref;if(null===r)null!==e&&null!==e.ref&&(t.flags|=2097664);else{if("function"!=typeof r&&"object"!=typeof r)throw Error(h(284));(null===e||e.ref!==r)&&(t.flags|=2097664)}}function sb(e,t,r,n,o){return(sB(t),r=oZ(e,t,r,n,void 0,o),n=oK(),null===e||sc)?(nN&&n&&nO(t),t.flags|=1,su(e,t,r,o),t.child):(oQ(e,t,o),sI(e,t,o))}function sv(e,t,r,n,o,i){return(sB(t),t.updateQueue=null,r=oq(t,n,r,o),oV(e),n=oK(),null===e||sc)?(nN&&n&&nO(t),t.flags|=1,su(e,t,r,i),t.child):(oQ(e,t,i),sI(e,t,i))}function sy(e,t,r,n,o){if(sB(t),null===t.stateNode){var i=nh,c=r.contextType;"object"==typeof c&&null!==c&&(i=sU(c)),t.memoizedState=null!==(i=new r(n,i)).state&&void 0!==i.state?i.state:null,i.updater=i2,t.stateNode=i,i._reactInternals=t,(i=t.stateNode).props=n,i.state=t.memoizedState,i.refs={},sq(t),c=r.contextType,i.context="object"==typeof c&&null!==c?sU(c):nh,i.state=t.memoizedState,"function"==typeof(c=r.getDerivedStateFromProps)&&(i1(t,r,c,n),i.state=t.memoizedState),"function"==typeof r.getDerivedStateFromProps||"function"==typeof i.getSnapshotBeforeUpdate||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||(c=i.state,"function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),c!==i.state&&i2.enqueueReplaceState(i,i.state,null),s2(t,n,i,o),s1(),i.state=t.memoizedState),"function"==typeof i.componentDidMount&&(t.flags|=4194308),n=!0}else if(null===e){i=t.stateNode;var u=t.memoizedProps,h=i4(r,u);i.props=h;var d=i.context,p=r.contextType;c=nh,"object"==typeof p&&null!==p&&(c=sU(p));var m=r.getDerivedStateFromProps;p="function"==typeof m||"function"==typeof i.getSnapshotBeforeUpdate,u=t.pendingProps!==u,p||"function"!=typeof i.UNSAFE_componentWillReceiveProps&&"function"!=typeof i.componentWillReceiveProps||(u||d!==c)&&i6(t,i,n,c),sV=!1;var g=t.memoizedState;i.state=g,s2(t,n,i,o),s1(),d=t.memoizedState,u||g!==d||sV?("function"==typeof m&&(i1(t,r,m,n),d=t.memoizedState),(h=sV||i3(t,r,h,n,g,d,c))?(p||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||("function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount()),"function"==typeof i.componentDidMount&&(t.flags|=4194308)):("function"==typeof i.componentDidMount&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=d),i.props=n,i.state=d,i.context=c,n=h):("function"==typeof i.componentDidMount&&(t.flags|=4194308),n=!1)}else{i=t.stateNode,sY(e,t),p=i4(r,c=t.memoizedProps),i.props=p,m=t.pendingProps,g=i.context,d=r.contextType,h=nh,"object"==typeof d&&null!==d&&(h=sU(d)),(d="function"==typeof(u=r.getDerivedStateFromProps)||"function"==typeof i.getSnapshotBeforeUpdate)||"function"!=typeof i.UNSAFE_componentWillReceiveProps&&"function"!=typeof i.componentWillReceiveProps||(c!==m||g!==h)&&i6(t,i,n,h),sV=!1,g=t.memoizedState,i.state=g,s2(t,n,i,o),s1();var b=t.memoizedState;c!==m||g!==b||sV||null!==e&&null!==e.dependencies&&sF(e.dependencies)?("function"==typeof u&&(i1(t,r,u,n),b=t.memoizedState),(p=sV||i3(t,r,p,n,g,b,h)||null!==e&&null!==e.dependencies&&sF(e.dependencies))?(d||"function"!=typeof i.UNSAFE_componentWillUpdate&&"function"!=typeof i.componentWillUpdate||("function"==typeof i.componentWillUpdate&&i.componentWillUpdate(n,b,h),"function"==typeof i.UNSAFE_componentWillUpdate&&i.UNSAFE_componentWillUpdate(n,b,h)),"function"==typeof i.componentDidUpdate&&(t.flags|=4),"function"==typeof i.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof i.componentDidUpdate||c===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),"function"!=typeof i.getSnapshotBeforeUpdate||c===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=b),i.props=n,i.state=b,i.context=h,n=p):("function"!=typeof i.componentDidUpdate||c===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),"function"!=typeof i.getSnapshotBeforeUpdate||c===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),n=!1)}return i=n,sg(e,t),n=0!=(128&t.flags),i||n?(i=t.stateNode,r=n&&"function"!=typeof r.getDerivedStateFromError?null:i.render(),t.flags|=1,null!==e&&n?(t.child=n9(t,e.child,null,o),t.child=n9(t,null,r,o)):su(e,t,r,o),t.memoizedState=i.state,e=t.child):e=sI(e,t,o),e}function sw(e,t,r,n){return nW(),t.flags|=256,su(e,t,r,n),t.child}var s_={dehydrated:null,treeContext:null,retryLane:0};function sS(e){return{baseLanes:e,cachePool:oI()}}function sC(e,t,r){return e=null!==e?e.childLanes&~r:0,t&&(e|=lo),e}function sx(e,t,r){var n,o=t.pendingProps,i=!1,c=0!=(128&t.flags);if((n=c)||(n=(null===e||null!==e.memoizedState)&&0!=(2&oh.current)),n&&(i=!0,t.flags&=-129),n=0!=(32&t.flags),t.flags&=-33,null===e){if(nN){if(i?oa(t):oc(t),nN){var u,d=nA;if(u=d){r:{for(u=d,d=nz;8!==u.nodeType;)if(!d||null===(u=cL(u.nextSibling))){d=null;break r}d=u}null!==d?(t.memoizedState={dehydrated:d,treeContext:null!==nS?{id:nC,overflow:nR}:null,retryLane:0x20000000},(u=aP(18,null,null,0)).stateNode=d,u.return=t,t.child=u,nI=t,nA=null,u=!0):u=!1}u||nP(t)}if(null!==(d=t.memoizedState)&&null!==(d=d.dehydrated))return"$!"===d.data?t.lanes=16:t.lanes=0x20000000,null;ou(t)}return(d=o.children,o=o.fallback,i)?(oc(t),d=sR({mode:"hidden",children:d},i=t.mode),o=aF(o,i,r,null),d.return=t,o.return=t,d.sibling=o,t.child=d,(i=t.child).memoizedState=sS(r),i.childLanes=sC(e,n,r),t.memoizedState=s_,o):(oa(t),sk(t,d))}if(null!==(u=e.memoizedState)&&null!==(d=u.dehydrated)){if(c)256&t.flags?(oa(t),t.flags&=-257,t=sT(e,t,r)):null!==t.memoizedState?(oc(t),t.child=e.child,t.flags|=128,t=null):(oc(t),i=o.fallback,d=t.mode,o=sR({mode:"visible",children:o.children},d),i=aF(i,d,r,null),i.flags|=2,o.return=t,i.return=t,o.sibling=i,t.child=o,n9(t,e.child,null,r),(o=t.child).memoizedState=sS(r),o.childLanes=sC(e,n,r),t.memoizedState=s_,t=i);else if(oa(t),"$!"===d.data){if(n=d.nextSibling&&d.nextSibling.dataset)var p=n.dgst;n=p,(o=Error(h(419))).stack="",o.digest=n,nF({value:o,source:null,stack:null}),t=sT(e,t,r)}else if(sc||sW(e,t,r,!1),n=0!=(r&e.childLanes),sc||n){if(null!==(n=a1)){if(0!=(42&(o=r&-r)))o=1;else switch(o){case 2:o=1;break;case 8:o=4;break;case 32:o=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 0x1000000:case 0x2000000:o=64;break;case 0x10000000:o=0x8000000;break;default:o=0}if(0!==(o=0!=(o&(n.suspendedLanes|r))?0:o)&&o!==u.retryLane)throw u.retryLane=o,nl(e,o),lS(n,e,o),sl}"$?"===d.data||lN(),t=sT(e,t,r)}else"$?"===d.data?(t.flags|=128,t.child=e.child,t=lq.bind(null,e),d._reactRetry=t,t=null):(e=u.treeContext,nA=cL(d.nextSibling),nI=t,nN=!0,nD=null,nz=!1,null!==e&&(nw[n_++]=nC,nw[n_++]=nR,nw[n_++]=nS,nC=e.id,nR=e.overflow,nS=t),t=sk(t,o.children),t.flags|=4096);return t}return i?(oc(t),i=o.fallback,d=t.mode,p=(u=e.child).sibling,(o=aH(u,{mode:"hidden",children:o.children})).subtreeFlags=0x1e00000&u.subtreeFlags,null!==p?i=aH(p,i):(i=aF(i,d,r,null),i.flags|=2),i.return=t,o.return=t,o.sibling=i,t.child=o,o=i,i=t.child,null===(d=e.child.memoizedState)?d=sS(r):(null!==(u=d.cachePool)?(p=og._currentValue,u=u.parent!==p?{parent:p,pool:p}:u):u=oI(),d={baseLanes:d.baseLanes|r,cachePool:u}),i.memoizedState=d,i.childLanes=sC(e,n,r),t.memoizedState=s_,o):(oa(t),e=(r=e.child).sibling,(r=aH(r,{mode:"visible",children:o.children})).return=t,r.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r)}function sk(e,t){return(t=sR({mode:"visible",children:t},e.mode)).return=e,e.child=t}function sR(e,t){return aB(e,t,0,null)}function sT(e,t,r){return n9(t,e.child,null,r),e=sk(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function sE(e,t,r){e.lanes|=t;var n=e.alternate;null!==n&&(n.lanes|=t),sH(e.return,t,r)}function sO(e,t,r,n,o){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=r,i.tailMode=o)}function sM(e,t,r){var n=t.pendingProps,o=n.revealOrder,i=n.tail;if(su(e,t,n.children,r),0!=(2&(n=oh.current)))n=1&n|2,t.flags|=128;else{if(null!==e&&0!=(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&sE(e,r,t);else if(19===e.tag)sE(e,r,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}switch(es(oh,n),o){case"forwards":for(o=null,r=t.child;null!==r;)null!==(e=r.alternate)&&null===od(e)&&(o=r),r=r.sibling;null===(r=o)?(o=t.child,t.child=null):(o=r.sibling,r.sibling=null),sO(t,!1,o,r,i);break;case"backwards":for(r=null,o=t.child,t.child=null;null!==o;){if(null!==(e=o.alternate)&&null===od(e)){t.child=o;break}e=o.sibling,o.sibling=r,r=o,o=e}sO(t,!0,r,null,i);break;case"together":sO(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function sI(e,t,r){if(null!==e&&(t.dependencies=e.dependencies),lt|=t.lanes,0==(r&t.childLanes)){if(null===e)return null;else if(sW(e,t,r,!1),0==(r&t.childLanes))return null}if(null!==e&&t.child!==e.child)throw Error(h(153));if(null!==t.child){for(r=aH(e=t.child,e.pendingProps),t.child=r,r.return=t;null!==e.sibling;)e=e.sibling,(r=r.sibling=aH(e,e.pendingProps)).return=t;r.sibling=null}return t.child}function sA(e,t){return 0!=(e.lanes&t)||!!(null!==(e=e.dependencies)&&sF(e))}function sN(e,t,r){if(null!==e)if(e.memoizedProps!==t.pendingProps)sc=!0;else{if(!sA(e,r)&&0==(128&t.flags))return sc=!1,function(e,t,r){switch(t.tag){case 3:eh(t,t.stateNode.containerInfo),sP(t,og,e.memoizedState.cache),nW();break;case 27:case 5:ep(t);break;case 4:eh(t,t.stateNode.containerInfo);break;case 10:sP(t,t.type,t.memoizedProps.value);break;case 13:var n=t.memoizedState;if(null!==n){if(null!==n.dehydrated)return oa(t),t.flags|=128,null;if(0!=(r&t.child.childLanes))return sx(e,t,r);return oa(t),null!==(e=sI(e,t,r))?e.sibling:null}oa(t);break;case 19:var o=0!=(128&e.flags);if((n=0!=(r&t.childLanes))||(sW(e,t,r,!1),n=0!=(r&t.childLanes)),o){if(n)return sM(e,t,r);t.flags|=128}if(null!==(o=t.memoizedState)&&(o.rendering=null,o.tail=null,o.lastEffect=null),es(oh,oh.current),!n)return null;break;case 22:case 23:return t.lanes=0,sf(e,t,r);case 24:sP(t,og,e.memoizedState.cache)}return sI(e,t,r)}(e,t,r);sc=0!=(131072&e.flags)}else sc=!1,nN&&0!=(1048576&t.flags)&&nE(t,ny,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var n=t.elementType,o=n._init;if(n=o(n._payload),t.type=n,"function"==typeof n)aL(n)?(e=i4(n,e),t.tag=1,t=sy(null,t,n,e,r)):(t.tag=0,t=sb(null,t,n,e,r));else{if(null!=n){if((o=n.$$typeof)===C){t.tag=11,t=sh(null,t,n,e,r);break e}else if(o===E){t.tag=14,t=sd(null,t,n,e,r);break e}}throw Error(h(306,t=function e(t){if(null==t)return null;if("function"==typeof t)return t.$$typeof===F?null:t.displayName||t.name||null;if("string"==typeof t)return t;switch(t){case g:return"Fragment";case m:return"Portal";case v:return"Profiler";case b:return"StrictMode";case x:return"Suspense";case T:return"SuspenseList"}if("object"==typeof t)switch(t.$$typeof){case S:return(t.displayName||"Context")+".Provider";case _:return(t._context.displayName||"Context")+".Consumer";case C:var r=t.render;return(t=t.displayName)||(t=""!==(t=r.displayName||r.name||"")?"ForwardRef("+t+")":"ForwardRef"),t;case E:return null!==(r=t.displayName||null)?r:e(t.type)||"Memo";case O:r=t._payload,t=t._init;try{return e(t(r))}catch{}}return null}(n)||n,""))}}return t;case 0:return sb(e,t,t.type,t.pendingProps,r);case 1:return o=i4(n=t.type,t.pendingProps),sy(e,t,n,o,r);case 3:e:{if(eh(t,t.stateNode.containerInfo),null===e)throw Error(h(387));var i=t.pendingProps;n=(o=t.memoizedState).element,sY(e,t),s2(t,i,null,r);var c=t.memoizedState;if(sP(t,og,i=c.cache),i!==o.cache&&sG(t,[og],r,!0),s1(),i=c.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=o,t.memoizedState=o,256&t.flags){t=sw(e,t,i,r);break e}else if(i!==n){nF(n=np(Error(h(424)),t)),t=sw(e,t,i,r);break e}else for(nA=cL(t.stateNode.containerInfo.firstChild),nI=t,nN=!0,nD=null,nz=!0,r=n7(t,null,i,r),t.child=r;r;)r.flags=-3&r.flags|4096,r=r.sibling;else{if(nW(),i===n){t=sI(e,t,r);break e}su(e,t,i,r)}t=t.child}return t;case 26:return sg(e,t),null===e?(r=cV(t.type,null,t.pendingProps,null))?t.memoizedState=r:nN||(r=t.type,e=t.pendingProps,(n=cR(ec.current).createElement(r))[eY]=t,n[eK]=e,cC(n,r,e),e9(n),t.stateNode=n):t.memoizedState=cV(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ep(t),null===e&&nN&&(n=t.stateNode=cG(t.type,t.pendingProps,ec.current),nI=t,nz=!0,nA=cL(n.firstChild)),n=t.pendingProps.children,null!==e||nN?su(e,t,n,r):t.child=n9(t,null,n,r),sg(e,t),t.child;case 5:return null===e&&nN&&((o=n=nA)&&(null!==(n=function(e,t,r,n){for(;1===e.nodeType;){if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&("INPUT"!==e.nodeName||"hidden"!==e.type))break}else if(n){if(!e[e2])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if("stylesheet"===(o=e.getAttribute("rel"))&&e.hasAttribute("data-precedence")||o!==r.rel||e.getAttribute("href")!==(null==r.href?null:r.href)||e.getAttribute("crossorigin")!==(null==r.crossOrigin?null:r.crossOrigin)||e.getAttribute("title")!==(null==r.title?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(((o=e.getAttribute("src"))!==(null==r.src?null:r.src)||e.getAttribute("type")!==(null==r.type?null:r.type)||e.getAttribute("crossorigin")!==(null==r.crossOrigin?null:r.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else{if("input"!==t||"hidden"!==e.type)return e;var o=null==r.name?null:""+r.name;if("hidden"===r.type&&e.getAttribute("name")===o)return e}if(null===(e=cL(e.nextSibling)))break}return null}(n,t.type,t.pendingProps,nz))?(t.stateNode=n,nI=t,nA=cL(n.firstChild),nz=!1,o=!0):o=!1),o||nP(t)),ep(t),o=t.type,i=t.pendingProps,c=null!==e?e.memoizedProps:null,n=i.children,cO(o,i)?n=null:null!==c&&cO(o,c)&&(t.flags|=32),null!==t.memoizedState&&(un._currentValue=o=oZ(e,t,oY,null,null,r)),sg(e,t),su(e,t,n,r),t.child;case 6:return null===e&&nN&&((e=r=nA)&&(null!==(r=function(e,t,r){if(""===t)return null;for(;3!==e.nodeType;)if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!r||null===(e=cL(e.nextSibling)))return null;return e}(r,t.pendingProps,nz))?(t.stateNode=r,nI=t,nA=null,e=!0):e=!1),e||nP(t)),null;case 13:return sx(e,t,r);case 4:return eh(t,t.stateNode.containerInfo),n=t.pendingProps,null===e?t.child=n9(t,null,n,r):su(e,t,n,r),t.child;case 11:return sh(e,t,t.type,t.pendingProps,r);case 7:return su(e,t,t.pendingProps,r),t.child;case 8:case 12:return su(e,t,t.pendingProps.children,r),t.child;case 10:return n=t.pendingProps,sP(t,t.type,n.value),su(e,t,n.children,r),t.child;case 9:return o=t.type._context,n=t.pendingProps.children,sB(t),n=n(o=sU(o)),t.flags|=1,su(e,t,n,r),t.child;case 14:return sd(e,t,t.type,t.pendingProps,r);case 15:return sp(e,t,t.type,t.pendingProps,r);case 19:return sM(e,t,r);case 22:return sf(e,t,r);case 24:return sB(t),n=sU(og),null===e?(null===(o=oE())&&(o=a1,i=ov(),o.pooledCache=i,i.refCount++,null!==i&&(o.pooledCacheLanes|=r),o=i),t.memoizedState={parent:n,cache:o},sq(t),sP(t,og,o)):(0!=(e.lanes&r)&&(sY(e,t),s2(t,null,null,r),s1()),o=e.memoizedState,i=t.memoizedState,o.parent!==n?(o={parent:n,cache:n},t.memoizedState=o,0===t.lanes&&(t.memoizedState=t.updateQueue.baseState=o),sP(t,og,n)):(sP(t,og,n=i.cache),n!==o.cache&&sG(t,[og],r,!0))),su(e,t,t.pendingProps.children,r),t.child;case 29:throw t.pendingProps}throw Error(h(156,t.tag))}var sD=eo(null),sz=null,s$=null;function sP(e,t,r){es(sD,t._currentValue),t._currentValue=r}function sL(e){e._currentValue=sD.current,ei(sD)}function sH(e,t,r){for(;null!==e;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==n&&(n.childLanes|=t)):null!==n&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function sG(e,t,r,n){var o=e.child;for(null!==o&&(o.return=e);null!==o;){var i=o.dependencies;if(null!==i){var c=o.child;i=i.firstContext;e:for(;null!==i;){var u=i;i=o;for(var d=0;d<t.length;d++)if(u.context===t[d]){i.lanes|=r,null!==(u=i.alternate)&&(u.lanes|=r),sH(i.return,r,e),n||(c=null);break e}i=u.next}}else if(18===o.tag){if(null===(c=o.return))throw Error(h(341));c.lanes|=r,null!==(i=c.alternate)&&(i.lanes|=r),sH(c,r,e),c=null}else c=o.child;if(null!==c)c.return=o;else for(c=o;null!==c;){if(c===e){c=null;break}if(null!==(o=c.sibling)){o.return=c.return,c=o;break}c=c.return}o=c}}function sW(e,t,r,n){e=null;for(var o=t,i=!1;null!==o;){if(!i){if(0!=(524288&o.flags))i=!0;else if(0!=(262144&o.flags))break}if(10===o.tag){var c=o.alternate;if(null===c)throw Error(h(387));if(null!==(c=c.memoizedProps)){var u=o.type;r$(o.pendingProps.value,c.value)||(null!==e?e.push(u):e=[u])}}else if(o===eu.current){if(null===(c=o.alternate))throw Error(h(387));c.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(null!==e?e.push(un):e=[un])}o=o.return}null!==e&&sG(t,e,r,n),t.flags|=262144}function sF(e){for(e=e.firstContext;null!==e;){if(!r$(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function sB(e){sz=e,s$=null,null!==(e=e.dependencies)&&(e.firstContext=null)}function sU(e){return sZ(sz,e)}function sj(e,t){return null===sz&&sB(e),sZ(e,t)}function sZ(e,t){var r=t._currentValue;if(t={context:t,memoizedValue:r,next:null},null===s$){if(null===e)throw Error(h(308));s$=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else s$=s$.next=t;return r}var sV=!1;function sq(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function sY(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function sK(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function sQ(e,t,r){var n=e.updateQueue;if(null===n)return null;if(n=n.shared,0!=(2&a0)){var o=n.pending;return null===o?t.next=t:(t.next=o.next,o.next=t),n.pending=t,t=nu(e),nc(e,null,r),t}return no(e,n,t,r),nu(e)}function sX(e,t,r){if(null!==(t=t.updateQueue)&&(t=t.shared,0!=(4194176&r))){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,ej(e,r)}}function sJ(e,t){var r=e.updateQueue,n=e.alternate;if(null!==n&&r===(n=n.updateQueue)){var o=null,i=null;if(null!==(r=r.firstBaseUpdate)){do{var c={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};null===i?o=i=c:i=i.next=c,r=r.next}while(null!==r)null===i?o=i=t:i=i.next=t}else o=i=t;r={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:n.shared,callbacks:n.callbacks},e.updateQueue=r;return}null===(e=r.lastBaseUpdate)?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}var s0=!1;function s1(){if(s0){var e=oC;if(null!==e)throw e}}function s2(e,t,r,n){s0=!1;var o=e.updateQueue;sV=!1;var i=o.firstBaseUpdate,c=o.lastBaseUpdate,u=o.shared.pending;if(null!==u){o.shared.pending=null;var h=u,d=h.next;h.next=null,null===c?i=d:c.next=d,c=h;var p=e.alternate;null!==p&&(u=(p=p.updateQueue).lastBaseUpdate)!==c&&(null===u?p.firstBaseUpdate=d:u.next=d,p.lastBaseUpdate=h)}if(null!==i){var m=o.baseState;for(c=0,p=d=h=null,u=i;;){var g=-0x20000001&u.lane,b=g!==u.lane;if(b?(a5&g)===g:(n&g)===g){0!==g&&g===oS&&(s0=!0),null!==p&&(p=p.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});e:{var v=e,w=u;switch(g=t,w.tag){case 1:if("function"==typeof(v=w.payload)){m=v.call(r,m,g);break e}m=v;break e;case 3:v.flags=-65537&v.flags|128;case 0:if(null==(g="function"==typeof(v=w.payload)?v.call(r,m,g):v))break e;m=U({},m,g);break e;case 2:sV=!0}}null!==(g=u.callback)&&(e.flags|=64,b&&(e.flags|=8192),null===(b=o.callbacks)?o.callbacks=[g]:b.push(g))}else b={lane:g,tag:u.tag,payload:u.payload,callback:u.callback,next:null},null===p?(d=p=b,h=m):p=p.next=b,c|=g;if(null===(u=u.next))if(null===(u=o.shared.pending))break;else u=(b=u).next,b.next=null,o.lastBaseUpdate=b,o.shared.pending=null}null===p&&(h=m),o.baseState=h,o.firstBaseUpdate=d,o.lastBaseUpdate=p,null===i&&(o.shared.lanes=0),lt|=c,e.lanes=c,e.memoizedState=m}}function s5(e,t){if("function"!=typeof e)throw Error(h(191,e));e.call(t)}function s3(e,t){var r=e.callbacks;if(null!==r)for(e.callbacks=null,e=0;e<r.length;e++)s5(r[e],t)}function s6(e,t){try{var r=t.updateQueue,n=null!==r?r.lastEffect:null;if(null!==n){var o=n.next;r=o;do{if((r.tag&e)===e){n=void 0;var i=r.create;r.inst.destroy=n=i()}r=r.next}while(r!==o)}}catch(e){lU(t,t.return,e)}}function s4(e,t,r){try{var n=t.updateQueue,o=null!==n?n.lastEffect:null;if(null!==o){var i=o.next;n=i;do{if((n.tag&e)===e){var c=n.inst,u=c.destroy;if(void 0!==u){c.destroy=void 0,o=t;try{u()}catch(e){lU(o,r,e)}}}n=n.next}while(n!==i)}}catch(e){lU(t,t.return,e)}}function s8(e){var t=e.updateQueue;if(null!==t){var r=e.stateNode;try{s3(t,r)}catch(t){lU(e,e.return,t)}}}function s9(e,t,r){r.props=i4(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(r){lU(e,t,r)}}function s7(e,t){try{var r=e.ref;if(null!==r){var n=e.stateNode;switch(e.tag){case 26:case 27:case 5:var o=n;break;default:o=n}"function"==typeof r?e.refCleanup=r(o):r.current=o}}catch(r){lU(e,t,r)}}function ae(e,t){var r=e.ref,n=e.refCleanup;if(null!==r)if("function"==typeof n)try{n()}catch(r){lU(e,t,r)}finally{e.refCleanup=null,null!=(e=e.alternate)&&(e.refCleanup=null)}else if("function"==typeof r)try{r(null)}catch(r){lU(e,t,r)}else r.current=null}function at(e){var t=e.type,r=e.memoizedProps,n=e.stateNode;try{switch(t){case"button":case"input":case"select":case"textarea":r.autoFocus&&n.focus();break;case"img":r.src?n.src=r.src:r.srcSet&&(n.srcset=r.srcSet)}}catch(t){lU(e,e.return,t)}}function ar(e,t,r){try{var n=e.stateNode;(function(e,t,r,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,i=null,c=null,u=null,d=null,p=null,m=null;for(v in r){var g=r[v];if(r.hasOwnProperty(v)&&null!=g)switch(v){case"checked":case"value":break;case"defaultValue":d=g;default:n.hasOwnProperty(v)||c_(e,t,v,null,n,g)}}for(var b in n){var v=n[b];if(g=r[b],n.hasOwnProperty(b)&&(null!=v||null!=g))switch(b){case"type":i=v;break;case"name":o=v;break;case"checked":p=v;break;case"defaultChecked":m=v;break;case"value":c=v;break;case"defaultValue":u=v;break;case"children":case"dangerouslySetInnerHTML":if(null!=v)throw Error(h(137,t));break;default:v!==g&&c_(e,t,b,v,n,g)}}tb(e,c,u,d,p,m,i,o);return;case"select":for(i in v=c=u=b=null,r)if(d=r[i],r.hasOwnProperty(i)&&null!=d)switch(i){case"value":break;case"multiple":v=d;default:n.hasOwnProperty(i)||c_(e,t,i,null,n,d)}for(o in n)if(i=n[o],d=r[o],n.hasOwnProperty(o)&&(null!=i||null!=d))switch(o){case"value":b=i;break;case"defaultValue":u=i;break;case"multiple":c=i;default:i!==d&&c_(e,t,o,i,n,d)}t=u,r=c,n=v,null!=b?tw(e,!!r,b,!1):!!n!=!!r&&(null!=t?tw(e,!!r,t,!0):tw(e,!!r,r?[]:"",!1));return;case"textarea":for(u in v=b=null,r)if(o=r[u],r.hasOwnProperty(u)&&null!=o&&!n.hasOwnProperty(u))switch(u){case"value":case"children":break;default:c_(e,t,u,null,n,o)}for(c in n)if(o=n[c],i=r[c],n.hasOwnProperty(c)&&(null!=o||null!=i))switch(c){case"value":b=o;break;case"defaultValue":v=o;break;case"children":break;case"dangerouslySetInnerHTML":if(null!=o)throw Error(h(91));break;default:o!==i&&c_(e,t,c,o,n,i)}t_(e,b,v);return;case"option":for(var w in r)b=r[w],r.hasOwnProperty(w)&&null!=b&&!n.hasOwnProperty(w)&&("selected"===w?e.selected=!1:c_(e,t,w,null,n,b));for(d in n)b=n[d],v=r[d],n.hasOwnProperty(d)&&b!==v&&(null!=b||null!=v)&&("selected"===d?e.selected=b&&"function"!=typeof b&&"symbol"!=typeof b:c_(e,t,d,b,n,v));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var _ in r)b=r[_],r.hasOwnProperty(_)&&null!=b&&!n.hasOwnProperty(_)&&c_(e,t,_,null,n,b);for(p in n)if(b=n[p],v=r[p],n.hasOwnProperty(p)&&b!==v&&(null!=b||null!=v))switch(p){case"children":case"dangerouslySetInnerHTML":if(null!=b)throw Error(h(137,t));break;default:c_(e,t,p,b,n,v)}return;default:if(tT(t)){for(var S in r)b=r[S],r.hasOwnProperty(S)&&void 0!==b&&!n.hasOwnProperty(S)&&cS(e,t,S,void 0,n,b);for(m in n)b=n[m],v=r[m],n.hasOwnProperty(m)&&b!==v&&(void 0!==b||void 0!==v)&&cS(e,t,m,b,n,v);return}}for(var C in r)b=r[C],r.hasOwnProperty(C)&&null!=b&&!n.hasOwnProperty(C)&&c_(e,t,C,null,n,b);for(g in n)b=n[g],v=r[g],n.hasOwnProperty(g)&&b!==v&&(null!=b||null!=v)&&c_(e,t,g,b,n,v)})(n,e.type,r,t),n[eK]=t}catch(t){lU(e,e.return,t)}}function an(e){return 5===e.tag||3===e.tag||26===e.tag||27===e.tag||4===e.tag}function ao(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||an(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&27!==e.tag&&18!==e.tag;){if(2&e.flags||null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ai(e,t,r){var n=e.tag;if(5===n||6===n)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(4!==n&&27!==n&&null!==(e=e.child))for(ai(e,t,r),e=e.sibling;null!==e;)ai(e,t,r),e=e.sibling}var as=!1,aa=!1,al=!1,ac="function"==typeof WeakSet?WeakSet:Set,au=null,ah=!1;function ad(e,t,r){var n=r.flags;switch(r.tag){case 0:case 11:case 15:aC(e,r),4&n&&s6(5,r);break;case 1:if(aC(e,r),4&n)if(e=r.stateNode,null===t)try{e.componentDidMount()}catch(e){lU(r,r.return,e)}else{var o=i4(r.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(o,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){lU(r,r.return,e)}}64&n&&s8(r),512&n&&s7(r,r.return);break;case 3:if(aC(e,r),64&n&&null!==(n=r.updateQueue)){if(e=null,null!==r.child)switch(r.child.tag){case 27:case 5:case 1:e=r.child.stateNode}try{s3(n,e)}catch(e){lU(r,r.return,e)}}break;case 26:aC(e,r),512&n&&s7(r,r.return);break;case 27:case 5:aC(e,r),null===t&&4&n&&at(r),512&n&&s7(r,r.return);break;case 12:default:aC(e,r);break;case 13:aC(e,r),4&n&&ab(e,r);break;case 22:if(!(o=null!==r.memoizedState||as)){t=null!==t&&null!==t.memoizedState||aa;var i=as,c=aa;as=o,(aa=t)&&!c?function e(t,r,n){for(n=n&&0!=(8772&r.subtreeFlags),r=r.child;null!==r;){var o=r.alternate,i=t,c=r,u=c.flags;switch(c.tag){case 0:case 11:case 15:e(i,c,n),s6(4,c);break;case 1:if(e(i,c,n),"function"==typeof(i=(o=c).stateNode).componentDidMount)try{i.componentDidMount()}catch(e){lU(o,o.return,e)}if(null!==(i=(o=c).updateQueue)){var h=o.stateNode;try{var d=i.shared.hiddenCallbacks;if(null!==d)for(i.shared.hiddenCallbacks=null,i=0;i<d.length;i++)s5(d[i],h)}catch(e){lU(o,o.return,e)}}n&&64&u&&s8(c),s7(c,c.return);break;case 26:case 27:case 5:e(i,c,n),n&&null===o&&4&u&&at(c),s7(c,c.return);break;case 12:default:e(i,c,n);break;case 13:e(i,c,n),n&&4&u&&ab(i,c);break;case 22:null===c.memoizedState&&e(i,c,n),s7(c,c.return)}r=r.sibling}}(e,r,0!=(8772&r.subtreeFlags)):aC(e,r),as=i,aa=c}512&n&&("manual"===r.memoizedProps.mode?s7(r,r.return):ae(r,r.return))}}var ap=null,af=!1;function am(e,t,r){for(r=r.child;null!==r;)ag(e,t,r),r=r.sibling}function ag(e,t,r){if(eM&&"function"==typeof eM.onCommitFiberUnmount)try{eM.onCommitFiberUnmount(eO,r)}catch{}switch(r.tag){case 26:aa||ae(r,t),am(e,t,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode).parentNode.removeChild(r);break;case 27:aa||ae(r,t);var n=ap,o=af;for(ap=r.stateNode,am(e,t,r),t=(r=r.stateNode).attributes;t.length;)r.removeAttributeNode(t[0]);e5(r),ap=n,af=o;break;case 5:aa||ae(r,t);case 6:o=ap;var i=af;if(ap=null,am(e,t,r),ap=o,af=i,null!==ap)if(af)try{e=ap,n=r.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)}catch(e){lU(r,t,e)}else try{ap.removeChild(r.stateNode)}catch(e){lU(r,t,e)}break;case 18:null!==ap&&(af?(t=ap,r=r.stateNode,8===t.nodeType?c$(t.parentNode,r):1===t.nodeType&&c$(t,r),uD(t)):c$(ap,r.stateNode));break;case 4:n=ap,o=af,ap=r.stateNode.containerInfo,af=!0,am(e,t,r),ap=n,af=o;break;case 0:case 11:case 14:case 15:aa||s4(2,r,t),aa||s4(4,r,t),am(e,t,r);break;case 1:aa||(ae(r,t),"function"==typeof(n=r.stateNode).componentWillUnmount&&s9(r,t,n)),am(e,t,r);break;case 21:default:am(e,t,r);break;case 22:aa||ae(r,t),aa=(n=aa)||null!==r.memoizedState,am(e,t,r),aa=n}}function ab(e,t){if(null===t.memoizedState&&null!==(e=t.alternate)&&null!==(e=e.memoizedState)&&null!==(e=e.dehydrated))try{uD(e)}catch(e){lU(t,t.return,e)}}function av(e,t){var r=function(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return null===t&&(t=e.stateNode=new ac),t;case 22:return null===(t=(e=e.stateNode)._retryCache)&&(t=e._retryCache=new ac),t;default:throw Error(h(435,e.tag))}}(e);t.forEach(function(t){var n=lY.bind(null,e,t);r.has(t)||(r.add(t),t.then(n,n))})}function ay(e,t){var r=t.deletions;if(null!==r)for(var n=0;n<r.length;n++){var o=r[n],i=e,c=t,u=c;e:for(;null!==u;){switch(u.tag){case 27:case 5:ap=u.stateNode,af=!1;break e;case 3:case 4:ap=u.stateNode.containerInfo,af=!0;break e}u=u.return}if(null===ap)throw Error(h(160));ag(i,c,o),ap=null,af=!1,null!==(i=o.alternate)&&(i.return=null),o.return=null}if(13878&t.subtreeFlags)for(t=t.child;null!==t;)a_(t,e),t=t.sibling}var aw=null;function a_(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ay(t,e),aS(e),4&n&&(s4(3,e,e.return),s6(3,e),s4(5,e,e.return));break;case 1:ay(t,e),aS(e),512&n&&(aa||null===r||ae(r,r.return)),64&n&&as&&null!==(e=e.updateQueue)&&null!==(n=e.callbacks)&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=null===r?n:r.concat(n));break;case 26:var o=aw;if(ay(t,e),aS(e),512&n&&(aa||null===r||ae(r,r.return)),4&n){var i=null!==r?r.memoizedState:null;if(n=e.memoizedState,null===r)if(null===n)if(null===e.stateNode){e:{n=e.type,r=e.memoizedProps,o=o.ownerDocument||o;t:switch(n){case"title":(!(i=o.getElementsByTagName("title")[0])||i[e2]||i[eY]||"http://www.w3.org/2000/svg"===i.namespaceURI||i.hasAttribute("itemprop"))&&(i=o.createElement(n),o.head.insertBefore(i,o.querySelector("head > title"))),cC(i,n,r),i[eY]=e,e9(i),n=i;break e;case"link":var c=c3("link","href",o).get(n+(r.href||""));if(c){for(var u=0;u<c.length;u++)if((i=c[u]).getAttribute("href")===(null==r.href?null:r.href)&&i.getAttribute("rel")===(null==r.rel?null:r.rel)&&i.getAttribute("title")===(null==r.title?null:r.title)&&i.getAttribute("crossorigin")===(null==r.crossOrigin?null:r.crossOrigin)){c.splice(u,1);break t}}cC(i=o.createElement(n),n,r),o.head.appendChild(i);break;case"meta":if(c=c3("meta","content",o).get(n+(r.content||""))){for(u=0;u<c.length;u++)if((i=c[u]).getAttribute("content")===(null==r.content?null:""+r.content)&&i.getAttribute("name")===(null==r.name?null:r.name)&&i.getAttribute("property")===(null==r.property?null:r.property)&&i.getAttribute("http-equiv")===(null==r.httpEquiv?null:r.httpEquiv)&&i.getAttribute("charset")===(null==r.charSet?null:r.charSet)){c.splice(u,1);break t}}cC(i=o.createElement(n),n,r),o.head.appendChild(i);break;default:throw Error(h(468,n))}i[eY]=e,e9(i),n=i}e.stateNode=n}else c6(o,e.type,e.stateNode);else e.stateNode=cJ(o,n,e.memoizedProps);else i!==n?(null===i?null!==r.stateNode&&(r=r.stateNode).parentNode.removeChild(r):i.count--,null===n?c6(o,e.type,e.stateNode):cJ(o,n,e.memoizedProps)):null===n&&null!==e.stateNode&&ar(e,e.memoizedProps,r.memoizedProps)}break;case 27:if(4&n&&null===e.alternate){o=e.stateNode,i=e.memoizedProps;try{for(var d=o.firstChild;d;){var p=d.nextSibling,m=d.nodeName;d[e2]||"HEAD"===m||"BODY"===m||"SCRIPT"===m||"STYLE"===m||"LINK"===m&&"stylesheet"===d.rel.toLowerCase()||o.removeChild(d),d=p}for(var g=e.type,b=o.attributes;b.length;)o.removeAttributeNode(b[0]);cC(o,g,i),o[eY]=e,o[eK]=i}catch(t){lU(e,e.return,t)}}case 5:if(ay(t,e),aS(e),512&n&&(aa||null===r||ae(r,r.return)),32&e.flags){o=e.stateNode;try{tC(o,"")}catch(t){lU(e,e.return,t)}}4&n&&null!=e.stateNode&&(o=e.memoizedProps,ar(e,o,null!==r?r.memoizedProps:o)),1024&n&&(al=!0);break;case 6:if(ay(t,e),aS(e),4&n){if(null===e.stateNode)throw Error(h(162));n=e.memoizedProps,r=e.stateNode;try{r.nodeValue=n}catch(t){lU(e,e.return,t)}}break;case 3:if(c5=null,o=aw,aw=cB(t.containerInfo),ay(t,e),aw=o,aS(e),4&n&&null!==r&&r.memoizedState.isDehydrated)try{uD(t.containerInfo)}catch(t){lU(e,e.return,t)}al&&(al=!1,function e(t){if(1024&t.subtreeFlags)for(t=t.child;null!==t;){var r=t;e(r),5===r.tag&&1024&r.flags&&r.stateNode.reset(),t=t.sibling}}(e));break;case 4:n=aw,aw=cB(e.stateNode.containerInfo),ay(t,e),aS(e),aw=n;break;case 12:default:ay(t,e),aS(e);break;case 13:ay(t,e),aS(e),8192&e.child.flags&&null!==e.memoizedState!=(null!==r&&null!==r.memoizedState)&&(lc=ew()),4&n&&null!==(n=e.updateQueue)&&(e.updateQueue=null,av(e,n));break;case 22:if(512&n&&(aa||null===r||ae(r,r.return)),d=null!==e.memoizedState,p=null!==r&&null!==r.memoizedState,m=as,g=aa,as=m||d,aa=g||p,ay(t,e),aa=g,as=m,aS(e),(t=e.stateNode)._current=e,t._visibility&=-3,t._visibility|=2&t._pendingVisibility,8192&n&&(t._visibility=d?-2&t._visibility:1|t._visibility,d&&(t=as||aa,null===r||p||t||function e(t){for(t=t.child;null!==t;){var r=t;switch(r.tag){case 0:case 11:case 14:case 15:s4(4,r,r.return),e(r);break;case 1:ae(r,r.return);var n=r.stateNode;"function"==typeof n.componentWillUnmount&&s9(r,r.return,n),e(r);break;case 26:case 27:case 5:ae(r,r.return),e(r);break;case 22:ae(r,r.return),null===r.memoizedState&&e(r);break;default:e(r)}t=t.sibling}}(e)),null===e.memoizedProps||"manual"!==e.memoizedProps.mode))e:for(r=null,t=e;;){if(5===t.tag||26===t.tag||27===t.tag){if(null===r){p=r=t;try{if(o=p.stateNode,d)i=o.style,"function"==typeof i.setProperty?i.setProperty("display","none","important"):i.display="none";else{c=p.stateNode;var v=null!=(u=p.memoizedProps.style)&&u.hasOwnProperty("display")?u.display:null;c.style.display=null==v||"boolean"==typeof v?"":(""+v).trim()}}catch(e){lU(p,p.return,e)}}}else if(6===t.tag){if(null===r){p=t;try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(e){lU(p,p.return,e)}}}else if((22!==t.tag&&23!==t.tag||null===t.memoizedState||t===e)&&null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)break e;r===t&&(r=null),t=t.return}r===t&&(r=null),t.sibling.return=t.return,t=t.sibling}4&n&&null!==(n=e.updateQueue)&&null!==(r=n.retryQueue)&&(n.retryQueue=null,av(e,r));break;case 19:ay(t,e),aS(e),4&n&&null!==(n=e.updateQueue)&&(e.updateQueue=null,av(e,n));case 21:}}function aS(e){var t=e.flags;if(2&t){try{if(27!==e.tag){e:{for(var r=e.return;null!==r;){if(an(r)){var n=r;break e}r=r.return}throw Error(h(160))}switch(n.tag){case 27:var o=n.stateNode,i=ao(e);ai(e,i,o);break;case 5:var c=n.stateNode;32&n.flags&&(tC(c,""),n.flags&=-33);var u=ao(e);ai(e,u,c);break;case 3:case 4:var d=n.stateNode.containerInfo,p=ao(e);!function e(t,r,n){var o=t.tag;if(5===o||6===o)t=t.stateNode,r?8===n.nodeType?n.parentNode.insertBefore(t,r):n.insertBefore(t,r):(8===n.nodeType?(r=n.parentNode).insertBefore(t,n):(r=n).appendChild(t),null!=(n=n._reactRootContainer)||null!==r.onclick||(r.onclick=cw));else if(4!==o&&27!==o&&null!==(t=t.child))for(e(t,r,n),t=t.sibling;null!==t;)e(t,r,n),t=t.sibling}(e,p,d);break;default:throw Error(h(161))}}}catch(t){lU(e,e.return,t)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function aC(e,t){if(8772&t.subtreeFlags)for(t=t.child;null!==t;)ad(e,t.alternate,t),t=t.sibling}function ax(e,t){var r=null;null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(r=e.memoizedState.cachePool.pool),e=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(e=t.memoizedState.cachePool.pool),e!==r&&(null!=e&&e.refCount++,null!=r&&oy(r))}function ak(e,t){e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&oy(e))}function aR(e,t,r,n){if(10256&t.subtreeFlags)for(t=t.child;null!==t;)aT(e,t,r,n),t=t.sibling}function aT(e,t,r,n){var o=t.flags;switch(t.tag){case 0:case 11:case 15:aR(e,t,r,n),2048&o&&s6(9,t);break;case 3:aR(e,t,r,n),2048&o&&(e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&oy(e)));break;case 12:if(2048&o){aR(e,t,r,n),e=t.stateNode;try{var i=t.memoizedProps,c=i.id,u=i.onPostCommit;"function"==typeof u&&u(c,null===t.alternate?"mount":"update",e.passiveEffectDuration,-0)}catch(e){lU(t,t.return,e)}}else aR(e,t,r,n);break;case 23:break;case 22:i=t.stateNode,null!==t.memoizedState?4&i._visibility?aR(e,t,r,n):aE(e,t):4&i._visibility?aR(e,t,r,n):(i._visibility|=4,function e(t,r,n,o,i){for(i=i&&0!=(10256&r.subtreeFlags),r=r.child;null!==r;){var c=r,u=c.flags;switch(c.tag){case 0:case 11:case 15:e(t,c,n,o,i),s6(8,c);break;case 23:break;case 22:var h=c.stateNode;null!==c.memoizedState?4&h._visibility?e(t,c,n,o,i):aE(t,c):(h._visibility|=4,e(t,c,n,o,i)),i&&2048&u&&ax(c.alternate,c);break;case 24:e(t,c,n,o,i),i&&2048&u&&ak(c.alternate,c);break;default:e(t,c,n,o,i)}r=r.sibling}}(e,t,r,n,0!=(10256&t.subtreeFlags))),2048&o&&ax(t.alternate,t);break;case 24:aR(e,t,r,n),2048&o&&ak(t.alternate,t);break;default:aR(e,t,r,n)}}function aE(e,t){if(10256&t.subtreeFlags)for(t=t.child;null!==t;){var r=t,n=r.flags;switch(r.tag){case 22:aE(e,r),2048&n&&ax(r.alternate,r);break;case 24:aE(e,r),2048&n&&ak(r.alternate,r);break;default:aE(e,r)}t=t.sibling}}var aO=8192;function aM(e){if(e.subtreeFlags&aO)for(e=e.child;null!==e;)aI(e),e=e.sibling}function aI(e){switch(e.tag){case 26:aM(e),e.flags&aO&&null!==e.memoizedState&&function(e,t,r){if(null===c8)throw Error(h(475));var n=c8;if("stylesheet"===t.type&&("string"!=typeof r.media||!1!==matchMedia(r.media).matches)&&0==(4&t.state.loading)){if(null===t.instance){var o=cq(r.href),i=e.querySelector(cY(o));if(i){null!==(e=i._p)&&"object"==typeof e&&"function"==typeof e.then&&(n.count++,n=c7.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=i,e9(i);return}i=e.ownerDocument||e,r=cK(r),(o=cW.get(o))&&c1(r,o),e9(i=i.createElement("link"));var c=i;c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),cC(i,"link",r),t.instance=i}null===n.stylesheets&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&0==(3&t.state.loading)&&(n.count++,t=c7.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}(aw,e.memoizedState,e.memoizedProps);break;case 5:default:aM(e);break;case 3:case 4:var t=aw;aw=cB(e.stateNode.containerInfo),aM(e),aw=t;break;case 22:null===e.memoizedState&&(null!==(t=e.alternate)&&null!==t.memoizedState?(t=aO,aO=0x1000000,aM(e),aO=t):aM(e))}}function aA(e){var t=e.alternate;if(null!==t&&null!==(e=t.child)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(null!==e)}}function aN(e){var t=e.deletions;if(0!=(16&e.flags)){if(null!==t)for(var r=0;r<t.length;r++){var n=t[r];au=n,az(n,e)}aA(e)}if(10256&e.subtreeFlags)for(e=e.child;null!==e;)aD(e),e=e.sibling}function aD(e){switch(e.tag){case 0:case 11:case 15:aN(e),2048&e.flags&&s4(9,e,e.return);break;case 3:case 12:default:aN(e);break;case 22:var t=e.stateNode;null!==e.memoizedState&&4&t._visibility&&(null===e.return||13!==e.return.tag)?(t._visibility&=-5,function e(t){var r=t.deletions;if(0!=(16&t.flags)){if(null!==r)for(var n=0;n<r.length;n++){var o=r[n];au=o,az(o,t)}aA(t)}for(t=t.child;null!==t;){switch((r=t).tag){case 0:case 11:case 15:s4(8,r,r.return),e(r);break;case 22:4&(n=r.stateNode)._visibility&&(n._visibility&=-5,e(r));break;default:e(r)}t=t.sibling}}(e)):aN(e)}}function az(e,t){for(;null!==au;){var r=au;switch(r.tag){case 0:case 11:case 15:s4(8,r,t);break;case 23:case 22:if(null!==r.memoizedState&&null!==r.memoizedState.cachePool){var n=r.memoizedState.cachePool.pool;null!=n&&n.refCount++}break;case 24:oy(r.memoizedState.cache)}if(null!==(n=r.child))n.return=r,au=n;else for(r=e;null!==au;){var o=(n=au).sibling,i=n.return;if(!function e(t){var r=t.alternate;null!==r&&(t.alternate=null,e(r)),t.child=null,t.deletions=null,t.sibling=null,5===t.tag&&null!==(r=t.stateNode)&&e5(r),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}(n),n===r){au=null;break}if(null!==o){o.return=i,au=o;break}au=i}}}function a$(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function aP(e,t,r,n){return new a$(e,t,r,n)}function aL(e){return!(!(e=e.prototype)||!e.isReactComponent)}function aH(e,t){var r=e.alternate;return null===r?((r=aP(e.tag,t,e.key,e.mode)).elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=0x1e00000&e.flags,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function aG(e,t){e.flags&=0x1e00002;var r=e.alternate;return null===r?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,e.dependencies=null===(t=r.dependencies)?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function aW(e,t,r,n,o,i){var c=0;if(n=e,"function"==typeof e)aL(e)&&(c=1);else if("string"==typeof e)c=!function(e,t,r){if(1===r||null!=t.itemProp)return!1;switch(e){case"meta":case"title":return!0;case"style":if("string"!=typeof t.precedence||"string"!=typeof t.href||""===t.href)break;return!0;case"link":if("string"!=typeof t.rel||"string"!=typeof t.href||""===t.href||t.onLoad||t.onError)break;if("stylesheet"===t.rel)return e=t.disabled,"string"==typeof t.precedence&&null==e;return!0;case"script":if(t.async&&"function"!=typeof t.async&&"symbol"!=typeof t.async&&!t.onLoad&&!t.onError&&t.src&&"string"==typeof t.src)return!0}return!1}(e,r,ea.current)?"html"===e||"head"===e||"body"===e?27:5:26;else e:switch(e){case g:return aF(r.children,o,i,t);case b:c=8,o|=24;break;case v:return(e=aP(12,r,t,2|o)).elementType=v,e.lanes=i,e;case x:return(e=aP(13,r,t,o)).elementType=x,e.lanes=i,e;case T:return(e=aP(19,r,t,o)).elementType=T,e.lanes=i,e;case A:return aB(r,o,i,t);default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case w:case S:c=10;break e;case _:c=9;break e;case C:c=11;break e;case E:c=14;break e;case O:c=16,n=null;break e}c=29,r=Error(h(130,null===e?"null":typeof e,"")),n=null}return(t=aP(c,r,t,o)).elementType=e,t.type=n,t.lanes=i,t}function aF(e,t,r,n){return(e=aP(7,e,n,t)).lanes=r,e}function aB(e,t,r,n){(e=aP(22,e,n,t)).elementType=A,e.lanes=r;var o={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var e=o._current;if(null===e)throw Error(h(456));if(0==(2&o._pendingVisibility)){var t=nl(e,2);null!==t&&(o._pendingVisibility|=2,lS(t,e,2))}},attach:function(){var e=o._current;if(null===e)throw Error(h(456));if(0!=(2&o._pendingVisibility)){var t=nl(e,2);null!==t&&(o._pendingVisibility&=-3,lS(t,e,2))}}};return e.stateNode=o,e}function aU(e,t,r){return(e=aP(6,e,null,t)).lanes=r,e}function aj(e,t,r){return(t=aP(4,null!==e.children?e.children:[],e.key,t)).lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function aZ(e){e.flags|=4}function aV(e,t){if("stylesheet"!==t.type||0!=(4&t.state.loading))e.flags&=-0x1000001;else if(e.flags|=0x1000000,!c4(t)){if(null!==(t=oi.current)&&((4194176&a5)===a5?null!==os:(0x3c00000&a5)!==a5&&0==(0x20000000&a5)||t!==os))throw nK=nj,nU;e.flags|=8192}}function aq(e,t){null!==t&&(e.flags|=4),16384&e.flags&&(t=22!==e.tag?eW():0x20000000,e.lanes|=t,li|=t)}function aY(e,t){if(!nN)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;null!==t;)null!==t.alternate&&(r=t),t=t.sibling;null===r?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;null!==r;)null!==r.alternate&&(n=r),r=r.sibling;null===n?t||null===e.tail?e.tail=null:e.tail.sibling=null:n.sibling=null}}function aK(e){var t=null!==e.alternate&&e.alternate.child===e.child,r=0,n=0;if(t)for(var o=e.child;null!==o;)r|=o.lanes|o.childLanes,n|=0x1e00000&o.subtreeFlags,n|=0x1e00000&o.flags,o.return=e,o=o.sibling;else for(o=e.child;null!==o;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function aQ(e,t){switch(nM(t),t.tag){case 3:sL(og),ed();break;case 26:case 27:case 5:ef(t);break;case 4:ed();break;case 13:ou(t);break;case 19:ei(oh);break;case 10:sL(t.type);break;case 22:case 23:ou(t),oo(),null!==e&&ei(oT);break;case 24:sL(og)}}var aX={getCacheForType:function(e){var t=sU(og),r=t.data.get(e);return void 0===r&&(r=e(),t.data.set(e,r)),r}},aJ="function"==typeof WeakMap?WeakMap:Map,a0=0,a1=null,a2=null,a5=0,a3=0,a6=null,a4=!1,a8=!1,a9=!1,a7=0,le=0,lt=0,lr=0,ln=0,lo=0,li=0,ls=null,la=null,ll=!1,lc=0,lu=1/0,lh=null,ld=null,lp=!1,lf=null,lm=0,lg=0,lb=null,lv=0,ly=null;function lw(){if(0!=(2&a0)&&0!==a5)return a5&-a5;if(null!==B.T){var e=oS;return 0!==e?e:l9()}return eV()}function l_(){0===lo&&(lo=0==(0x20000000&a5)||nN?eG():0x20000000);var e=oi.current;return null!==e&&(e.flags|=32),lo}function lS(e,t,r){(e===a1&&2===a3||null!==e.cancelPendingCommit)&&(lO(e,0),lR(e,a5,lo,!1)),eB(e,r),(0==(2&a0)||e!==a1)&&(e===a1&&(0==(2&a0)&&(lr|=r),4===le&&lR(e,a5,lo,!1)),l2(e))}function lC(e,t,r){if(0!=(6&a0))throw Error(h(327));for(var n=!r&&0==(60&t)&&0==(t&e.expiredLanes)||eH(e,t),o=n?function(e,t){var r=a0;a0|=2;var n=lI(),o=lA();a1!==e||a5!==t?(lh=null,lu=ew()+500,lO(e,t)):a8=eH(e,t);e:for(;;)try{if(0!==a3&&null!==a2){t=a2;var i=a6;t:switch(a3){case 1:a3=0,a6=null,lP(e,t,i,1);break;case 2:if(nZ(i)){a3=0,a6=null,l$(t);break}t=function(){2===a3&&a1===e&&(a3=7),l2(e)},i.then(t,t);break e;case 3:a3=7;break e;case 4:a3=5;break e;case 7:nZ(i)?(a3=0,a6=null,l$(t)):(a3=0,a6=null,lP(e,t,i,7));break;case 5:var c=null;switch(a2.tag){case 26:c=a2.memoizedState;case 5:case 27:var u=a2;if(c?c4(c):1){a3=0,a6=null;var d=u.sibling;if(null!==d)a2=d;else{var p=u.return;null!==p?(a2=p,lL(p)):a2=null}break t}}a3=0,a6=null,lP(e,t,i,5);break;case 6:a3=0,a6=null,lP(e,t,i,6);break;case 8:lE(),le=6;break e;default:throw Error(h(462))}}for(;null!==a2&&!ev();)lz(a2);break}catch(t){lM(e,t)}return(s$=sz=null,B.H=n,B.A=o,a0=r,null!==a2)?0:(a1=null,a5=0,nr(),le)}(e,t):lD(e,t,!0),i=n;;){if(0===o)a8&&!n&&lR(e,t,0,!1);else if(6===o)lR(e,t,0,!a4);else{if(r=e.current.alternate,i&&!function(e){for(var t=e;;){var r=t.tag;if((0===r||11===r||15===r)&&16384&t.flags&&null!==(r=t.updateQueue)&&null!==(r=r.stores))for(var n=0;n<r.length;n++){var o=r[n],i=o.getSnapshot;o=o.value;try{if(!r$(i(),o))return!1}catch{return!1}}if(r=t.child,16384&t.subtreeFlags&&null!==r)r.return=t,t=r;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(r)){o=lD(e,t,!1),i=!1;continue}if(2===o){if(i=t,e.errorRecoveryDisabledLanes&i)var c=0;else c=0!=(c=-0x20000001&e.pendingLanes)?c:0x20000000&c?0x20000000:0;if(0!==c){t=c;e:{o=ls;var u=e.current.memoizedState.isDehydrated;if(u&&(lO(e,c).flags|=256),2!==(c=lD(e,c,!1))){if(a9&&!u){e.errorRecoveryDisabledLanes|=i,lr|=i,o=4;break e}i=la,la=o,null!==i&&lx(i)}o=c}if(i=!1,2!==o)continue}}if(1===o){lO(e,0),lR(e,t,0,!0);break}e:{switch(n=e,o){case 0:case 1:throw Error(h(345));case 4:if((4194176&t)===t){lR(n,t,lo,!a4);break e}break;case 2:la=null;break;case 3:case 5:break;default:throw Error(h(329))}if(n.finishedWork=r,n.finishedLanes=t,(0x3c00000&t)===t&&10<(i=lc+300-ew())){if(lR(n,t,lo,!a4),0!==eL(n,0))break e;n.timeoutHandle=cI(lk.bind(null,n,r,la,lh,ll,t,lo,lr,li,a4,2,-0,0),i);break e}lk(n,r,la,lh,ll,t,lo,lr,li,a4,0,-0,0)}}break}l2(e)}function lx(e){null===la?la=e:la.push.apply(la,e)}function lk(e,t,r,n,o,i,c,u,d,p,m,g,b){var v=t.subtreeFlags;if((8192&v||0x1002000==(0x1002000&v))&&(c8={stylesheets:null,count:0,unsuspend:c9},aI(t),null!==(t=function(){if(null===c8)throw Error(h(475));var e=c8;return e.stylesheets&&0===e.count&&ut(e,e.stylesheets),0<e.count?function(t){var r=setTimeout(function(){if(e.stylesheets&&ut(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(r)}}:null}()))){e.cancelPendingCommit=t(lG.bind(null,e,r,n,o,c,u,d,1,g,b)),lR(e,i,c,!p);return}lG(e,r,n,o,c,u,d,m,g,b)}function lR(e,t,r,n){t&=~ln,t&=~lr,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var o=t;0<o;){var i=31-eA(o),c=1<<i;n[i]=-1,o&=~c}0!==r&&eU(e,r,t)}function lT(){return 0!=(6&a0)||(l5(0,!1),!1)}function lE(){if(null!==a2){if(0===a3)var e=a2.return;else e=a2,s$=sz=null,oX(e),nJ=null,n0=0,e=a2;for(;null!==e;)aQ(e.alternate,e),e=e.return;a2=null}}function lO(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;-1!==r&&(e.timeoutHandle=-1,cA(r)),null!==(r=e.cancelPendingCommit)&&(e.cancelPendingCommit=null,r()),lE(),a1=e,a2=r=aH(e.current,null),a5=t,a3=0,a6=null,a4=!1,a8=eH(e,t),a9=!1,li=lo=ln=lr=lt=le=0,la=ls=null,ll=!1,0!=(8&t)&&(t|=32&t);var n=e.entangledLanes;if(0!==n)for(e=e.entanglements,n&=t;0<n;){var o=31-eA(n),i=1<<o;t|=e[o],n&=~i}return a7=t,nr(),r}function lM(e,t){oN=null,B.H=iQ,t===nB?(t=nQ(),a3=3):t===nU?(t=nQ(),a3=4):a3=t===sl?8:null!==t&&"object"==typeof t&&"function"==typeof t.then?6:1,a6=t,null===a2&&(le=1,sn(e,np(t,e.current)))}function lI(){var e=B.H;return B.H=iQ,null===e?iQ:e}function lA(){var e=B.A;return B.A=aX,e}function lN(){le=4,a4||(4194176&a5)!==a5&&null!==oi.current||(a8=!0),0==(0x7ffffff&lt)&&0==(0x7ffffff&lr)||null===a1||lR(a1,a5,lo,!1)}function lD(e,t,r){var n=a0;a0|=2;var o=lI(),i=lA();(a1!==e||a5!==t)&&(lh=null,lO(e,t)),t=!1;var c=le;e:for(;;)try{if(0!==a3&&null!==a2){var u=a2,h=a6;switch(a3){case 8:lE(),c=6;break e;case 3:case 2:case 6:null===oi.current&&(t=!0);var d=a3;if(a3=0,a6=null,lP(e,u,h,d),r&&a8){c=0;break e}break;default:d=a3,a3=0,a6=null,lP(e,u,h,d)}}(function(){for(;null!==a2;)lz(a2)})(),c=le;break}catch(t){lM(e,t)}return t&&e.shellSuspendCounter++,s$=sz=null,a0=n,B.H=o,B.A=i,null===a2&&(a1=null,a5=0,nr()),c}function lz(e){var t=sN(e.alternate,e,a7);e.memoizedProps=e.pendingProps,null===t?lL(e):a2=t}function l$(e){var t=e,r=t.alternate;switch(t.tag){case 15:case 0:t=sv(r,t,t.pendingProps,t.type,void 0,a5);break;case 11:t=sv(r,t,t.pendingProps,t.type.render,t.ref,a5);break;case 5:oX(t);default:aQ(r,t),t=sN(r,t=a2=aG(t,a7),a7)}e.memoizedProps=e.pendingProps,null===t?lL(e):a2=t}function lP(e,t,r,n){s$=sz=null,oX(t),nJ=null,n0=0;var o=t.return;try{if(function(e,t,r,n,o){if(r.flags|=32768,null!==n&&"object"==typeof n&&"function"==typeof n.then){if(null!==(t=r.alternate)&&sW(t,r,o,!0),null!==(r=oi.current)){switch(r.tag){case 13:return null===os?lN():null===r.alternate&&0===le&&(le=3),r.flags&=-257,r.flags|=65536,r.lanes=o,n===nj?r.flags|=16384:(null===(t=r.updateQueue)?r.updateQueue=new Set([n]):t.add(n),lj(e,n,o)),!1;case 22:return r.flags|=65536,n===nj?r.flags|=16384:(null===(t=r.updateQueue)?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},r.updateQueue=t):null===(r=t.retryQueue)?t.retryQueue=new Set([n]):r.add(n),lj(e,n,o)),!1}throw Error(h(435,r.tag))}return lj(e,n,o),lN(),!1}if(nN)return null!==(t=oi.current)?(0==(65536&t.flags)&&(t.flags|=256),t.flags|=65536,t.lanes=o,n!==n$&&nF(np(e=Error(h(422),{cause:n}),r))):(n!==n$&&nF(np(t=Error(h(423),{cause:n}),r)),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,n=np(n,r),o=si(e.stateNode,n,o),sJ(e,o),4!==le&&(le=2)),!1;var i=Error(h(520),{cause:n});if(i=np(i,r),null===ls?ls=[i]:ls.push(i),4!==le&&(le=2),null===t)return!0;n=np(n,r),r=t;do{switch(r.tag){case 3:return r.flags|=65536,e=o&-o,r.lanes|=e,e=si(r.stateNode,n,e),sJ(r,e),!1;case 1:if(t=r.type,i=r.stateNode,0==(128&r.flags)&&("function"==typeof t.getDerivedStateFromError||null!==i&&"function"==typeof i.componentDidCatch&&(null===ld||!ld.has(i))))return r.flags|=65536,o&=-o,r.lanes|=o,sa(o=ss(o),e,r,n),sJ(r,o),!1}r=r.return}while(null!==r)return!1}(e,o,t,r,a5)){le=1,sn(e,np(r,e.current)),a2=null;return}}catch(t){if(null!==o)throw a2=o,t;le=1,sn(e,np(r,e.current)),a2=null;return}32768&t.flags?(nN||1===n?e=!0:a8||0!=(0x20000000&a5)?e=!1:(a4=e=!0,(2===n||3===n||6===n)&&null!==(n=oi.current)&&13===n.tag&&(n.flags|=16384)),lH(t,e)):lL(t)}function lL(e){var t=e;do{if(0!=(32768&t.flags))return void lH(t,a4);e=t.return;var r=function(e,t,r){var n=t.pendingProps;switch(nM(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 1:return aK(t),null;case 3:return r=t.stateNode,n=null,null!==e&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),sL(og),ed(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(null===e||null===e.child)&&(nG(t)?aZ(t):null===e||e.memoizedState.isDehydrated&&0==(256&t.flags)||(t.flags|=1024,null!==nD&&(lx(nD),nD=null))),aK(t),null;case 26:return r=t.memoizedState,null===e?(aZ(t),null!==r?(aK(t),aV(t,r)):(aK(t),t.flags&=-0x1000001)):r?r!==e.memoizedState?(aZ(t),aK(t),aV(t,r)):(aK(t),t.flags&=-0x1000001):(e.memoizedProps!==n&&aZ(t),aK(t),t.flags&=-0x1000001),null;case 27:ef(t),r=ec.current;var o=t.type;if(null!==e&&null!=t.stateNode)e.memoizedProps!==n&&aZ(t);else{if(!n){if(null===t.stateNode)throw Error(h(166));return aK(t),null}e=ea.current,nG(t)?nL(t,e):(e=cG(o,n,r),t.stateNode=e,aZ(t))}return aK(t),null;case 5:if(ef(t),r=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==n&&aZ(t);else{if(!n){if(null===t.stateNode)throw Error(h(166));return aK(t),null}if(e=ea.current,nG(t))nL(t,e);else{switch(o=cR(ec.current),e){case 1:e=o.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:e=o.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":e=o.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":e=o.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":(e=o.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e="string"==typeof n.is?o.createElement("select",{is:n.is}):o.createElement("select"),n.multiple?e.multiple=!0:n.size&&(e.size=n.size);break;default:e="string"==typeof n.is?o.createElement(r,{is:n.is}):o.createElement(r)}}e[eY]=t,e[eK]=n;e:for(o=t.child;null!==o;){if(5===o.tag||6===o.tag)e.appendChild(o.stateNode);else if(4!==o.tag&&27!==o.tag&&null!==o.child){o.child.return=o,o=o.child;continue}if(o===t)break;for(;null===o.sibling;){if(null===o.return||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}switch(t.stateNode=e,cC(e,r,n),r){case"button":case"input":case"select":case"textarea":e=!!n.autoFocus;break;case"img":e=!0;break;default:e=!1}e&&aZ(t)}}return aK(t),t.flags&=-0x1000001,null;case 6:if(e&&null!=t.stateNode)e.memoizedProps!==n&&aZ(t);else{if("string"!=typeof n&&null===t.stateNode)throw Error(h(166));if(e=ec.current,nG(t)){if(e=t.stateNode,r=t.memoizedProps,n=null,null!==(o=nI))switch(o.tag){case 27:case 5:n=o.memoizedProps}e[eY]=t,(e=!!(e.nodeValue===r||null!==n&&!0===n.suppressHydrationWarning||cy(e.nodeValue,r)))||nP(t)}else(e=cR(e).createTextNode(n))[eY]=t,t.stateNode=e}return aK(t),null;case 13:if(n=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(o=nG(t),null!==n&&null!==n.dehydrated){if(null===e){if(!o)throw Error(h(318));if(!(o=null!==(o=t.memoizedState)?o.dehydrated:null))throw Error(h(317));o[eY]=t}else nW(),0==(128&t.flags)&&(t.memoizedState=null),t.flags|=4;aK(t),o=!1}else null!==nD&&(lx(nD),nD=null),o=!0;if(!o){if(256&t.flags)return ou(t),t;return ou(t),null}}if(ou(t),0!=(128&t.flags))return t.lanes=r,t;if(r=null!==n,e=null!==e&&null!==e.memoizedState,r){n=t.child,o=null,null!==n.alternate&&null!==n.alternate.memoizedState&&null!==n.alternate.memoizedState.cachePool&&(o=n.alternate.memoizedState.cachePool.pool);var i=null;null!==n.memoizedState&&null!==n.memoizedState.cachePool&&(i=n.memoizedState.cachePool.pool),i!==o&&(n.flags|=2048)}return r!==e&&r&&(t.child.flags|=8192),aq(t,t.updateQueue),aK(t),null;case 4:return ed(),null===e&&cc(t.stateNode.containerInfo),aK(t),null;case 10:return sL(t.type),aK(t),null;case 19:if(ei(oh),null===(o=t.memoizedState))return aK(t),null;if(n=0!=(128&t.flags),null===(i=o.rendering))if(n)aY(o,!1);else{if(0!==le||null!==e&&0!=(128&e.flags))for(e=t.child;null!==e;){if(null!==(i=od(e))){for(t.flags|=128,aY(o,!1),e=i.updateQueue,t.updateQueue=e,aq(t,e),t.subtreeFlags=0,e=r,r=t.child;null!==r;)aG(r,e),r=r.sibling;return es(oh,1&oh.current|2),t.child}e=e.sibling}null!==o.tail&&ew()>lu&&(t.flags|=128,n=!0,aY(o,!1),t.lanes=4194304)}else{if(!n)if(null!==(e=od(i))){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,aq(t,e),aY(o,!0),null===o.tail&&"hidden"===o.tailMode&&!i.alternate&&!nN)return aK(t),null}else 2*ew()-o.renderingStartTime>lu&&0x20000000!==r&&(t.flags|=128,n=!0,aY(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(null!==(e=o.last)?e.sibling=i:t.child=i,o.last=i)}if(null!==o.tail)return t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ew(),t.sibling=null,e=oh.current,es(oh,n?1&e|2:1&e),t;return aK(t),null;case 22:case 23:return ou(t),oo(),n=null!==t.memoizedState,null!==e?null!==e.memoizedState!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?0!=(0x20000000&r)&&0==(128&t.flags)&&(aK(t),6&t.subtreeFlags&&(t.flags|=8192)):aK(t),null!==(r=t.updateQueue)&&aq(t,r.retryQueue),r=null,null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(r=e.memoizedState.cachePool.pool),n=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(n=t.memoizedState.cachePool.pool),n!==r&&(t.flags|=2048),null!==e&&ei(oT),null;case 24:return r=null,null!==e&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),sL(og),aK(t),null;case 25:return null}throw Error(h(156,t.tag))}(t.alternate,t,a7);if(null!==r){a2=r;return}if(null!==(t=t.sibling)){a2=t;return}a2=t=e}while(null!==t)0===le&&(le=5)}function lH(e,t){do{var r=function(e,t){switch(nM(t),t.tag){case 1:return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return sL(og),ed(),0!=(65536&(e=t.flags))&&0==(128&e)?(t.flags=-65537&e|128,t):null;case 26:case 27:case 5:return ef(t),null;case 13:if(ou(t),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(h(340));nW()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return ei(oh),null;case 4:return ed(),null;case 10:return sL(t.type),null;case 22:case 23:return ou(t),oo(),null!==e&&ei(oT),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 24:return sL(og),null;default:return null}}(e.alternate,e);if(null!==r){r.flags&=32767,a2=r;return}if(null!==(r=e.return)&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!t&&null!==(e=e.sibling)){a2=e;return}a2=e=r}while(null!==e)le=6,a2=null}function lG(e,t,r,n,o,i,c,u,d,p){var m=B.T,g=ee.p;try{ee.p=2,B.T=null,function(e,t,r,n,o,i,c,u){do lF();while(null!==lf)if(0!=(6&a0))throw Error(h(327));var d,p,m=e.finishedWork;if(n=e.finishedLanes,null!==m){if(e.finishedWork=null,e.finishedLanes=0,m===e.current)throw Error(h(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var g=m.lanes|m.childLanes;!function(e,t,r,n,o,i){var c=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var u=e.entanglements,h=e.expirationTimes,d=e.hiddenUpdates;for(r=c&~r;0<r;){var p=31-eA(r),m=1<<p;u[p]=0,h[p]=-1;var g=d[p];if(null!==g)for(d[p]=null,p=0;p<g.length;p++){var b=g[p];null!==b&&(b.lane&=-0x20000001)}r&=~m}0!==n&&eU(e,n,0),0!==i&&0===o&&0!==e.tag&&(e.suspendedLanes|=i&~(c&~t))}(e,n,g|=nt,i,c,u),e===a1&&(a2=a1=null,a5=0),0==(10256&m.subtreeFlags)&&0==(10256&m.flags)||lp||(lp=!0,lg=g,lb=r,d=ex,p=function(){return lF(!0),null},eg(d,p)),r=0!=(15990&m.flags),0!=(15990&m.subtreeFlags)||r?(r=B.T,B.T=null,i=ee.p,ee.p=2,c=a0,a0|=4,function(e,t){if(e=e.containerInfo,cx=uc,rW(e=rG(e))){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{var n=(r=(r=e.ownerDocument)&&r.defaultView||window).getSelection&&r.getSelection();if(n&&0!==n.rangeCount){r=n.anchorNode;var o,i=n.anchorOffset,c=n.focusNode;n=n.focusOffset;try{r.nodeType,c.nodeType}catch{r=null;break e}var u=0,d=-1,p=-1,m=0,g=0,b=e,v=null;t:for(;;){for(;b!==r||0!==i&&3!==b.nodeType||(d=u+i),b!==c||0!==n&&3!==b.nodeType||(p=u+n),3===b.nodeType&&(u+=b.nodeValue.length),null!==(o=b.firstChild);)v=b,b=o;for(;;){if(b===e)break t;if(v===r&&++m===i&&(d=u),v===c&&++g===n&&(p=u),null!==(o=b.nextSibling))break;v=(b=v).parentNode}b=o}r=-1===d||-1===p?null:{start:d,end:p}}else r=null}r=r||{start:0,end:0}}else r=null;for(ck={focusedElem:e,selectionRange:r},uc=!1,au=t;null!==au;)if(e=(t=au).child,0!=(1028&t.subtreeFlags)&&null!==e)e.return=t,au=e;else for(;null!==au;){switch(c=(t=au).alternate,e=t.flags,t.tag){case 0:case 11:case 15:case 5:case 26:case 27:case 6:case 4:case 17:break;case 1:if(0!=(1024&e)&&null!==c){e=void 0,r=t,i=c.memoizedProps,c=c.memoizedState,n=r.stateNode;try{var w=i4(r.type,i,r.elementType===r.type);e=n.getSnapshotBeforeUpdate(w,c),n.__reactInternalSnapshotBeforeUpdate=e}catch(e){lU(r,r.return,e)}}break;case 3:if(0!=(1024&e)){if(9===(r=(e=t.stateNode.containerInfo).nodeType))cP(e);else if(1===r)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":cP(e);break;default:e.textContent=""}}break;default:if(0!=(1024&e))throw Error(h(163))}if(null!==(e=t.sibling)){e.return=t.return,au=e;break}au=t.return}w=ah,ah=!1}(e,m),a_(m,e),function(e,t){var r=rG(t);t=e.focusedElem;var n=e.selectionRange;if(r!==t&&t&&t.ownerDocument&&function e(t,r){return!!t&&!!r&&(t===r||(!t||3!==t.nodeType)&&(r&&3===r.nodeType?e(t,r.parentNode):"contains"in t?t.contains(r):!!t.compareDocumentPosition&&!!(16&t.compareDocumentPosition(r))))}(t.ownerDocument.documentElement,t)){if(null!==n&&rW(t)){if(e=n.start,void 0===(r=n.end)&&(r=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(r,t.value.length);else if((r=(e=t.ownerDocument||document)&&e.defaultView||window).getSelection){r=r.getSelection();var o=t.textContent.length,i=Math.min(n.start,o);n=void 0===n.end?i:Math.min(n.end,o),!r.extend&&i>n&&(o=n,n=i,i=o),o=rH(t,i);var c=rH(t,n);o&&c&&(1!==r.rangeCount||r.anchorNode!==o.node||r.anchorOffset!==o.offset||r.focusNode!==c.node||r.focusOffset!==c.offset)&&((e=e.createRange()).setStart(o.node,o.offset),r.removeAllRanges(),i>n?(r.addRange(e),r.extend(c.node,c.offset)):(e.setEnd(c.node,c.offset),r.addRange(e)))}}for(e=[],r=t;r=r.parentNode;)1===r.nodeType&&e.push({element:r,left:r.scrollLeft,top:r.scrollTop});for("function"==typeof t.focus&&t.focus(),t=0;t<e.length;t++)(r=e[t]).element.scrollLeft=r.left,r.element.scrollTop=r.top}}(ck,e.containerInfo),uc=!!cx,ck=cx=null,e.current=m,ad(e,m.alternate,m),ey(),a0=c,ee.p=i,B.T=r):e.current=m,lp?(lp=!1,lf=e,lm=n):lW(e,g),0===(g=e.pendingLanes)&&(ld=null);var b=m.stateNode;if(eM&&"function"==typeof eM.onCommitFiberRoot)try{eM.onCommitFiberRoot(eO,b,void 0,128==(128&b.current.flags))}catch{}if(l2(e),null!==t)for(o=e.onRecoverableError,m=0;m<t.length;m++)o((g=t[m]).value,{componentStack:g.stack});0!=(3&lm)&&lF(),g=e.pendingLanes,0!=(4194218&n)&&0!=(42&g)?e===ly?lv++:(lv=0,ly=e):lv=0,l5(0,!1)}}(e,t,r,n,g,o,i,c,u,d,p)}finally{B.T=m,ee.p=g}}function lW(e,t){0==(e.pooledCacheLanes&=t)&&null!=(t=e.pooledCache)&&(e.pooledCache=null,oy(t))}function lF(){if(null!==lf){var e=lf,t=lg;lg=0;var r=eZ(lm),n=B.T,o=ee.p;try{if(ee.p=32>r?32:r,B.T=null,null===lf)var i=!1;else{r=lb,lb=null;var c=lf,u=lm;if(lf=null,lm=0,0!=(6&a0))throw Error(h(331));var d=a0;if(a0|=4,aD(c.current),aT(c,c.current,u,r),a0=d,l5(0,!1),eM&&"function"==typeof eM.onPostCommitFiberRoot)try{eM.onPostCommitFiberRoot(eO,c)}catch{}i=!0}return i}finally{ee.p=o,B.T=n,lW(e,t)}}return!1}function lB(e,t,r){t=np(r,t),t=si(e.stateNode,t,2),null!==(e=sQ(e,t,2))&&(eB(e,2),l2(e))}function lU(e,t,r){if(3===e.tag)lB(e,e,r);else for(;null!==t;){if(3===t.tag){lB(t,e,r);break}if(1===t.tag){var n=t.stateNode;if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof n.componentDidCatch&&(null===ld||!ld.has(n))){e=np(r,e),null!==(n=sQ(t,r=ss(2),2))&&(sa(r,n,t,e),eB(n,2),l2(n));break}}t=t.return}}function lj(e,t,r){var n=e.pingCache;if(null===n){n=e.pingCache=new aJ;var o=new Set;n.set(t,o)}else void 0===(o=n.get(t))&&(o=new Set,n.set(t,o));o.has(r)||(a9=!0,o.add(r),e=lZ.bind(null,e,t,r),t.then(e,e))}function lZ(e,t,r){var n=e.pingCache;null!==n&&n.delete(t),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,a1===e&&(a5&r)===r&&(4===le||3===le&&(0x3c00000&a5)===a5&&300>ew()-lc?0==(2&a0)&&lO(e,0):ln|=r,li===a5&&(li=0)),l2(e)}function lV(e,t){0===t&&(t=eW()),null!==(e=nl(e,t))&&(eB(e,t),l2(e))}function lq(e){var t=e.memoizedState,r=0;null!==t&&(r=t.retryLane),lV(e,r)}function lY(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,o=e.memoizedState;null!==o&&(r=o.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(h(314))}null!==n&&n.delete(t),lV(e,r)}var lK=null,lQ=null,lX=!1,lJ=!1,l0=!1,l1=0;function l2(e){var t;e!==lQ&&null===e.next&&(null===lQ?lK=lQ=e:lQ=lQ.next=e),lJ=!0,lX||(lX=!0,t=l3,cD(function(){0!=(6&a0)?eg(eS,t):t()}))}function l5(e,t){if(!l0&&lJ){l0=!0;do for(var r=!1,n=lK;null!==n;){if(!t)if(0!==e){var o=n.pendingLanes;if(0===o)var i=0;else{var c=n.suspendedLanes,u=n.pingedLanes;i=0xc000055&(i=(1<<31-eA(42|e)+1)-1&(o&~(c&~u)))?0xc000055&i|1:i?2|i:0}0!==i&&(r=!0,l8(n,i))}else i=a5,0==(3&(i=eL(n,n===a1?i:0)))||eH(n,i)||(r=!0,l8(n,i));n=n.next}while(r)l0=!1}}function l3(){lJ=lX=!1;var e,t=0;0!==l1&&(((e=window.event)&&"popstate"===e.type?e===cM||(cM=e,0):(cM=null,1))||(t=l1),l1=0);for(var r=ew(),n=null,o=lK;null!==o;){var i=o.next,c=l6(o,r);0===c?(o.next=null,null===n?lK=i:n.next=i,null===i&&(lQ=n)):(n=o,(0!==t||0!=(3&c))&&(lJ=!0)),o=i}l5(t,!1)}function l6(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,o=e.expirationTimes,i=-0x3c00001&e.pendingLanes;0<i;){var c=31-eA(i),u=1<<c,h=o[c];-1===h?(0==(u&r)||0!=(u&n))&&(o[c]=function(e,t){switch(e){case 1:case 2:case 4:case 8:return t+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return -1}}(u,t)):h<=t&&(e.expiredLanes|=u),i&=~u}if(t=a1,r=a5,r=eL(e,e===t?r:0),n=e.callbackNode,0===r||e===t&&2===a3||null!==e.cancelPendingCommit)return null!==n&&null!==n&&eb(n),e.callbackNode=null,e.callbackPriority=0;if(0==(3&r)||eH(e,r)){if((t=r&-r)===e.callbackPriority)return t;switch(null!==n&&eb(n),eZ(r)){case 2:case 8:r=eC;break;case 32:default:r=ex;break;case 0x10000000:r=eR}return r=eg(r,n=l4.bind(null,e)),e.callbackPriority=t,e.callbackNode=r,t}return null!==n&&null!==n&&eb(n),e.callbackPriority=2,e.callbackNode=null,2}function l4(e,t){var r=e.callbackNode;if(lF()&&e.callbackNode!==r)return null;var n=a5;return 0===(n=eL(e,e===a1?n:0))?null:(lC(e,n,t),l6(e,ew()),null!=e.callbackNode&&e.callbackNode===r?l4.bind(null,e):null)}function l8(e,t){if(lF())return null;lC(e,t,!0)}function l9(){return 0===l1&&(l1=eG()),l1}function l7(e){return null==e||"symbol"==typeof e||"boolean"==typeof e?null:"function"==typeof e?e:tM(""+e)}function ce(e,t){var r=t.ownerDocument.createElement("input");return r.name=t.name,r.value=t.value,e.id&&r.setAttribute("form",e.id),t.parentNode.insertBefore(r,t),e=new FormData(e),r.parentNode.removeChild(r),e}for(var ct=0;ct<r8.length;ct++){var cr=r8[ct];r9(cr.toLowerCase(),"on"+(cr[0].toUpperCase()+cr.slice(1)))}r9(rJ,"onAnimationEnd"),r9(r0,"onAnimationIteration"),r9(r1,"onAnimationStart"),r9("dblclick","onDoubleClick"),r9("focusin","onFocus"),r9("focusout","onBlur"),r9(r2,"onTransitionRun"),r9(r5,"onTransitionStart"),r9(r3,"onTransitionCancel"),r9(r6,"onTransitionEnd"),tr("onMouseEnter",["mouseout","mouseover"]),tr("onMouseLeave",["mouseout","mouseover"]),tr("onPointerEnter",["pointerout","pointerover"]),tr("onPointerLeave",["pointerout","pointerover"]),tt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),tt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),tt("onBeforeInput",["compositionend","keypress","textInput","paste"]),tt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),tt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),tt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),co=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(cn));function ci(e,t){t=0!=(4&t);for(var r=0;r<e.length;r++){var n=e[r],o=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var c=n.length-1;0<=c;c--){var u=n[c],h=u.instance,d=u.currentTarget;if(u=u.listener,h!==i&&o.isPropagationStopped())break e;i=u,o.currentTarget=d;try{i(o)}catch(e){i8(e)}o.currentTarget=null,i=h}else for(c=0;c<n.length;c++){if(h=(u=n[c]).instance,d=u.currentTarget,u=u.listener,h!==i&&o.isPropagationStopped())break e;i=u,o.currentTarget=d;try{i(o)}catch(e){i8(e)}o.currentTarget=null,i=h}}}}function cs(e,t){var r=t[eX];void 0===r&&(r=t[eX]=new Set);var n=e+"__bubble";r.has(n)||(cu(t,e,2,!1),r.add(n))}function ca(e,t,r){var n=0;t&&(n|=4),cu(r,e,n,t)}var cl="_reactListening"+Math.random().toString(36).slice(2);function cc(e){if(!e[cl]){e[cl]=!0,e7.forEach(function(t){"selectionchange"!==t&&(co.has(t)||ca(t,!1,e),ca(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[cl]||(t[cl]=!0,ca("selectionchange",!1,t))}}function cu(e,t,r,n){switch(ug(t)){case 2:var o=uu;break;case 8:o=uh;break;default:o=ud}r=o.bind(null,t,r,e),o=void 0,tH&&("touchstart"===t||"touchmove"===t||"wheel"===t)&&(o=!0),n?void 0!==o?e.addEventListener(t,r,{capture:!0,passive:o}):e.addEventListener(t,r,!0):void 0!==o?e.addEventListener(t,r,{passive:o}):e.addEventListener(t,r,!1)}function ch(e,t,r,n,o){var i=n;if(0==(1&t)&&0==(2&t)&&null!==n)e:for(;;){if(null===n)return;var c=n.tag;if(3===c||4===c){var u=n.stateNode.containerInfo;if(u===o||8===u.nodeType&&u.parentNode===o)break;if(4===c)for(c=n.return;null!==c;){var h=c.tag;if((3===h||4===h)&&((h=c.stateNode.containerInfo)===o||8===h.nodeType&&h.parentNode===o))return;c=c.return}for(;null!==u;){if(null===(c=e3(u)))return;if(5===(h=c.tag)||6===h||26===h||27===h){n=i=c;continue e}u=u.parentNode}}n=n.return}tP(function(){var n=i,o=tA(r),c=[];e:{var u=r4.get(e);if(void 0!==u){var h=tJ,d=e;switch(e){case"keypress":if(0===tj(r))break e;case"keydown":case"keyup":h=ro;break;case"focusin":d="focus",h=t6;break;case"focusout":d="blur",h=t6;break;case"beforeblur":case"afterblur":h=t6;break;case"click":if(2===r.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=t5;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=t3;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=rs;break;case rJ:case r0:case r1:h=t4;break;case r6:h=ra;break;case"scroll":case"scrollend":h=t1;break;case"wheel":h=rl;break;case"copy":case"cut":case"paste":h=t8;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=ri;break;case"toggle":case"beforetoggle":h=rc}var p=0!=(4&t),m=!p&&("scroll"===e||"scrollend"===e),g=p?null!==u?u+"Capture":null:u;p=[];for(var b,v=n;null!==v;){var w=v;if(b=w.stateNode,5!==(w=w.tag)&&26!==w&&27!==w||null===b||null===g||null!=(w=tL(v,g))&&p.push(cd(v,w,b)),m)break;v=v.return}0<p.length&&(u=new h(u,d,null,r,o),c.push({event:u,listeners:p}))}}if(0==(7&t)){if((u="mouseover"===e||"pointerover"===e,h="mouseout"===e||"pointerout"===e,!(u&&r!==tI&&(d=r.relatedTarget||r.fromElement)&&(e3(d)||d[eQ])))&&(h||u)&&(u=o.window===o?o:(u=o.ownerDocument)?u.defaultView||u.parentWindow:window,h?(d=r.relatedTarget||r.toElement,h=n,null!==(d=d?e3(d):null)&&(m=K(d),p=d.tag,d!==m||5!==p&&27!==p&&6!==p)&&(d=null)):(h=null,d=n),h!==d)){if(p=t5,w="onMouseLeave",g="onMouseEnter",v="mouse",("pointerout"===e||"pointerover"===e)&&(p=ri,w="onPointerLeave",g="onPointerEnter",v="pointer"),m=null==h?u:e4(h),b=null==d?u:e4(d),(u=new p(w,v+"leave",h,r,o)).target=m,u.relatedTarget=b,w=null,e3(o)===n&&((p=new p(g,v+"enter",d,r,o)).target=b,p.relatedTarget=m,w=p),m=w,h&&d)t:{for(p=h,g=d,v=0,b=p;b;b=cf(b))v++;for(b=0,w=g;w;w=cf(w))b++;for(;0<v-b;)p=cf(p),v--;for(;0<b-v;)g=cf(g),b--;for(;v--;){if(p===g||null!==g&&p===g.alternate)break t;p=cf(p),g=cf(g)}p=null}else p=null;null!==h&&cm(c,u,h,p,!1),null!==d&&null!==m&&cm(c,m,d,p,!0)}e:{if("select"===(h=(u=n?e4(n):window).nodeName&&u.nodeName.toLowerCase())||"input"===h&&"file"===u.type)var _,S=rR;else if(rw(u))if(rT)S=rz;else{S=rN;var C=rA}else(h=u.nodeName)&&"input"===h.toLowerCase()&&("checkbox"===u.type||"radio"===u.type)?S=rD:n&&tT(n.elementType)&&(S=rR);if(S&&(S=S(e,n))){r_(c,S,r,o);break e}C&&C(e,u,n),"focusout"===e&&n&&"number"===u.type&&null!=n.memoizedProps.value&&ty(u,"number",u.value)}switch(C=n?e4(n):window,e){case"focusin":(rw(C)||"true"===C.contentEditable)&&(rB=C,rU=n,rj=null);break;case"focusout":rj=rU=rB=null;break;case"mousedown":rZ=!0;break;case"contextmenu":case"mouseup":case"dragend":rZ=!1,rV(c,r,o);break;case"selectionchange":if(rF)break;case"keydown":case"keyup":rV(c,r,o)}if(rh)t:{switch(e){case"compositionstart":var x="onCompositionStart";break t;case"compositionend":x="onCompositionEnd";break t;case"compositionupdate":x="onCompositionUpdate";break t}x=void 0}else rv?rg(e,r)&&(x="onCompositionEnd"):"keydown"===e&&229===r.keyCode&&(x="onCompositionStart");x&&(rf&&"ko"!==r.locale&&(rv||"onCompositionStart"!==x?"onCompositionEnd"===x&&rv&&(_=tU()):(tF="value"in(tW=o)?tW.value:tW.textContent,rv=!0)),0<(C=cp(n,x)).length&&(x=new t9(x,e,null,r,o),c.push({event:x,listeners:C}),_?x.data=_:null!==(_=rb(r))&&(x.data=_))),(_=rp?function(e,t){switch(e){case"compositionend":return rb(t);case"keypress":if(32!==t.which)return null;return rm=!0," ";case"textInput":return" "===(e=t.data)&&rm?null:e;default:return null}}(e,r):function(e,t){if(rv)return"compositionend"===e||!rh&&rg(e,t)?(e=tU(),tB=tF=tW=null,rv=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return rf&&"ko"!==t.locale?null:t.data}}(e,r))&&0<(x=cp(n,"onBeforeInput")).length&&(C=new t9("onBeforeInput","beforeinput",null,r,o),c.push({event:C,listeners:x}),C.data=_);var T=e;if("submit"===T&&n&&n.stateNode===o){var E=l7((o[eK]||null).action),O=r.submitter;O&&null!==(T=(T=O[eK]||null)?l7(T.formAction):O.getAttribute("formAction"))&&(E=T,O=null);var A=new tJ("action","action",null,r,o);c.push({event:A,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(0!==l1){var e=O?ce(o,O):new FormData(o);iP(n,{pending:!0,data:e,method:o.method,action:E},null,e)}}else"function"==typeof E&&(A.preventDefault(),iP(n,{pending:!0,data:e=O?ce(o,O):new FormData(o),method:o.method,action:E},E,e))},currentTarget:o}]})}}ci(c,t)})}function cd(e,t,r){return{instance:e,listener:t,currentTarget:r}}function cp(e,t){for(var r=t+"Capture",n=[];null!==e;){var o=e,i=o.stateNode;5!==(o=o.tag)&&26!==o&&27!==o||null===i||(null!=(o=tL(e,r))&&n.unshift(cd(e,o,i)),null!=(o=tL(e,t))&&n.push(cd(e,o,i))),e=e.return}return n}function cf(e){if(null===e)return null;do e=e.return;while(e&&5!==e.tag&&27!==e.tag)return e||null}function cm(e,t,r,n,o){for(var i=t._reactName,c=[];null!==r&&r!==n;){var u=r,h=u.alternate,d=u.stateNode;if(u=u.tag,null!==h&&h===n)break;5!==u&&26!==u&&27!==u||null===d||(h=d,o?null!=(d=tL(r,i))&&c.unshift(cd(r,d,h)):o||null!=(d=tL(r,i))&&c.push(cd(r,d,h))),r=r.return}0!==c.length&&e.push({event:t,listeners:c})}var cg=/\r\n?/g,cb=/\u0000|\uFFFD/g;function cv(e){return("string"==typeof e?e:""+e).replace(cg,`
`).replace(cb,"")}function cy(e,t){return t=cv(t),cv(e)===t}function cw(){}function c_(e,t,r,n,o,i){switch(r){case"children":"string"==typeof n?"body"===t||"textarea"===t&&""===n||tC(e,n):("number"==typeof n||"bigint"==typeof n)&&"body"!==t&&tC(e,""+n);break;case"className":tl(e,"class",n);break;case"tabIndex":tl(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":tl(e,r,n);break;case"style":tR(e,n,i);break;case"data":if("object"!==t){tl(e,"data",n);break}case"src":case"href":if(""===n&&("a"!==t||"href"!==r)||null==n||"function"==typeof n||"symbol"==typeof n||"boolean"==typeof n){e.removeAttribute(r);break}n=tM(""+n),e.setAttribute(r,n);break;case"action":case"formAction":if("function"==typeof n){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}if("function"==typeof i&&("formAction"===r?("input"!==t&&c_(e,t,"name",o.name,o,null),c_(e,t,"formEncType",o.formEncType,o,null),c_(e,t,"formMethod",o.formMethod,o,null),c_(e,t,"formTarget",o.formTarget,o,null)):(c_(e,t,"encType",o.encType,o,null),c_(e,t,"method",o.method,o,null),c_(e,t,"target",o.target,o,null))),null==n||"symbol"==typeof n||"boolean"==typeof n){e.removeAttribute(r);break}n=tM(""+n),e.setAttribute(r,n);break;case"onClick":null!=n&&(e.onclick=cw);break;case"onScroll":null!=n&&cs("scroll",e);break;case"onScrollEnd":null!=n&&cs("scrollend",e);break;case"dangerouslySetInnerHTML":if(null!=n){if("object"!=typeof n||!("__html"in n))throw Error(h(61));if(null!=(r=n.__html)){if(null!=o.children)throw Error(h(60));e.innerHTML=r}}break;case"multiple":e.multiple=n&&"function"!=typeof n&&"symbol"!=typeof n;break;case"muted":e.muted=n&&"function"!=typeof n&&"symbol"!=typeof n;break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":case"autoFocus":case"innerText":case"textContent":break;case"xlinkHref":if(null==n||"function"==typeof n||"boolean"==typeof n||"symbol"==typeof n){e.removeAttribute("xlink:href");break}r=tM(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":null!=n&&"function"!=typeof n&&"symbol"!=typeof n?e.setAttribute(r,""+n):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&"function"!=typeof n&&"symbol"!=typeof n?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":!0===n?e.setAttribute(r,""):!1!==n&&null!=n&&"function"!=typeof n&&"symbol"!=typeof n?e.setAttribute(r,n):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":null!=n&&"function"!=typeof n&&"symbol"!=typeof n&&!isNaN(n)&&1<=n?e.setAttribute(r,n):e.removeAttribute(r);break;case"rowSpan":case"start":null==n||"function"==typeof n||"symbol"==typeof n||isNaN(n)?e.removeAttribute(r):e.setAttribute(r,n);break;case"popover":cs("beforetoggle",e),cs("toggle",e),ta(e,"popover",n);break;case"xlinkActuate":tc(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":tc(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":tc(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":tc(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":tc(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":tc(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":tc(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":tc(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":tc(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":ta(e,"is",n);break;default:2<r.length&&("o"===r[0]||"O"===r[0])&&("n"===r[1]||"N"===r[1])||ta(e,r=tE.get(r)||r,n)}}function cS(e,t,r,n,o,i){switch(r){case"style":tR(e,n,i);break;case"dangerouslySetInnerHTML":if(null!=n){if("object"!=typeof n||!("__html"in n))throw Error(h(61));if(null!=(r=n.__html)){if(null!=o.children)throw Error(h(60));e.innerHTML=r}}break;case"children":"string"==typeof n?tC(e,n):("number"==typeof n||"bigint"==typeof n)&&tC(e,""+n);break;case"onScroll":null!=n&&cs("scroll",e);break;case"onScrollEnd":null!=n&&cs("scrollend",e);break;case"onClick":null!=n&&(e.onclick=cw);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":case"innerText":case"textContent":break;default:if(!te.hasOwnProperty(r))e:{if("o"===r[0]&&"n"===r[1]&&(o=r.endsWith("Capture"),t=r.slice(2,o?r.length-7:void 0),"function"==typeof(i=null!=(i=e[eK]||null)?i[r]:null)&&e.removeEventListener(t,i,o),"function"==typeof n)){"function"!=typeof i&&null!==i&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(t,n,o);break e}r in e?e[r]=n:!0===n?e.setAttribute(r,""):ta(e,r,n)}}}function cC(e,t,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":cs("error",e),cs("load",e);var n,o=!1,i=!1;for(n in r)if(r.hasOwnProperty(n)){var c=r[n];if(null!=c)switch(n){case"src":o=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(h(137,t));default:c_(e,t,n,c,r,null)}}i&&c_(e,t,"srcSet",r.srcSet,r,null),o&&c_(e,t,"src",r.src,r,null);return;case"input":cs("invalid",e);var u=n=c=i=null,d=null,p=null;for(o in r)if(r.hasOwnProperty(o)){var m=r[o];if(null!=m)switch(o){case"name":i=m;break;case"type":c=m;break;case"checked":d=m;break;case"defaultChecked":p=m;break;case"value":n=m;break;case"defaultValue":u=m;break;case"children":case"dangerouslySetInnerHTML":if(null!=m)throw Error(h(137,t));break;default:c_(e,t,o,m,r,null)}}tv(e,n,u,d,p,c,i,!1),td(e);return;case"select":for(i in cs("invalid",e),o=c=n=null,r)if(r.hasOwnProperty(i)&&null!=(u=r[i]))switch(i){case"value":n=u;break;case"defaultValue":c=u;break;case"multiple":o=u;default:c_(e,t,i,u,r,null)}t=n,r=c,e.multiple=!!o,null!=t?tw(e,!!o,t,!1):null!=r&&tw(e,!!o,r,!0);return;case"textarea":for(c in cs("invalid",e),n=i=o=null,r)if(r.hasOwnProperty(c)&&null!=(u=r[c]))switch(c){case"value":o=u;break;case"defaultValue":i=u;break;case"children":n=u;break;case"dangerouslySetInnerHTML":if(null!=u)throw Error(h(91));break;default:c_(e,t,c,u,r,null)}tS(e,o,i,n),td(e);return;case"option":for(d in r)r.hasOwnProperty(d)&&null!=(o=r[d])&&("selected"===d?e.selected=o&&"function"!=typeof o&&"symbol"!=typeof o:c_(e,t,d,o,r,null));return;case"dialog":cs("cancel",e),cs("close",e);break;case"iframe":case"object":cs("load",e);break;case"video":case"audio":for(o=0;o<cn.length;o++)cs(cn[o],e);break;case"image":cs("error",e),cs("load",e);break;case"details":cs("toggle",e);break;case"embed":case"source":case"link":cs("error",e),cs("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(p in r)if(r.hasOwnProperty(p)&&null!=(o=r[p]))switch(p){case"children":case"dangerouslySetInnerHTML":throw Error(h(137,t));default:c_(e,t,p,o,r,null)}return;default:if(tT(t)){for(m in r)r.hasOwnProperty(m)&&void 0!==(o=r[m])&&cS(e,t,m,o,r,void 0);return}}for(u in r)r.hasOwnProperty(u)&&null!=(o=r[u])&&c_(e,t,u,o,r,null)}var cx=null,ck=null;function cR(e){return 9===e.nodeType?e:e.ownerDocument}function cT(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function cE(e,t){if(0===e)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return 1===e&&"foreignObject"===t?0:e}function cO(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"bigint"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var cM=null,cI="function"==typeof setTimeout?setTimeout:void 0,cA="function"==typeof clearTimeout?clearTimeout:void 0,cN="function"==typeof Promise?Promise:void 0,cD="function"==typeof queueMicrotask?queueMicrotask:void 0!==cN?function(e){return cN.resolve(null).then(e).catch(cz)}:cI;function cz(e){setTimeout(function(){throw e})}function c$(e,t){var r=t,n=0;do{var o=r.nextSibling;if(e.removeChild(r),o&&8===o.nodeType)if("/$"===(r=o.data)){if(0===n){e.removeChild(o),uD(t);return}n--}else"$"!==r&&"$?"!==r&&"$!"!==r||n++;r=o}while(r)uD(t)}function cP(e){var t=e.firstChild;for(t&&10===t.nodeType&&(t=t.nextSibling);t;){var r=t;switch(t=t.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":cP(r),e5(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if("stylesheet"===r.rel.toLowerCase())continue}e.removeChild(r)}}function cL(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t||"F!"===t||"F"===t)break;if("/$"===t)return null}}return e}function cH(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var r=e.data;if("$"===r||"$!"===r||"$?"===r){if(0===t)return e;t--}else"/$"===r&&t++}e=e.previousSibling}return null}function cG(e,t,r){switch(t=cR(r),e){case"html":if(!(e=t.documentElement))throw Error(h(452));return e;case"head":if(!(e=t.head))throw Error(h(453));return e;case"body":if(!(e=t.body))throw Error(h(454));return e;default:throw Error(h(451))}}var cW=new Map,cF=new Set;function cB(e){return"function"==typeof e.getRootNode?e.getRootNode():e.ownerDocument}var cU=ee.d;ee.d={f:function(){var e=cU.f(),t=lT();return e||t},r:function(e){var t=e6(e);null!==t&&5===t.tag&&"form"===t.type?iH(t):cU.r(e)},D:function(e){cU.D(e),cZ("dns-prefetch",e,null)},C:function(e,t){cU.C(e,t),cZ("preconnect",e,t)},L:function(e,t,r){if(cU.L(e,t,r),cj&&e&&t){var n='link[rel="preload"][as="'+tg(t)+'"]';"image"===t&&r&&r.imageSrcSet?(n+='[imagesrcset="'+tg(r.imageSrcSet)+'"]',"string"==typeof r.imageSizes&&(n+='[imagesizes="'+tg(r.imageSizes)+'"]')):n+='[href="'+tg(e)+'"]';var o=n;switch(t){case"style":o=cq(e);break;case"script":o=cQ(e)}cW.has(o)||(e=U({rel:"preload",href:"image"===t&&r&&r.imageSrcSet?void 0:e,as:t},r),cW.set(o,e),null!==cj.querySelector(n)||"style"===t&&cj.querySelector(cY(o))||"script"===t&&cj.querySelector(cX(o))||(cC(t=cj.createElement("link"),"link",e),e9(t),cj.head.appendChild(t)))}},m:function(e,t){if(cU.m(e,t),cj&&e){var r=t&&"string"==typeof t.as?t.as:"script",n='link[rel="modulepreload"][as="'+tg(r)+'"][href="'+tg(e)+'"]',o=n;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=cQ(e)}if(!cW.has(o)&&(e=U({rel:"modulepreload",href:e},t),cW.set(o,e),null===cj.querySelector(n))){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(cj.querySelector(cX(o)))return}cC(r=cj.createElement("link"),"link",e),e9(r),cj.head.appendChild(r)}}},X:function(e,t){if(cU.X(e,t),cj&&e){var r=e8(cj).hoistableScripts,n=cQ(e),o=r.get(n);o||((o=cj.querySelector(cX(n)))||(e=U({src:e,async:!0},t),(t=cW.get(n))&&c2(e,t),e9(o=cj.createElement("script")),cC(o,"link",e),cj.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},r.set(n,o))}},S:function(e,t,r){if(cU.S(e,t,r),cj&&e){var n=e8(cj).hoistableStyles,o=cq(e);t=t||"default";var i=n.get(o);if(!i){var c={loading:0,preload:null};if(i=cj.querySelector(cY(o)))c.loading=5;else{e=U({rel:"stylesheet",href:e,"data-precedence":t},r),(r=cW.get(o))&&c1(e,r);var u=i=cj.createElement("link");e9(u),cC(u,"link",e),u._p=new Promise(function(e,t){u.onload=e,u.onerror=t}),u.addEventListener("load",function(){c.loading|=1}),u.addEventListener("error",function(){c.loading|=2}),c.loading|=4,c0(i,t,cj)}i={type:"stylesheet",instance:i,count:1,state:c},n.set(o,i)}}},M:function(e,t){if(cU.M(e,t),cj&&e){var r=e8(cj).hoistableScripts,n=cQ(e),o=r.get(n);o||((o=cj.querySelector(cX(n)))||(e=U({src:e,async:!0,type:"module"},t),(t=cW.get(n))&&c2(e,t),e9(o=cj.createElement("script")),cC(o,"link",e),cj.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},r.set(n,o))}}};var cj="undefined"==typeof document?null:document;function cZ(e,t,r){if(cj&&"string"==typeof t&&t){var n=tg(t);n='link[rel="'+e+'"][href="'+n+'"]',"string"==typeof r&&(n+='[crossorigin="'+r+'"]'),cF.has(n)||(cF.add(n),e={rel:e,crossOrigin:r,href:t},null===cj.querySelector(n)&&(cC(t=cj.createElement("link"),"link",e),e9(t),cj.head.appendChild(t)))}}function cV(e,t,r,n){var o=(o=ec.current)?cB(o):null;if(!o)throw Error(h(446));switch(e){case"meta":case"title":return null;case"style":return"string"==typeof r.precedence&&"string"==typeof r.href?(t=cq(r.href),(n=(r=e8(o).hoistableStyles).get(t))||(n={type:"style",instance:null,count:0,state:null},r.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if("stylesheet"===r.rel&&"string"==typeof r.href&&"string"==typeof r.precedence){e=cq(r.href);var i,c,u,d,p=e8(o).hoistableStyles,m=p.get(e);if(m||(o=o.ownerDocument||o,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(e,m),(p=o.querySelector(cY(e)))&&!p._p&&(m.instance=p,m.state.loading=5),cW.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},cW.set(e,r),p||(i=o,c=e,u=r,d=m.state,i.querySelector('link[rel="preload"][as="style"]['+c+"]")?d.loading=1:(d.preload=c=i.createElement("link"),c.addEventListener("load",function(){return d.loading|=1}),c.addEventListener("error",function(){return d.loading|=2}),cC(c,"link",u),e9(c),i.head.appendChild(c))))),t&&null===n)throw Error(h(528,""));return m}if(t&&null!==n)throw Error(h(529,""));return null;case"script":return t=r.async,"string"==typeof(r=r.src)&&t&&"function"!=typeof t&&"symbol"!=typeof t?(t=cQ(r),(n=(r=e8(o).hoistableScripts).get(t))||(n={type:"script",instance:null,count:0,state:null},r.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(h(444,e))}}function cq(e){return'href="'+tg(e)+'"'}function cY(e){return'link[rel="stylesheet"]['+e+"]"}function cK(e){return U({},e,{"data-precedence":e.precedence,precedence:null})}function cQ(e){return'[src="'+tg(e)+'"]'}function cX(e){return"script[async]"+e}function cJ(e,t,r){if(t.count++,null===t.instance)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+tg(r.href)+'"]');if(n)return t.instance=n,e9(n),n;var o=U({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return e9(n=(e.ownerDocument||e).createElement("style")),cC(n,"style",o),c0(n,r.precedence,e),t.instance=n;case"stylesheet":o=cq(r.href);var i=e.querySelector(cY(o));if(i)return t.state.loading|=4,t.instance=i,e9(i),i;n=cK(r),(o=cW.get(o))&&c1(n,o),e9(i=(e.ownerDocument||e).createElement("link"));var c=i;return c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),cC(i,"link",n),t.state.loading|=4,c0(i,r.precedence,e),t.instance=i;case"script":if(i=cQ(r.src),o=e.querySelector(cX(i)))return t.instance=o,e9(o),o;return n=r,(o=cW.get(i))&&c2(n=U({},r),o),e9(o=(e=e.ownerDocument||e).createElement("script")),cC(o,"link",n),e.head.appendChild(o),t.instance=o;case"void":return null;default:throw Error(h(443,t.type))}return"stylesheet"===t.type&&0==(4&t.state.loading)&&(n=t.instance,t.state.loading|=4,c0(n,r.precedence,e)),t.instance}function c0(e,t,r){for(var n=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=n.length?n[n.length-1]:null,i=o,c=0;c<n.length;c++){var u=n[c];if(u.dataset.precedence===t)i=u;else if(i!==o)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=9===r.nodeType?r.head:r).insertBefore(e,t.firstChild)}function c1(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.title&&(e.title=t.title)}function c2(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.integrity&&(e.integrity=t.integrity)}var c5=null;function c3(e,t,r){if(null===c5){var n=new Map,o=c5=new Map;o.set(r,n)}else(n=(o=c5).get(r))||(n=new Map,o.set(r,n));if(n.has(e))return n;for(n.set(e,null),r=r.getElementsByTagName(e),o=0;o<r.length;o++){var i=r[o];if(!(i[e2]||i[eY]||"link"===e&&"stylesheet"===i.getAttribute("rel"))&&"http://www.w3.org/2000/svg"!==i.namespaceURI){var c=i.getAttribute(t)||"";c=e+c;var u=n.get(c);u?u.push(i):n.set(c,[i])}}return n}function c6(e,t,r){(e=e.ownerDocument||e).head.insertBefore(r,"title"===t?e.querySelector("head > title"):null)}function c4(e){return"stylesheet"!==e.type||0!=(3&e.state.loading)}var c8=null;function c9(){}function c7(){if(this.count--,0===this.count){if(this.stylesheets)ut(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ue=null;function ut(e,t){e.stylesheets=null,null!==e.unsuspend&&(e.count++,ue=new Map,t.forEach(ur,e),ue=null,c7.call(e))}function ur(e,t){if(!(4&t.state.loading)){var r=ue.get(e);if(r)var n=r.get(null);else{r=new Map,ue.set(e,r);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<o.length;i++){var c=o[i];("LINK"===c.nodeName||"not all"!==c.getAttribute("media"))&&(r.set(c.dataset.precedence,c),n=c)}n&&r.set(null,n)}c=(o=t.instance).getAttribute("data-precedence"),(i=r.get(c)||n)===n&&r.set(null,o),r.set(c,o),this.count++,n=c7.bind(this),o.addEventListener("load",n),o.addEventListener("error",n),i?i.parentNode.insertBefore(o,i.nextSibling):(e=9===e.nodeType?e.head:e).insertBefore(o,e.firstChild),t.state.loading|=4}}var un={$$typeof:S,Provider:null,Consumer:null,_currentValue:et,_currentValue2:et,_threadCount:0};function uo(e,t,r,n,o,i,c,u){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=eF(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=eF(0),this.hiddenUpdates=eF(null),this.identifierPrefix=n,this.onUncaughtError=o,this.onCaughtError=i,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=u,this.incompleteTransitions=new Map}function ui(e,t,r,n,o,i){var c;o=nh,null===n.context?n.context=o:n.pendingContext=o,(n=sK(t)).payload={element:r},null!==(i=void 0===i?null:i)&&(n.callback=i),null!==(r=sQ(e,n,t))&&(lS(r,e,t),sX(r,e,t))}function us(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var r=e.retryLane;e.retryLane=0!==r&&r<t?r:t}}function ua(e,t){us(e,t),(e=e.alternate)&&us(e,t)}function ul(e){if(13===e.tag){var t=nl(e,0x4000000);null!==t&&lS(t,e,0x4000000),ua(e,0x4000000)}}var uc=!0;function uu(e,t,r,n){var o=B.T;B.T=null;var i=ee.p;try{ee.p=2,ud(e,t,r,n)}finally{ee.p=i,B.T=o}}function uh(e,t,r,n){var o=B.T;B.T=null;var i=ee.p;try{ee.p=8,ud(e,t,r,n)}finally{ee.p=i,B.T=o}}function ud(e,t,r,n){if(uc){var o=up(n);if(null===o)ch(e,t,n,uf,r),uk(e,n);else if(function(e,t,r,n,o){switch(t){case"focusin":return uv=uR(uv,e,t,r,n,o),!0;case"dragenter":return uy=uR(uy,e,t,r,n,o),!0;case"mouseover":return uw=uR(uw,e,t,r,n,o),!0;case"pointerover":var i=o.pointerId;return u_.set(i,uR(u_.get(i)||null,e,t,r,n,o)),!0;case"gotpointercapture":return i=o.pointerId,uS.set(i,uR(uS.get(i)||null,e,t,r,n,o)),!0}return!1}(o,e,t,r,n))n.stopPropagation();else if(uk(e,n),4&t&&-1<ux.indexOf(e)){for(;null!==o;){var i=e6(o);if(null!==i)switch(i.tag){case 3:if((i=i.stateNode).current.memoizedState.isDehydrated){var c=eP(i.pendingLanes);if(0!==c){var u=i;for(u.pendingLanes|=2,u.entangledLanes|=2;c;){var h=1<<31-eA(c);u.entanglements[1]|=h,c&=~h}l2(i),0==(6&a0)&&(lu=ew()+500,l5(0,!1))}}break;case 13:null!==(u=nl(i,2))&&lS(u,i,2),lT(),ua(i,2)}if(null===(i=up(n))&&ch(e,t,n,uf,r),i===o)break;o=i}null!==o&&n.stopPropagation()}else ch(e,t,n,null,r)}}function up(e){return um(e=tA(e))}var uf=null;function um(e){if(uf=null,null!==(e=e3(e))){var t=K(e);if(null===t)e=null;else{var r=t.tag;if(13===r){if(null!==(e=Q(t)))return e;e=null}else if(3===r){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return uf=e,null}function ug(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(e_()){case eS:return 2;case eC:return 8;case ex:case ek:return 32;case eR:return 0x10000000;default:return 32}default:return 32}}var ub=!1,uv=null,uy=null,uw=null,u_=new Map,uS=new Map,uC=[],ux="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function uk(e,t){switch(e){case"focusin":case"focusout":uv=null;break;case"dragenter":case"dragleave":uy=null;break;case"mouseover":case"mouseout":uw=null;break;case"pointerover":case"pointerout":u_.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":uS.delete(t.pointerId)}}function uR(e,t,r,n,o,i){return null===e||e.nativeEvent!==i?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:i,targetContainers:[o]},null!==t&&null!==(t=e6(t))&&ul(t)):(e.eventSystemFlags|=n,t=e.targetContainers,null!==o&&-1===t.indexOf(o)&&t.push(o)),e}function uT(e){var t=e3(e.target);if(null!==t){var r=K(t);if(null!==r){if(13===(t=r.tag)){if(null!==(t=Q(r))){e.blockedOn=t,function(e,t){var r=ee.p;try{return ee.p=e,t()}finally{ee.p=r}}(e.priority,function(){if(13===r.tag){var e=lw(),t=nl(r,e);null!==t&&lS(t,r,e),ua(r,e)}});return}}else if(3===t&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=3===r.tag?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function uE(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var r=up(e.nativeEvent);if(null!==r)return null!==(t=e6(r))&&ul(t),e.blockedOn=r,!1;var n=new(r=e.nativeEvent).constructor(r.type,r);tI=n,r.target.dispatchEvent(n),tI=null,t.shift()}return!0}function uO(e,t,r){uE(e)&&r.delete(t)}function uM(){ub=!1,null!==uv&&uE(uv)&&(uv=null),null!==uy&&uE(uy)&&(uy=null),null!==uw&&uE(uw)&&(uw=null),u_.forEach(uO),uS.forEach(uO)}function uI(e,t){e.blockedOn===t&&(e.blockedOn=null,ub||(ub=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,uM)))}var uA=null;function uN(e){uA!==e&&(uA=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){uA===e&&(uA=null);for(var t=0;t<e.length;t+=3){var r=e[t],n=e[t+1],o=e[t+2];if("function"!=typeof n)if(null===um(n||r))continue;else break;var i=e6(r);null!==i&&(e.splice(t,3),t-=3,iP(i,{pending:!0,data:o,method:r.method,action:n},n,o))}}))}function uD(e){function t(t){return uI(t,e)}null!==uv&&uI(uv,e),null!==uy&&uI(uy,e),null!==uw&&uI(uw,e),u_.forEach(t),uS.forEach(t);for(var r=0;r<uC.length;r++){var n=uC[r];n.blockedOn===e&&(n.blockedOn=null)}for(;0<uC.length&&null===(r=uC[0]).blockedOn;)uT(r),null===r.blockedOn&&uC.shift();if(null!=(r=(e.ownerDocument||e).$$reactFormReplay))for(n=0;n<r.length;n+=3){var o=r[n],i=r[n+1],c=o[eK]||null;if("function"==typeof i)c||uN(r);else if(c){var u=null;if(i&&i.hasAttribute("formAction")){if(o=i,c=i[eK]||null)u=c.formAction;else if(null!==um(o))continue}else u=c.action;"function"==typeof u?r[n+1]=u:(r.splice(n,3),n-=3),uN(r)}}}function uz(e){this._internalRoot=e}function u$(e){this._internalRoot=e}u$.prototype.render=uz.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(h(409));ui(t.current,lw(),e,t,null,null)},u$.prototype.unmount=uz.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;0===e.tag&&lF(),ui(e.current,2,null,e,null,null),lT(),t[eQ]=null}},u$.prototype.unstable_scheduleHydration=function(e){if(e){var t=eV();e={blockedOn:null,target:e,priority:t};for(var r=0;r<uC.length&&0!==t&&t<uC[r].priority;r++);uC.splice(r,0,e),0===r&&uT(e)}};var uP=c.version;if("19.0.0"!==uP)throw Error(h(527,uP,"19.0.0"));if(ee.findDOMNode=function(e){var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(h(188));throw Error(h(268,e=Object.keys(e).join(",")))}return e=null===(e=null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=K(e)))throw Error(h(188));return t!==e?null:e}for(var r=e,n=t;;){var o=r.return;if(null===o)break;var i=o.alternate;if(null===i){if(null!==(n=o.return)){r=n;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===r)return X(o),e;if(i===n)return X(o),t;i=i.sibling}throw Error(h(188))}if(r.return!==n.return)r=o,n=i;else{for(var c=!1,u=o.child;u;){if(u===r){c=!0,r=o,n=i;break}if(u===n){c=!0,n=o,r=i;break}u=u.sibling}if(!c){for(u=i.child;u;){if(u===r){c=!0,r=i,n=o;break}if(u===n){c=!0,n=i,r=o;break}u=u.sibling}if(!c)throw Error(h(189))}}if(r.alternate!==n)throw Error(h(190))}if(3!==r.tag)throw Error(h(188));return r.stateNode.current===r?e:t}(t))?function e(t){var r=t.tag;if(5===r||26===r||27===r||6===r)return t;for(t=t.child;null!==t;){if(null!==(r=e(t)))return r;t=t.sibling}return null}(e):null)?null:e.stateNode},"undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var uL=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uL.isDisabled&&uL.supportsFiber)try{eO=uL.inject({bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:B,findFiberByHostInstance:e3,reconcilerVersion:"19.0.0"}),eM=uL}catch{}}t.createRoot=function(e,t){if(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)throw Error(h(299));var r,n,o,i=!1,c="",u=i9,d=i7,p=st,m=null;return null!=t&&(!0===t.unstable_strictMode&&(i=!0),void 0!==t.identifierPrefix&&(c=t.identifierPrefix),void 0!==t.onUncaughtError&&(u=t.onUncaughtError),void 0!==t.onCaughtError&&(d=t.onCaughtError),void 0!==t.onRecoverableError&&(p=t.onRecoverableError),void 0!==t.unstable_transitionCallbacks&&t.unstable_transitionCallbacks),r=e,n=1,o=i,r=new uo(r,n,!1,c,u,d,p,null),n=1,!0===o&&(n|=24),o=aP(3,null,null,n),r.current=o,o.stateNode=r,n=ov(),n.refCount++,r.pooledCache=n,n.refCount++,o.memoizedState={element:null,isDehydrated:!1,cache:n},sq(o),t=r,e[eQ]=t.current,cc(8===e.nodeType?e.parentNode:e),new uz(t)}},284:(e,t)=>{var r=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),b=Symbol.iterator,v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,_={};function S(e,t,r){this.props=e,this.context=t,this.refs=_,this.updater=r||v}function C(){}function x(e,t,r){this.props=e,this.context=t,this.refs=_,this.updater=r||v}S.prototype.isReactComponent={},S.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},S.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},C.prototype=S.prototype;var T=x.prototype=new C;T.constructor=x,w(T,S.prototype),T.isPureReactComponent=!0;var E=Array.isArray,O={H:null,A:null,T:null,S:null},A=Object.prototype.hasOwnProperty;function D(e,t,n,o,i,c){return{$$typeof:r,type:e,key:t,ref:void 0!==(n=c.ref)?n:null,props:c}}function $(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var P=/\/+/g;function G(e,t){var r,n;return"object"==typeof e&&null!==e&&null!=e.key?(r=""+e.key,n={"=":"=0",":":"=2"},"$"+r.replace(/[=:]/g,function(e){return n[e]})):t.toString(36)}function W(){}function F(e,t,o){if(null==e)return e;var i=[],c=0;return!function e(t,o,i,c,u){var h,d,p,m=typeof t;("undefined"===m||"boolean"===m)&&(t=null);var v=!1;if(null===t)v=!0;else switch(m){case"bigint":case"string":case"number":v=!0;break;case"object":switch(t.$$typeof){case r:case n:v=!0;break;case g:return e((v=t._init)(t._payload),o,i,c,u)}}if(v)return u=u(t),v=""===c?"."+G(t,0):c,E(u)?(i="",null!=v&&(i=v.replace(P,"$&/")+"/"),e(u,o,i,"",function(e){return e})):null!=u&&($(u)&&(h=u,d=i+(null==u.key||t&&t.key===u.key?"":(""+u.key).replace(P,"$&/")+"/")+v,u=D(h.type,d,void 0,void 0,void 0,h.props)),o.push(u)),1;v=0;var w=""===c?".":c+":";if(E(t))for(var _=0;_<t.length;_++)m=w+G(c=t[_],_),v+=e(c,o,i,m,u);else if("function"==typeof(_=null===(p=t)||"object"!=typeof p?null:"function"==typeof(p=b&&p[b]||p["@@iterator"])?p:null))for(t=_.call(t),_=0;!(c=t.next()).done;)m=w+G(c=c.value,_++),v+=e(c,o,i,m,u);else if("object"===m){if("function"==typeof t.then)return e(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"==typeof e.status?e.then(W,W):(e.status="pending",e.then(function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)},function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(t),o,i,c,u);throw Error("Objects are not valid as a React child (found: "+("[object Object]"===(o=String(t))?"object with keys {"+Object.keys(t).join(", ")+"}":o)+"). If you meant to render a collection of children, use an array instead.")}return v}(e,i,"","",function(e){return t.call(o,e,c++)}),i}function B(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){(0===e._status||-1===e._status)&&(e._status=1,e._result=t)},function(t){(0===e._status||-1===e._status)&&(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var U="function"==typeof reportError?reportError:function(e){if("object"==typeof window&&"function"==typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"==typeof e&&null!==e&&"string"==typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"==typeof process&&"function"==typeof process.emit)return void process.emit("uncaughtException",e)};function j(){}t.Children={map:F,forEach:function(e,t,r){F(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return F(e,function(){t++}),t},toArray:function(e){return F(e,function(e){return e})||[]},only:function(e){if(!$(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=S,t.Fragment=o,t.Profiler=c,t.PureComponent=x,t.StrictMode=i,t.Suspense=p,t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,t.act=function(){throw Error("act(...) is not supported in production builds of React.")},t.cache=function(e){return function(){return e.apply(null,arguments)}},t.cloneElement=function(e,t,r){if(null==e)throw Error("The argument must be a React element, but you passed "+e+".");var n=w({},e.props),o=e.key,i=void 0;if(null!=t)for(c in void 0!==t.ref&&(i=void 0),void 0!==t.key&&(o=""+t.key),t)A.call(t,c)&&"key"!==c&&"__self"!==c&&"__source"!==c&&("ref"!==c||void 0!==t.ref)&&(n[c]=t[c]);var c=arguments.length-2;if(1===c)n.children=r;else if(1<c){for(var u=Array(c),h=0;h<c;h++)u[h]=arguments[h+2];n.children=u}return D(e.type,o,void 0,void 0,i,n)},t.createContext=function(e){return(e={$$typeof:h,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:u,_context:e},e},t.createElement=function(e,t,r){var n,o={},i=null;if(null!=t)for(n in void 0!==t.key&&(i=""+t.key),t)A.call(t,n)&&"key"!==n&&"__self"!==n&&"__source"!==n&&(o[n]=t[n]);var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){for(var u=Array(c),h=0;h<c;h++)u[h]=arguments[h+2];o.children=u}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===o[n]&&(o[n]=c[n]);return D(e,i,void 0,void 0,null,o)},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:d,render:e}},t.isValidElement=$,t.lazy=function(e){return{$$typeof:g,_payload:{_status:-1,_result:e},_init:B}},t.memo=function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=O.T,r={};O.T=r;try{var n=e(),o=O.S;null!==o&&o(r,n),"object"==typeof n&&null!==n&&"function"==typeof n.then&&n.then(j,U)}catch(e){U(e)}finally{O.T=t}},t.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},t.use=function(e){return O.H.use(e)},t.useActionState=function(e,t,r){return O.H.useActionState(e,t,r)},t.useCallback=function(e,t){return O.H.useCallback(e,t)},t.useContext=function(e){return O.H.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e,t){return O.H.useDeferredValue(e,t)},t.useEffect=function(e,t){return O.H.useEffect(e,t)},t.useId=function(){return O.H.useId()},t.useImperativeHandle=function(e,t,r){return O.H.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return O.H.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return O.H.useLayoutEffect(e,t)},t.useMemo=function(e,t){return O.H.useMemo(e,t)},t.useOptimistic=function(e,t){return O.H.useOptimistic(e,t)},t.useReducer=function(e,t,r){return O.H.useReducer(e,t,r)},t.useRef=function(e){return O.H.useRef(e)},t.useState=function(e){return O.H.useState(e)},t.useSyncExternalStore=function(e,t,r){return O.H.useSyncExternalStore(e,t,r)},t.useTransition=function(){return O.H.useTransition()},t.version="19.0.0"},527:(e,t,r)=>{var n={396:e=>{e.exports=function(e,t){return Array.prototype.slice.call(e,t)}},182:(e,t,r)=>{var n=r(394);e.exports=function(e,t,r){e&&n(function(){e.apply(r||null,t||[])})}},130:(e,t,r)=>{var n=r(396),o=r(182);e.exports=function(e,t){var r=t||{},i={};return void 0===e&&(e={}),e.on=function(t,r){return i[t]?i[t].push(r):i[t]=[r],e},e.once=function(t,r){return r._once=!0,e.on(t,r),e},e.off=function(t,r){var n=arguments.length;if(1===n)delete i[t];else if(0===n)i={};else{var o=i[t];if(!o)return e;o.splice(o.indexOf(r),1)}return e},e.emit=function(){var t=n(arguments);return e.emitterSnapshot(t.shift()).apply(this,t)},e.emitterSnapshot=function(t){var c=(i[t]||[]).slice(0);return function(){var i=n(arguments),u=this||e;if("error"===t&&!1!==r.throws&&!c.length)throw 1===i.length?i[0]:i;return c.forEach(function(n){r.async?o(n,i,u):n.apply(u,i),n._once&&e.off(t,n)}),e}},e}},46:(e,t,r)=>{var n=r(47),o=r(371),i=r.g.document,c=function(e,t,r,n){return e.addEventListener(t,r,n)},u=function(e,t,r,n){return e.removeEventListener(t,r,n)},h=[];function d(e,t,r){var n=function(e,t,r){var n,o;for(n=0;n<h.length;n++)if((o=h[n]).element===e&&o.type===t&&o.fn===r)return n}(e,t,r);if(n){var o=h[n].wrapper;return h.splice(n,1),o}}r.g.addEventListener||(c=function(e,t,n){var o;return e.attachEvent("on"+t,(o=d(e,t,n)||function(t){var o=t||r.g.event;o.target=o.target||o.srcElement,o.preventDefault=o.preventDefault||function(){o.returnValue=!1},o.stopPropagation=o.stopPropagation||function(){o.cancelBubble=!0},o.which=o.which||o.keyCode,n.call(e,o)},h.push({wrapper:o,element:e,type:t,fn:n}),o))},u=function(e,t,r){var n=d(e,t,r);if(n)return e.detachEvent("on"+t,n)}),e.exports={add:c,remove:u,fabricate:function(e,t,r){var c,u=-1===o.indexOf(t)?new n(t,{detail:r}):(i.createEvent?(c=i.createEvent("Event")).initEvent(t,!0,!0):i.createEventObject&&(c=i.createEventObject()),c);e.dispatchEvent?e.dispatchEvent(u):e.fireEvent("on"+t,u)}}},371:(e,t,r)=>{var n=[],o="",i=/^on/;for(o in r.g)i.test(o)&&n.push(o.slice(2));e.exports=n},47:(e,t,r)=>{var n=r.g.CustomEvent;e.exports=!function(){try{var e=new n("cat",{detail:{foo:"bar"}});return"cat"===e.type&&"bar"===e.detail.foo}catch{}return!1}()?"function"==typeof document.createEvent?function(e,t){var r=document.createEvent("CustomEvent");return t?r.initCustomEvent(e,t.bubbles,t.cancelable,t.detail):r.initCustomEvent(e,!1,!1,void 0),r}:function(e,t){var r=document.createEventObject();return r.type=e,t?(r.bubbles=!!t.bubbles,r.cancelable=!!t.cancelable,r.detail=t.detail):(r.bubbles=!1,r.cancelable=!1,r.detail=void 0),r}:n},541:e=>{var t={};function r(e){var r=t[e];return r?r.lastIndex=0:t[e]=r=RegExp("(?:^|\\s)"+e+"(?:\\s|$)","g"),r}e.exports={add:function(e,t){var n=e.className;n.length?r(t).test(n)||(e.className+=" "+t):e.className=t},rm:function(e,t){e.className=e.className.replace(r(t)," ").trim()}}},427:(e,t,r)=>{var n=r(130),o=r(46),i=r(541),c=document,u=c.documentElement;function h(e,t,n,i){r.g.navigator.pointerEnabled?o[t](e,{mouseup:"pointerup",mousedown:"pointerdown",mousemove:"pointermove"}[n],i):r.g.navigator.msPointerEnabled?o[t](e,{mouseup:"MSPointerUp",mousedown:"MSPointerDown",mousemove:"MSPointerMove"}[n],i):(o[t](e,{mouseup:"touchend",mousedown:"touchstart",mousemove:"touchmove"}[n],i),o[t](e,n,i))}function d(e){if(void 0!==e.touches)return e.touches.length;if(void 0!==e.which&&0!==e.which)return e.which;if(void 0!==e.buttons)return e.buttons;var t=e.button;if(void 0!==t)return 1&t?1:2&t?3:4&t?2:0}function p(e,t){return void 0!==r.g[t]?r.g[t]:u.clientHeight?u[e]:c.body[e]}function m(e,t,r){var n,o=e||{},i=o.className;return o.className+=" gu-hide",n=c.elementFromPoint(t,r),o.className=i,n}function g(){return!1}function b(){return!0}function v(e){return e.width||e.right-e.left}function w(e){return e.height||e.bottom-e.top}function _(e){return e.parentNode===c?null:e.parentNode}function S(e){return"INPUT"===e.tagName||"TEXTAREA"===e.tagName||"SELECT"===e.tagName||function e(t){return!!t&&"false"!==t.contentEditable&&("true"===t.contentEditable||e(_(t)))}(e)}function C(e){return e.nextElementSibling||function(){var t=e;do t=t.nextSibling;while(t&&1!==t.nodeType)return t}()}function x(e,t){var r=t.targetTouches&&t.targetTouches.length?t.targetTouches[0]:t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t,n={pageX:"clientX",pageY:"clientY"};return e in n&&!(e in r)&&n[e]in r&&(e=n[e]),r[e]}e.exports=function(e,t){var r,T,E,O,A,D,$,P,G,W,F,B,U=arguments.length;1===U&&!1===Array.isArray(e)&&(t=e,e=[]);var j=null,Z=t||{};void 0===Z.moves&&(Z.moves=b),void 0===Z.accepts&&(Z.accepts=b),void 0===Z.invalid&&(Z.invalid=function(){return!1}),void 0===Z.containers&&(Z.containers=e||[]),void 0===Z.isContainer&&(Z.isContainer=g),void 0===Z.copy&&(Z.copy=!1),void 0===Z.copySortSource&&(Z.copySortSource=!1),void 0===Z.revertOnSpill&&(Z.revertOnSpill=!1),void 0===Z.removeOnSpill&&(Z.removeOnSpill=!1),void 0===Z.direction&&(Z.direction="vertical"),void 0===Z.ignoreInputTextSelection&&(Z.ignoreInputTextSelection=!0),void 0===Z.mirrorContainer&&(Z.mirrorContainer=c.body);var V=n({containers:Z.containers,start:function(e){var t=er(e);t&&en(t)},end:eo,cancel:ec,remove:el,destroy:function(){K(!0),es({})},canMove:function(e){return!!er(e)},dragging:!1});return!0===Z.removeOnSpill&&V.on("over",function(e){i.rm(e,"gu-hide")}).on("out",function(e){V.dragging&&i.add(e,"gu-hide")}),K(),V;function q(e){return -1!==V.containers.indexOf(e)||Z.isContainer(e)}function K(e){var t=e?"remove":"add";h(u,t,"mousedown",ee),h(u,t,"mouseup",es)}function Q(e){h(u,e?"remove":"add","mousemove",et)}function X(e){var t=e?"remove":"add";o[t](u,"selectstart",J),o[t](u,"click",J)}function J(e){B&&e.preventDefault()}function ee(e){if(D=e.clientX,$=e.clientY,1===d(e)&&!e.metaKey&&!e.ctrlKey){var t=e.target,r=er(t);r&&(B=r,Q(),"mousedown"===e.type&&(S(t)?t.focus():e.preventDefault()))}}function et(e){if(B){if(0===d(e))return void es({});if(void 0===e.clientX||e.clientX!==D||void 0===e.clientY||e.clientY!==$){if(Z.ignoreInputTextSelection){var t,n=x("clientX",e),o=x("clientY",e);if(S(c.elementFromPoint(n,o)))return}var m=B;Q(!0),X(),eo(),en(m);var g={left:(t=E.getBoundingClientRect()).left+p("scrollLeft","pageXOffset"),top:t.top+p("scrollTop","pageYOffset")};O=x("pageX",e)-g.left,A=x("pageY",e)-g.top,i.add(W||E,"gu-transit"),function(){if(!r){var e=E.getBoundingClientRect();(r=E.cloneNode(!0)).style.width=v(e)+"px",r.style.height=w(e)+"px",i.rm(r,"gu-transit"),i.add(r,"gu-mirror"),Z.mirrorContainer.appendChild(r),h(u,"add","mousemove",ep),i.add(Z.mirrorContainer,"gu-unselectable"),V.emit("cloned",r,E,"mirror")}}(),ep(e)}}}function er(e){if(!(V.dragging&&r||q(e))){for(var t=e;_(e)&&!1===q(_(e));)if(Z.invalid(e,t)||!(e=_(e)))return;var n=_(e);if(!(!n||Z.invalid(e,t))&&Z.moves(e,n,t,C(e)))return{item:e,source:n}}}function en(e){var t,r;t=e.item,r=e.source,("boolean"==typeof Z.copy?Z.copy:Z.copy(t,r))&&(W=e.item.cloneNode(!0),V.emit("cloned",W,e.item,"copy")),T=e.source,E=e.item,P=G=C(e.item),V.dragging=!0,V.emit("drag",E,T)}function eo(){if(V.dragging){var e=W||E;ea(e,_(e))}}function ei(){B=!1,Q(!0),X(!0)}function es(e){if(ei(),V.dragging){var t=W||E,n=x("clientX",e),o=x("clientY",e),i=ed(m(r,n,o),n,o);i&&(W&&Z.copySortSource||!W||i!==T)?ea(t,i):Z.removeOnSpill?el():ec()}}function ea(e,t){var r=_(e);W&&Z.copySortSource&&t===T&&r.removeChild(E),eh(t)?V.emit("cancel",e,T,T):V.emit("drop",e,t,T,G),eu()}function el(){if(V.dragging){var e=W||E,t=_(e);t&&t.removeChild(e),V.emit(W?"cancel":"remove",e,t,T),eu()}}function ec(e){if(V.dragging){var t=arguments.length>0?e:Z.revertOnSpill,r=W||E,n=_(r),o=eh(n);!1===o&&t&&(W?n&&n.removeChild(W):T.insertBefore(r,P)),o||t?V.emit("cancel",r,T,T):V.emit("drop",r,n,T,G),eu()}}function eu(){var e=W||E;ei(),r&&(i.rm(Z.mirrorContainer,"gu-unselectable"),h(u,"remove","mousemove",ep),_(r).removeChild(r),r=null),e&&i.rm(e,"gu-transit"),F&&clearTimeout(F),V.dragging=!1,j&&V.emit("out",e,j,T),V.emit("dragend",e),T=E=W=P=G=F=j=null}function eh(e,t){var n;return n=void 0!==t?t:r?G:C(W||E),e===T&&n===P}function ed(e,t,r){for(var n=e;n&&!function(){if(!1===q(n))return!1;var o=ef(n,e),i=em(n,o,t,r);return!!eh(n,i)||Z.accepts(E,n,T,i)}();)n=_(n);return n}function ep(e){if(r){e.preventDefault();var t,n=x("clientX",e),o=x("clientY",e),i=n-O,c=o-A;r.style.left=i+"px",r.style.top=c+"px";var u=W||E,h=m(r,n,o),d=ed(h,n,o),p=null!==d&&d!==j;(p||null===d)&&(j&&v("out"),j=d,p&&v("over"));var g=_(u);if(d===T&&W&&!Z.copySortSource){g&&g.removeChild(u);return}var b=ef(d,h);if(null!==b)t=em(d,b,n,o);else if(!0!==Z.revertOnSpill||W){W&&g&&g.removeChild(u);return}else t=P,d=T;(null===t&&p||t!==u&&t!==C(u))&&(G=t,d.insertBefore(u,t),V.emit("shadow",u,d,T))}function v(e){V.emit(e,u,j,T)}}function ef(e,t){for(var r=t;r!==e&&_(r)!==e;)r=_(r);return r===u?null:r}function em(e,t,r,n){var o,i="horizontal"===Z.direction;return t!==e?(o=t.getBoundingClientRect(),i?r>o.left+v(o)/2?C(t):t:n>o.top+w(o)/2?C(t):t):function(){var t,o,c,u=e.children.length;for(t=0;t<u;t++)if(c=(o=e.children[t]).getBoundingClientRect(),i&&c.left+c.width/2>r||!i&&c.top+c.height/2>n)return o;return null}()}}},280:(e,t,r)=>{r.d(t,{A:()=>g});var n=r(942),o=r.n(n),i=r(15),c=r.n(i);let l=class l{name;notify;constructor(e,t){this.name=e,this.notify=t}};let a=class a{observer;unsubscribeCallback;constructor(e,t){this.observer=e,this.unsubscribeCallback=t}unsubscribe(){this.unsubscribeCallback(this.observer)}};let u=new class{observers;constructor(){this.observers=new Set}broadcast(e){this.observers&&this.observers.forEach(t=>{e.name===t.name&&t.notify(e)})}subscribe(e,t){let r=new l(e,t);return this.observers.add(r),new a(r,e=>{this.observers.delete(e)})}unsubscribe(e){e&&e.unsubscribe()}},h="ON_DRAG_START",d="ON_DRAG_END",p=null,m=new Map;let f=class f extends c().Component{dndComponentRef=c().createRef();mounted=!1;onDragStartSubscription;onDragEndSubscription;constructor(e){super(e),this.onDragStartSubscription=u.subscribe(h,e=>{let t=null!==e.content&&m.get(e.content);this.setState({isDroppable:this.canDrop(void 0,t,this.props.dndData)})}),this.onDragEndSubscription=u.subscribe(d,()=>{this.mounted&&this.setState({isDroppable:!1})}),this.state={isDragging:!1,isDroppable:!1,isOver:!1}}componentDidMount(){if(this.mounted=!0,null!==p){let e=m.get(p);this.setState({isDroppable:this.canDrop(void 0,e,this.props.dndData)})}}componentWillUnmount(){this.mounted=!1,this.onDragStartSubscription.unsubscribe(),this.onDragEndSubscription.unsubscribe()}canDrop(e,t,r){let{canDrop:n}=this.props;return n&&("boolean"==typeof n||n(e,t,r))}addDragEndEventListenerOnce(){let e=this.dndComponentRef?.current;e&&(e.removeEventListener("dragend",this.onDragEnd),e.addEventListener("dragend",this.onDragEnd,{once:!0}))}isDraggable(){let{canDrag:e,dndData:t}=this.props;return!!e&&("boolean"==typeof e||e(t))}onDragEnter(e){if(e.stopPropagation(),this.setState({isOver:!0}),this.props.onDragEnter){let t=m.get(p);this.props.onDragEnter(e,t,this.props.dndData)}}onDragLeave(e){e.stopPropagation();let t=m.get(p);this.props.onDragLeave&&this.props.onDragLeave(e,t,this.props.dndData),this.setState({isDroppable:this.canDrop(void 0,t,this.props.dndData),isOver:!1})}onDrag(e){e.stopPropagation()}onDragOver(e){e.stopPropagation();let t=m.get(p);this.canDrop(e,t,this.props.dndData)&&(e.preventDefault(),this.setState({isOver:!0}))}onDragStart(e){e.stopPropagation();let{dndData:t,dndId:r,onBeginDrag:n}=this.props;p=r,m.set(p,t),this.addDragEndEventListenerOnce(),u.broadcast({name:h,content:p}),n&&n(e,t),this.setState({isDragging:!0})}onDragEnd=e=>{e.stopPropagation();let{dndData:t,onEndDrag:r}=this.props;r&&r(e,m.get(p),t),u.broadcast({name:d,content:p}),m.delete(p),p=null,this.mounted&&this.setState({isDragging:!1})};onDrop(e){e.stopPropagation();let{dndData:t,onDrop:r}=this.props;r&&(r(e,m.get(p),t),this.setState({isOver:!1}))}cloneChildrenWithShallowMergedProps(e,t){if(e)return c().Children.map(e,e=>c().isValidElement(e)?c().cloneElement(e,t):e)}render(){let{children:e,className:t,forwardDndPropsToChildren:r,style:n}=this.props,{isDragging:i,isDroppable:u,isOver:h}=this.state,d=this.isDraggable(),p=o()("dnd-component",t,{draggable:d,dragging:i,droppable:u,hovering:h});return c().createElement("div",{className:p,draggable:d,onDrag:e=>this.onDrag(e),onDragEnter:e=>this.onDragEnter(e),onDragLeave:e=>this.onDragLeave(e),onDragOver:e=>this.onDragOver(e),onDragStart:e=>this.onDragStart(e),onDrop:e=>this.onDrop(e),ref:this.dndComponentRef,style:n},r?this.cloneChildrenWithShallowMergedProps(e,{isDraggable:d,isDragging:i,isDroppable:u,isOver:h}):e)}};var g=f},797:(e,t,n)=>{let o;n.d(t,{A:()=>sv});var i,c,u,h,d,p,m,g,b,v,w,_,S,C,x,T,E,O,A,D,$,P,G,W,F=n(942),B=n.n(F),U=n(15),j=n.n(U),Z=((i=Z||{})[i.Hash=35]="Hash",i[i.Slash=47]="Slash",i[i.Digit0=48]="Digit0",i[i.Digit1=49]="Digit1",i[i.Digit2=50]="Digit2",i[i.Digit3=51]="Digit3",i[i.Digit4=52]="Digit4",i[i.Digit5=53]="Digit5",i[i.Digit6=54]="Digit6",i[i.Digit7=55]="Digit7",i[i.Digit8=56]="Digit8",i[i.Digit9=57]="Digit9",i[i.Backslash=92]="Backslash",i[i.A=65]="A",i[i.B=66]="B",i[i.C=67]="C",i[i.D=68]="D",i[i.E=69]="E",i[i.F=70]="F",i[i.Z=90]="Z",i[i.a=97]="a",i[i.b=98]="b",i[i.c=99]="c",i[i.d=100]="d",i[i.e=101]="e",i[i.f=102]="f",i[i.z=122]="z",i);function V(e){switch(e){case 48:break;case 49:return 1;case 50:return 2;case 51:return 3;case 52:return 4;case 53:return 5;case 54:return 6;case 55:return 7;case 56:return 8;case 57:return 9;case 97:case 65:return 10;case 98:case 66:return 11;case 99:case 67:return 12;case 100:case 68:return 13;case 101:case 69:return 14;case 102:case 70:return 15}return 0}function q(e,t,r){return(r<0&&(r+=1),r>1&&(r-=1),r<1/6)?e+(t-e)*6*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function K(e){let t,r,n,o=e.h/360,{s:i,l:c,a:u}=e;if(0===i)t=r=n=c;else{let e=c<.5?c*(1+i):c+i-c*i,u=2*c-e;t=q(u,e,o+1/3),r=q(u,e,o),n=q(u,e,o-1/3)}return{type:"rgba",r:Math.round(255*t),g:Math.round(255*r),b:Math.round(255*n),a:u}}let Q=/^((?:rgb|hsl)a?)\((-?\d+%?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d.]+%?)?\)$/i;function X(e){let t;if(0===(e=e.trim()).length)return null;if(35===e.charCodeAt(0))return function(e){let t=(e=e.trim()).length;if(0===t||35!==e.charCodeAt(0))return null;if(7===t)return{type:"rgba",r:16*V(e.charCodeAt(1))+V(e.charCodeAt(2)),g:16*V(e.charCodeAt(3))+V(e.charCodeAt(4)),b:16*V(e.charCodeAt(5))+V(e.charCodeAt(6)),a:1};if(9===t)return{type:"rgba",r:16*V(e.charCodeAt(1))+V(e.charCodeAt(2)),g:16*V(e.charCodeAt(3))+V(e.charCodeAt(4)),b:16*V(e.charCodeAt(5))+V(e.charCodeAt(6)),a:(16*V(e.charCodeAt(7))+V(e.charCodeAt(8)))/255};if(4===t){let t=V(e.charCodeAt(1)),r=V(e.charCodeAt(2)),n=V(e.charCodeAt(3));return{type:"rgba",r:16*t+t,g:16*r+r,b:16*n+n,a:1}}if(5===t){let t=V(e.charCodeAt(1)),r=V(e.charCodeAt(2)),n=V(e.charCodeAt(3)),o=V(e.charCodeAt(4));return{type:"rgba",r:16*t+t,g:16*r+r,b:16*n+n,a:(16*o+o)/255}}return null}(e);let r=Q.exec(e);if(null==r)return null;let n=r[1];switch(n){case"rgb":case"hsl":t=[parseInt(r[2],10),parseInt(r[3],10),parseInt(r[4],10),1];break;case"rgba":case"hsla":t=[parseInt(r[2],10),parseInt(r[3],10),parseInt(r[4],10),parseFloat(r[5])];break;default:return null}return"hsl"===n||"hsla"===n?K({h:t[0],s:t[1],l:t[2],a:t[3]}):{type:"rgba",r:t[0],g:t[1],b:t[2],a:t[3]}}let J=e=>{var t;return("hsla"===(t=X(e)).type&&(t=K(t)),(299*t.r+587*t.g+114*t.b)/1e3<128)?"#FFFFFF":"#000000"};var ee=n(298),et=n(214);let er=e=>e!==ee.oB&&e!==ee.t$,en=(e,t=et.wT)=>e?e.substring(0,t):"",eo=/^.*(:?\n){0,2}/m;function ei(e,t=`
`){return e.replace(`
`===t?eo:RegExp(`^.*(:?${t}){0,2}`,"m"),"")}let es=/^co-authored-by:\s*([^\s<>]+(?:\s+[^\s<>]+)*)\s*<([^<>]+)>/gim;function ea(e){let t=[];for(let r=es.exec(e);null!==r;r=es.exec(e)){let[,e,n]=r;t.push({name:e,email:n})}return t}var el=n(522),ec=n(686);let eu=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,eh=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,ed=new Map,ep=["th","st","nd","rd"],ef={};function em(e,t,r,n){let o=`${e}${n?"_compact":""}`,i=ef[e];return i||(i=r+e*t+t/2,ef[o]=i),i}let eg={d:"d",fill:"fill","shape-rendering":"shapeRendering","stroke-linejoin":"strokeLinejoin","stroke-width":"strokeWidth","stroke-dasharray":"strokeDasharray",stroke:"stroke",x1:"x1",x2:"x2",y1:"y1",y2:"y2"};function eb(e,t){let r="";for(let[e,n]of Object.entries(eg)){let o=t[n];o&&(r+=` ${e}="${o}"`)}return`<${e}${r} />`}function ev(e){return eb("line",e)}function ey(e,t,r,n){return{fill:"none",shapeRendering:"auto",strokeLinejoin:"round",strokeWidth:r,strokeDasharray:er(e)?n?1:2:0,stroke:t}}function ew(e,t,r,n){return`${e}_${t}_${r||"+"}${n?"_compact":""}`}function e_(e,t,r){return`${e}_${t||"+"}${r?"_compact":""}`}var eS=n(210),eC=n(66),ex=n(406),ek=n(635),eR=n(852);let eT=e=>({cellCache:t,cellRenderer:r,columnSizeAndPositionManager:n,columnStartIndex:o,columnStopIndex:i,deferredMeasurementCache:c,horizontalOffsetAdjustment:u,isScrolling:h,parent:d,rowSizeAndPositionManager:p,rowStartIndex:m,rowStopIndex:g,styleCache:b,verticalOffsetAdjustment:v,visibleColumnIndices:w,visibleRowIndices:_})=>{let S=[],C=n.areOffsetsAdjusted()||p.areOffsetsAdjusted(),x=!h&&!C;for(let C=m;C<=g;C+=1){let m=p.getSizeAndPositionOfCell(C);for(let p=o;p<=i;p+=1){let o,i,g=n.getSizeAndPositionOfCell(p),T=p>=w.start&&p<=w.stop&&C>=_.start&&C<=_.stop,E=`${C}-${p}`;x&&b[E]?o=b[E]:c&&!c.has(C,p)?o={height:"auto",left:0,position:"absolute",top:0,width:"auto"}:(o={height:m.size,left:g.offset+u,position:"absolute",top:m.offset+v,width:g.size},b[E]=o);let O={columnIndex:p,isScrolling:h,isVisible:T,key:E,parent:d,rowIndex:C,style:o};if(!h||u||v)i=r(O);else{let n=e(C,p);t[E]&&t[E].realKeyForCell===n||(t[E]={realKeyForCell:n,cell:r(O)}),i=t[E].cell}null!=i&&S.push(i)}}return S};var eE=n(666),eO=n(126);let eM={0:1,90:0,180:-1,270:0},eI={0:0,90:1,180:0,270:-1},eA=et.nf-et.Oe,eN=` A ${eA} ${eA} 0 0 0 `;function eD(e,t,r){let n=eM[r],o=eI[r];return{x:e-et.nf*n,xOffset:-(n*et.Oe),y:t+et.nf*o,yOffset:o*et.Oe}}let ez={};var e$=function(e,t,r,n,o,i,c,u){let h=ey(n,e,c,u);return h.d=function(e,t,r,n){let o=`${e}_${t}_${r}_${n}`,i=ez[o];if(i)return i;let c=eD(e,t,n),u=eD(e,t,r);return i=`M ${c.x} ${c.y}${u.xOffset?` H ${c.x+u.xOffset}`:` V ${c.y+u.yOffset}`}${eN}${u.x+c.xOffset} ${u.y+c.yOffset}${c.xOffset?` H ${u.x}`:` V ${u.y}`}`,ez[o]=i,i}(o,i,r,t),eb("path",h)};let eP={},eL={},eH={},eG={};function eW(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}function eF(e){return(eF="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function eB(e){var t=function(e,t){if("object"!=eF(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=eF(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==eF(t)?t:t+""}function eU(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,eB(n.key),n)}}function ej(e,t,r){return t&&eU(e.prototype,t),r&&eU(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function eZ(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function eV(e,t){if(t&&("object"===eF(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return eZ(e)}function eq(e){return(eq=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function eY(e,t){return(eY=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function eK(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&eY(e,t)}function eQ(e,t,r){return(t=eB(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function eX(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function eJ(e){this.setState((function(t){var r=this.constructor.getDerivedStateFromProps(e,t);return null!=r?r:null}).bind(this))}function e0(e,t){try{var r=this.props,n=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(r,n)}finally{this.props=r,this.state=n}}function e1(e){var t=e.prototype;if(!t||!t.isReactComponent)throw Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var r=null,n=null,o=null;if("function"==typeof t.componentWillMount?r="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(r="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?n="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(n="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?o="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(o="UNSAFE_componentWillUpdate"),null!==r||null!==n||null!==o)throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+(e.displayName||e.name)+" uses "+("function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()")+" but also contains the following legacy lifecycles:"+(null!==r?`
  `+r:"")+(null!==n?`
  `+n:"")+(null!==o?`
  `+o:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`);if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=eX,t.componentWillReceiveProps=eJ),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=e0;var i=t.componentDidUpdate;t.componentDidUpdate=function(e,t,r){var n=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:r;i.call(this,e,t,n)}}return e}function e2(){return(e2=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}eX.__suppressDeprecationWarning=!0,eJ.__suppressDeprecationWarning=!0,e0.__suppressDeprecationWarning=!0;let e5=function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,n,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t)if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(n=e(t[r]))&&(o&&(o+=" "),o+=n);else for(r in t)t[r]&&(o&&(o+=" "),o+=r);return o}(e))&&(n&&(n+=" "),n+=t);return n};function e3(e){var t=e.cellCount,r=e.cellSize,n=e.computeMetadataCallback,o=e.computeMetadataCallbackProps,i=e.nextCellsCount,c=e.nextCellSize,u=e.nextScrollToIndex,h=e.scrollToIndex,d=e.updateScrollOffsetForScrollToIndex;(t!==i||("number"==typeof r||"number"==typeof c)&&r!==c)&&(n(o),h>=0&&h===u&&d())}function e6(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var e4=function(){function e(t){var r=t.cellCount,n=t.cellSizeGetter,o=t.estimatedCellSize;eW(this,e),eQ(this,"_cellSizeAndPositionData",{}),eQ(this,"_lastMeasuredIndex",-1),eQ(this,"_lastBatchedIndex",-1),eQ(this,"_cellCount",void 0),eQ(this,"_cellSizeGetter",void 0),eQ(this,"_estimatedCellSize",void 0),this._cellSizeGetter=n,this._cellCount=r,this._estimatedCellSize=o}return ej(e,[{key:"areOffsetsAdjusted",value:function(){return!1}},{key:"configure",value:function(e){var t=e.cellCount,r=e.estimatedCellSize,n=e.cellSizeGetter;this._cellCount=t,this._estimatedCellSize=r,this._cellSizeGetter=n}},{key:"getCellCount",value:function(){return this._cellCount}},{key:"getEstimatedCellSize",value:function(){return this._estimatedCellSize}},{key:"getLastMeasuredIndex",value:function(){return this._lastMeasuredIndex}},{key:"getOffsetAdjustment",value:function(){return 0}},{key:"getSizeAndPositionOfCell",value:function(e){if(e<0||e>=this._cellCount)throw Error("Requested index ".concat(e," is outside of range 0..").concat(this._cellCount));if(e>this._lastMeasuredIndex)for(var t=this.getSizeAndPositionOfLastMeasuredCell(),r=t.offset+t.size,n=this._lastMeasuredIndex+1;n<=e;n++){var o=this._cellSizeGetter({index:n});if(void 0===o||isNaN(o))throw Error("Invalid size returned for cell ".concat(n," of value ").concat(o));null===o?(this._cellSizeAndPositionData[n]={offset:r,size:0},this._lastBatchedIndex=e):(this._cellSizeAndPositionData[n]={offset:r,size:o},r+=o,this._lastMeasuredIndex=e)}return this._cellSizeAndPositionData[e]}},{key:"getSizeAndPositionOfLastMeasuredCell",value:function(){return this._lastMeasuredIndex>=0?this._cellSizeAndPositionData[this._lastMeasuredIndex]:{offset:0,size:0}}},{key:"getTotalSize",value:function(){var e=this.getSizeAndPositionOfLastMeasuredCell();return e.offset+e.size+(this._cellCount-this._lastMeasuredIndex-1)*this._estimatedCellSize}},{key:"getUpdatedOffsetForIndex",value:function(e){var t,r=e.align,n=e.containerSize,o=e.currentOffset,i=e.targetIndex;if(n<=0)return 0;var c=this.getSizeAndPositionOfCell(i),u=c.offset,h=u-n+c.size;switch(void 0===r?"auto":r){case"start":t=u;break;case"end":t=h;break;case"center":t=u-(n-c.size)/2;break;default:t=Math.max(h,Math.min(u,o))}return Math.max(0,Math.min(this.getTotalSize()-n,t))}},{key:"getVisibleCellRange",value:function(e){var t=e.containerSize,r=e.offset;if(0===this.getTotalSize())return{};var n=r+t,o=this._findNearestCell(r),i=this.getSizeAndPositionOfCell(o);r=i.offset+i.size;for(var c=o;r<n&&c<this._cellCount-1;)c++,r+=this.getSizeAndPositionOfCell(c).size;return{start:o,stop:c}}},{key:"resetCell",value:function(e){this._lastMeasuredIndex=Math.min(this._lastMeasuredIndex,e-1)}},{key:"_binarySearch",value:function(e,t,r){for(;t<=e;){var n=t+Math.floor((e-t)/2),o=this.getSizeAndPositionOfCell(n).offset;if(o===r)return n;o<r?t=n+1:o>r&&(e=n-1)}return t>0?t-1:0}},{key:"_exponentialSearch",value:function(e,t){for(var r=1;e<this._cellCount&&this.getSizeAndPositionOfCell(e).offset<t;)e+=r,r*=2;return this._binarySearch(Math.min(e,this._cellCount-1),Math.floor(e/2),t)}},{key:"_findNearestCell",value:function(e){if(isNaN(e))throw Error("Invalid offset ".concat(e," specified"));e=Math.max(0,e);var t=this.getSizeAndPositionOfLastMeasuredCell(),r=Math.max(0,this._lastMeasuredIndex);return t.offset>=e?this._binarySearch(r,0,e):this._exponentialSearch(r,e)}}]),e}(),e8=function(){function e(t){var r=t.maxScrollSize,n=void 0===r?"undefined"!=typeof window&&window.chrome?0xffff8c:15e5:r,o=e6(t,["maxScrollSize"]);eW(this,e),eQ(this,"_cellSizeAndPositionManager",void 0),eQ(this,"_maxScrollSize",void 0),this._cellSizeAndPositionManager=new e4(o),this._maxScrollSize=n}return ej(e,[{key:"areOffsetsAdjusted",value:function(){return this._cellSizeAndPositionManager.getTotalSize()>this._maxScrollSize}},{key:"configure",value:function(e){this._cellSizeAndPositionManager.configure(e)}},{key:"getCellCount",value:function(){return this._cellSizeAndPositionManager.getCellCount()}},{key:"getEstimatedCellSize",value:function(){return this._cellSizeAndPositionManager.getEstimatedCellSize()}},{key:"getLastMeasuredIndex",value:function(){return this._cellSizeAndPositionManager.getLastMeasuredIndex()}},{key:"getOffsetAdjustment",value:function(e){var t=e.containerSize,r=e.offset,n=this._cellSizeAndPositionManager.getTotalSize(),o=this.getTotalSize();return Math.round(this._getOffsetPercentage({containerSize:t,offset:r,totalSize:o})*(o-n))}},{key:"getSizeAndPositionOfCell",value:function(e){return this._cellSizeAndPositionManager.getSizeAndPositionOfCell(e)}},{key:"getSizeAndPositionOfLastMeasuredCell",value:function(){return this._cellSizeAndPositionManager.getSizeAndPositionOfLastMeasuredCell()}},{key:"getTotalSize",value:function(){return Math.min(this._maxScrollSize,this._cellSizeAndPositionManager.getTotalSize())}},{key:"getUpdatedOffsetForIndex",value:function(e){var t=e.align,r=e.containerSize,n=e.currentOffset,o=e.targetIndex;n=this._safeOffsetToOffset({containerSize:r,offset:n});var i=this._cellSizeAndPositionManager.getUpdatedOffsetForIndex({align:void 0===t?"auto":t,containerSize:r,currentOffset:n,targetIndex:o});return this._offsetToSafeOffset({containerSize:r,offset:i})}},{key:"getVisibleCellRange",value:function(e){var t=e.containerSize,r=e.offset;return r=this._safeOffsetToOffset({containerSize:t,offset:r}),this._cellSizeAndPositionManager.getVisibleCellRange({containerSize:t,offset:r})}},{key:"resetCell",value:function(e){this._cellSizeAndPositionManager.resetCell(e)}},{key:"_getOffsetPercentage",value:function(e){var t=e.containerSize,r=e.offset,n=e.totalSize;return n<=t?0:r/(n-t)}},{key:"_offsetToSafeOffset",value:function(e){var t=e.containerSize,r=e.offset,n=this._cellSizeAndPositionManager.getTotalSize(),o=this.getTotalSize();return n===o?r:Math.round(this._getOffsetPercentage({containerSize:t,offset:r,totalSize:n})*(o-t))}},{key:"_safeOffsetToOffset",value:function(e){var t=e.containerSize,r=e.offset,n=this._cellSizeAndPositionManager.getTotalSize(),o=this.getTotalSize();return n===o?r:Math.round(this._getOffsetPercentage({containerSize:t,offset:r,totalSize:o})*(n-t))}}]),e}();function e9(){var e=!(arguments.length>0)||void 0===arguments[0]||arguments[0],t={};return function(r){var n=r.callback,o=r.indices,i=Object.keys(o),c=!e||i.every(function(e){var t=o[e];return Array.isArray(t)?t.length>0:t>=0}),u=i.length!==Object.keys(t).length||i.some(function(e){var r=t[e],n=o[e];return Array.isArray(n)?r.join(",")!==n.join(","):r!==n});t=o,c&&u&&n(o)}}function e7(e){var t=e.cellSize,r=e.cellSizeAndPositionManager,n=e.previousCellsCount,o=e.previousCellSize,i=e.previousScrollToAlignment,c=e.previousScrollToIndex,u=e.previousSize,h=e.scrollOffset,d=e.scrollToAlignment,p=e.scrollToIndex,m=e.size,g=e.sizeJustIncreasedFromZero,b=e.updateScrollIndexCallback,v=r.getCellCount(),w=p>=0&&p<v;w&&(m!==u||g||!o||"number"==typeof t&&t!==o||d!==i||p!==c)?b(p):!w&&v>0&&(m<u||v<n)&&h>r.getTotalSize()-m&&b(v-1)}let te=!!("undefined"!=typeof window&&window.document&&window.document.createElement);function tt(e){if((!b&&0!==b||e)&&te){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),b=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return b}var tr=(v="undefined"!=typeof window?window:"undefined"!=typeof self?self:{}).requestAnimationFrame||v.webkitRequestAnimationFrame||v.mozRequestAnimationFrame||v.oRequestAnimationFrame||v.msRequestAnimationFrame||function(e){return v.setTimeout(e,1e3/60)},tn=v.cancelAnimationFrame||v.webkitCancelAnimationFrame||v.mozCancelAnimationFrame||v.oCancelAnimationFrame||v.msCancelAnimationFrame||function(e){v.clearTimeout(e)},to=function(e){return tn(e.id)},ti=function(e,t){Promise.resolve().then(function(){r=Date.now()});var r,n={id:tr(function o(){Date.now()-r>=t?e.call():n.id=tr(o)})};return n};function ts(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function ta(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ts(r,!0).forEach(function(t){eQ(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ts(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var tl={OBSERVED:"observed",REQUESTED:"requested"},tc=(_=w=function(e){function t(e){var r;return eW(this,t),eQ(eZ(r=eV(this,eq(t).call(this,e))),"_onGridRenderedMemoizer",e9()),eQ(eZ(r),"_onScrollMemoizer",e9(!1)),eQ(eZ(r),"_deferredInvalidateColumnIndex",null),eQ(eZ(r),"_deferredInvalidateRowIndex",null),eQ(eZ(r),"_recomputeScrollLeftFlag",!1),eQ(eZ(r),"_recomputeScrollTopFlag",!1),eQ(eZ(r),"_horizontalScrollBarSize",0),eQ(eZ(r),"_verticalScrollBarSize",0),eQ(eZ(r),"_scrollbarPresenceChanged",!1),eQ(eZ(r),"_scrollingContainer",void 0),eQ(eZ(r),"_childrenToDisplay",void 0),eQ(eZ(r),"_columnStartIndex",void 0),eQ(eZ(r),"_columnStopIndex",void 0),eQ(eZ(r),"_rowStartIndex",void 0),eQ(eZ(r),"_rowStopIndex",void 0),eQ(eZ(r),"_renderedColumnStartIndex",0),eQ(eZ(r),"_renderedColumnStopIndex",0),eQ(eZ(r),"_renderedRowStartIndex",0),eQ(eZ(r),"_renderedRowStopIndex",0),eQ(eZ(r),"_initialScrollTop",void 0),eQ(eZ(r),"_initialScrollLeft",void 0),eQ(eZ(r),"_disablePointerEventsTimeoutId",void 0),eQ(eZ(r),"_styleCache",{}),eQ(eZ(r),"_cellCache",{}),eQ(eZ(r),"_debounceScrollEndedCallback",function(){r._disablePointerEventsTimeoutId=null,r.setState({isScrolling:!1,needToResetStyleCache:!1})}),eQ(eZ(r),"_invokeOnGridRenderedHelper",function(){var e=r.props.onSectionRendered;r._onGridRenderedMemoizer({callback:e,indices:{columnOverscanStartIndex:r._columnStartIndex,columnOverscanStopIndex:r._columnStopIndex,columnStartIndex:r._renderedColumnStartIndex,columnStopIndex:r._renderedColumnStopIndex,rowOverscanStartIndex:r._rowStartIndex,rowOverscanStopIndex:r._rowStopIndex,rowStartIndex:r._renderedRowStartIndex,rowStopIndex:r._renderedRowStopIndex}})}),eQ(eZ(r),"_onWheel",function(e){var t=e.deltaX,n=e.deltaY;r.handleWheelEvent({deltaX:t,deltaY:n})}),eQ(eZ(r),"_setScrollingContainerRef",function(e){e&&(e.removeEventListener("wheel",r.preventDefault),e.addEventListener("wheel",r.preventDefault,{passive:!1})),r._scrollingContainer=e}),eQ(eZ(r),"_onScroll",function(e){e.target===r._scrollingContainer&&r.handleScrollEvent(e.target)}),r.state={instanceProps:{columnSizeAndPositionManager:new e8({cellCount:e.columnCount,cellSizeGetter:function(r){return t._wrapSizeGetter(e.columnWidth)(r)},estimatedCellSize:t._getEstimatedColumnSize(e)}),rowSizeAndPositionManager:new e8({cellCount:e.rowCount,cellSizeGetter:function(r){return t._wrapSizeGetter(e.rowHeight)(r)},estimatedCellSize:t._getEstimatedRowSize(e)}),prevColumnWidth:e.columnWidth,prevRowHeight:e.rowHeight,prevColumnCount:e.columnCount,prevRowCount:e.rowCount,prevIsScrolling:!0===e.isScrolling,prevScrollToColumn:e.scrollToColumn,prevScrollToRow:e.scrollToRow,scrollbarSize:0,scrollbarSizeMeasured:!1},isScrolling:!1,scrollDirectionHorizontal:1,scrollDirectionVertical:1,scrollLeft:0,scrollTop:0,scrollPositionChangeReason:null,needToResetStyleCache:!1},e.scrollToRow>0&&(r._initialScrollTop=r._getCalculatedScrollTop(e,r.state)),e.scrollToColumn>0&&(r._initialScrollLeft=r._getCalculatedScrollLeft(e,r.state)),r}return eK(t,e),ej(t,[{key:"getOffsetForCell",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.alignment,r=void 0===t?this.props.scrollToAlignment:t,n=e.columnIndex,o=void 0===n?this.props.scrollToColumn:n,i=e.rowIndex,c=void 0===i?this.props.scrollToRow:i,u=ta({},this.props,{scrollToAlignment:r,scrollToColumn:o,scrollToRow:c});return{scrollLeft:this._getCalculatedScrollLeft(u),scrollTop:this._getCalculatedScrollTop(u)}}},{key:"getTotalRowsHeight",value:function(){return this.state.instanceProps.rowSizeAndPositionManager.getTotalSize()}},{key:"getTotalColumnsWidth",value:function(){return this.state.instanceProps.columnSizeAndPositionManager.getTotalSize()}},{key:"handleScrollEvent",value:function(e){var t=e.scrollLeft,r=e.scrollTop,n=void 0===r?0:r;if(!(n<0)){this._debounceScrollEnded();var o=this.props,i=o.autoHeight,c=o.autoWidth,u=o.height,h=o.width,d=this.state.instanceProps,p=d.scrollbarSize,m=d.rowSizeAndPositionManager.getTotalSize(),g=d.columnSizeAndPositionManager.getTotalSize(),b=Math.min(Math.max(0,g-h+p),void 0===t?0:t),v=Math.min(Math.max(0,m-u+p),n);if(this.state.scrollLeft!==b||this.state.scrollTop!==v){var w={isScrolling:!0,scrollDirectionHorizontal:b!==this.state.scrollLeft?b>this.state.scrollLeft?1:-1:this.state.scrollDirectionHorizontal,scrollDirectionVertical:v!==this.state.scrollTop?v>this.state.scrollTop?1:-1:this.state.scrollDirectionVertical,scrollPositionChangeReason:tl.OBSERVED};i||(w.scrollTop=v),c||(w.scrollLeft=b),w.needToResetStyleCache=!1,this.setState(w)}this._invokeOnScrollMemoizer({scrollLeft:b,scrollTop:v,totalColumnsWidth:g,totalRowsHeight:m})}}},{key:"preventDefault",value:function(e){e.preventDefault()}},{key:"handleWheelEvent",value:function(e){var t=e.deltaX,r=e.deltaY;this._debounceScrollEnded();var n=this.props,o=n.autoHeight,i=n.autoWidth,c=n.height,u=n.width,h=this.state.instanceProps.scrollbarSize,d=this.state.instanceProps.rowSizeAndPositionManager.getTotalSize(),p=this.state.instanceProps.columnSizeAndPositionManager.getTotalSize(),m=Math.min(Math.max(0,p-u+h),Math.max(0,this._scrollingContainer.scrollLeft+t)),g=Math.min(Math.max(0,d-c+h),Math.max(0,this._scrollingContainer.scrollTop+r));if(this.state.scrollLeft!==m||this.state.scrollTop!==g){var b={isScrolling:!0,scrollDirectionHorizontal:m!==this.state.scrollLeft?m>this.state.scrollLeft?1:-1:this.state.scrollDirectionHorizontal,scrollDirectionVertical:g!==this.state.scrollTop?g>this.state.scrollTop?1:-1:this.state.scrollDirectionVertical,scrollPositionChangeReason:tl.REQUESTED};o||(b.scrollTop=g),i||(b.scrollLeft=m),b.needToResetStyleCache=!1,this.setState(b)}this._invokeOnScrollMemoizer({scrollLeft:m,scrollTop:g,totalColumnsWidth:p,totalRowsHeight:d})}},{key:"invalidateCellSizeAfterRender",value:function(e){var t=e.columnIndex,r=e.rowIndex;this._deferredInvalidateColumnIndex="number"==typeof this._deferredInvalidateColumnIndex?Math.min(this._deferredInvalidateColumnIndex,t):t,this._deferredInvalidateRowIndex="number"==typeof this._deferredInvalidateRowIndex?Math.min(this._deferredInvalidateRowIndex,r):r}},{key:"measureAllCells",value:function(){var e=this.props,t=e.columnCount,r=e.rowCount,n=this.state.instanceProps;n.columnSizeAndPositionManager.getSizeAndPositionOfCell(t-1),n.rowSizeAndPositionManager.getSizeAndPositionOfCell(r-1)}},{key:"recomputeGridSize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.columnIndex,r=void 0===t?0:t,n=e.rowIndex,o=void 0===n?0:n,i=this.props,c=i.scrollToColumn,u=i.scrollToRow,h=this.state.instanceProps;h.columnSizeAndPositionManager.resetCell(r),h.rowSizeAndPositionManager.resetCell(o),this._recomputeScrollLeftFlag=c>=0&&(1===this.state.scrollDirectionHorizontal?r<=c:r>=c),this._recomputeScrollTopFlag=u>=0&&(1===this.state.scrollDirectionVertical?o<=u:o>=u),this._styleCache={},this._cellCache={},this.forceUpdate()}},{key:"scrollToCell",value:function(e){var t=e.columnIndex,r=e.rowIndex,n=this.props,o=n.columnCount,i=n.onScrollToTargetCausedUpdate,c=this.state,u=c.scrollLeft,h=c.scrollTop,d=this.props,p=this.state,m=void 0,g=void 0;if(o>1&&void 0!==t){var b=this._updateScrollLeftForScrollToColumn(ta({},d,{scrollToColumn:t}),p,!0);b&&"number"==typeof b.scrollLeft&&b.scrollLeft>=0&&(m=b.scrollLeft)}if(void 0!==r){var v=this._updateScrollTopForScrollToRow(ta({},d,{scrollToRow:r}),p,!0);v&&"number"==typeof v.scrollTop&&v.scrollTop>=0&&(g=v.scrollTop)}if(i&&("number"==typeof m||"number"==typeof g)){var w="number"!=typeof m?m:u,_="number"!=typeof g?g:h;i({clientHeight:d.height,clientWidth:d.width,scrollHeight:this.getTotalRowsHeight(),scrollLeft:w,scrollTop:_,scrollWidth:this.getTotalColumnsWidth()})}}},{key:"componentDidMount",value:function(){var e=this.props,r=e.getScrollbarSize,n=e.height,o=e.scrollLeft,i=e.scrollToColumn,c=e.scrollTop,u=e.scrollToRow,h=e.width,d=this.state.instanceProps;if(this._initialScrollTop=0,this._initialScrollLeft=0,this._handleInvalidatedGridSize(),d.scrollbarSizeMeasured||this.setState(function(e){var t=ta({},e,{needToResetStyleCache:!1});return t.instanceProps.scrollbarSize=r(),t.instanceProps.scrollbarSizeMeasured=!0,t}),"number"==typeof o&&o>=0||"number"==typeof c&&c>=0){var p=t._getScrollToPositionStateUpdate({prevState:this.state,scrollLeft:o,scrollTop:c});p&&(p.needToResetStyleCache=!1,this.setState(p))}this._scrollingContainer&&(this._scrollingContainer.scrollLeft!==this.state.scrollLeft&&(this._scrollingContainer.scrollLeft=this.state.scrollLeft),this._scrollingContainer.scrollTop!==this.state.scrollTop&&(this._scrollingContainer.scrollTop=this.state.scrollTop));var m=n>0&&h>0;i>=0&&m&&this._updateScrollLeftForScrollToColumn(),u>=0&&m&&this._updateScrollTopForScrollToRow(),this._invokeOnGridRenderedHelper(),this._invokeOnScrollMemoizer({scrollLeft:o||0,scrollTop:c||0,totalColumnsWidth:d.columnSizeAndPositionManager.getTotalSize(),totalRowsHeight:d.rowSizeAndPositionManager.getTotalSize()}),this._maybeCallOnScrollbarPresenceChange()}},{key:"componentDidUpdate",value:function(e,t){var r=this,n=this.props,o=n.autoHeight,i=n.autoWidth,c=n.columnCount,u=n.height,h=n.rowCount,d=n.scrollToAlignment,p=n.scrollToColumn,m=n.scrollToRow,g=n.width,b=this.state,v=b.scrollLeft,w=b.scrollPositionChangeReason,_=b.scrollTop,S=b.instanceProps;this._handleInvalidatedGridSize();var C=c>0&&0===e.columnCount||h>0&&0===e.rowCount;w===tl.REQUESTED&&(!i&&v>=0&&(v!==this._scrollingContainer.scrollLeft||C)&&(this._scrollingContainer.scrollLeft=v),!o&&_>=0&&(_!==this._scrollingContainer.scrollTop||C)&&(this._scrollingContainer.scrollTop=_));var x=(0===e.width||0===e.height)&&u>0&&g>0;if(this._recomputeScrollLeftFlag?(this._recomputeScrollLeftFlag=!1,this._updateScrollLeftForScrollToColumn(this.props)):e7({cellSizeAndPositionManager:S.columnSizeAndPositionManager,previousCellsCount:e.columnCount,previousCellSize:e.columnWidth,previousScrollToAlignment:e.scrollToAlignment,previousScrollToIndex:e.scrollToColumn,previousSize:e.width,scrollOffset:v,scrollToAlignment:d,scrollToIndex:p,size:g,sizeJustIncreasedFromZero:x,updateScrollIndexCallback:function(){return r._updateScrollLeftForScrollToColumn(r.props)}}),this._recomputeScrollTopFlag?(this._recomputeScrollTopFlag=!1,this._updateScrollTopForScrollToRow(this.props)):e7({cellSizeAndPositionManager:S.rowSizeAndPositionManager,previousCellsCount:e.rowCount,previousCellSize:e.rowHeight,previousScrollToAlignment:e.scrollToAlignment,previousScrollToIndex:e.scrollToRow,previousSize:e.height,scrollOffset:_,scrollToAlignment:d,scrollToIndex:m,size:u,sizeJustIncreasedFromZero:x,updateScrollIndexCallback:function(){return r._updateScrollTopForScrollToRow(r.props)}}),this._invokeOnGridRenderedHelper(),v!==t.scrollLeft||_!==t.scrollTop){var T=S.rowSizeAndPositionManager.getTotalSize(),E=S.columnSizeAndPositionManager.getTotalSize();this._invokeOnScrollMemoizer({scrollLeft:v,scrollTop:_,totalColumnsWidth:E,totalRowsHeight:T})}this._maybeCallOnScrollbarPresenceChange()}},{key:"componentWillUnmount",value:function(){this._scrollingContainer&&this._scrollingContainer.removeEventListener("wheel",this.preventDefault),this._disablePointerEventsTimeoutId&&to(this._disablePointerEventsTimeoutId)}},{key:"render",value:function(){var e=this.props,t=e.autoContainerWidth,r=e.autoHeight,n=e.autoWidth,o=e.className,i=e.containerProps,c=e.containerRole,u=e.containerStyle,h=e.height,d=e.id,p=e.noContentRenderer,m=e.role,g=e.style,b=e.tabIndex,v=e.width,w=this.state,_=w.instanceProps,S=w.needToResetStyleCache,C=this._isScrolling(),x={boxSizing:"border-box",direction:"ltr",height:r?"auto":h,position:"relative",width:n?"auto":v,WebkitOverflowScrolling:"touch",willChange:"transform"};S&&(this._styleCache={}),this.state.isScrolling||this._resetStyleCache(),this._calculateChildrenToRender(this.props,this.state);var T=_.columnSizeAndPositionManager.getTotalSize(),E=_.rowSizeAndPositionManager.getTotalSize(),O=E>h?_.scrollbarSize:0,A=T>v?_.scrollbarSize:0;(A!==this._horizontalScrollBarSize||O!==this._verticalScrollBarSize)&&(this._horizontalScrollBarSize=A,this._verticalScrollBarSize=O,this._scrollbarPresenceChanged=!0),x.overflowX=T+O<=v?"hidden":"auto",x.overflowY=E+A<=h?"hidden":"auto";var D=this._childrenToDisplay,$=0===D.length&&h>0&&v>0;return U.createElement("div",e2({ref:this._setScrollingContainerRef},i,{"aria-label":this.props["aria-label"],"aria-readonly":this.props["aria-readonly"],className:e5("ReactVirtualized__Grid",o),id:d,onScroll:this._onScroll,onWheel:this._onWheel,role:m,style:ta({},x,{},g),tabIndex:b}),D.length>0&&U.createElement("div",{className:"ReactVirtualized__Grid__innerScrollContainer",role:c,style:ta({width:t?"auto":T,height:E,maxWidth:T,maxHeight:E,overflow:"hidden",pointerEvents:C?"none":"",position:"relative"},u)},D),$&&p())}},{key:"_calculateChildrenToRender",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state,r=e.cellRenderer,n=e.cellRangeRenderer,o=e.columnCount,i=e.deferredMeasurementCache,c=e.height,u=e.overscanColumnCount,h=e.overscanIndicesGetter,d=e.overscanRowCount,p=e.rowCount,m=e.width,g=e.isScrollingOptOut,b=t.scrollDirectionHorizontal,v=t.scrollDirectionVertical,w=t.instanceProps,_=this._initialScrollTop>0?this._initialScrollTop:t.scrollTop,S=this._initialScrollLeft>0?this._initialScrollLeft:t.scrollLeft,C=this._isScrolling(e,t);if(this._childrenToDisplay=[],c>0&&m>0){var x=w.columnSizeAndPositionManager.getVisibleCellRange({containerSize:m,offset:S}),T=w.rowSizeAndPositionManager.getVisibleCellRange({containerSize:c,offset:_}),E=w.columnSizeAndPositionManager.getOffsetAdjustment({containerSize:m,offset:S}),O=w.rowSizeAndPositionManager.getOffsetAdjustment({containerSize:c,offset:_});this._renderedColumnStartIndex=x.start,this._renderedColumnStopIndex=x.stop,this._renderedRowStartIndex=T.start,this._renderedRowStopIndex=T.stop;var A=h({direction:"horizontal",cellCount:o,overscanCellsCount:u,scrollDirection:b,startIndex:"number"==typeof x.start?x.start:0,stopIndex:"number"==typeof x.stop?x.stop:-1}),D=h({direction:"vertical",cellCount:p,overscanCellsCount:d,scrollDirection:v,startIndex:"number"==typeof T.start?T.start:0,stopIndex:"number"==typeof T.stop?T.stop:-1}),$=A.overscanStartIndex,P=A.overscanStopIndex,G=D.overscanStartIndex,W=D.overscanStopIndex;if(i){if(!i.hasFixedHeight()){for(var F=G;F<=W;F++)if(!i.has(F,0)){$=0,P=o-1;break}}if(!i.hasFixedWidth()){for(var B=$;B<=P;B++)if(!i.has(0,B)){G=0,W=p-1;break}}}this._childrenToDisplay=n({cellCache:this._cellCache,cellRenderer:r,columnSizeAndPositionManager:w.columnSizeAndPositionManager,columnStartIndex:$,columnStopIndex:P,deferredMeasurementCache:i,horizontalOffsetAdjustment:E,isScrolling:C,isScrollingOptOut:g,parent:this,rowSizeAndPositionManager:w.rowSizeAndPositionManager,rowStartIndex:G,rowStopIndex:W,scrollLeft:S,scrollTop:_,styleCache:this._styleCache,verticalOffsetAdjustment:O,visibleColumnIndices:x,visibleRowIndices:T}),this._columnStartIndex=$,this._columnStopIndex=P,this._rowStartIndex=G,this._rowStopIndex=W}}},{key:"_debounceScrollEnded",value:function(){var e=this.props.scrollingResetTimeInterval;this._disablePointerEventsTimeoutId&&to(this._disablePointerEventsTimeoutId),this._disablePointerEventsTimeoutId=ti(this._debounceScrollEndedCallback,e)}},{key:"_handleInvalidatedGridSize",value:function(){if("number"==typeof this._deferredInvalidateColumnIndex&&"number"==typeof this._deferredInvalidateRowIndex){var e=this._deferredInvalidateColumnIndex,t=this._deferredInvalidateRowIndex;this._deferredInvalidateColumnIndex=null,this._deferredInvalidateRowIndex=null,this.recomputeGridSize({columnIndex:e,rowIndex:t})}}},{key:"_invokeOnScrollMemoizer",value:function(e){var t=this,r=e.scrollLeft,n=e.scrollTop,o=e.totalColumnsWidth,i=e.totalRowsHeight;this._onScrollMemoizer({callback:function(e){var r=e.scrollLeft,n=e.scrollTop,c=t.props,u=c.height;(0,c.onScroll)({clientHeight:u,clientWidth:c.width,scrollHeight:i,scrollLeft:r,scrollTop:n,scrollWidth:o})},indices:{scrollLeft:r,scrollTop:n}})}},{key:"_isScrolling",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state;return Object.hasOwnProperty.call(e,"isScrolling")?!!e.isScrolling:!!t.isScrolling}},{key:"_maybeCallOnScrollbarPresenceChange",value:function(){if(this._scrollbarPresenceChanged){var e=this.props.onScrollbarPresenceChange;this._scrollbarPresenceChanged=!1,e({horizontal:this._horizontalScrollBarSize>0,size:this.state.instanceProps.scrollbarSize,vertical:this._verticalScrollBarSize>0})}}},{key:"scrollToPosition",value:function(e){var r=e.scrollLeft,n=e.scrollTop,o=t._getScrollToPositionStateUpdate({prevState:this.state,scrollLeft:r,scrollTop:n});o&&(o.needToResetStyleCache=!1,this.setState(o))}},{key:"_getCalculatedScrollLeft",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state;return t._getCalculatedScrollLeft(e,r)}},{key:"_updateScrollLeftForScrollToColumn",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=t._getScrollLeftForScrollToColumnStateUpdate(e,r);if(o)return o.needToResetStyleCache=!1,this.setState(o),e.onScrollToTargetCausedUpdate&&!n&&e.onScrollToTargetCausedUpdate({clientHeight:e.height,clientWidth:e.width,scrollHeight:this.getTotalRowsHeight(),scrollLeft:o.scrollLeft,scrollTop:o.scrollTop,scrollWidth:this.getTotalColumnsWidth()}),o}},{key:"_getCalculatedScrollTop",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state;return t._getCalculatedScrollTop(e,r)}},{key:"_resetStyleCache",value:function(){var e=this._styleCache,t=this._cellCache,r=this.props.isScrollingOptOut;this._cellCache={},this._styleCache={};for(var n=this._rowStartIndex;n<=this._rowStopIndex;n++)for(var o=this._columnStartIndex;o<=this._columnStopIndex;o++){var i="".concat(n,"-").concat(o);this._styleCache[i]=e[i],r&&(this._cellCache[i]=t[i])}}},{key:"_updateScrollTopForScrollToRow",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=t._getScrollTopForScrollToRowStateUpdate(e,r);if(o)return o.needToResetStyleCache=!1,this.setState(o),e.onScrollToTargetCausedUpdate&&!n&&e.onScrollToTargetCausedUpdate({clientHeight:e.height,clientWidth:e.width,scrollHeight:this.getTotalRowsHeight(),scrollLeft:o.scrollLeft,scrollTop:o.scrollTop,scrollWidth:this.getTotalColumnsWidth()}),o}}],[{key:"getDerivedStateFromProps",value:function(e,r){var n,o,i={};0===e.columnCount&&0!==r.scrollLeft||0===e.rowCount&&0!==r.scrollTop?(i.scrollLeft=0,i.scrollTop=0):(e.scrollLeft!==r.scrollLeft&&e.scrollToColumn<0||e.scrollTop!==r.scrollTop&&e.scrollToRow<0)&&Object.assign(i,t._getScrollToPositionStateUpdate({prevState:r,scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}));var c=r.instanceProps;return i.needToResetStyleCache=!1,(e.columnWidth!==c.prevColumnWidth||e.rowHeight!==c.prevRowHeight)&&(i.needToResetStyleCache=!0),c.columnSizeAndPositionManager.configure({cellCount:e.columnCount,estimatedCellSize:t._getEstimatedColumnSize(e),cellSizeGetter:t._wrapSizeGetter(e.columnWidth)}),c.rowSizeAndPositionManager.configure({cellCount:e.rowCount,estimatedCellSize:t._getEstimatedRowSize(e),cellSizeGetter:t._wrapSizeGetter(e.rowHeight)}),(0===c.prevColumnCount||0===c.prevRowCount)&&(c.prevColumnCount=0,c.prevRowCount=0),e.autoHeight&&!1===e.isScrolling&&!0===c.prevIsScrolling&&Object.assign(i,{isScrolling:!1}),e3({cellCount:c.prevColumnCount,cellSize:"number"==typeof c.prevColumnWidth?c.prevColumnWidth:null,computeMetadataCallback:function(){return c.columnSizeAndPositionManager.resetCell(0)},computeMetadataCallbackProps:e,nextCellsCount:e.columnCount,nextCellSize:"number"==typeof e.columnWidth?e.columnWidth:null,nextScrollToIndex:e.scrollToColumn,scrollToIndex:c.prevScrollToColumn,updateScrollOffsetForScrollToIndex:function(){n=t._getScrollLeftForScrollToColumnStateUpdate(e,r)}}),e3({cellCount:c.prevRowCount,cellSize:"number"==typeof c.prevRowHeight?c.prevRowHeight:null,computeMetadataCallback:function(){return c.rowSizeAndPositionManager.resetCell(0)},computeMetadataCallbackProps:e,nextCellsCount:e.rowCount,nextCellSize:"number"==typeof e.rowHeight?e.rowHeight:null,nextScrollToIndex:e.scrollToRow,scrollToIndex:c.prevScrollToRow,updateScrollOffsetForScrollToIndex:function(){o=t._getScrollTopForScrollToRowStateUpdate(e,r)}}),c.prevColumnCount=e.columnCount,c.prevColumnWidth=e.columnWidth,c.prevIsScrolling=!0===e.isScrolling,c.prevRowCount=e.rowCount,c.prevRowHeight=e.rowHeight,c.prevScrollToColumn=e.scrollToColumn,c.prevScrollToRow=e.scrollToRow,c.scrollbarSize=e.getScrollbarSize(),void 0===c.scrollbarSize?(c.scrollbarSizeMeasured=!1,c.scrollbarSize=0):c.scrollbarSizeMeasured=!0,i.instanceProps=c,ta({},i,{},n,{},o)}},{key:"_getEstimatedColumnSize",value:function(e){return"number"==typeof e.columnWidth?e.columnWidth:e.estimatedColumnSize}},{key:"_getEstimatedRowSize",value:function(e){return"number"==typeof e.rowHeight?e.rowHeight:e.estimatedRowSize}},{key:"_getScrollToPositionStateUpdate",value:function(e){var t=e.prevState,r=e.scrollLeft,n=e.scrollTop,o={scrollPositionChangeReason:tl.REQUESTED};return("number"==typeof r&&r>=0&&(o.scrollDirectionHorizontal=r>t.scrollLeft?1:-1,o.scrollLeft=r),"number"==typeof n&&n>=0&&(o.scrollDirectionVertical=n>t.scrollTop?1:-1,o.scrollTop=n),"number"==typeof r&&r>=0&&r!==t.scrollLeft||"number"==typeof n&&n>=0&&n!==t.scrollTop)?o:{}}},{key:"_wrapSizeGetter",value:function(e){return"function"==typeof e?e:function(){return e}}},{key:"_getCalculatedScrollLeft",value:function(e,t){var r=e.columnCount,n=e.height,o=e.scrollToAlignment,i=e.scrollToColumn,c=e.width,u=t.scrollLeft,h=t.instanceProps;if(r>0){var d=r-1,p=h.rowSizeAndPositionManager.getTotalSize(),m=h.scrollbarSizeMeasured&&p>n?h.scrollbarSize:0;return h.columnSizeAndPositionManager.getUpdatedOffsetForIndex({align:o,containerSize:c-m,currentOffset:u,targetIndex:i<0?d:Math.min(d,i)})}return 0}},{key:"_getScrollLeftForScrollToColumnStateUpdate",value:function(e,r){var n=r.scrollLeft,o=t._getCalculatedScrollLeft(e,r);return"number"==typeof o&&o>=0&&n!==o?t._getScrollToPositionStateUpdate({prevState:r,scrollLeft:o,scrollTop:-1}):{}}},{key:"_getCalculatedScrollTop",value:function(e,t){var r=e.height,n=e.rowCount,o=e.scrollToAlignment,i=e.scrollToRow,c=e.width,u=t.scrollTop,h=t.instanceProps;if(n>0){var d=n-1,p=h.columnSizeAndPositionManager.getTotalSize(),m=h.scrollbarSizeMeasured&&p>c?h.scrollbarSize:0;return h.rowSizeAndPositionManager.getUpdatedOffsetForIndex({align:o,containerSize:r-m,currentOffset:u,targetIndex:i<0?d:Math.min(d,i)})}return 0}},{key:"_getScrollTopForScrollToRowStateUpdate",value:function(e,r){var n=r.scrollTop,o=t._getCalculatedScrollTop(e,r);return"number"==typeof o&&o>=0&&n!==o?t._getScrollToPositionStateUpdate({prevState:r,scrollLeft:-1,scrollTop:o}):{}}}]),t}(U.PureComponent),eQ(w,"propTypes",null),_);function tu(e){var t=e.cellCount,r=e.overscanCellsCount,n=e.scrollDirection,o=e.startIndex,i=e.stopIndex;return(r=Math.max(1,r),1===n)?{overscanStartIndex:Math.max(0,o-1),overscanStopIndex:Math.min(t-1,i+r)}:{overscanStartIndex:Math.max(0,o-r),overscanStopIndex:Math.min(t-1,i+1)}}function th(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}eQ(tc,"defaultProps",{"aria-label":"grid","aria-readonly":!0,autoContainerWidth:!1,autoHeight:!1,autoWidth:!1,cellRangeRenderer:function(e){for(var t=e.cellCache,r=e.cellRenderer,n=e.columnSizeAndPositionManager,o=e.columnStartIndex,i=e.columnStopIndex,c=e.deferredMeasurementCache,u=e.horizontalOffsetAdjustment,h=e.isScrolling,d=e.isScrollingOptOut,p=e.parent,m=e.rowSizeAndPositionManager,g=e.rowStartIndex,b=e.rowStopIndex,v=e.styleCache,w=e.verticalOffsetAdjustment,_=e.visibleColumnIndices,S=e.visibleRowIndices,C=[],x=n.areOffsetsAdjusted()||m.areOffsetsAdjusted(),T=!h&&!x,E=g;E<=b;E++)for(var O=m.getSizeAndPositionOfCell(E),A=o;A<=i;A++){var D=n.getSizeAndPositionOfCell(A),$=A>=_.start&&A<=_.stop&&E>=S.start&&E<=S.stop,P="".concat(E,"-").concat(A),G=void 0;T&&v[P]?G=v[P]:c&&!c.has(E,A)?G={height:"auto",left:0,position:"absolute",top:0,width:"auto"}:(G={height:O.size,left:D.offset+u,position:"absolute",top:O.offset+w,width:D.size},v[P]=G);var W={columnIndex:A,isScrolling:h,isVisible:$,key:P,parent:p,rowIndex:E,style:G},F=void 0;(d||h)&&!u&&!w?(t[P]||(t[P]=r(W)),F=t[P]):F=r(W),null!=F&&!1!==F&&C.push(F)}return C},containerRole:"rowgroup",containerStyle:{},estimatedColumnSize:100,estimatedRowSize:30,getScrollbarSize:tt,noContentRenderer:function(){return null},onScroll:function(){},onScrollbarPresenceChange:function(){},onSectionRendered:function(){},overscanColumnCount:0,overscanIndicesGetter:function(e){var t=e.cellCount,r=e.overscanCellsCount,n=e.scrollDirection,o=e.startIndex,i=e.stopIndex;return 1===n?{overscanStartIndex:Math.max(0,o),overscanStopIndex:Math.min(t-1,i+r)}:{overscanStartIndex:Math.max(0,o-r),overscanStopIndex:Math.min(t-1,i)}},overscanRowCount:10,role:"grid",scrollingResetTimeInterval:150,scrollToAlignment:"auto",scrollToColumn:-1,scrollToRow:-1,style:{},tabIndex:0,isScrollingOptOut:!1}),e1(tc);var td=(C=S=function(e){function t(){eW(this,t);for(var e,r,n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return eQ(eZ(r=eV(this,(e=eq(t)).call.apply(e,[this].concat(o)))),"state",{scrollToColumn:0,scrollToRow:0,instanceProps:{prevScrollToColumn:0,prevScrollToRow:0}}),eQ(eZ(r),"_columnStartIndex",0),eQ(eZ(r),"_columnStopIndex",0),eQ(eZ(r),"_rowStartIndex",0),eQ(eZ(r),"_rowStopIndex",0),eQ(eZ(r),"_onKeyDown",function(e){var t=r.props,n=t.columnCount,o=t.disabled,i=t.mode,c=t.rowCount;if(!o){var u=r._getScrollState(),h=u.scrollToColumn,d=u.scrollToRow,p=r._getScrollState(),m=p.scrollToColumn,g=p.scrollToRow;switch(e.key){case"ArrowDown":g="cells"===i?Math.min(g+1,c-1):Math.min(r._rowStopIndex+1,c-1);break;case"ArrowLeft":m="cells"===i?Math.max(m-1,0):Math.max(r._columnStartIndex-1,0);break;case"ArrowRight":m="cells"===i?Math.min(m+1,n-1):Math.min(r._columnStopIndex+1,n-1);break;case"ArrowUp":g="cells"===i?Math.max(g-1,0):Math.max(r._rowStartIndex-1,0)}(m!==h||g!==d)&&(e.preventDefault(),r._updateScrollState({scrollToColumn:m,scrollToRow:g}))}}),eQ(eZ(r),"_onSectionRendered",function(e){var t=e.columnStartIndex,n=e.columnStopIndex,o=e.rowStartIndex,i=e.rowStopIndex;r._columnStartIndex=t,r._columnStopIndex=n,r._rowStartIndex=o,r._rowStopIndex=i}),r}return eK(t,e),ej(t,[{key:"setScrollIndexes",value:function(e){var t=e.scrollToColumn,r=e.scrollToRow;this.setState({scrollToRow:r,scrollToColumn:t})}},{key:"render",value:function(){var e=this.props,t=e.className,r=e.children,n=this._getScrollState(),o=n.scrollToColumn,i=n.scrollToRow;return U.createElement("div",{className:t,onKeyDown:this._onKeyDown},r({onSectionRendered:this._onSectionRendered,scrollToColumn:o,scrollToRow:i}))}},{key:"_getScrollState",value:function(){return this.props.isControlled?this.props:this.state}},{key:"_updateScrollState",value:function(e){var t=e.scrollToColumn,r=e.scrollToRow,n=this.props,o=n.isControlled,i=n.onScrollToChange;"function"==typeof i&&i({scrollToColumn:t,scrollToRow:r}),o||this.setState({scrollToColumn:t,scrollToRow:r})}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.isControlled?{}:e.scrollToColumn!==t.instanceProps.prevScrollToColumn||e.scrollToRow!==t.instanceProps.prevScrollToRow?function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?th(r,!0).forEach(function(t){eQ(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):th(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},t,{scrollToColumn:e.scrollToColumn,scrollToRow:e.scrollToRow,instanceProps:{prevScrollToColumn:e.scrollToColumn,prevScrollToRow:e.scrollToRow}}):{}}}]),t}(U.PureComponent),eQ(S,"propTypes",null),C);function tp(e,t){var r=void 0!==t?t:"undefined"!=typeof window?window:"undefined"!=typeof self?self:n.g,o=void 0!==r.document&&r.document.attachEvent;if(!o){var i,c,u=(i=r.requestAnimationFrame||r.mozRequestAnimationFrame||r.webkitRequestAnimationFrame||function(e){return r.setTimeout(e,20)},function(e){return i(e)}),h=(c=r.cancelAnimationFrame||r.mozCancelAnimationFrame||r.webkitCancelAnimationFrame||r.clearTimeout,function(e){return c(e)}),d=function(e){var t=e.__resizeTriggers__,r=t.firstElementChild,n=t.lastElementChild,o=r.firstElementChild;n.scrollLeft=n.scrollWidth,n.scrollTop=n.scrollHeight,o.style.width=r.offsetWidth+1+"px",o.style.height=r.offsetHeight+1+"px",r.scrollLeft=r.scrollWidth,r.scrollTop=r.scrollHeight},p=function(e){if(!(e.target.className&&"function"==typeof e.target.className.indexOf&&0>e.target.className.indexOf("contract-trigger")&&0>e.target.className.indexOf("expand-trigger"))){var t=this;d(this),this.__resizeRAF__&&h(this.__resizeRAF__),this.__resizeRAF__=u(function(){(t.offsetWidth!=t.__resizeLast__.width||t.offsetHeight!=t.__resizeLast__.height)&&(t.__resizeLast__.width=t.offsetWidth,t.__resizeLast__.height=t.offsetHeight,t.__resizeListeners__.forEach(function(r){r.call(t,e)}))})}},m=!1,g="",b="animationstart",v="Webkit Moz O ms".split(" "),w="webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),_=r.document.createElement("fakeelement");if(void 0!==_.style.animationName&&(m=!0),!1===m){for(var S=0;S<v.length;S++)if(void 0!==_.style[v[S]+"AnimationName"]){g="-"+v[S].toLowerCase()+"-",b=w[S],m=!0;break}}var C="resizeanim",x="@"+g+"keyframes "+C+" { from { opacity: 0; } to { opacity: 0; } } ",T=g+"animation: 1ms "+C+"; "}var E=function(t){if(!t.getElementById("detectElementResize")){var r=(x||"")+".resize-triggers { "+(T||"")+'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',n=t.head||t.getElementsByTagName("head")[0],o=t.createElement("style");o.id="detectElementResize",o.type="text/css",null!=e&&o.setAttribute("nonce",e),o.styleSheet?o.styleSheet.cssText=r:o.appendChild(t.createTextNode(r)),n.appendChild(o)}};return{addResizeListener:function(e,t){if(o)e.attachEvent("onresize",t);else{if(!e.__resizeTriggers__){var n=e.ownerDocument,i=r.getComputedStyle(e);i&&"static"==i.position&&(e.style.position="relative"),E(n),e.__resizeLast__={},e.__resizeListeners__=[],(e.__resizeTriggers__=n.createElement("div")).className="resize-triggers";var c='<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>';if(window.trustedTypes){var u=trustedTypes.createPolicy("react-virtualized-auto-sizer",{createHTML:function(){return c}});e.__resizeTriggers__.innerHTML=u.createHTML("")}else e.__resizeTriggers__.innerHTML=c;e.appendChild(e.__resizeTriggers__),d(e),e.addEventListener("scroll",p,!0),b&&(e.__resizeTriggers__.__animationListener__=function(t){t.animationName==C&&d(e)},e.__resizeTriggers__.addEventListener(b,e.__resizeTriggers__.__animationListener__))}e.__resizeListeners__.push(t)}},removeResizeListener:function(e,t){if(o)e.detachEvent("onresize",t);else if(e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t),1),!e.__resizeListeners__.length){e.removeEventListener("scroll",p,!0),e.__resizeTriggers__.__animationListener__&&(e.__resizeTriggers__.removeEventListener(b,e.__resizeTriggers__.__animationListener__),e.__resizeTriggers__.__animationListener__=null);try{e.__resizeTriggers__=!e.removeChild(e.__resizeTriggers__)}catch{}}}}}function tf(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}eQ(td,"defaultProps",{disabled:!1,isControlled:!1,mode:"edges",scrollToColumn:0,scrollToRow:0}),e1(td);var tm=(T=x=function(e){function t(){eW(this,t);for(var e,r,n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return eQ(eZ(r=eV(this,(e=eq(t)).call.apply(e,[this].concat(o)))),"state",{height:r.props.defaultHeight||0,width:r.props.defaultWidth||0}),eQ(eZ(r),"_parentNode",void 0),eQ(eZ(r),"_autoSizer",void 0),eQ(eZ(r),"_window",void 0),eQ(eZ(r),"_detectElementResize",void 0),eQ(eZ(r),"_onResize",function(){var e=r.props,t=e.disableHeight,n=e.disableWidth,o=e.onResize;if(r._parentNode){var i=r._parentNode.offsetHeight||0,c=r._parentNode.offsetWidth||0,u=(r._window||window).getComputedStyle(r._parentNode)||{},h=parseInt(u.paddingLeft,10)||0,d=parseInt(u.paddingRight,10)||0,p=parseInt(u.paddingTop,10)||0,m=parseInt(u.paddingBottom,10)||0,g=i-p-m,b=c-h-d;(t||r.state.height===g)&&(n||r.state.width===b)||(r.setState({height:i-p-m,width:c-h-d}),o({height:i,width:c}))}}),eQ(eZ(r),"_setRef",function(e){r._autoSizer=e}),r}return eK(t,e),ej(t,[{key:"componentDidMount",value:function(){var e=this.props.nonce;this._autoSizer&&this._autoSizer.parentNode&&this._autoSizer.parentNode.ownerDocument&&this._autoSizer.parentNode.ownerDocument.defaultView&&this._autoSizer.parentNode instanceof this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement&&(this._parentNode=this._autoSizer.parentNode,this._window=this._autoSizer.parentNode.ownerDocument.defaultView,this._detectElementResize=tp(e,this._window),this._detectElementResize.addResizeListener(this._parentNode,this._onResize),this._onResize())}},{key:"componentWillUnmount",value:function(){this._detectElementResize&&this._parentNode&&this._detectElementResize.removeResizeListener(this._parentNode,this._onResize)}},{key:"render",value:function(){var e=this.props,t=e.children,r=e.className,n=e.disableHeight,o=e.disableWidth,i=e.style,c=this.state,u=c.height,h=c.width,d={overflow:"visible"},p={};return n||(d.height=0,p.height=u),o||(d.width=0,p.width=h),U.createElement("div",{className:r,ref:this._setRef,style:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?tf(r,!0).forEach(function(t){eQ(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):tf(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},d,{},i)},t(p))}}]),t}(U.Component),eQ(x,"propTypes",null),T);eQ(tm,"defaultProps",{onResize:function(){},disableHeight:!1,disableWidth:!1,style:{}});let tg=r(723);var tb=n.n(tg),tv=(O=E=function(e){function t(){eW(this,t);for(var e,r,n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return eQ(eZ(r=eV(this,(e=eq(t)).call.apply(e,[this].concat(o)))),"_child",void 0),eQ(eZ(r),"_measure",function(){var e=r.props,t=e.cache,n=e.columnIndex,o=void 0===n?0:n,i=e.parent,c=e.rowIndex,u=void 0===c?r.props.index||0:c,h=r._getCellMeasurements(),d=h.height,p=h.width;(d!==t.getHeight(u,o)||p!==t.getWidth(u,o))&&(t.set(u,o,p,d),i&&"function"==typeof i.recomputeGridSize&&i.recomputeGridSize({columnIndex:o,rowIndex:u}))}),eQ(eZ(r),"_registerChild",function(e){e&&Element,r._child=e,e&&r._maybeMeasureCell()}),r}return eK(t,e),ej(t,[{key:"componentDidMount",value:function(){this._maybeMeasureCell()}},{key:"componentDidUpdate",value:function(){this._maybeMeasureCell()}},{key:"render",value:function(){var e=this.props.children;return"function"==typeof e?e({measure:this._measure,registerChild:this._registerChild}):e}},{key:"_getCellMeasurements",value:function(){var e=this.props.cache,t=this._child||(0,tg.findDOMNode)(this);if(!t||!t.ownerDocument||!t.ownerDocument.defaultView||!(t instanceof t.ownerDocument.defaultView.HTMLElement))return{height:0,width:0};var r=t.style.width,n=t.style.height;e.hasFixedWidth()||(t.style.width="auto"),e.hasFixedHeight()||(t.style.height="auto");var o=Math.ceil(t.offsetHeight),i=Math.ceil(t.offsetWidth);return r&&(t.style.width=r),n&&(t.style.height=n),{height:o,width:i}}},{key:"_maybeMeasureCell",value:function(){var e=this.props,t=e.cache,r=e.columnIndex,n=void 0===r?0:r,o=e.parent,i=e.rowIndex,c=void 0===i?this.props.index||0:i;if(!t.has(c,n)){var u=this._getCellMeasurements(),h=u.height,d=u.width;t.set(c,n,d,h),o&&"function"==typeof o.invalidateCellSizeAfterRender&&o.invalidateCellSizeAfterRender({columnIndex:n,rowIndex:c})}}}]),t}(U.PureComponent),eQ(E,"propTypes",null),O);function ty(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}eQ(tv,"__internalCellMeasurerFlag",!1);var tw={OBSERVED:"observed",REQUESTED:"requested"},t_=function(e){function t(){eW(this,t);for(var e,r,n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return eQ(eZ(r=eV(this,(e=eq(t)).call.apply(e,[this].concat(o)))),"state",{isScrolling:!1,scrollLeft:0,scrollTop:0}),eQ(eZ(r),"_calculateSizeAndPositionDataOnNextUpdate",!1),eQ(eZ(r),"_onSectionRenderedMemoizer",e9()),eQ(eZ(r),"_onScrollMemoizer",e9(!1)),eQ(eZ(r),"_invokeOnSectionRenderedHelper",function(){var e=r.props,t=e.cellLayoutManager,n=e.onSectionRendered;r._onSectionRenderedMemoizer({callback:n,indices:{indices:t.getLastRenderedIndices()}})}),eQ(eZ(r),"_setScrollingContainerRef",function(e){r._scrollingContainer=e}),eQ(eZ(r),"_updateScrollPositionForScrollToCell",function(){var e=r.props,t=e.cellLayoutManager,n=e.height,o=e.scrollToAlignment,i=e.scrollToCell,c=e.width,u=r.state,h=u.scrollLeft,d=u.scrollTop;if(i>=0){var p=t.getScrollPositionForCell({align:o,cellIndex:i,height:n,scrollLeft:h,scrollTop:d,width:c});(p.scrollLeft!==h||p.scrollTop!==d)&&r._setScrollPosition(p)}}),eQ(eZ(r),"_onScroll",function(e){if(e.target===r._scrollingContainer){r._enablePointerEventsAfterDelay();var t=r.props,n=t.cellLayoutManager,o=t.height,i=t.isScrollingChange,c=t.width,u=r._scrollbarSize,h=n.getTotalSize(),d=h.height,p=h.width,m=Math.max(0,Math.min(p-c+u,e.target.scrollLeft)),g=Math.max(0,Math.min(d-o+u,e.target.scrollTop));if(r.state.scrollLeft!==m||r.state.scrollTop!==g){var b=e.cancelable?tw.OBSERVED:tw.REQUESTED;r.state.isScrolling||i(!0),r.setState({isScrolling:!0,scrollLeft:m,scrollPositionChangeReason:b,scrollTop:g})}r._invokeOnScrollMemoizer({scrollLeft:m,scrollTop:g,totalWidth:p,totalHeight:d})}}),r._scrollbarSize=tt(),void 0===r._scrollbarSize?(r._scrollbarSizeMeasured=!1,r._scrollbarSize=0):r._scrollbarSizeMeasured=!0,r}return eK(t,e),ej(t,[{key:"recomputeCellSizesAndPositions",value:function(){this._calculateSizeAndPositionDataOnNextUpdate=!0,this.forceUpdate()}},{key:"componentDidMount",value:function(){var e=this.props,t=e.cellLayoutManager,r=e.scrollLeft,n=e.scrollToCell,o=e.scrollTop;this._scrollbarSizeMeasured||(this._scrollbarSize=tt(),this._scrollbarSizeMeasured=!0,this.setState({})),n>=0?this._updateScrollPositionForScrollToCell():(r>=0||o>=0)&&this._setScrollPosition({scrollLeft:r,scrollTop:o}),this._invokeOnSectionRenderedHelper();var i=t.getTotalSize(),c=i.height,u=i.width;this._invokeOnScrollMemoizer({scrollLeft:r||0,scrollTop:o||0,totalHeight:c,totalWidth:u})}},{key:"componentDidUpdate",value:function(e,t){var r=this.props,n=r.height,o=r.scrollToAlignment,i=r.scrollToCell,c=r.width,u=this.state,h=u.scrollLeft,d=u.scrollPositionChangeReason,p=u.scrollTop;d===tw.REQUESTED&&(h>=0&&h!==t.scrollLeft&&h!==this._scrollingContainer.scrollLeft&&(this._scrollingContainer.scrollLeft=h),p>=0&&p!==t.scrollTop&&p!==this._scrollingContainer.scrollTop&&(this._scrollingContainer.scrollTop=p)),(n!==e.height||o!==e.scrollToAlignment||i!==e.scrollToCell||c!==e.width)&&this._updateScrollPositionForScrollToCell(),this._invokeOnSectionRenderedHelper()}},{key:"componentWillUnmount",value:function(){this._disablePointerEventsTimeoutId&&clearTimeout(this._disablePointerEventsTimeoutId)}},{key:"render",value:function(){var e=this.props,t=e.autoHeight,r=e.cellCount,n=e.cellLayoutManager,o=e.className,i=e.height,c=e.horizontalOverscanSize,u=e.id,h=e.noContentRenderer,d=e.style,p=e.verticalOverscanSize,m=e.width,g=this.state,b=g.isScrolling,v=g.scrollLeft,w=g.scrollTop;(this._lastRenderedCellCount!==r||this._lastRenderedCellLayoutManager!==n||this._calculateSizeAndPositionDataOnNextUpdate)&&(this._lastRenderedCellCount=r,this._lastRenderedCellLayoutManager=n,this._calculateSizeAndPositionDataOnNextUpdate=!1,n.calculateSizeAndPositionData());var _=n.getTotalSize(),S=_.height,C=_.width,x=Math.max(0,v-c),T=Math.max(0,w-p),E=Math.min(C,v+m+c),O=Math.min(S,w+i+p),A=i>0&&m>0?n.cellRenderers({height:O-T,isScrolling:b,width:E-x,x:x,y:T}):[],D={boxSizing:"border-box",direction:"ltr",height:t?"auto":i,position:"relative",WebkitOverflowScrolling:"touch",width:m,willChange:"transform"},$=S>i?this._scrollbarSize:0,P=C>m?this._scrollbarSize:0;return D.overflowX=C+$<=m?"hidden":"auto",D.overflowY=S+P<=i?"hidden":"auto",U.createElement("div",{ref:this._setScrollingContainerRef,"aria-label":this.props["aria-label"],className:e5("ReactVirtualized__Collection",o),id:u,onScroll:this._onScroll,role:"grid",style:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ty(r,!0).forEach(function(t){eQ(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ty(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},D,{},d),tabIndex:0},r>0&&U.createElement("div",{className:"ReactVirtualized__Collection__innerScrollContainer",style:{height:S,maxHeight:S,maxWidth:C,overflow:"hidden",pointerEvents:b?"none":"",width:C}},A),0===r&&h())}},{key:"_enablePointerEventsAfterDelay",value:function(){var e=this;this._disablePointerEventsTimeoutId&&clearTimeout(this._disablePointerEventsTimeoutId),this._disablePointerEventsTimeoutId=setTimeout(function(){(0,e.props.isScrollingChange)(!1),e._disablePointerEventsTimeoutId=null,e.setState({isScrolling:!1})},150)}},{key:"_invokeOnScrollMemoizer",value:function(e){var t=this,r=e.scrollLeft,n=e.scrollTop,o=e.totalHeight,i=e.totalWidth;this._onScrollMemoizer({callback:function(e){var r=e.scrollLeft,n=e.scrollTop,c=t.props,u=c.height;(0,c.onScroll)({clientHeight:u,clientWidth:c.width,scrollHeight:o,scrollLeft:r,scrollTop:n,scrollWidth:i})},indices:{scrollLeft:r,scrollTop:n}})}},{key:"_setScrollPosition",value:function(e){var t=e.scrollLeft,r=e.scrollTop,n={scrollPositionChangeReason:tw.REQUESTED};t>=0&&(n.scrollLeft=t),r>=0&&(n.scrollTop=r),(t>=0&&t!==this.state.scrollLeft||r>=0&&r!==this.state.scrollTop)&&this.setState(n)}}],[{key:"getDerivedStateFromProps",value:function(e,t){return 0===e.cellCount&&(0!==t.scrollLeft||0!==t.scrollTop)?{scrollLeft:0,scrollTop:0,scrollPositionChangeReason:tw.REQUESTED}:e.scrollLeft!==t.scrollLeft||e.scrollTop!==t.scrollTop?{scrollLeft:null!=e.scrollLeft?e.scrollLeft:t.scrollLeft,scrollTop:null!=e.scrollTop?e.scrollTop:t.scrollTop,scrollPositionChangeReason:tw.REQUESTED}:null}}]),t}(U.PureComponent);eQ(t_,"defaultProps",{"aria-label":"grid",horizontalOverscanSize:0,noContentRenderer:function(){return null},onScroll:function(){return null},onSectionRendered:function(){return null},scrollToAlignment:"auto",scrollToCell:-1,style:{},verticalOverscanSize:0}),t_.propTypes={},e1(t_);var tS=function(){function e(t){var r=t.height,n=t.width,o=t.x,i=t.y;eW(this,e),this.height=r,this.width=n,this.x=o,this.y=i,this._indexMap={},this._indices=[]}return ej(e,[{key:"addCellIndex",value:function(e){var t=e.index;this._indexMap[t]||(this._indexMap[t]=!0,this._indices.push(t))}},{key:"getCellIndices",value:function(){return this._indices}},{key:"toString",value:function(){return"".concat(this.x,",").concat(this.y," ").concat(this.width,"x").concat(this.height)}}]),e}(),tC=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100;eW(this,e),this._sectionSize=t,this._cellMetadata=[],this._sections={}}return ej(e,[{key:"getCellIndices",value:function(e){var t=e.height,r=e.width,n=e.x,o=e.y,i={};return this.getSections({height:t,width:r,x:n,y:o}).forEach(function(e){return e.getCellIndices().forEach(function(e){i[e]=e})}),Object.keys(i).map(function(e){return i[e]})}},{key:"getCellMetadata",value:function(e){var t=e.index;return this._cellMetadata[t]}},{key:"getSections",value:function(e){for(var t=e.height,r=e.width,n=e.x,o=e.y,i=Math.floor(n/this._sectionSize),c=Math.floor((n+r-1)/this._sectionSize),u=Math.floor(o/this._sectionSize),h=Math.floor((o+t-1)/this._sectionSize),d=[],p=i;p<=c;p++)for(var m=u;m<=h;m++){var g="".concat(p,".").concat(m);this._sections[g]||(this._sections[g]=new tS({height:this._sectionSize,width:this._sectionSize,x:p*this._sectionSize,y:m*this._sectionSize})),d.push(this._sections[g])}return d}},{key:"getTotalSectionCount",value:function(){return Object.keys(this._sections).length}},{key:"toString",value:function(){var e=this;return Object.keys(this._sections).map(function(t){return e._sections[t].toString()})}},{key:"registerCell",value:function(e){var t=e.cellMetadatum,r=e.index;this._cellMetadata[r]=t,this.getSections(t).forEach(function(e){return e.addCellIndex({index:r})})}}]),e}();function tx(e){var t=e.align,r=e.cellOffset,n=e.cellSize,o=e.containerSize,i=e.currentOffset,c=r-o+n;switch(void 0===t?"auto":t){case"start":return r;case"end":return c;case"center":return r-(o-n)/2;default:return Math.max(c,Math.min(r,i))}}var tk=function(e){function t(e,r){var n;return eW(this,t),(n=eV(this,eq(t).call(this,e,r)))._cellMetadata=[],n._lastRenderedCellIndices=[],n._cellCache=[],n._isScrollingChange=n._isScrollingChange.bind(eZ(n)),n._setCollectionViewRef=n._setCollectionViewRef.bind(eZ(n)),n}return eK(t,e),ej(t,[{key:"forceUpdate",value:function(){void 0!==this._collectionView&&this._collectionView.forceUpdate()}},{key:"recomputeCellSizesAndPositions",value:function(){this._cellCache=[],this._collectionView.recomputeCellSizesAndPositions()}},{key:"render",value:function(){var e=e2({},this.props);return U.createElement(t_,e2({cellLayoutManager:this,isScrollingChange:this._isScrollingChange,ref:this._setCollectionViewRef},e))}},{key:"calculateSizeAndPositionData",value:function(){var e=this.props,t=function(e){for(var t=e.cellCount,r=e.cellSizeAndPositionGetter,n=e.sectionSize,o=[],i=new tC(n),c=0,u=0,h=0;h<t;h++){var d=r({index:h});if(null==d.height||isNaN(d.height)||null==d.width||isNaN(d.width)||null==d.x||isNaN(d.x)||null==d.y||isNaN(d.y))throw Error("Invalid metadata returned for cell ".concat(h,`:
        x:`).concat(d.x,", y:").concat(d.y,", width:").concat(d.width,", height:").concat(d.height));c=Math.max(c,d.y+d.height),u=Math.max(u,d.x+d.width),o[h]=d,i.registerCell({cellMetadatum:d,index:h})}return{cellMetadata:o,height:c,sectionManager:i,width:u}}({cellCount:e.cellCount,cellSizeAndPositionGetter:e.cellSizeAndPositionGetter,sectionSize:e.sectionSize});this._cellMetadata=t.cellMetadata,this._sectionManager=t.sectionManager,this._height=t.height,this._width=t.width}},{key:"getLastRenderedIndices",value:function(){return this._lastRenderedCellIndices}},{key:"getScrollPositionForCell",value:function(e){var t=e.align,r=e.cellIndex,n=e.height,o=e.scrollLeft,i=e.scrollTop,c=e.width,u=this.props.cellCount;if(r>=0&&r<u){var h=this._cellMetadata[r];o=tx({align:t,cellOffset:h.x,cellSize:h.width,containerSize:c,currentOffset:o,targetIndex:r}),i=tx({align:t,cellOffset:h.y,cellSize:h.height,containerSize:n,currentOffset:i,targetIndex:r})}return{scrollLeft:o,scrollTop:i}}},{key:"getTotalSize",value:function(){return{height:this._height,width:this._width}}},{key:"cellRenderers",value:function(e){var t=this,r=e.height,n=e.isScrolling,o=e.width,i=e.x,c=e.y,u=this.props,h=u.cellGroupRenderer,d=u.cellRenderer;return this._lastRenderedCellIndices=this._sectionManager.getCellIndices({height:r,width:o,x:i,y:c}),h({cellCache:this._cellCache,cellRenderer:d,cellSizeAndPositionGetter:function(e){var r=e.index;return t._sectionManager.getCellMetadata({index:r})},indices:this._lastRenderedCellIndices,isScrolling:n})}},{key:"_isScrollingChange",value:function(e){e||(this._cellCache=[])}},{key:"_setCollectionViewRef",value:function(e){this._collectionView=e}}]),t}(U.PureComponent);function tR(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function tT(e,t){if(e){if("string"==typeof e)return tR(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return tR(e,t)}}eQ(tk,"defaultProps",{"aria-label":"grid",cellGroupRenderer:function(e){var t=e.cellCache,r=e.cellRenderer,n=e.cellSizeAndPositionGetter,o=e.indices,i=e.isScrolling;return o.map(function(e){var o=n({index:e}),c={index:e,isScrolling:i,key:e,style:{height:o.height,left:o.x,position:"absolute",top:o.y,width:o.width}};return i?(e in t||(t[e]=r(c)),t[e]):r(c)}).filter(function(e){return!!e})}}),tk.propTypes={},function(e){function t(e,r){var n;return eW(this,t),(n=eV(this,eq(t).call(this,e,r)))._registerChild=n._registerChild.bind(eZ(n)),n}return eK(t,e),ej(t,[{key:"componentDidUpdate",value:function(e){var t=this.props,r=t.columnMaxWidth,n=t.columnMinWidth,o=t.columnCount,i=t.width;(r!==e.columnMaxWidth||n!==e.columnMinWidth||o!==e.columnCount||i!==e.width)&&this._registeredChild&&this._registeredChild.recomputeGridSize()}},{key:"render",value:function(){var e=this.props,t=e.children,r=e.columnMaxWidth,n=e.columnMinWidth,o=e.columnCount,i=e.width,c=i/o;return c=Math.floor(c=Math.min(r?Math.min(r,i):i,c=Math.max(n||1,c))),t({adjustedWidth:Math.min(i,c*o),columnWidth:c,getColumnWidth:function(){return c},registerChild:this._registerChild})}},{key:"_registerChild",value:function(e){if(e&&"function"!=typeof e.recomputeGridSize)throw Error("Unexpected child type registered; only Grid/MultiGrid children are supported.");this._registeredChild=e,this._registeredChild&&this._registeredChild.recomputeGridSize()}}]),t}(U.PureComponent).propTypes={};var tE=function(e){function t(e,r){var n;return eW(this,t),(n=eV(this,eq(t).call(this,e,r)))._loadMoreRowsMemoizer=e9(),n._onRowsRendered=n._onRowsRendered.bind(eZ(n)),n._registerChild=n._registerChild.bind(eZ(n)),n}return eK(t,e),ej(t,[{key:"resetLoadMoreRowsCache",value:function(e){this._loadMoreRowsMemoizer=e9(),e&&this._doStuff(this._lastRenderedStartIndex,this._lastRenderedStopIndex)}},{key:"render",value:function(){return(0,this.props.children)({onRowsRendered:this._onRowsRendered,registerChild:this._registerChild})}},{key:"_loadUnloadedRanges",value:function(e){var t=this,r=this.props.loadMoreRows;e.forEach(function(e){var n=r(e);n&&n.then(function(){var r,n,o,i,c;n=(r={lastRenderedStartIndex:t._lastRenderedStartIndex,lastRenderedStopIndex:t._lastRenderedStopIndex,startIndex:e.startIndex,stopIndex:e.stopIndex}).lastRenderedStartIndex,o=r.lastRenderedStopIndex,i=r.startIndex,c=r.stopIndex,!(i>o||c<n)&&t._registeredChild&&function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r="function"==typeof e.recomputeGridSize?e.recomputeGridSize:e.recomputeRowHeights;r?r.call(e,t):e.forceUpdate()}(t._registeredChild,t._lastRenderedStartIndex)})})}},{key:"_onRowsRendered",value:function(e){var t=e.startIndex,r=e.stopIndex;this._lastRenderedStartIndex=t,this._lastRenderedStopIndex=r,this._doStuff(t,r)}},{key:"_doStuff",value:function(e,t){var r,n,o=this,i=this.props,c=i.isRowLoaded,u=i.minimumBatchSize,h=i.rowCount,d=i.threshold,p=function(e){for(var t=e.isRowLoaded,r=e.minimumBatchSize,n=e.rowCount,o=e.startIndex,i=e.stopIndex,c=[],u=null,h=null,d=o;d<=i;d++)t({index:d})?null!==h&&(c.push({startIndex:u,stopIndex:h}),u=h=null):(h=d,null===u&&(u=d));if(null!==h){for(var p=Math.min(Math.max(h,u+r-1),n-1),m=h+1;m<=p&&!t({index:m});m++)h=m;c.push({startIndex:u,stopIndex:h})}if(c.length)for(var g=c[0];g.stopIndex-g.startIndex+1<r&&g.startIndex>0;){var b=g.startIndex-1;if(t({index:b}))break;g.startIndex=b}return c}({isRowLoaded:c,minimumBatchSize:u,rowCount:h,startIndex:Math.max(0,e-d),stopIndex:Math.min(h-1,t+d)}),m=(n=[]).concat.apply(n,function(e){if(Array.isArray(e))return tR(e)}(r=p.map(function(e){return[e.startIndex,e.stopIndex]}))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||tT(r)||function(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}());this._loadMoreRowsMemoizer({callback:function(){o._loadUnloadedRanges(p)},indices:{squashedUnloadedRanges:m}})}},{key:"_registerChild",value:function(e){this._registeredChild=e}}]),t}(U.PureComponent);eQ(tE,"defaultProps",{minimumBatchSize:10,rowCount:0,threshold:15}),tE.propTypes={};var tO=(D=A=function(e){function t(){eW(this,t);for(var e,r,n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return eQ(eZ(r=eV(this,(e=eq(t)).call.apply(e,[this].concat(o)))),"Grid",void 0),eQ(eZ(r),"_cellRenderer",function(e){var t=e.parent,n=e.rowIndex,o=e.style,i=e.isScrolling,c=e.isVisible,u=e.key,h=r.props.rowRenderer,d=Object.getOwnPropertyDescriptor(o,"width");return d&&d.writable&&(o.width="100%"),h({index:n,style:o,isScrolling:i,isVisible:c,key:u,parent:t})}),eQ(eZ(r),"_setRef",function(e){r.Grid=e}),eQ(eZ(r),"_onScroll",function(e){var t=e.clientHeight,n=e.scrollHeight,o=e.scrollTop;(0,r.props.onScroll)({clientHeight:t,scrollHeight:n,scrollTop:o})}),eQ(eZ(r),"_onScrollToRowCausedUpdate",function(e){var t=e.clientHeight,n=e.scrollHeight,o=e.scrollTop;(0,r.props.onScrollToRowCausedUpdate)({clientHeight:t,scrollHeight:n,scrollTop:o})}),eQ(eZ(r),"_onSectionRendered",function(e){var t=e.rowOverscanStartIndex,n=e.rowOverscanStopIndex,o=e.rowStartIndex,i=e.rowStopIndex;(0,r.props.onRowsRendered)({overscanStartIndex:t,overscanStopIndex:n,startIndex:o,stopIndex:i})}),r}return eK(t,e),ej(t,[{key:"forceUpdateGrid",value:function(){this.Grid&&this.Grid.forceUpdate()}},{key:"getOffsetForRow",value:function(e){var t=e.alignment,r=e.index;return this.Grid?this.Grid.getOffsetForCell({alignment:t,rowIndex:r,columnIndex:0}).scrollTop:0}},{key:"invalidateCellSizeAfterRender",value:function(e){var t=e.columnIndex,r=e.rowIndex;this.Grid&&this.Grid.invalidateCellSizeAfterRender({rowIndex:r,columnIndex:t})}},{key:"measureAllRows",value:function(){this.Grid&&this.Grid.measureAllCells()}},{key:"recomputeGridSize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.columnIndex,r=e.rowIndex;this.Grid&&this.Grid.recomputeGridSize({rowIndex:void 0===r?0:r,columnIndex:void 0===t?0:t})}},{key:"recomputeRowHeights",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.Grid&&this.Grid.recomputeGridSize({rowIndex:e,columnIndex:0})}},{key:"scrollToPosition",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.Grid&&this.Grid.scrollToPosition({scrollTop:e})}},{key:"scrollToRow",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.Grid&&this.Grid.scrollToCell({columnIndex:0,rowIndex:e})}},{key:"render",value:function(){var e=this.props,t=e.className,r=e.noRowsRenderer,n=e.scrollToIndex,o=e.width,i=e5("ReactVirtualized__List",t);return U.createElement(tc,e2({},this.props,{autoContainerWidth:!0,cellRenderer:this._cellRenderer,className:i,columnWidth:o,columnCount:1,noContentRenderer:r,onScroll:this._onScroll,onScrollToTargetCausedUpdate:this._onScrollToRowCausedUpdate,onSectionRendered:this._onSectionRendered,ref:this._setRef,scrollToRow:n}))}}]),t}(U.PureComponent),eQ(A,"propTypes",null),D);eQ(tO,"defaultProps",{autoHeight:!1,estimatedRowSize:30,onScroll:function(){},onScrollToRowCausedUpdate:function(){},noRowsRenderer:function(){return null},onRowsRendered:function(){},overscanIndicesGetter:tu,overscanRowCount:10,scrollToAlignment:"auto",scrollToIndex:-1,style:{}});let tM={ge:function(e,t,r,n,o){return"function"==typeof r?function(e,t,r,n,o){for(var i=r+1;t<=r;){var c=t+r>>>1;o(e[c],n)>=0?(i=c,r=c-1):t=c+1}return i}(e,void 0===n?0:0|n,void 0===o?e.length-1:0|o,t,r):function(e,t,r,n){for(var o=r+1;t<=r;){var i=t+r>>>1;e[i]>=n?(o=i,r=i-1):t=i+1}return o}(e,void 0===r?0:0|r,void 0===n?e.length-1:0|n,t)}};function tI(e,t,r,n,o){this.mid=e,this.left=t,this.right=r,this.leftPoints=n,this.rightPoints=o,this.count=(t?t.count:0)+(r?r.count:0)+n.length}var tA=tI.prototype;function tN(e,t){e.mid=t.mid,e.left=t.left,e.right=t.right,e.leftPoints=t.leftPoints,e.rightPoints=t.rightPoints,e.count=t.count}function tD(e,t){var r=tB(t);e.mid=r.mid,e.left=r.left,e.right=r.right,e.leftPoints=r.leftPoints,e.rightPoints=r.rightPoints,e.count=r.count}function tz(e,t){var r=e.intervals([]);r.push(t),tD(e,r)}function t$(e,t){var r=e.intervals([]),n=r.indexOf(t);return n<0?0:(r.splice(n,1),tD(e,r),1)}function tP(e,t,r){for(var n=0;n<e.length&&e[n][0]<=t;++n){var o=r(e[n]);if(o)return o}}function tL(e,t,r){for(var n=e.length-1;n>=0&&e[n][1]>=t;--n){var o=r(e[n]);if(o)return o}}function tH(e,t){for(var r=0;r<e.length;++r){var n=t(e[r]);if(n)return n}}function tG(e,t){return e-t}function tW(e,t){return e[0]-t[0]||e[1]-t[1]}function tF(e,t){return e[1]-t[1]||e[0]-t[0]}function tB(e){if(0===e.length)return null;for(var t=[],r=0;r<e.length;++r)t.push(e[r][0],e[r][1]);t.sort(tG);for(var n=t[t.length>>1],o=[],i=[],c=[],r=0;r<e.length;++r){var u=e[r];u[1]<n?o.push(u):n<u[0]?i.push(u):c.push(u)}var h=c.slice();return c.sort(tW),h.sort(tF),new tI(n,tB(o),tB(i),c,h)}function tU(e){this.root=e}tA.intervals=function(e){return e.push.apply(e,this.leftPoints),this.left&&this.left.intervals(e),this.right&&this.right.intervals(e),e},tA.insert=function(e){var t=this.count-this.leftPoints.length;if(this.count+=1,e[1]<this.mid)this.left?4*(this.left.count+1)>3*(t+1)?tz(this,e):this.left.insert(e):this.left=tB([e]);else if(e[0]>this.mid)this.right?4*(this.right.count+1)>3*(t+1)?tz(this,e):this.right.insert(e):this.right=tB([e]);else{var r=tM.ge(this.leftPoints,e,tW),n=tM.ge(this.rightPoints,e,tF);this.leftPoints.splice(r,0,e),this.rightPoints.splice(n,0,e)}},tA.remove=function(e){var t=this.count-this.leftPoints;if(e[1]<this.mid){if(!this.left)return 0;if(4*(this.right?this.right.count:0)>3*(t-1))return t$(this,e);var r=this.left.remove(e);return 2===r?(this.left=null,this.count-=1,1):(1===r&&(this.count-=1),r)}if(e[0]>this.mid){if(!this.right)return 0;if(4*(this.left?this.left.count:0)>3*(t-1))return t$(this,e);var r=this.right.remove(e);return 2===r?(this.right=null,this.count-=1,1):(1===r&&(this.count-=1),r)}if(1===this.count)return 2*(this.leftPoints[0]===e);if(1===this.leftPoints.length&&this.leftPoints[0]===e){if(this.left&&this.right){for(var n=this,o=this.left;o.right;)n=o,o=o.right;if(n===this)o.right=this.right;else{var i=this.left,r=this.right;n.count-=o.count,n.right=o.left,o.left=i,o.right=r}tN(this,o),this.count=(this.left?this.left.count:0)+(this.right?this.right.count:0)+this.leftPoints.length}else this.left?tN(this,this.left):tN(this,this.right);return 1}for(var i=tM.ge(this.leftPoints,e,tW);i<this.leftPoints.length&&this.leftPoints[i][0]===e[0];++i)if(this.leftPoints[i]===e){this.count-=1,this.leftPoints.splice(i,1);for(var r=tM.ge(this.rightPoints,e,tF);r<this.rightPoints.length&&this.rightPoints[r][1]===e[1];++r)if(this.rightPoints[r]===e)return this.rightPoints.splice(r,1),1}return 0},tA.queryPoint=function(e,t){if(e<this.mid){if(this.left){var r=this.left.queryPoint(e,t);if(r)return r}return tP(this.leftPoints,e,t)}if(!(e>this.mid))return tH(this.leftPoints,t);if(this.right){var r=this.right.queryPoint(e,t);if(r)return r}return tL(this.rightPoints,e,t)},tA.queryInterval=function(e,t,r){if(e<this.mid&&this.left){var n=this.left.queryInterval(e,t,r);if(n)return n}if(t>this.mid&&this.right){var n=this.right.queryInterval(e,t,r);if(n)return n}return t<this.mid?tP(this.leftPoints,t,r):e>this.mid?tL(this.rightPoints,e,r):tH(this.leftPoints,r)};var tj=tU.prototype;tj.insert=function(e){this.root?this.root.insert(e):this.root=new tI(e[0],null,null,[e],[e])},tj.remove=function(e){if(this.root){var t=this.root.remove(e);return 2===t&&(this.root=null),0!==t}return!1},tj.queryPoint=function(e,t){if(this.root)return this.root.queryPoint(e,t)},tj.queryInterval=function(e,t,r){if(e<=t&&this.root)return this.root.queryInterval(e,t,r)},Object.defineProperty(tj,"count",{get:function(){return this.root?this.root.count:0}}),Object.defineProperty(tj,"intervals",{get:function(){return this.root?this.root.intervals([]):[]}});var tZ=function(){function e(){eW(this,e),eQ(this,"_columnSizeMap",{}),eQ(this,"_intervalTree",new tU(null)),eQ(this,"_leftMap",{})}return ej(e,[{key:"estimateTotalHeight",value:function(e,t,r){var n=e-this.count;return this.tallestColumnSize+Math.ceil(n/t)*r}},{key:"range",value:function(e,t,r){var n=this;this._intervalTree.queryInterval(e,e+t,function(e){var t=function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,c,u=[],h=!0,d=!1;try{for(i=(r=r.call(e)).next;!(h=(n=i.call(r)).done)&&(u.push(n.value),3!==u.length);h=!0);}catch(e){d=!0,o=e}finally{try{if(!h&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(d)throw o}}return u}}(e,0)||tT(e,3)||function(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}(),o=t[0],i=(t[1],t[2]);return r(i,n._leftMap[i],o)})}},{key:"setPosition",value:function(e,t,r,n){this._intervalTree.insert([r,r+n,e]),this._leftMap[e]=t;var o=this._columnSizeMap,i=o[t];void 0===i?o[t]=r+n:o[t]=Math.max(i,r+n)}},{key:"count",get:function(){return this._intervalTree.count}},{key:"shortestColumnSize",get:function(){var e=this._columnSizeMap,t=0;for(var r in e){var n=e[r];t=0===t?n:Math.min(t,n)}return t}},{key:"tallestColumnSize",get:function(){var e=this._columnSizeMap,t=0;for(var r in e)t=Math.max(t,e[r]);return t}}]),e}();function tV(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var tq=(P=$=function(e){function t(){eW(this,t);for(var e,r,n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return eQ(eZ(r=eV(this,(e=eq(t)).call.apply(e,[this].concat(o)))),"state",{isScrolling:!1,scrollTop:0}),eQ(eZ(r),"_debounceResetIsScrollingId",void 0),eQ(eZ(r),"_invalidateOnUpdateStartIndex",null),eQ(eZ(r),"_invalidateOnUpdateStopIndex",null),eQ(eZ(r),"_positionCache",new tZ),eQ(eZ(r),"_startIndex",null),eQ(eZ(r),"_startIndexMemoized",null),eQ(eZ(r),"_stopIndex",null),eQ(eZ(r),"_stopIndexMemoized",null),eQ(eZ(r),"_debounceResetIsScrollingCallback",function(){r.setState({isScrolling:!1})}),eQ(eZ(r),"_setScrollingContainerRef",function(e){r._scrollingContainer=e}),eQ(eZ(r),"_onScroll",function(e){var t=r.props.height,n=e.currentTarget.scrollTop,o=Math.min(Math.max(0,r._getEstimatedTotalHeight()-t),n);n===o&&(r._debounceResetIsScrolling(),r.state.scrollTop!==o&&r.setState({isScrolling:!0,scrollTop:o}))}),r}return eK(t,e),ej(t,[{key:"clearCellPositions",value:function(){this._positionCache=new tZ,this.forceUpdate()}},{key:"invalidateCellSizeAfterRender",value:function(e){var t=e.rowIndex;null===this._invalidateOnUpdateStartIndex?(this._invalidateOnUpdateStartIndex=t,this._invalidateOnUpdateStopIndex=t):(this._invalidateOnUpdateStartIndex=Math.min(this._invalidateOnUpdateStartIndex,t),this._invalidateOnUpdateStopIndex=Math.max(this._invalidateOnUpdateStopIndex,t))}},{key:"recomputeCellPositions",value:function(){var e=this._positionCache.count-1;this._positionCache=new tZ,this._populatePositionCache(0,e),this.forceUpdate()}},{key:"componentDidMount",value:function(){this._checkInvalidateOnUpdate(),this._invokeOnScrollCallback(),this._invokeOnCellsRenderedCallback()}},{key:"componentDidUpdate",value:function(e,t){this._checkInvalidateOnUpdate(),this._invokeOnScrollCallback(),this._invokeOnCellsRenderedCallback(),this.props.scrollTop!==e.scrollTop&&this._debounceResetIsScrolling()}},{key:"componentWillUnmount",value:function(){this._debounceResetIsScrollingId&&to(this._debounceResetIsScrollingId)}},{key:"render",value:function(){var e,t=this,r=this.props,n=r.autoHeight,o=r.cellCount,i=r.cellMeasurerCache,c=r.cellRenderer,u=r.className,h=r.height,d=r.id,p=r.keyMapper,m=r.overscanByPixels,g=r.role,b=r.style,v=r.tabIndex,w=r.width,_=r.rowDirection,S=this.state,C=S.isScrolling,x=S.scrollTop,T=[],E=this._getEstimatedTotalHeight(),O=this._positionCache.shortestColumnSize,A=this._positionCache.count,D=0;if(this._positionCache.range(Math.max(0,x-m),h+2*m,function(r,n,o){var u;void 0===e?(D=r,e=r):(D=Math.min(D,r),e=Math.max(e,r)),T.push(c({index:r,isScrolling:C,key:p(r),parent:t,style:(eQ(u={height:i.getHeight(r)},"ltr"===_?"left":"right",n),eQ(u,"position","absolute"),eQ(u,"top",o),eQ(u,"width",i.getWidth(r)),u)}))}),O<x+h+m&&A<o)for(var $=Math.min(o-A,Math.ceil((x+h+m-O)/i.defaultHeight*w/i.defaultWidth)),P=A;P<A+$;P++)e=P,T.push(c({index:P,isScrolling:C,key:p(P),parent:this,style:{width:i.getWidth(P)}}));return this._startIndex=D,this._stopIndex=e,U.createElement("div",{ref:this._setScrollingContainerRef,"aria-label":this.props["aria-label"],className:e5("ReactVirtualized__Masonry",u),id:d,onScroll:this._onScroll,role:g,style:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?tV(r,!0).forEach(function(t){eQ(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):tV(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({boxSizing:"border-box",direction:"ltr",height:n?"auto":h,overflowX:"hidden",overflowY:E<h?"hidden":"auto",position:"relative",width:w,WebkitOverflowScrolling:"touch",willChange:"transform"},b),tabIndex:v},U.createElement("div",{className:"ReactVirtualized__Masonry__innerScrollContainer",style:{width:"100%",height:E,maxWidth:"100%",maxHeight:E,overflow:"hidden",pointerEvents:C?"none":"",position:"relative"}},T))}},{key:"_checkInvalidateOnUpdate",value:function(){if("number"==typeof this._invalidateOnUpdateStartIndex){var e=this._invalidateOnUpdateStartIndex,t=this._invalidateOnUpdateStopIndex;this._invalidateOnUpdateStartIndex=null,this._invalidateOnUpdateStopIndex=null,this._populatePositionCache(e,t),this.forceUpdate()}}},{key:"_debounceResetIsScrolling",value:function(){var e=this.props.scrollingResetTimeInterval;this._debounceResetIsScrollingId&&to(this._debounceResetIsScrollingId),this._debounceResetIsScrollingId=ti(this._debounceResetIsScrollingCallback,e)}},{key:"_getEstimatedTotalHeight",value:function(){var e=this.props,t=e.cellCount,r=e.cellMeasurerCache,n=Math.max(1,Math.floor(e.width/r.defaultWidth));return this._positionCache.estimateTotalHeight(t,n,r.defaultHeight)}},{key:"_invokeOnScrollCallback",value:function(){var e=this.props,t=e.height,r=e.onScroll,n=this.state.scrollTop;this._onScrollMemoized!==n&&(r({clientHeight:t,scrollHeight:this._getEstimatedTotalHeight(),scrollTop:n}),this._onScrollMemoized=n)}},{key:"_invokeOnCellsRenderedCallback",value:function(){(this._startIndexMemoized!==this._startIndex||this._stopIndexMemoized!==this._stopIndex)&&((0,this.props.onCellsRendered)({startIndex:this._startIndex,stopIndex:this._stopIndex}),this._startIndexMemoized=this._startIndex,this._stopIndexMemoized=this._stopIndex)}},{key:"_populatePositionCache",value:function(e,t){for(var r=this.props,n=r.cellMeasurerCache,o=r.cellPositioner,i=e;i<=t;i++){var c=o(i),u=c.left,h=c.top;this._positionCache.setPosition(i,u,h,n.getHeight(i))}}}],[{key:"getDerivedStateFromProps",value:function(e,t){return void 0!==e.scrollTop&&t.scrollTop!==e.scrollTop?{isScrolling:!0,scrollTop:e.scrollTop}:null}}]),t}(U.PureComponent),eQ($,"propTypes",null),P);function tY(){}eQ(tq,"defaultProps",{autoHeight:!1,keyMapper:function(e){return e},onCellsRendered:tY,onScroll:tY,overscanByPixels:20,role:"grid",scrollingResetTimeInterval:150,style:{},tabIndex:0,rowDirection:"ltr"}),e1(tq);var tK=function(){function e(){var t=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};eW(this,e),eQ(this,"_cellMeasurerCache",void 0),eQ(this,"_columnIndexOffset",void 0),eQ(this,"_rowIndexOffset",void 0),eQ(this,"columnWidth",function(e){var r=e.index;t._cellMeasurerCache.columnWidth({index:r+t._columnIndexOffset})}),eQ(this,"rowHeight",function(e){var r=e.index;t._cellMeasurerCache.rowHeight({index:r+t._rowIndexOffset})});var n=r.cellMeasurerCache,o=r.columnIndexOffset,i=r.rowIndexOffset;this._cellMeasurerCache=n,this._columnIndexOffset=void 0===o?0:o,this._rowIndexOffset=void 0===i?0:i}return ej(e,[{key:"clear",value:function(e,t){this._cellMeasurerCache.clear(e+this._rowIndexOffset,t+this._columnIndexOffset)}},{key:"clearAll",value:function(){this._cellMeasurerCache.clearAll()}},{key:"hasFixedHeight",value:function(){return this._cellMeasurerCache.hasFixedHeight()}},{key:"hasFixedWidth",value:function(){return this._cellMeasurerCache.hasFixedWidth()}},{key:"getHeight",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return this._cellMeasurerCache.getHeight(e+this._rowIndexOffset,t+this._columnIndexOffset)}},{key:"getWidth",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return this._cellMeasurerCache.getWidth(e+this._rowIndexOffset,t+this._columnIndexOffset)}},{key:"has",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return this._cellMeasurerCache.has(e+this._rowIndexOffset,t+this._columnIndexOffset)}},{key:"set",value:function(e,t,r,n){this._cellMeasurerCache.set(e+this._rowIndexOffset,t+this._columnIndexOffset,r,n)}},{key:"defaultHeight",get:function(){return this._cellMeasurerCache.defaultHeight}},{key:"defaultWidth",get:function(){return this._cellMeasurerCache.defaultWidth}}]),e}();function tQ(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function tX(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?tQ(r,!0).forEach(function(t){eQ(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):tQ(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var tJ=function(e){function t(e,r){eW(this,t),eQ(eZ(n=eV(this,eq(t).call(this,e,r))),"state",{scrollLeft:0,scrollTop:0,scrollbarSize:0,showHorizontalScrollbar:!1,showVerticalScrollbar:!1}),eQ(eZ(n),"_deferredInvalidateColumnIndex",null),eQ(eZ(n),"_deferredInvalidateRowIndex",null),eQ(eZ(n),"_bottomLeftGridRef",function(e){n._bottomLeftGrid=e}),eQ(eZ(n),"_bottomRightGridRef",function(e){n._bottomRightGrid=e}),eQ(eZ(n),"_cellRendererBottomLeftGrid",function(e){var t=e.rowIndex,r=e6(e,["rowIndex"]),o=n.props,i=o.cellRenderer,c=o.fixedRowCount;return t===o.rowCount-c?U.createElement("div",{key:r.key,style:tX({},r.style,{height:20})}):i(tX({},r,{parent:eZ(n),rowIndex:t+c}))}),eQ(eZ(n),"_cellRendererBottomRightGrid",function(e){var t=e.columnIndex,r=e.rowIndex,o=e6(e,["columnIndex","rowIndex"]),i=n.props,c=i.cellRenderer,u=i.fixedColumnCount,h=i.fixedRowCount;return c(tX({},o,{columnIndex:t+u,parent:eZ(n),rowIndex:r+h}))}),eQ(eZ(n),"_cellRendererTopRightGrid",function(e){var t=e.columnIndex,r=e6(e,["columnIndex"]),o=n.props,i=o.cellRenderer,c=o.columnCount,u=o.fixedColumnCount;return t===c-u?U.createElement("div",{key:r.key,style:tX({},r.style,{width:20})}):i(tX({},r,{columnIndex:t+u,parent:eZ(n)}))}),eQ(eZ(n),"_columnWidthRightGrid",function(e){var t=e.index,r=n.props,o=r.columnCount,i=r.fixedColumnCount,c=r.columnWidth,u=n.state,h=u.scrollbarSize;return u.showHorizontalScrollbar&&t===o-i?h:"function"==typeof c?c({index:t+i}):c}),eQ(eZ(n),"_onScroll",function(e){var t=e.scrollLeft,r=e.scrollTop;n.setState({scrollLeft:t,scrollTop:r});var o=n.props.onScroll;o&&o(e)}),eQ(eZ(n),"_onScrollbarPresenceChange",function(e){var t=e.horizontal,r=e.size,o=e.vertical,i=n.state,c=i.showHorizontalScrollbar,u=i.showVerticalScrollbar;if(t!==c||o!==u){n.setState({scrollbarSize:r,showHorizontalScrollbar:t,showVerticalScrollbar:o});var h=n.props.onScrollbarPresenceChange;"function"==typeof h&&h({horizontal:t,size:r,vertical:o})}}),eQ(eZ(n),"_onScrollLeft",function(e){var t=e.scrollLeft;n._onScroll({scrollLeft:t,scrollTop:n.state.scrollTop})}),eQ(eZ(n),"_onScrollTop",function(e){var t=e.scrollTop;n._onScroll({scrollTop:t,scrollLeft:n.state.scrollLeft})}),eQ(eZ(n),"_rowHeightBottomGrid",function(e){var t=e.index,r=n.props,o=r.fixedRowCount,i=r.rowCount,c=r.rowHeight,u=n.state,h=u.scrollbarSize;return u.showVerticalScrollbar&&t===i-o?h:"function"==typeof c?c({index:t+o}):c}),eQ(eZ(n),"_topLeftGridRef",function(e){n._topLeftGrid=e}),eQ(eZ(n),"_topRightGridRef",function(e){n._topRightGrid=e});var n,o=e.deferredMeasurementCache,i=e.fixedColumnCount,c=e.fixedRowCount;return n._maybeCalculateCachedStyles(!0),o&&(n._deferredMeasurementCacheBottomLeftGrid=c>0?new tK({cellMeasurerCache:o,columnIndexOffset:0,rowIndexOffset:c}):o,n._deferredMeasurementCacheBottomRightGrid=i>0||c>0?new tK({cellMeasurerCache:o,columnIndexOffset:i,rowIndexOffset:c}):o,n._deferredMeasurementCacheTopRightGrid=i>0?new tK({cellMeasurerCache:o,columnIndexOffset:i,rowIndexOffset:0}):o),n}return eK(t,e),ej(t,[{key:"forceUpdateGrids",value:function(){this._bottomLeftGrid&&this._bottomLeftGrid.forceUpdate(),this._bottomRightGrid&&this._bottomRightGrid.forceUpdate(),this._topLeftGrid&&this._topLeftGrid.forceUpdate(),this._topRightGrid&&this._topRightGrid.forceUpdate()}},{key:"invalidateCellSizeAfterRender",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.columnIndex,r=void 0===t?0:t,n=e.rowIndex,o=void 0===n?0:n;this._deferredInvalidateColumnIndex="number"==typeof this._deferredInvalidateColumnIndex?Math.min(this._deferredInvalidateColumnIndex,r):r,this._deferredInvalidateRowIndex="number"==typeof this._deferredInvalidateRowIndex?Math.min(this._deferredInvalidateRowIndex,o):o}},{key:"measureAllCells",value:function(){this._bottomLeftGrid&&this._bottomLeftGrid.measureAllCells(),this._bottomRightGrid&&this._bottomRightGrid.measureAllCells(),this._topLeftGrid&&this._topLeftGrid.measureAllCells(),this._topRightGrid&&this._topRightGrid.measureAllCells()}},{key:"recomputeGridSize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.columnIndex,r=void 0===t?0:t,n=e.rowIndex,o=void 0===n?0:n,i=this.props,c=i.fixedColumnCount,u=i.fixedRowCount,h=Math.max(0,r-c),d=Math.max(0,o-u);this._bottomLeftGrid&&this._bottomLeftGrid.recomputeGridSize({columnIndex:r,rowIndex:d}),this._bottomRightGrid&&this._bottomRightGrid.recomputeGridSize({columnIndex:h,rowIndex:d}),this._topLeftGrid&&this._topLeftGrid.recomputeGridSize({columnIndex:r,rowIndex:o}),this._topRightGrid&&this._topRightGrid.recomputeGridSize({columnIndex:h,rowIndex:o}),this._leftGridWidth=null,this._topGridHeight=null,this._maybeCalculateCachedStyles(!0)}},{key:"componentDidMount",value:function(){var e=this.props,t=e.scrollLeft,r=e.scrollTop;if(t>0||r>0){var n={};t>0&&(n.scrollLeft=t),r>0&&(n.scrollTop=r),this.setState(n)}this._handleInvalidatedGridSize()}},{key:"componentDidUpdate",value:function(){this._handleInvalidatedGridSize()}},{key:"render",value:function(){var e=this.props,t=e.onScroll,r=e.onSectionRendered,n=(e.onScrollbarPresenceChange,e.scrollLeft,e.scrollToColumn),o=(e.scrollTop,e.scrollToRow),i=e6(e,["onScroll","onSectionRendered","onScrollbarPresenceChange","scrollLeft","scrollToColumn","scrollTop","scrollToRow"]);if(this._prepareForRender(),0===this.props.width||0===this.props.height)return null;var c=this.state,u=c.scrollLeft,h=c.scrollTop;return U.createElement("div",{style:this._containerOuterStyle},U.createElement("div",{style:this._containerTopStyle},this._renderTopLeftGrid(i),this._renderTopRightGrid(tX({},i,{onScroll:t,scrollLeft:u}))),U.createElement("div",{style:this._containerBottomStyle},this._renderBottomLeftGrid(tX({},i,{onScroll:t,scrollTop:h})),this._renderBottomRightGrid(tX({},i,{onScroll:t,onSectionRendered:r,scrollLeft:u,scrollToColumn:n,scrollToRow:o,scrollTop:h}))))}},{key:"_getBottomGridHeight",value:function(e){return e.height-this._getTopGridHeight(e)}},{key:"_getLeftGridWidth",value:function(e){var t=e.fixedColumnCount,r=e.columnWidth;if(null==this._leftGridWidth)if("function"==typeof r){for(var n=0,o=0;o<t;o++)n+=r({index:o});this._leftGridWidth=n}else this._leftGridWidth=r*t;return this._leftGridWidth}},{key:"_getRightGridWidth",value:function(e){return e.width-this._getLeftGridWidth(e)}},{key:"_getTopGridHeight",value:function(e){var t=e.fixedRowCount,r=e.rowHeight;if(null==this._topGridHeight)if("function"==typeof r){for(var n=0,o=0;o<t;o++)n+=r({index:o});this._topGridHeight=n}else this._topGridHeight=r*t;return this._topGridHeight}},{key:"_handleInvalidatedGridSize",value:function(){if("number"==typeof this._deferredInvalidateColumnIndex){var e=this._deferredInvalidateColumnIndex,t=this._deferredInvalidateRowIndex;this._deferredInvalidateColumnIndex=null,this._deferredInvalidateRowIndex=null,this.recomputeGridSize({columnIndex:e,rowIndex:t}),this.forceUpdate()}}},{key:"_maybeCalculateCachedStyles",value:function(e){var t=this.props,r=t.columnWidth,n=t.enableFixedColumnScroll,o=t.enableFixedRowScroll,i=t.height,c=t.fixedColumnCount,u=t.fixedRowCount,h=t.rowHeight,d=t.style,p=t.styleBottomLeftGrid,m=t.styleBottomRightGrid,g=t.styleTopLeftGrid,b=t.styleTopRightGrid,v=t.width,w=e||i!==this._lastRenderedHeight||v!==this._lastRenderedWidth,_=e||r!==this._lastRenderedColumnWidth||c!==this._lastRenderedFixedColumnCount,S=e||u!==this._lastRenderedFixedRowCount||h!==this._lastRenderedRowHeight;(e||w||d!==this._lastRenderedStyle)&&(this._containerOuterStyle=tX({height:i,overflow:"visible",width:v},d)),(e||w||S)&&(this._containerTopStyle={height:this._getTopGridHeight(this.props),position:"relative",width:v},this._containerBottomStyle={height:i-this._getTopGridHeight(this.props),overflow:"visible",position:"relative",width:v}),(e||p!==this._lastRenderedStyleBottomLeftGrid)&&(this._bottomLeftGridStyle=tX({left:0,overflowX:"hidden",overflowY:n?"auto":"hidden",position:"absolute"},p)),(e||_||m!==this._lastRenderedStyleBottomRightGrid)&&(this._bottomRightGridStyle=tX({left:this._getLeftGridWidth(this.props),position:"absolute"},m)),(e||g!==this._lastRenderedStyleTopLeftGrid)&&(this._topLeftGridStyle=tX({left:0,overflowX:"hidden",overflowY:"hidden",position:"absolute",top:0},g)),(e||_||b!==this._lastRenderedStyleTopRightGrid)&&(this._topRightGridStyle=tX({left:this._getLeftGridWidth(this.props),overflowX:o?"auto":"hidden",overflowY:"hidden",position:"absolute",top:0},b)),this._lastRenderedColumnWidth=r,this._lastRenderedFixedColumnCount=c,this._lastRenderedFixedRowCount=u,this._lastRenderedHeight=i,this._lastRenderedRowHeight=h,this._lastRenderedStyle=d,this._lastRenderedStyleBottomLeftGrid=p,this._lastRenderedStyleBottomRightGrid=m,this._lastRenderedStyleTopLeftGrid=g,this._lastRenderedStyleTopRightGrid=b,this._lastRenderedWidth=v}},{key:"_prepareForRender",value:function(){(this._lastRenderedColumnWidth!==this.props.columnWidth||this._lastRenderedFixedColumnCount!==this.props.fixedColumnCount)&&(this._leftGridWidth=null),(this._lastRenderedFixedRowCount!==this.props.fixedRowCount||this._lastRenderedRowHeight!==this.props.rowHeight)&&(this._topGridHeight=null),this._maybeCalculateCachedStyles(),this._lastRenderedColumnWidth=this.props.columnWidth,this._lastRenderedFixedColumnCount=this.props.fixedColumnCount,this._lastRenderedFixedRowCount=this.props.fixedRowCount,this._lastRenderedRowHeight=this.props.rowHeight}},{key:"_renderBottomLeftGrid",value:function(e){var t=e.enableFixedColumnScroll,r=e.fixedColumnCount,n=e.fixedRowCount,o=e.rowCount,i=e.hideBottomLeftGridScrollbar,c=this.state.showVerticalScrollbar;if(!r)return null;var u=this._getBottomGridHeight(e),h=this._getLeftGridWidth(e),d=this.state.showVerticalScrollbar?this.state.scrollbarSize:0,p=U.createElement(tc,e2({},e,{cellRenderer:this._cellRendererBottomLeftGrid,className:this.props.classNameBottomLeftGrid,columnCount:r,deferredMeasurementCache:this._deferredMeasurementCacheBottomLeftGrid,height:u,onScroll:t?this._onScrollTop:void 0,ref:this._bottomLeftGridRef,rowCount:Math.max(0,o-n)+ +!!c,rowHeight:this._rowHeightBottomGrid,style:this._bottomLeftGridStyle,tabIndex:null,width:i?h+d:h}));return i?U.createElement("div",{className:"BottomLeftGrid_ScrollWrapper",style:tX({},this._bottomLeftGridStyle,{height:u,width:h,overflowY:"hidden"})},p):p}},{key:"_renderBottomRightGrid",value:function(e){var t=e.columnCount,r=e.fixedColumnCount,n=e.fixedRowCount,o=e.rowCount,i=e.scrollToColumn,c=e.scrollToRow;return U.createElement(tc,e2({},e,{cellRenderer:this._cellRendererBottomRightGrid,className:this.props.classNameBottomRightGrid,columnCount:Math.max(0,t-r),columnWidth:this._columnWidthRightGrid,deferredMeasurementCache:this._deferredMeasurementCacheBottomRightGrid,height:this._getBottomGridHeight(e),onScroll:this._onScroll,onScrollbarPresenceChange:this._onScrollbarPresenceChange,ref:this._bottomRightGridRef,rowCount:Math.max(0,o-n),rowHeight:this._rowHeightBottomGrid,scrollToColumn:i-r,scrollToRow:c-n,style:this._bottomRightGridStyle,width:this._getRightGridWidth(e)}))}},{key:"_renderTopLeftGrid",value:function(e){var t=e.fixedColumnCount,r=e.fixedRowCount;return t&&r?U.createElement(tc,e2({},e,{className:this.props.classNameTopLeftGrid,columnCount:t,height:this._getTopGridHeight(e),ref:this._topLeftGridRef,rowCount:r,style:this._topLeftGridStyle,tabIndex:null,width:this._getLeftGridWidth(e)})):null}},{key:"_renderTopRightGrid",value:function(e){var t=e.columnCount,r=e.enableFixedRowScroll,n=e.fixedColumnCount,o=e.fixedRowCount,i=e.scrollLeft,c=e.hideTopRightGridScrollbar,u=this.state,h=u.showHorizontalScrollbar,d=u.scrollbarSize;if(!o)return null;var p=this._getTopGridHeight(e),m=this._getRightGridWidth(e),g=p,b=this._topRightGridStyle;c&&(g=p+(h?d:0),b=tX({},this._topRightGridStyle,{left:0}));var v=U.createElement(tc,e2({},e,{cellRenderer:this._cellRendererTopRightGrid,className:this.props.classNameTopRightGrid,columnCount:Math.max(0,t-n)+ +!!h,columnWidth:this._columnWidthRightGrid,deferredMeasurementCache:this._deferredMeasurementCacheTopRightGrid,height:g,onScroll:r?this._onScrollLeft:void 0,ref:this._topRightGridRef,rowCount:o,scrollLeft:i,style:b,tabIndex:null,width:m}));return c?U.createElement("div",{className:"TopRightGrid_ScrollWrapper",style:tX({},this._topRightGridStyle,{height:p,width:m,overflowX:"hidden"})},v):v}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.scrollLeft!==t.scrollLeft||e.scrollTop!==t.scrollTop?{scrollLeft:null!=e.scrollLeft&&e.scrollLeft>=0?e.scrollLeft:t.scrollLeft,scrollTop:null!=e.scrollTop&&e.scrollTop>=0?e.scrollTop:t.scrollTop}:null}}]),t}(U.PureComponent);function t0(e){var t=e.className,r=e.columns,n=e.style;return U.createElement("div",{className:t,role:"row",style:n},r)}eQ(tJ,"defaultProps",{classNameBottomLeftGrid:"",classNameBottomRightGrid:"",classNameTopLeftGrid:"",classNameTopRightGrid:"",enableFixedColumnScroll:!1,enableFixedRowScroll:!1,fixedColumnCount:0,fixedRowCount:0,scrollToColumn:-1,scrollToRow:-1,style:{},styleBottomLeftGrid:{},styleBottomRightGrid:{},styleTopLeftGrid:{},styleTopRightGrid:{},hideTopRightGridScrollbar:!1,hideBottomLeftGridScrollbar:!1}),tJ.propTypes={},e1(tJ),function(e){function t(e,r){var n;return eW(this,t),(n=eV(this,eq(t).call(this,e,r))).state={clientHeight:0,clientWidth:0,scrollHeight:0,scrollLeft:0,scrollTop:0,scrollWidth:0},n._onScroll=n._onScroll.bind(eZ(n)),n}return eK(t,e),ej(t,[{key:"render",value:function(){var e=this.props.children,t=this.state,r=t.clientHeight,n=t.clientWidth,o=t.scrollHeight,i=t.scrollLeft,c=t.scrollTop,u=t.scrollWidth;return e({clientHeight:r,clientWidth:n,onScroll:this._onScroll,scrollHeight:o,scrollLeft:i,scrollTop:c,scrollWidth:u})}},{key:"_onScroll",value:function(e){var t=e.clientHeight,r=e.clientWidth,n=e.scrollHeight,o=e.scrollLeft,i=e.scrollTop,c=e.scrollWidth;this.setState({clientHeight:t,clientWidth:r,scrollHeight:n,scrollLeft:o,scrollTop:i,scrollWidth:c})}}]),t}(U.PureComponent).propTypes={},t0.propTypes=null;let t1={ASC:"ASC",DESC:"DESC"};function t2(e){var t=e.sortDirection,r=e5("ReactVirtualized__Table__sortableHeaderIcon",{"ReactVirtualized__Table__sortableHeaderIcon--ASC":t===t1.ASC,"ReactVirtualized__Table__sortableHeaderIcon--DESC":t===t1.DESC});return U.createElement("svg",{className:r,width:18,height:18,viewBox:"0 0 24 24"},t===t1.ASC?U.createElement("path",{d:"M7 14l5-5 5 5z"}):U.createElement("path",{d:"M7 10l5 5 5-5z"}),U.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))}function t5(e){var t=e.dataKey,r=e.label,n=e.sortBy,o=e.sortDirection,i=[U.createElement("span",{className:"ReactVirtualized__Table__headerTruncatedText",key:"label",title:"string"==typeof r?r:null},r)];return n===t&&i.push(U.createElement(t2,{key:"SortIndicator",sortDirection:o})),i}function t3(e){var t=e.className,r=e.columns,n=e.index,o=e.key,i=e.onRowClick,c=e.onRowDoubleClick,u=e.onRowMouseOut,h=e.onRowMouseOver,d=e.onRowRightClick,p=e.rowData,m=e.style,g={"aria-rowindex":n+1};return(i||c||u||h||d)&&(g["aria-label"]="row",g.tabIndex=0,i&&(g.onClick=function(e){return i({event:e,index:n,rowData:p})}),c&&(g.onDoubleClick=function(e){return c({event:e,index:n,rowData:p})}),u&&(g.onMouseOut=function(e){return u({event:e,index:n,rowData:p})}),h&&(g.onMouseOver=function(e){return h({event:e,index:n,rowData:p})}),d&&(g.onContextMenu=function(e){return d({event:e,index:n,rowData:p})})),U.createElement("div",e2({},g,{className:t,key:o,role:"row",style:m}),r)}t2.propTypes={},t5.propTypes=null,t3.propTypes=null;var t6=function(e){function t(){return eW(this,t),eV(this,eq(t).apply(this,arguments))}return eK(t,e),t}(U.Component);function t4(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function t8(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?t4(r,!0).forEach(function(t){eQ(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t4(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}eQ(t6,"defaultProps",{cellDataGetter:function(e){var t=e.dataKey,r=e.rowData;return"function"==typeof r.get?r.get(t):r[t]},cellRenderer:function(e){var t=e.cellData;return null==t?"":String(t)},defaultSortDirection:t1.ASC,flexGrow:0,flexShrink:1,headerRenderer:t5,style:{}}),t6.propTypes={};var t9=function(e){function t(e){var r;return eW(this,t),(r=eV(this,eq(t).call(this,e))).state={scrollbarWidth:0},r._createColumn=r._createColumn.bind(eZ(r)),r._createRow=r._createRow.bind(eZ(r)),r._onScroll=r._onScroll.bind(eZ(r)),r._onSectionRendered=r._onSectionRendered.bind(eZ(r)),r._setRef=r._setRef.bind(eZ(r)),r}return eK(t,e),ej(t,[{key:"forceUpdateGrid",value:function(){this.Grid&&this.Grid.forceUpdate()}},{key:"getOffsetForRow",value:function(e){var t=e.alignment,r=e.index;return this.Grid?this.Grid.getOffsetForCell({alignment:t,rowIndex:r}).scrollTop:0}},{key:"invalidateCellSizeAfterRender",value:function(e){var t=e.columnIndex,r=e.rowIndex;this.Grid&&this.Grid.invalidateCellSizeAfterRender({rowIndex:r,columnIndex:t})}},{key:"measureAllRows",value:function(){this.Grid&&this.Grid.measureAllCells()}},{key:"recomputeGridSize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.columnIndex,r=e.rowIndex;this.Grid&&this.Grid.recomputeGridSize({rowIndex:void 0===r?0:r,columnIndex:void 0===t?0:t})}},{key:"recomputeRowHeights",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.Grid&&this.Grid.recomputeGridSize({rowIndex:e})}},{key:"scrollToPosition",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.Grid&&this.Grid.scrollToPosition({scrollTop:e})}},{key:"scrollToRow",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.Grid&&this.Grid.scrollToCell({columnIndex:0,rowIndex:e})}},{key:"getScrollbarWidth",value:function(){if(this.Grid){var e=(0,tg.findDOMNode)(this.Grid),t=e.clientWidth||0;return(e.offsetWidth||0)-t}return 0}},{key:"componentDidMount",value:function(){this._setScrollbarWidth()}},{key:"componentDidUpdate",value:function(){this._setScrollbarWidth()}},{key:"render",value:function(){var e=this,t=this.props,r=t.children,n=t.className,o=t.disableHeader,i=t.gridClassName,c=t.gridStyle,u=t.headerHeight,h=t.headerRowRenderer,d=t.height,p=t.id,m=t.noRowsRenderer,g=t.rowClassName,b=t.rowStyle,v=t.scrollToIndex,w=t.style,_=t.width,S=this.state.scrollbarWidth,C="function"==typeof g?g({index:-1}):g,x="function"==typeof b?b({index:-1}):b;return this._cachedColumnStyles=[],U.Children.toArray(r).forEach(function(t,r){var n=e._getFlexStyleForColumn(t,t.props.style);e._cachedColumnStyles[r]=t8({overflow:"hidden"},n)}),U.createElement("div",{"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-colcount":U.Children.toArray(r).length,"aria-rowcount":this.props.rowCount,className:e5("ReactVirtualized__Table",n),id:p,role:"grid",style:w},!o&&h({className:e5("ReactVirtualized__Table__headerRow",C),columns:this._getHeaderColumns(),style:t8({height:u,overflow:"hidden",paddingRight:S,width:_},x)}),U.createElement(tc,e2({},this.props,{"aria-readonly":null,autoContainerWidth:!0,className:e5("ReactVirtualized__Table__Grid",i),cellRenderer:this._createRow,columnWidth:_,columnCount:1,height:o?d:d-u,id:void 0,noContentRenderer:m,onScroll:this._onScroll,onSectionRendered:this._onSectionRendered,ref:this._setRef,role:"rowgroup",scrollbarWidth:S,scrollToRow:v,style:t8({},c,{overflowX:"hidden"})})))}},{key:"_createColumn",value:function(e){var t=e.column,r=e.columnIndex,n=e.isScrolling,o=e.parent,i=e.rowData,c=e.rowIndex,u=this.props.onColumnClick,h=t.props,d=h.cellDataGetter,p=h.cellRenderer,m=h.className,g=h.columnData,b=h.dataKey,v=h.id,w=p({cellData:d({columnData:g,dataKey:b,rowData:i}),columnData:g,columnIndex:r,dataKey:b,isScrolling:n,parent:o,rowData:i,rowIndex:c}),_=this._cachedColumnStyles[r],S="string"==typeof w?w:null;return U.createElement("div",{"aria-colindex":r+1,"aria-describedby":v,className:e5("ReactVirtualized__Table__rowColumn",m),key:"Row"+c+"-Col"+r,onClick:function(e){u&&u({columnData:g,dataKey:b,event:e})},role:"gridcell",style:_,title:S},w)}},{key:"_createHeader",value:function(e){var t,r,n,o,i,c=e.column,u=e.index,h=this.props,d=h.headerClassName,p=h.headerStyle,m=h.onHeaderClick,g=h.sort,b=h.sortBy,v=h.sortDirection,w=c.props,_=w.columnData,S=w.dataKey,C=w.defaultSortDirection,x=w.disableSort,T=w.headerRenderer,E=w.id,O=w.label,A=!x&&g,D=e5("ReactVirtualized__Table__headerColumn",d,c.props.headerClassName,{ReactVirtualized__Table__sortableHeaderColumn:A}),$=this._getFlexStyleForColumn(c,t8({},p,{},c.props.headerStyle)),P=T({columnData:_,dataKey:S,disableSort:x,label:O,sortBy:b,sortDirection:v});if(A||m){var G=b!==S?C:v===t1.DESC?t1.ASC:t1.DESC,W=function(e){A&&g({defaultSortDirection:C,event:e,sortBy:S,sortDirection:G}),m&&m({columnData:_,dataKey:S,event:e})};i=c.props["aria-label"]||O||S,o="none",n=0,t=W,r=function(e){("Enter"===e.key||" "===e.key)&&W(e)}}return b===S&&(o=v===t1.ASC?"ascending":"descending"),U.createElement("div",{"aria-label":i,"aria-sort":o,className:D,id:E,key:"Header-Col"+u,onClick:t,onKeyDown:r,role:"columnheader",style:$,tabIndex:n},P)}},{key:"_createRow",value:function(e){var t=this,r=e.rowIndex,n=e.isScrolling,o=e.key,i=e.parent,c=e.style,u=this.props,h=u.children,d=u.onRowClick,p=u.onRowDoubleClick,m=u.onRowRightClick,g=u.onRowMouseOver,b=u.onRowMouseOut,v=u.rowClassName,w=u.rowGetter,_=u.rowRenderer,S=u.rowStyle,C=this.state.scrollbarWidth,x="function"==typeof v?v({index:r}):v,T="function"==typeof S?S({index:r}):S,E=w({index:r}),O=U.Children.toArray(h).map(function(e,o){return t._createColumn({column:e,columnIndex:o,isScrolling:n,parent:i,rowData:E,rowIndex:r,scrollbarWidth:C})}),A=e5("ReactVirtualized__Table__row",x),D=t8({},c,{height:this._getRowHeight(r),overflow:"hidden",paddingRight:C},T);return _({className:A,columns:O,index:r,isScrolling:n,key:o,onRowClick:d,onRowDoubleClick:p,onRowRightClick:m,onRowMouseOver:g,onRowMouseOut:b,rowData:E,style:D})}},{key:"_getFlexStyleForColumn",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r="".concat(e.props.flexGrow," ").concat(e.props.flexShrink," ").concat(e.props.width,"px"),n=t8({},t,{flex:r,msFlex:r,WebkitFlex:r});return e.props.maxWidth&&(n.maxWidth=e.props.maxWidth),e.props.minWidth&&(n.minWidth=e.props.minWidth),n}},{key:"_getHeaderColumns",value:function(){var e=this,t=this.props,r=t.children;return(t.disableHeader?[]:U.Children.toArray(r)).map(function(t,r){return e._createHeader({column:t,index:r})})}},{key:"_getRowHeight",value:function(e){var t=this.props.rowHeight;return"function"==typeof t?t({index:e}):t}},{key:"_onScroll",value:function(e){var t=e.clientHeight,r=e.scrollHeight,n=e.scrollTop;(0,this.props.onScroll)({clientHeight:t,scrollHeight:r,scrollTop:n})}},{key:"_onSectionRendered",value:function(e){var t=e.rowOverscanStartIndex,r=e.rowOverscanStopIndex,n=e.rowStartIndex,o=e.rowStopIndex;(0,this.props.onRowsRendered)({overscanStartIndex:t,overscanStopIndex:r,startIndex:n,stopIndex:o})}},{key:"_setRef",value:function(e){this.Grid=e}},{key:"_setScrollbarWidth",value:function(){var e=this.getScrollbarWidth();this.setState({scrollbarWidth:e})}}]),t}(U.PureComponent);eQ(t9,"defaultProps",{disableHeader:!1,estimatedRowSize:30,headerHeight:0,headerStyle:{},noRowsRenderer:function(){return null},onRowsRendered:function(){return null},onScroll:function(){return null},overscanIndicesGetter:tu,overscanRowCount:10,rowRenderer:t3,headerRowRenderer:t0,rowStyle:{},scrollToAlignment:"auto",scrollToIndex:-1,style:{}}),t9.propTypes={};var t7=[],re=null,rt=null;function rr(){rt&&(rt=null,document.body&&null!=re&&(document.body.style.pointerEvents=re),re=null)}function rn(){rr(),t7.forEach(function(e){return e.__resetIsScrolling()})}function ro(e){var t;e.currentTarget===window&&null==re&&document.body&&(re=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),rt&&to(rt),t=0,t7.forEach(function(e){t=Math.max(t,e.props.scrollingResetTimeInterval)}),rt=ti(rn,t),t7.forEach(function(t){t.props.scrollElement===e.currentTarget&&t.__handleWindowScrollEvent()})}function ri(e,t){t7.some(function(e){return e.props.scrollElement===t})||t.addEventListener("scroll",ro),t7.push(e)}function rs(e,t){!(t7=t7.filter(function(t){return t!==e})).length&&(t.removeEventListener("scroll",ro),rt&&(to(rt),rr()))}var ra=function(e){return e===window},rl=function(e){return e.getBoundingClientRect()};function rc(e,t){if(!e)return{height:t.serverHeight,width:t.serverWidth};if(!ra(e))return rl(e);var r=window,n=r.innerHeight,o=r.innerWidth;return{height:"number"==typeof n?n:0,width:"number"==typeof o?o:0}}function ru(e){return ra(e)&&document.documentElement?{top:"scrollY"in window?window.scrollY:document.documentElement.scrollTop,left:"scrollX"in window?window.scrollX:document.documentElement.scrollLeft}:{top:e.scrollTop,left:e.scrollLeft}}function rh(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var rd=function(){return"undefined"!=typeof window?window:void 0},rp=(W=G=function(e){function t(){eW(this,t);for(var e,r,n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return eQ(eZ(r=eV(this,(e=eq(t)).call.apply(e,[this].concat(o)))),"_window",rd()),eQ(eZ(r),"_isMounted",!1),eQ(eZ(r),"_positionFromTop",0),eQ(eZ(r),"_positionFromLeft",0),eQ(eZ(r),"_detectElementResize",void 0),eQ(eZ(r),"_child",void 0),eQ(eZ(r),"state",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?rh(r,!0).forEach(function(t){eQ(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):rh(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},rc(r.props.scrollElement,r.props),{isScrolling:!1,scrollLeft:0,scrollTop:0})),eQ(eZ(r),"_registerChild",function(e){e&&Element,r._child=e,r.updatePosition()}),eQ(eZ(r),"_onChildScroll",function(e){var t=e.scrollTop;if(r.state.scrollTop!==t){var n=r.props.scrollElement;n&&("function"==typeof n.scrollTo?n.scrollTo(0,t+r._positionFromTop):n.scrollTop=t+r._positionFromTop)}}),eQ(eZ(r),"_registerResizeListener",function(e){e===window?window.addEventListener("resize",r._onResize,!1):r._detectElementResize.addResizeListener(e,r._onResize)}),eQ(eZ(r),"_unregisterResizeListener",function(e){e===window?window.removeEventListener("resize",r._onResize,!1):e&&r._detectElementResize.removeResizeListener(e,r._onResize)}),eQ(eZ(r),"_onResize",function(){r.updatePosition()}),eQ(eZ(r),"__handleWindowScrollEvent",function(){if(r._isMounted){var e=r.props.onScroll,t=r.props.scrollElement;if(t){var n=ru(t),o=Math.max(0,n.left-r._positionFromLeft),i=Math.max(0,n.top-r._positionFromTop);r.setState({isScrolling:!0,scrollLeft:o,scrollTop:i}),e({scrollLeft:o,scrollTop:i})}}}),eQ(eZ(r),"__resetIsScrolling",function(){r.setState({isScrolling:!1})}),r}return eK(t,e),ej(t,[{key:"updatePosition",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.scrollElement,t=this.props.onResize,r=this.state,n=r.height,o=r.width,i=this._child||tg.findDOMNode(this);if(i instanceof Element&&e){var c=function(e,t){if(ra(t)&&document.documentElement){var r=document.documentElement,n=rl(e),o=rl(r);return{top:n.top-o.top,left:n.left-o.left}}var i=ru(t),c=rl(e),u=rl(t);return{top:c.top+i.top-u.top,left:c.left+i.left-u.left}}(i,e);this._positionFromTop=c.top,this._positionFromLeft=c.left}var u=rc(e,this.props);(n!==u.height||o!==u.width)&&(this.setState({height:u.height,width:u.width}),t({height:u.height,width:u.width}))}},{key:"componentDidMount",value:function(){var e=this.props.scrollElement;this._detectElementResize=tp(),this.updatePosition(e),e&&(ri(this,e),this._registerResizeListener(e)),this._isMounted=!0}},{key:"componentDidUpdate",value:function(e,t){var r=this.props.scrollElement,n=e.scrollElement;n!==r&&null!=n&&null!=r&&(this.updatePosition(r),rs(this,n),ri(this,r),this._unregisterResizeListener(n),this._registerResizeListener(r))}},{key:"componentWillUnmount",value:function(){var e=this.props.scrollElement;e&&(rs(this,e),this._unregisterResizeListener(e)),this._isMounted=!1}},{key:"render",value:function(){var e=this.props.children,t=this.state,r=t.isScrolling,n=t.scrollTop,o=t.scrollLeft,i=t.height,c=t.width;return e({onChildScroll:this._onChildScroll,registerChild:this._registerChild,height:i,isScrolling:r,scrollLeft:o,scrollTop:n,width:c})}}]),t}(U.PureComponent),eQ(G,"propTypes",null),W);eQ(rp,"defaultProps",{onResize:function(){},onScroll:function(){},scrollingResetTimeInterval:150,scrollElement:rd(),serverHeight:0,serverWidth:0});var rf=(c=function(e,t){return(c=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}c(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),rm=function(){return(rm=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},rg={width:"100%",height:"10px",top:"0px",left:"0px",cursor:"row-resize"},rb={width:"10px",height:"100%",top:"0px",left:"0px",cursor:"col-resize"},rv={width:"20px",height:"20px",position:"absolute"},ry={top:rm(rm({},rg),{top:"-5px"}),right:rm(rm({},rb),{left:void 0,right:"-5px"}),bottom:rm(rm({},rg),{top:void 0,bottom:"-5px"}),left:rm(rm({},rb),{left:"-5px"}),topRight:rm(rm({},rv),{right:"-10px",top:"-10px",cursor:"ne-resize"}),bottomRight:rm(rm({},rv),{right:"-10px",bottom:"-10px",cursor:"se-resize"}),bottomLeft:rm(rm({},rv),{left:"-10px",bottom:"-10px",cursor:"sw-resize"}),topLeft:rm(rm({},rv),{left:"-10px",top:"-10px",cursor:"nw-resize"})},rw=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onMouseDown=function(e){t.props.onResizeStart(e,t.props.direction)},t.onTouchStart=function(e){t.props.onResizeStart(e,t.props.direction)},t}return rf(t,e),t.prototype.render=function(){return U.createElement("div",{className:this.props.className||"",style:rm(rm({position:"absolute",userSelect:"none"},ry[this.props.direction]),this.props.replaceStyles||{}),onMouseDown:this.onMouseDown,onTouchStart:this.onTouchStart},this.props.children)},t}(U.PureComponent),r_=(u=function(e,t){return(u=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}u(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),rS=function(){return(rS=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},rC={width:"auto",height:"auto"},rx=function(e,t,r){return Math.max(Math.min(e,r),t)},rk=function(e,t,r){var n=Math.round(e/t);return n*t+r*(n-1)},rR=function(e,t){return RegExp(e,"i").test(t)},rT=function(e){return!!(e.touches&&e.touches.length)},rE=function(e,t,r){void 0===r&&(r=0);var n=t.reduce(function(r,n,o){return Math.abs(n-e)<Math.abs(t[r]-e)?o:r},0),o=Math.abs(t[n]-e);return 0===r||o<r?t[n]:e},rO=function(e){return"auto"===(e=e.toString())||e.endsWith("px")||e.endsWith("%")||e.endsWith("vh")||e.endsWith("vw")||e.endsWith("vmax")||e.endsWith("vmin")?e:e+"px"},rM=function(e,t,r,n){if(e&&"string"==typeof e){if(e.endsWith("px"))return Number(e.replace("px",""));if(e.endsWith("%")){var o=Number(e.replace("%",""))/100;return t*o}if(e.endsWith("vw")){var o=Number(e.replace("vw",""))/100;return r*o}if(e.endsWith("vh")){var o=Number(e.replace("vh",""))/100;return n*o}}return e},rI=["as","ref","style","className","grid","gridGap","snap","bounds","boundsByDirection","size","defaultSize","minWidth","minHeight","maxWidth","maxHeight","lockAspectRatio","lockAspectRatioExtraWidth","lockAspectRatioExtraHeight","enable","handleStyles","handleClasses","handleWrapperStyle","handleWrapperClass","children","onResizeStart","onResize","onResizeStop","handleComponent","scale","resizeRatio","snapGap"],rA="__resizable_base__",rN=function(e){function t(t){var r,n,o,i,c=e.call(this,t)||this;return c.ratio=1,c.resizable=null,c.parentLeft=0,c.parentTop=0,c.resizableLeft=0,c.resizableRight=0,c.resizableTop=0,c.resizableBottom=0,c.targetLeft=0,c.targetTop=0,c.appendBase=function(){if(!c.resizable||!c.window)return null;var e=c.parentNode;if(!e)return null;var t=c.window.document.createElement("div");return t.style.width="100%",t.style.height="100%",t.style.position="absolute",t.style.transform="scale(0, 0)",t.style.left="0",t.style.flex="0 0 100%",t.classList?t.classList.add(rA):t.className+=rA,e.appendChild(t),t},c.removeBase=function(e){var t=c.parentNode;t&&t.removeChild(e)},c.state={isResizing:!1,width:null!=(n=null==(r=c.propsSize)?void 0:r.width)?n:"auto",height:null!=(i=null==(o=c.propsSize)?void 0:o.height)?i:"auto",direction:"right",original:{x:0,y:0,width:0,height:0},backgroundStyle:{height:"100%",width:"100%",backgroundColor:"rgba(0,0,0,0)",cursor:"auto",opacity:0,position:"fixed",zIndex:9999,top:"0",left:"0",bottom:"0",right:"0"},flexBasis:void 0},c.onResizeStart=c.onResizeStart.bind(c),c.onMouseMove=c.onMouseMove.bind(c),c.onMouseUp=c.onMouseUp.bind(c),c}return r_(t,e),Object.defineProperty(t.prototype,"parentNode",{get:function(){return this.resizable?this.resizable.parentNode:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"window",{get:function(){return this.resizable&&this.resizable.ownerDocument?this.resizable.ownerDocument.defaultView:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"propsSize",{get:function(){return this.props.size||this.props.defaultSize||rC},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"size",{get:function(){var e=0,t=0;if(this.resizable&&this.window){var r=this.resizable.offsetWidth,n=this.resizable.offsetHeight,o=this.resizable.style.position;"relative"!==o&&(this.resizable.style.position="relative"),e="auto"!==this.resizable.style.width?this.resizable.offsetWidth:r,t="auto"!==this.resizable.style.height?this.resizable.offsetHeight:n,this.resizable.style.position=o}return{width:e,height:t}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"sizeStyle",{get:function(){var e=this,t=this.props.size,r=function(t){var r;if(void 0===e.state[t]||"auto"===e.state[t])return"auto";if(e.propsSize&&e.propsSize[t]&&(null==(r=e.propsSize[t])?void 0:r.toString().endsWith("%"))){if(e.state[t].toString().endsWith("%"))return e.state[t].toString();var n=e.getParentSize();return Number(e.state[t].toString().replace("px",""))/n[t]*100+"%"}return rO(e.state[t])};return{width:t&&void 0!==t.width&&!this.state.isResizing?rO(t.width):r("width"),height:t&&void 0!==t.height&&!this.state.isResizing?rO(t.height):r("height")}},enumerable:!1,configurable:!0}),t.prototype.getParentSize=function(){if(!this.parentNode)return this.window?{width:this.window.innerWidth,height:this.window.innerHeight}:{width:0,height:0};var e=this.appendBase();if(!e)return{width:0,height:0};var t=!1,r=this.parentNode.style.flexWrap;"wrap"!==r&&(t=!0,this.parentNode.style.flexWrap="wrap"),e.style.position="relative",e.style.minWidth="100%",e.style.minHeight="100%";var n={width:e.offsetWidth,height:e.offsetHeight};return t&&(this.parentNode.style.flexWrap=r),this.removeBase(e),n},t.prototype.bindEvents=function(){this.window&&(this.window.addEventListener("mouseup",this.onMouseUp),this.window.addEventListener("mousemove",this.onMouseMove),this.window.addEventListener("mouseleave",this.onMouseUp),this.window.addEventListener("touchmove",this.onMouseMove,{capture:!0,passive:!1}),this.window.addEventListener("touchend",this.onMouseUp))},t.prototype.unbindEvents=function(){this.window&&(this.window.removeEventListener("mouseup",this.onMouseUp),this.window.removeEventListener("mousemove",this.onMouseMove),this.window.removeEventListener("mouseleave",this.onMouseUp),this.window.removeEventListener("touchmove",this.onMouseMove,!0),this.window.removeEventListener("touchend",this.onMouseUp))},t.prototype.componentDidMount=function(){if(this.resizable&&this.window){var e=this.window.getComputedStyle(this.resizable);this.setState({width:this.state.width||this.size.width,height:this.state.height||this.size.height,flexBasis:"auto"!==e.flexBasis?e.flexBasis:void 0})}},t.prototype.componentWillUnmount=function(){this.window&&this.unbindEvents()},t.prototype.createSizeForCssProperty=function(e,t){var r=this.propsSize&&this.propsSize[t];return"auto"===this.state[t]&&this.state.original[t]===e&&(void 0===r||"auto"===r)?"auto":e},t.prototype.calculateNewMaxFromBoundary=function(e,t){var r,n,o=this.props.boundsByDirection,i=this.state.direction,c=o&&rR("left",i),u=o&&rR("top",i);if("parent"===this.props.bounds){var h=this.parentNode;h&&(r=c?this.resizableRight-this.parentLeft:h.offsetWidth+(this.parentLeft-this.resizableLeft),n=u?this.resizableBottom-this.parentTop:h.offsetHeight+(this.parentTop-this.resizableTop))}else"window"===this.props.bounds?this.window&&(r=c?this.resizableRight:this.window.innerWidth-this.resizableLeft,n=u?this.resizableBottom:this.window.innerHeight-this.resizableTop):this.props.bounds&&(r=c?this.resizableRight-this.targetLeft:this.props.bounds.offsetWidth+(this.targetLeft-this.resizableLeft),n=u?this.resizableBottom-this.targetTop:this.props.bounds.offsetHeight+(this.targetTop-this.resizableTop));return r&&Number.isFinite(r)&&(e=e&&e<r?e:r),n&&Number.isFinite(n)&&(t=t&&t<n?t:n),{maxWidth:e,maxHeight:t}},t.prototype.calculateNewSizeFromDirection=function(e,t){var r,n=this.props.scale||1,o=Array.isArray(r=this.props.resizeRatio||1)?r:[r,r],i=o[0],c=o[1],u=this.state,h=u.direction,d=u.original,p=this.props,m=p.lockAspectRatio,g=p.lockAspectRatioExtraHeight,b=p.lockAspectRatioExtraWidth,v=d.width,w=d.height,_=g||0,S=b||0;return rR("right",h)&&(v=d.width+(e-d.x)*i/n,m&&(w=(v-S)/this.ratio+_)),rR("left",h)&&(v=d.width-(e-d.x)*i/n,m&&(w=(v-S)/this.ratio+_)),rR("bottom",h)&&(w=d.height+(t-d.y)*c/n,m&&(v=(w-_)*this.ratio+S)),rR("top",h)&&(w=d.height-(t-d.y)*c/n,m&&(v=(w-_)*this.ratio+S)),{newWidth:v,newHeight:w}},t.prototype.calculateNewSizeFromAspectRatio=function(e,t,r,n){var o=this.props,i=o.lockAspectRatio,c=o.lockAspectRatioExtraHeight,u=o.lockAspectRatioExtraWidth,h=void 0===n.width?10:n.width,d=void 0===r.width||r.width<0?e:r.width,p=void 0===n.height?10:n.height,m=void 0===r.height||r.height<0?t:r.height,g=c||0,b=u||0;if(i){var v=(p-g)*this.ratio+b,w=(m-g)*this.ratio+b,_=(h-b)/this.ratio+g,S=(d-b)/this.ratio+g;e=rx(e,Math.max(h,v),Math.min(d,w)),t=rx(t,Math.max(p,_),Math.min(m,S))}else e=rx(e,h,d),t=rx(t,p,m);return{newWidth:e,newHeight:t}},t.prototype.setBoundingClientRect=function(){var e=1/(this.props.scale||1);if("parent"===this.props.bounds){var t=this.parentNode;if(t){var r=t.getBoundingClientRect();this.parentLeft=r.left*e,this.parentTop=r.top*e}}if(this.props.bounds&&"string"!=typeof this.props.bounds){var n=this.props.bounds.getBoundingClientRect();this.targetLeft=n.left*e,this.targetTop=n.top*e}if(this.resizable){var o=this.resizable.getBoundingClientRect(),i=o.left,c=o.top,u=o.right,h=o.bottom;this.resizableLeft=i*e,this.resizableRight=u*e,this.resizableTop=c*e,this.resizableBottom=h*e}},t.prototype.onResizeStart=function(e,t){if(this.resizable&&this.window){var r,n,o=0,i=0;if(e.nativeEvent&&((r=e.nativeEvent).clientX||0===r.clientX)&&(r.clientY||0===r.clientY)?(o=e.nativeEvent.clientX,i=e.nativeEvent.clientY):e.nativeEvent&&rT(e.nativeEvent)&&(o=e.nativeEvent.touches[0].clientX,i=e.nativeEvent.touches[0].clientY),!this.props.onResizeStart||!this.resizable||!1!==this.props.onResizeStart(e,t,this.resizable)){this.props.size&&(void 0!==this.props.size.height&&this.props.size.height!==this.state.height&&this.setState({height:this.props.size.height}),void 0!==this.props.size.width&&this.props.size.width!==this.state.width&&this.setState({width:this.props.size.width})),this.ratio="number"==typeof this.props.lockAspectRatio?this.props.lockAspectRatio:this.size.width/this.size.height;var c=this.window.getComputedStyle(this.resizable);if("auto"!==c.flexBasis){var u=this.parentNode;if(u){var h=this.window.getComputedStyle(u).flexDirection;this.flexDir=h.startsWith("row")?"row":"column",n=c.flexBasis}}this.setBoundingClientRect(),this.bindEvents();var d={original:{x:o,y:i,width:this.size.width,height:this.size.height},isResizing:!0,backgroundStyle:rS(rS({},this.state.backgroundStyle),{cursor:this.window.getComputedStyle(e.target).cursor||"auto"}),direction:t,flexBasis:n};this.setState(d)}}},t.prototype.onMouseMove=function(e){var t,r,n,o,i,c,u=this;if(this.state.isResizing&&this.resizable&&this.window){if(this.window.TouchEvent&&rT(e))try{e.preventDefault(),e.stopPropagation()}catch(e){}var h=this.props,d=h.maxWidth,p=h.maxHeight,m=h.minWidth,g=h.minHeight,b=rT(e)?e.touches[0].clientX:e.clientX,v=rT(e)?e.touches[0].clientY:e.clientY,w=this.state,_=w.direction,S=w.original,C=w.width,x=w.height,T=this.getParentSize(),E=(t=this.window.innerWidth,r=this.window.innerHeight,n=d,o=p,i=m,c=g,n=rM(n,T.width,t,r),o=rM(o,T.height,t,r),i=rM(i,T.width,t,r),c=rM(c,T.height,t,r),{maxWidth:void 0===n?void 0:Number(n),maxHeight:void 0===o?void 0:Number(o),minWidth:void 0===i?void 0:Number(i),minHeight:void 0===c?void 0:Number(c)});d=E.maxWidth,p=E.maxHeight,m=E.minWidth,g=E.minHeight;var O=this.calculateNewSizeFromDirection(b,v),A=O.newHeight,D=O.newWidth,$=this.calculateNewMaxFromBoundary(d,p);this.props.snap&&this.props.snap.x&&(D=rE(D,this.props.snap.x,this.props.snapGap)),this.props.snap&&this.props.snap.y&&(A=rE(A,this.props.snap.y,this.props.snapGap));var P=this.calculateNewSizeFromAspectRatio(D,A,{width:$.maxWidth,height:$.maxHeight},{width:m,height:g});if(D=P.newWidth,A=P.newHeight,this.props.grid){var G=rk(D,this.props.grid[0],this.props.gridGap?this.props.gridGap[0]:0),W=rk(A,this.props.grid[1],this.props.gridGap?this.props.gridGap[1]:0),F=this.props.snapGap||0,B=0===F||Math.abs(G-D)<=F?G:D,U=0===F||Math.abs(W-A)<=F?W:A;D=B,A=U}var j={width:D-S.width,height:A-S.height};if(C&&"string"==typeof C){if(C.endsWith("%")){var Z=D/T.width*100;D=Z+"%"}else if(C.endsWith("vw")){var V=D/this.window.innerWidth*100;D=V+"vw"}else if(C.endsWith("vh")){var q=D/this.window.innerHeight*100;D=q+"vh"}}if(x&&"string"==typeof x){if(x.endsWith("%")){var Z=A/T.height*100;A=Z+"%"}else if(x.endsWith("vw")){var V=A/this.window.innerWidth*100;A=V+"vw"}else if(x.endsWith("vh")){var q=A/this.window.innerHeight*100;A=q+"vh"}}var K={width:this.createSizeForCssProperty(D,"width"),height:this.createSizeForCssProperty(A,"height")};"row"===this.flexDir?K.flexBasis=K.width:"column"===this.flexDir&&(K.flexBasis=K.height);var Q=this.state.width!==K.width,X=this.state.height!==K.height,J=this.state.flexBasis!==K.flexBasis,ee=Q||X||J;ee&&(0,tg.flushSync)(function(){u.setState(K)}),this.props.onResize&&ee&&this.props.onResize(e,_,this.resizable,j)}},t.prototype.onMouseUp=function(e){var t,r,n=this.state,o=n.isResizing,i=n.direction,c=n.original;if(o&&this.resizable){var u={width:this.size.width-c.width,height:this.size.height-c.height};this.props.onResizeStop&&this.props.onResizeStop(e,i,this.resizable,u),this.props.size&&this.setState({width:null!=(t=this.props.size.width)?t:"auto",height:null!=(r=this.props.size.height)?r:"auto"}),this.unbindEvents(),this.setState({isResizing:!1,backgroundStyle:rS(rS({},this.state.backgroundStyle),{cursor:"auto"})})}},t.prototype.updateSize=function(e){var t,r;this.setState({width:null!=(t=e.width)?t:"auto",height:null!=(r=e.height)?r:"auto"})},t.prototype.renderResizer=function(){var e=this,t=this.props,r=t.enable,n=t.handleStyles,o=t.handleClasses,i=t.handleWrapperStyle,c=t.handleWrapperClass,u=t.handleComponent;if(!r)return null;var h=Object.keys(r).map(function(t){return!1!==r[t]?U.createElement(rw,{key:t,direction:t,onResizeStart:e.onResizeStart,replaceStyles:n&&n[t],className:o&&o[t]},u&&u[t]?u[t]:null):null});return U.createElement("div",{className:c,style:i},h)},t.prototype.render=function(){var e=this,t=Object.keys(this.props).reduce(function(t,r){return -1!==rI.indexOf(r)||(t[r]=e.props[r]),t},{}),r=rS(rS(rS({position:"relative",userSelect:this.state.isResizing?"none":"auto"},this.props.style),this.sizeStyle),{maxWidth:this.props.maxWidth,maxHeight:this.props.maxHeight,minWidth:this.props.minWidth,minHeight:this.props.minHeight,boxSizing:"border-box",flexShrink:0});this.state.flexBasis&&(r.flexBasis=this.state.flexBasis);var n=this.props.as||"div";return U.createElement(n,rS({style:r,className:this.props.className},t,{ref:function(t){t&&(e.resizable=t)}}),this.state.isResizing&&U.createElement("div",{style:this.state.backgroundStyle}),this.props.children,this.renderResizer())},t.defaultProps={as:"div",onResizeStart:function(){},onResize:function(){},onResizeStop:function(){},enable:{top:!0,right:!0,bottom:!0,left:!0,topRight:!0,bottomRight:!0,bottomLeft:!0,topLeft:!0},style:{},grid:[1,1],gridGap:[0,0],lockAspectRatio:!1,lockAspectRatioExtraWidth:0,lockAspectRatioExtraHeight:0,scale:1,resizeRatio:1,snapGap:0},t}(U.PureComponent);let rD={bottom:"bottom",left:"left",right:"right",top:"top"},rz={top:!1,right:!1,bottom:!1,left:!1,topRight:!1,bottomRight:!1,bottomLeft:!1,topLeft:!1},r$={min:0,max:1/0},rP=({height:e,heightConstraints:t,width:r,widthConstraints:n})=>({height:(0,eO.q)(e,t.min,t.max),width:(0,eO.q)(r,n.min,n.max)}),rL=({deltaWidth:e,deltaHeight:t},{heightConstraints:r,widthConstraints:n},{initialHeight:o,initialWidth:i})=>rP({height:o+t,heightConstraints:r,width:i+e,widthConstraints:n}),rH=({enable:e,height:t,heightConstraints:r,resizeEdge:n,width:o=0,widthConstraints:i})=>({...rP({height:t,widthConstraints:i,heightConstraints:r,width:o}),enable:void 0===e||e,horizontal:n===rD.left||n===rD.right,initialHeight:t,initialWidth:o,resizing:!1,isMouseWheeling:!1,vertical:n===rD.top||n===rD.bottom});let ob=class ob extends j().PureComponent{static defaultProps={className:"",enable:!0,heightConstraints:r$,resizeContentClassName:"",resizeHandleClassName:"",style:{},wrapperStyle:{},translate:()=>"",wrapChildrenInDivContainer:!0,widthConstraints:r$};onWheelTimeOut;isMouseWheeling=!1;constructor(e){super(e),this.state=rH(e)}static getDerivedStateFromProps(e,t){return t.resizing?t:rH(e)}componentDidUpdate(e){let{onResizeFromPropChange:t}=this.props,{height:r,resizing:n,width:o}=this.state,{onResizeFromPropChange:i}=e;if(n)return;let{height:c,width:u}=this.state,h=i||t;h&&(c!==r||u!==o)&&h({height:c,width:u,originalHeight:r,originalWidth:o})}_onResize=(e,t,r,{height:n,width:o})=>{let{onResize:i}=this.props,{height:c,horizontal:u,vertical:h,width:d}=this.state,{height:p,width:m}=rL({deltaWidth:o,deltaHeight:n},this.props,this.state),g=u&&m!==d,b=h&&p!==c;(g||b)&&(this.setState({height:b?p:c,width:g?m:d,isMouseWheeling:!1}),i&&i({height:b?p:void 0,width:g?m:void 0}))};_onResizeStart=e=>{e.preventDefault(),e.stopPropagation();let{onResizeStart:t}=this.props,{height:r,horizontal:n,vertical:o,width:i}=this.state;this.setState({resizing:!0}),t&&t({height:o?r:void 0,width:n?i:void 0})};_onResizeEnd=()=>{let{onResizeEnd:e}=this.props,{height:t,horizontal:r,vertical:n,width:o,initialWidth:i,initialHeight:c}=this.state;this.setState({initialWidth:o,initialHeight:t,resizing:!1}),(i!==o||c!==t)&&e&&e({width:r?o:void 0,height:n?t:void 0})};_onWheel=()=>{this.isMouseWheeling||(this.isMouseWheeling=!0,this.setState({isMouseWheeling:!0})),clearTimeout(this.onWheelTimeOut),this.onWheelTimeOut=setTimeout(()=>{this.isMouseWheeling=!1,this.setState({isMouseWheeling:!1})},50)};render(){let{children:e,className:t,handleStyles:r,id:n,resizeContentClassName:o,resizeEdge:i,resizeHandleClassName:c,style:u,translate:h,heightConstraints:d,wrapChildrenInDivContainer:p,widthConstraints:m}=this.props,{enable:g,height:b,horizontal:v,resizing:w,vertical:_,width:S,isMouseWheeling:C}=this.state,{display:x,...T}=u,{min:E,max:O}=m,{min:A,max:D}=d,$={...this.props.wrapperStyle};v&&($.width=S,$.minWidth=S),_&&($.height=b,$.minHeight=b);let P=B()("resizable",t,{resizing:w}),G=B()("contents",o,`resize-edge-${i}`,{horizontal:v,vertical:_}),W=B()(i,c,"resizable-handle",{horizontal:v,vertical:_}),F=j().createElement("span",{title:h("ResizePanel")});return j().createElement("div",{"data-testid":`resizable-${n||""}`,onWheel:this._onWheel,style:{...$,display:x}},j().createElement(rN,{className:P,"data-testid":`resizable-core-${n||""}`,enable:{...rz,[i]:!C&&g},handleClasses:{[i]:W},handleComponent:{[i]:F},handleStyles:r,maxHeight:_?D:void 0,maxWidth:v?O:void 0,minHeight:_?A:void 0,minWidth:v?E:void 0,onResize:this._onResize,onResizeStart:this._onResizeStart,onResizeStop:this._onResizeEnd,size:{height:_?b:"100%",width:v?S:"100%"},style:T},p?j().createElement("div",{className:G,style:{userSelect:"none"}},e):e))}};var rG=n(468);let oO=class oO extends j().PureComponent{canvas;componentDidMount(){this.updateCanvas()}componentDidUpdate(e){(e.branchUpstreamRowIndices!==this.props.branchUpstreamRowIndices||e.markerRowIndices!==this.props.markerRowIndices||e.totalRows!==this.props.totalRows||e.viewportHeight!==this.props.viewportHeight||e.viewportWidth!==this.props.viewportWidth||e.markerColors!==this.props.markerColors||e.enabledScrollMarkerTypes!==this.props.enabledScrollMarkerTypes||e.scrollWidth!==this.props.scrollWidth)&&this.updateCanvas()}updateCanvas(e){let{branchUpstreamRowIndices:t,enabledScrollMarkerTypes:r,viewportHeight:n,markerRowIndices:o,markerColors:i,scrollWidth:c,totalRows:u}=e||this.props,h=this.canvas.getContext("2d");h.canvas.width=c,h.canvas.height=n;let d=c/et.Yx;for(let[e,c]of(h.clearRect(0,0,h.canvas.width,h.canvas.height),Object.entries(et.wx))){if(!r.includes(e)&&!("remoteBranches"===e&&r.includes("localBranches")))continue;let p="remoteBranches"!==e||r.includes("remoteBranches")?o[e]||[]:t,m=i[e],g=c.lanes;m&&p.length&&(h.fillStyle=m,p.forEach(t=>{let{height:r,offset:o}=function(e,t,r){let n=t*et.yB,{shape:o}=et.wx[e],i=et.j[o];if(!i)return{height:0,offset:0};let{baseHeight:c,minHeight:u,maxHeight:h}=i,d=r/n*c;void 0!==u&&d<u&&(d=u),void 0!==h&&d>h&&(d=h);let p=et.yB*(r/n),m=d>=p?0:(p-d)/2;return{height:d,offset:m}}(e,u,n);g.length&&h.fillRect(g[0]*d,function(e,t,r){let n=r*et.yB;return e*et.yB/n*t}(t,n,u)+o-.5*r,d*g.length,r)}))}}render(){return j().createElement("canvas",{className:"graph-scroll-markers",ref:e=>{this.canvas=e}})}};var rW=function({children:e,className:t,height:r,heightAdjustment:n,graphZoneType:o,scrollTop:i,style:c}){let u=et.W[o].listId,h=document.getElementById(u),d=h?.scrollHeight||0,p=r-28;void 0!==i&&(p=Number(c.top)-i,h&&d-r-i<0&&(p=r-n-28));let m={top:p,zIndex:2},g=j().createElement("span",{className:"absolute",style:m},e);return j().createElement("div",{className:t,style:c},h?tb().createPortal(g,document.getElementById("graph-container")):g)};function rF({inline:e,getExternalIcon:t,message:r,size:n=100,useSimpleSpinner:o}){let i=B()("loading-spinner",{"inline-block":e,ml2:e,"shrink-0":e}),c=B()("spinner","mr1",{"inline-block":e}),u={height:n,width:n},h=B()("message",{"inline-block":e,mx2:e}),d=o?j().createElement("span",{className:c,style:u},t("loading")):j().createElement("div",{className:c,style:u},j().createElement("img",{className:"ring outer",src:"../../../images/spinner-outer-ring.svg",style:u}),j().createElement("img",{className:"ring inner",src:"../../../images/spinner-inner-ring.svg",style:u}),j().createElement("img",{className:"bg-img",src:"../../../images/spinner-kraken.svg",style:u}));return j().createElement("div",{className:i},d,r&&j().createElement("div",{className:h},r))}let ox=class ox extends j().Component{render(){let{currentCommits:e,customFooterRow:t,graphZoneType:r,hasMoreCommits:n,height:o,horizontalScrollHeight:i,getExternalIcon:c,isLoadingRows:u,scrollTop:h,style:d,translate:p}=this.props,m=j().createElement(rF,{className:"loading-spinner",getExternalIcon:c,size:20,useSimpleSpinner:!0}),g=j().createElement("div",{className:"flex items-center"},j().createElement("span",{style:{paddingRight:"5px"}},m)),b=0!==(e>0?e:0)||n?t:j().createElement(j().Fragment,null,p("Graph-NoCommits")),v=j().createElement("div",{className:"graph-adjust-commit-count p1"},u?g:b);return j().createElement(rW,{graphZoneType:r,height:o,heightAdjustment:i,scrollTop:h,style:d},v)}};function rB({branchUpstreamRowIndices:e,rowCount:t,cellRenderersByIds:r,columnIndex:n,customFooterRow:o,enabledScrollMarkerTypes:i,enableResizer:c,getExternalIcon:u,getKeyForCell:h,graphHeight:d,graphWidth:p,graphZoneType:m,graphZones:g,hasMoreCommits:b,horizontalScrollHeight:v,isLoadingRows:w,markerColors:_,markerRowIndices:S,onResize:C,onResizeEnd:x,onResizeFromPropChange:T,onScroll:E,onScrollToRowCausedUpdate:O,onZoneEnter:A,scrollLeft:D,scrollToAlignment:$,scrollToIndex:P,scrollTop:G,smartCellRangeRenderer:W,translate:F,verticalScrollWidth:U}){let Z=(0,eC.Et)(m,g);if(!Z)return null;let V=document.getElementById(Z.listId),q=(0,eC.z)(m,g),K=(0,eC.Yy)(t,b,w),Q=(0,eC.yJ)(t,b,w),X=(0,eC.U0)(Z,t),J=(0,eC.Ve)(t,b,w),ee=U>0,er=i.length>0,en=B()("graph-panel","react-virtualized-list","pad-for-horizontal-scrollbar",m===et.ui?"z3":null,{"pad-for-vertical-scrollbar":ee}),eo=m===et.md?{...!q&&{position:"static"},...q&&{width:Z.currentWidth>X?Z.currentWidth:X,maxWidth:"none"}}:void 0,ei=(e,t)=>{e.scrollTop>t&&V&&(0,eC.br)(V)||E(m,e,p,d,b)},es=(e,t)=>{let r=t+e.deltaY;(r=r>=0?r:0)>t&&V&&(0,eC.br)(V)||E(m,{clientHeight:J,clientWidth:X,scrollHeight:v,scrollLeft:0,scrollTop:r>=0?r:0,scrollWidth:U},p,d,b)},ea=(e,t,r)=>j().createElement("span",{"data-column-name":t,"data-row-idx":r.rowIndex,key:`gk-row-${r.key}`,style:{top:r.style.top}},e),el=(e,i)=>{if(i.rowIndex>t-1)return K&&0===n?j().createElement(ox,{currentCommits:t-1,customFooterRow:o,getExternalIcon:u,graphZoneType:m,hasMoreCommits:b,height:d,horizontalScrollHeight:v,isLoadingRows:w,key:h(i.rowIndex),scrollTop:G,style:i.style,translate:F}):void 0;let c={...i,style:{...i.style}};et.OU===e&&(c.style.top=Number(i.style.top)-G);let p=r[e];return p?ea(p(c),e,i):void 0},ec=(e,t,r,n,o,i,c,u)=>j().createElement(tc,{autoContainerWidth:!0,cellRangeRenderer:W,cellRenderer:t=>el(e,t),className:r,columnCount:1,columnWidth:u,containerStyle:n,height:c,id:t,isScrolling:!1,key:t,onScrollToTargetCausedUpdate:O?e=>O(m,e,p,d,b):void 0,overscanRowCount:0,rowCount:Q,rowHeight:et.yB,scrollLeft:D,scrollToAlignment:$,scrollTop:G,scrollToRow:P,style:o,tabIndex:null,width:i}),eu=ec(Z.type,Z.listId,en,eo,{position:"absolute"},Z.currentWidth,d,X),eh=q?j().createElement("div",{className:"timeline-column-container",onWheelCapture:e=>es(e,G)},ec(et.OU,"timeline-column","graph-panel react-virtualized-list timeline-column",{overflow:"visible",zIndex:3,maxHeight:J},{position:"absolute",right:0,zIndex:3,maxHeight:d},1,d,1)):void 0,ed=eu&&j().createElement(j().Fragment,null,eh,er&&q?j().createElement(oO,{branchUpstreamRowIndices:e,enabledScrollMarkerTypes:i,markerColors:_,markerRowIndices:S,scrollWidth:U,totalRows:Q,viewportHeight:d<J?d:J,viewportWidth:Z.currentWidth}):null,j().createElement(rG.A,{contentHeight:J,contentWidth:X,displayHorizontalScrollbar:Z.type===et.md,displayVerticalScrollbar:q,forceOnVerticalWheel:!q,forceVerticalScrollbar:q&&er,height:d,onScroll:e=>ei(e,G),scrollLeft:D,scrollTop:G,width:Z.currentWidth},eu)),ep=j().createElement("div",{onMouseEnter:A},ed);return q?ep:j().createElement(ob,{enable:c,height:d,id:`${m}Column`,key:`${m}Column`,onResize:C?e=>C(Z,e):void 0,onResizeEnd:x?e=>x(Z,e):void 0,onResizeFromPropChange:T?e=>T(Z,e):void 0,resizeContentClassName:"z1",resizeEdge:"right",resizeHandleClassName:"z1",width:Z.currentWidth,widthConstraints:(0,eC.qC)(m,g,p)},ep)}var rU=n(547),rj=n.n(rU);let rZ="dnd-container";let oG=class oG extends j().PureComponent{dndDrake;childReactElementsById={};constructor(e){super(e),this.loadChildrenReactElements(this.props.children)}componentDidMount(){this.dndDrake&&this.dndDrake.on("drop",this.onDrop)}componentDidUpdate(e){this.props.children!==e.children&&this.loadChildrenReactElements(e.children)}componentWillUnmount(){this.dndDrake&&this.dndDrake.destroy()}onDrop=(e,t,r,n)=>{if(this.props.onDrop&&e.id){let t=this.sanitizeId(e.id),r=n?.id?this.sanitizeId(n.id):null,o=this.childReactElementsById[t],i=r?this.childReactElementsById[r]:null;o&&this.props.onDrop(o,i)}};isContainerCallback=e=>!!e?.classList.contains(rZ);movesCallback=e=>!!e?.id&&this.isDraggable(e.id);acceptsCallback=(e,t,r,n)=>!!e?.id&&this.isDroppable(e.id,n?.id);invalidCallBack=()=>!1;dndDecorator=e=>{if(e){let t={isContainer:this.isContainerCallback,mirrorContainer:this.props.mirrorContainer,moves:this.movesCallback,accepts:this.acceptsCallback,invalid:this.invalidCallBack,direction:this.props.direction||"horizontal",copy:!1,copySortSource:!1,revertOnSpill:!1,removeOnSpill:!1,ignoreInputTextSelection:!0};this.dndDrake=rj()([e],t)}};loadChildrenReactElements(e){this.childReactElementsById={},e&&(e instanceof Array?e.forEach(e=>{j().isValidElement(e)&&this.addChildReactElement(e)}):j().isValidElement(e)&&this.addChildReactElement(e))}addChildReactElement(e){let t=e.props.id;t&&(this.childReactElementsById[this.sanitizeId(t)]=e)}sanitizeId(e){return e.trim().toLowerCase().replace(/-/g,"").replace(/_/g,"")}isDraggable(e){if(this.props.isDraggable){let t=this.sanitizeId(e),r=this.childReactElementsById[t];return!!r&&this.props.isDraggable(r)}return!1}isDroppable(e,t){if(this.props.isDroppable){let r=this.sanitizeId(e),n=t?this.sanitizeId(t):null,o=this.childReactElementsById[r],i=n?this.childReactElementsById[n]:null;if(o)return this.props.isDroppable(o,i)}return!1}render(){let{children:e,className:t}=this.props,r=B()(rZ,t);return j().createElement("div",{className:r,ref:this.dndDecorator},e)}};function rV(){return(0,U.useState)(null)}let rq=e=>e&&"function"!=typeof e?t=>{e.current=t}:e,rY=function(e,t){return(0,U.useMemo)(()=>{let r,n;return r=rq(e),n=rq(t),e=>{r&&r(e),n&&n(e)}},[e,t])};var rK=Object.prototype.hasOwnProperty;function rQ(e,t,r){for(r of e.keys())if(rX(r,t))return r}function rX(e,t){var r,n,o;if(e===t)return!0;if(e&&t&&(r=e.constructor)===t.constructor){if(r===Date)return e.getTime()===t.getTime();if(r===RegExp)return e.toString()===t.toString();if(r===Array){if((n=e.length)===t.length)for(;n--&&rX(e[n],t[n]););return -1===n}if(r===Set){if(e.size!==t.size)return!1;for(n of e)if((o=n)&&"object"==typeof o&&!(o=rQ(t,o))||!t.has(o))return!1;return!0}if(r===Map){if(e.size!==t.size)return!1;for(n of e)if((o=n[0])&&"object"==typeof o&&!(o=rQ(t,o))||!rX(n[1],t.get(o)))return!1;return!0}if(r===ArrayBuffer)e=new Uint8Array(e),t=new Uint8Array(t);else if(r===DataView){if((n=e.byteLength)===t.byteLength)for(;n--&&e.getInt8(n)===t.getInt8(n););return -1===n}if(ArrayBuffer.isView(e)){if((n=e.byteLength)===t.byteLength)for(;n--&&e[n]===t[n];);return -1===n}if(!r||"object"==typeof e){for(r in n=0,e)if(rK.call(e,r)&&++n&&!rK.call(t,r)||!(r in t)||!rX(e[r],t[r]))return!1;return Object.keys(t).length===n}}return e!=e&&t!=t}let rJ=function(e){let t,r,n=(t=(0,U.useRef)(!0),r=(0,U.useRef)(()=>t.current),(0,U.useEffect)(()=>(t.current=!0,()=>{t.current=!1}),[]),r.current);return[e[0],(0,U.useCallback)(t=>{if(n())return e[1](t)},[n,e[1]])]};function r0(e){return e.split("-")[0]}function r1(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function r2(e){var t=r1(e).Element;return e instanceof t||e instanceof Element}function r5(e){var t=r1(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function r3(e){if("undefined"==typeof ShadowRoot)return!1;var t=r1(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}var r6=Math.max,r4=Math.min,r8=Math.round;function r9(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function r7(){return!/^((?!chrome|android).)*safari/i.test(r9())}function ne(e,t,r){void 0===t&&(t=!1),void 0===r&&(r=!1);var n=e.getBoundingClientRect(),o=1,i=1;t&&r5(e)&&(o=e.offsetWidth>0&&r8(n.width)/e.offsetWidth||1,i=e.offsetHeight>0&&r8(n.height)/e.offsetHeight||1);var c=(r2(e)?r1(e):window).visualViewport,u=!r7()&&r,h=(n.left+(u&&c?c.offsetLeft:0))/o,d=(n.top+(u&&c?c.offsetTop:0))/i,p=n.width/o,m=n.height/i;return{width:p,height:m,top:d,right:h+p,bottom:d+m,left:h,x:h,y:d}}function nt(e){var t=ne(e),r=e.offsetWidth,n=e.offsetHeight;return 1>=Math.abs(t.width-r)&&(r=t.width),1>=Math.abs(t.height-n)&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function nr(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&r3(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function no(e){return e?(e.nodeName||"").toLowerCase():null}function na(e){return r1(e).getComputedStyle(e)}function nl(e){return((r2(e)?e.ownerDocument:e.document)||window.document).documentElement}function nc(e){return"html"===no(e)?e:e.assignedSlot||e.parentNode||(r3(e)?e.host:null)||nl(e)}function nu(e){return r5(e)&&"fixed"!==na(e).position?e.offsetParent:null}function nh(e){for(var t=r1(e),r=nu(e);r&&["table","td","th"].indexOf(no(r))>=0&&"static"===na(r).position;)r=nu(r);return r&&("html"===no(r)||"body"===no(r)&&"static"===na(r).position)?t:r||function(e){var t=/firefox/i.test(r9());if(/Trident/i.test(r9())&&r5(e)&&"fixed"===na(e).position)return null;var r=nc(e);for(r3(r)&&(r=r.host);r5(r)&&0>["html","body"].indexOf(no(r));){var n=na(r);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||t&&"filter"===n.willChange||t&&n.filter&&"none"!==n.filter)return r;r=r.parentNode}return null}(e)||t}function nd(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function np(e,t,r){return r6(e,r4(t,r))}function nm(){return{top:0,right:0,bottom:0,left:0}}function ng(e){return Object.assign({},nm(),e)}function nb(e,t){return t.reduce(function(t,r){return t[r]=e,t},{})}var ny="bottom",nw="right",n_="left",nS="auto",nC=["top",ny,nw,n_],nR="start",nT="viewport",nE="popper",nO=nC.reduce(function(e,t){return e.concat([t+"-"+nR,t+"-end"])},[]),nM=[].concat(nC,[nS]).reduce(function(e,t){return e.concat([t,t+"-"+nR,t+"-end"])},[]),nI=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function nA(e){return e.split("-")[1]}var nN={top:"auto",right:"auto",bottom:"auto",left:"auto"};function nD(e){var t,r,n,o,i,c,u,h=e.popper,d=e.popperRect,p=e.placement,m=e.variation,g=e.offsets,b=e.position,v=e.gpuAcceleration,w=e.adaptive,_=e.roundOffsets,S=e.isFixed,C=g.x,x=void 0===C?0:C,T=g.y,E=void 0===T?0:T,O="function"==typeof _?_({x:x,y:E}):{x:x,y:E};x=O.x,E=O.y;var A=g.hasOwnProperty("x"),D=g.hasOwnProperty("y"),$=n_,P="top",G=window;if(w){var W=nh(h),F="clientHeight",B="clientWidth";W===r1(h)&&"static"!==na(W=nl(h)).position&&"absolute"===b&&(F="scrollHeight",B="scrollWidth"),("top"===p||(p===n_||p===nw)&&"end"===m)&&(P=ny,E-=(S&&W===G&&G.visualViewport?G.visualViewport.height:W[F])-d.height,E*=v?1:-1),(p===n_||("top"===p||p===ny)&&"end"===m)&&($=nw,x-=(S&&W===G&&G.visualViewport?G.visualViewport.width:W[B])-d.width,x*=v?1:-1)}var U=Object.assign({position:b},w&&nN),j=!0===_?(t={x:x,y:E},r=r1(h),n=t.x,o=t.y,{x:r8(n*(i=r.devicePixelRatio||1))/i||0,y:r8(o*i)/i||0}):{x:x,y:E};return(x=j.x,E=j.y,v)?Object.assign({},U,((u={})[P]=D?"0":"",u[$]=A?"0":"",u.transform=1>=(G.devicePixelRatio||1)?"translate("+x+"px, "+E+"px)":"translate3d("+x+"px, "+E+"px, 0)",u)):Object.assign({},U,((c={})[P]=D?E+"px":"",c[$]=A?x+"px":"",c.transform="",c))}var nz={passive:!0},n$={left:"right",right:"left",bottom:"top",top:"bottom"};function nP(e){return e.replace(/left|right|bottom|top/g,function(e){return n$[e]})}var nL={start:"end",end:"start"};function nH(e){return e.replace(/start|end/g,function(e){return nL[e]})}function nG(e){var t=r1(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function nW(e){return ne(nl(e)).left+nG(e).scrollLeft}function nF(e){var t=na(e),r=t.overflow,n=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function nB(e,t){void 0===t&&(t=[]);var r,n=function e(t){return["html","body","#document"].indexOf(no(t))>=0?t.ownerDocument.body:r5(t)&&nF(t)?t:e(nc(t))}(e),o=n===(null==(r=e.ownerDocument)?void 0:r.body),i=r1(n),c=o?[i].concat(i.visualViewport||[],nF(n)?n:[]):n,u=t.concat(c);return o?u:u.concat(nB(nc(c)))}function nU(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function nj(e,t,r){var n,o,i,c,u,h,d,p,m,g;return t===nT?nU(function(e,t){var r=r1(e),n=nl(e),o=r.visualViewport,i=n.clientWidth,c=n.clientHeight,u=0,h=0;if(o){i=o.width,c=o.height;var d=r7();(d||!d&&"fixed"===t)&&(u=o.offsetLeft,h=o.offsetTop)}return{width:i,height:c,x:u+nW(e),y:h}}(e,r)):r2(t)?((n=ne(t,!1,"fixed"===r)).top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n):nU((o=nl(e),c=nl(o),u=nG(o),h=null==(i=o.ownerDocument)?void 0:i.body,d=r6(c.scrollWidth,c.clientWidth,h?h.scrollWidth:0,h?h.clientWidth:0),p=r6(c.scrollHeight,c.clientHeight,h?h.scrollHeight:0,h?h.clientHeight:0),m=-u.scrollLeft+nW(o),g=-u.scrollTop,"rtl"===na(h||c).direction&&(m+=r6(c.clientWidth,h?h.clientWidth:0)-d),{width:d,height:p,x:m,y:g}))}function nZ(e){var t,r=e.reference,n=e.element,o=e.placement,i=o?r0(o):null,c=o?nA(o):null,u=r.x+r.width/2-n.width/2,h=r.y+r.height/2-n.height/2;switch(i){case"top":t={x:u,y:r.y-n.height};break;case ny:t={x:u,y:r.y+r.height};break;case nw:t={x:r.x+r.width,y:h};break;case n_:t={x:r.x-n.width,y:h};break;default:t={x:r.x,y:r.y}}var d=i?nd(i):null;if(null!=d){var p="y"===d?"height":"width";switch(c){case nR:t[d]=t[d]-(r[p]/2-n[p]/2);break;case"end":t[d]=t[d]+(r[p]/2-n[p]/2)}}return t}function nV(e,t){void 0===t&&(t={});var r,n,o,i,c,u,h,d,p=t,m=p.placement,g=void 0===m?e.placement:m,b=p.strategy,v=void 0===b?e.strategy:b,w=p.boundary,_=p.rootBoundary,S=p.elementContext,C=void 0===S?nE:S,x=p.altBoundary,T=p.padding,E=void 0===T?0:T,O=ng("number"!=typeof E?E:nb(E,nC)),A=e.rects.popper,D=e.elements[void 0!==x&&x?C===nE?"reference":nE:C],$=(r=r2(D)?D:D.contextElement||nl(e.elements.popper),n=void 0===w?"clippingParents":w,o=void 0===_?nT:_,h=(u=[].concat("clippingParents"===n?(i=nB(nc(r)),r2(c=["absolute","fixed"].indexOf(na(r).position)>=0&&r5(r)?nh(r):r)?i.filter(function(e){return r2(e)&&nr(e,c)&&"body"!==no(e)}):[]):[].concat(n),[o]))[0],(d=u.reduce(function(e,t){var n=nj(r,t,v);return e.top=r6(n.top,e.top),e.right=r4(n.right,e.right),e.bottom=r4(n.bottom,e.bottom),e.left=r6(n.left,e.left),e},nj(r,h,v))).width=d.right-d.left,d.height=d.bottom-d.top,d.x=d.left,d.y=d.top,d),P=ne(e.elements.reference),G=nZ({reference:P,element:A,strategy:"absolute",placement:g}),W=nU(Object.assign({},A,G)),F=C===nE?W:P,B={top:$.top-F.top+O.top,bottom:F.bottom-$.bottom+O.bottom,left:$.left-F.left+O.left,right:F.right-$.right+O.right},U=e.modifiersData.offset;if(C===nE&&U){var j=U[g];Object.keys(B).forEach(function(e){var t=[nw,ny].indexOf(e)>=0?1:-1,r=["top",ny].indexOf(e)>=0?"y":"x";B[e]+=j[r]*t})}return B}function nY(e,t,r){return void 0===r&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function nK(e){return["top",nw,ny,n_].some(function(t){return e[t]>=0})}var nQ={placement:"bottom",modifiers:[],strategy:"absolute"};function nJ(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(e){return!(e&&"function"==typeof e.getBoundingClientRect)})}let n0=(p=void 0===(d=(h={defaultModifiers:[{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,r=e.name,n=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,c=nV(t,{elementContext:"reference"}),u=nV(t,{altBoundary:!0}),h=nY(c,n),d=nY(u,o,i),p=nK(h),m=nK(d);t.modifiersData[r]={referenceClippingOffsets:h,popperEscapeOffsets:d,isReferenceHidden:p,hasPopperEscaped:m},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":m})}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,r=e.name;t.modifiersData[r]=nZ({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,r=e.options,n=r.gpuAcceleration,o=r.adaptive,i=r.roundOffsets,c=void 0===i||i,u={placement:r0(t.placement),variation:nA(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:void 0===n||n,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,nD(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:void 0===o||o,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,nD(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,r=e.instance,n=e.options,o=n.scroll,i=void 0===o||o,c=n.resize,u=void 0===c||c,h=r1(t.elements.popper),d=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&d.forEach(function(e){e.addEventListener("scroll",r.update,nz)}),u&&h.addEventListener("resize",r.update,nz),function(){i&&d.forEach(function(e){e.removeEventListener("scroll",r.update,nz)}),u&&h.removeEventListener("resize",r.update,nz)}},data:{}},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,r=e.options,n=e.name,o=r.offset,i=void 0===o?[0,0]:o,c=nM.reduce(function(e,r){var n,o,c,u,h,d;return e[r]=(n=t.rects,c=[n_,"top"].indexOf(o=r0(r))>=0?-1:1,h=(u="function"==typeof i?i(Object.assign({},n,{placement:r})):i)[0],d=u[1],h=h||0,d=(d||0)*c,[n_,nw].indexOf(o)>=0?{x:d,y:h}:{x:h,y:d}),e},{}),u=c[t.placement],h=u.x,d=u.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=h,t.modifiersData.popperOffsets.y+=d),t.modifiersData[n]=c}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var o=r.mainAxis,i=void 0===o||o,c=r.altAxis,u=void 0===c||c,h=r.fallbackPlacements,d=r.padding,p=r.boundary,m=r.rootBoundary,g=r.altBoundary,b=r.flipVariations,v=void 0===b||b,w=r.allowedAutoPlacements,_=t.options.placement,S=r0(_)===_,C=h||(S||!v?[nP(_)]:function(e){if(r0(e)===nS)return[];var t=nP(e);return[nH(e),t,nH(t)]}(_)),x=[_].concat(C).reduce(function(e,r){var n,o,i,c,u,h,g,b,_,S,C,x;return e.concat(r0(r)===nS?(o=(n={placement:r,boundary:p,rootBoundary:m,padding:d,flipVariations:v,allowedAutoPlacements:w}).placement,i=n.boundary,c=n.rootBoundary,u=n.padding,h=n.flipVariations,b=void 0===(g=n.allowedAutoPlacements)?nM:g,0===(C=(S=(_=nA(o))?h?nO:nO.filter(function(e){return nA(e)===_}):nC).filter(function(e){return b.indexOf(e)>=0})).length&&(C=S),Object.keys(x=C.reduce(function(e,r){return e[r]=nV(t,{placement:r,boundary:i,rootBoundary:c,padding:u})[r0(r)],e},{})).sort(function(e,t){return x[e]-x[t]})):r)},[]),T=t.rects.reference,E=t.rects.popper,O=new Map,A=!0,D=x[0],$=0;$<x.length;$++){var P=x[$],G=r0(P),W=nA(P)===nR,F=["top",ny].indexOf(G)>=0,B=F?"width":"height",U=nV(t,{placement:P,boundary:p,rootBoundary:m,altBoundary:g,padding:d}),j=F?W?nw:n_:W?ny:"top";T[B]>E[B]&&(j=nP(j));var Z=nP(j),V=[];if(i&&V.push(U[G]<=0),u&&V.push(U[j]<=0,U[Z]<=0),V.every(function(e){return e})){D=P,A=!1;break}O.set(P,V)}if(A)for(var q=v?3:1,K=function(e){var t=x.find(function(t){var r=O.get(t);if(r)return r.slice(0,e).every(function(e){return e})});if(t)return D=t,"break"},Q=q;Q>0&&"break"!==K(Q);Q--);t.placement!==D&&(t.modifiersData[n]._skip=!0,t.placement=D,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,n=e.name,o=r.mainAxis,i=r.altAxis,c=r.boundary,u=r.rootBoundary,h=r.altBoundary,d=r.padding,p=r.tether,m=void 0===p||p,g=r.tetherOffset,b=void 0===g?0:g,v=nV(t,{boundary:c,rootBoundary:u,padding:d,altBoundary:h}),w=r0(t.placement),_=nA(t.placement),S=!_,C=nd(w),x="x"===C?"y":"x",T=t.modifiersData.popperOffsets,E=t.rects.reference,O=t.rects.popper,A="function"==typeof b?b(Object.assign({},t.rects,{placement:t.placement})):b,D="number"==typeof A?{mainAxis:A,altAxis:A}:Object.assign({mainAxis:0,altAxis:0},A),$=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,P={x:0,y:0};if(T){if(void 0===o||o){var G,W="y"===C?"top":n_,F="y"===C?ny:nw,B="y"===C?"height":"width",U=T[C],j=U+v[W],Z=U-v[F],V=m?-O[B]/2:0,q=_===nR?E[B]:O[B],K=_===nR?-O[B]:-E[B],Q=t.elements.arrow,X=m&&Q?nt(Q):{width:0,height:0},J=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:nm(),ee=J[W],et=J[F],er=np(0,E[B],X[B]),en=S?E[B]/2-V-er-ee-D.mainAxis:q-er-ee-D.mainAxis,eo=S?-E[B]/2+V+er+et+D.mainAxis:K+er+et+D.mainAxis,ei=t.elements.arrow&&nh(t.elements.arrow),es=ei?"y"===C?ei.clientTop||0:ei.clientLeft||0:0,ea=null!=(G=null==$?void 0:$[C])?G:0,el=np(m?r4(j,U+en-ea-es):j,U,m?r6(Z,U+eo-ea):Z);T[C]=el,P[C]=el-U}if(void 0!==i&&i){var ec,eu,eh="x"===C?"top":n_,ed="x"===C?ny:nw,ep=T[x],ef="y"===x?"height":"width",em=ep+v[eh],eg=ep-v[ed],eb=-1!==["top",n_].indexOf(w),ev=null!=(eu=null==$?void 0:$[x])?eu:0,ey=eb?em:ep-E[ef]-O[ef]-ev+D.altAxis,ew=eb?ep+E[ef]+O[ef]-ev-D.altAxis:eg,e_=m&&eb?(ec=np(ey,ep,ew))>ew?ew:ec:np(m?ey:em,ep,m?ew:eg);T[x]=e_,P[x]=e_-ep}t.modifiersData[n]=P}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,r,n=e.state,o=e.name,i=e.options,c=n.elements.arrow,u=n.modifiersData.popperOffsets,h=r0(n.placement),d=nd(h),p=[n_,nw].indexOf(h)>=0?"height":"width";if(c&&u){var m=ng("number"!=typeof(t="function"==typeof(t=i.padding)?t(Object.assign({},n.rects,{placement:n.placement})):t)?t:nb(t,nC)),g=nt(c),b="y"===d?"top":n_,v="y"===d?ny:nw,w=n.rects.reference[p]+n.rects.reference[d]-u[d]-n.rects.popper[p],_=u[d]-n.rects.reference[d],S=nh(c),C=S?"y"===d?S.clientHeight||0:S.clientWidth||0:0,x=m[b],T=C-g[p]-m[v],E=C/2-g[p]/2+(w/2-_/2),O=np(x,E,T);n.modifiersData[o]=((r={})[d]=O,r.centerOffset=O-E,r)}},effect:function(e){var t=e.state,r=e.options.element,n=void 0===r?"[data-popper-arrow]":r;null!=n&&("string"!=typeof n||(n=t.elements.popper.querySelector(n)))&&nr(t.elements.popper,n)&&(t.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]}]}).defaultModifiers)?[]:d,g=void 0===(m=h.defaultOptions)?nQ:m,function(e,t,r){void 0===r&&(r=g);var n,o,i={placement:"bottom",orderedModifiers:[],options:Object.assign({},nQ,g),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],u=!1,h={state:i,setOptions:function(r){var n,o,u,m,b,v="function"==typeof r?r(i.options):r;d(),i.options=Object.assign({},g,i.options,v),i.scrollParents={reference:r2(e)?nB(e):e.contextElement?nB(e.contextElement):[],popper:nB(t)};var w=(o=Object.keys(n=[].concat(p,i.options.modifiers).reduce(function(e,t){var r=e[t.name];return e[t.name]=r?Object.assign({},r,t,{options:Object.assign({},r.options,t.options),data:Object.assign({},r.data,t.data)}):t,e},{})).map(function(e){return n[e]}),u=new Map,m=new Set,b=[],o.forEach(function(e){u.set(e.name,e)}),o.forEach(function(e){m.has(e.name)||function e(t){m.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach(function(t){if(!m.has(t)){var r=u.get(t);r&&e(r)}}),b.push(t)}(e)}),nI.reduce(function(e,t){return e.concat(b.filter(function(e){return e.phase===t}))},[]));return i.orderedModifiers=w.filter(function(e){return e.enabled}),i.orderedModifiers.forEach(function(e){var t=e.name,r=e.options,n=e.effect;if("function"==typeof n){var o=n({state:i,name:t,instance:h,options:void 0===r?{}:r});c.push(o||function(){})}}),h.update()},forceUpdate:function(){if(!u){var e,t,r,n,o,c,d,p,m,g,b,v=i.elements,w=v.reference,_=v.popper;if(nJ(w,_)){i.rects={reference:(e=nh(_),t="fixed"===i.options.strategy,r=r5(e),d=r5(e)&&(o=r8((n=e.getBoundingClientRect()).width)/e.offsetWidth||1,c=r8(n.height)/e.offsetHeight||1,1!==o||1!==c),p=nl(e),m=ne(w,d,t),g={scrollLeft:0,scrollTop:0},b={x:0,y:0},(r||!r&&!t)&&(("body"!==no(e)||nF(p))&&(g=e!==r1(e)&&r5(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:nG(e)),r5(e)?(b=ne(e,!0),b.x+=e.clientLeft,b.y+=e.clientTop):p&&(b.x=nW(p))),{x:m.left+g.scrollLeft-b.x,y:m.top+g.scrollTop-b.y,width:m.width,height:m.height}),popper:nt(_)},i.reset=!1,i.placement=i.options.placement,i.orderedModifiers.forEach(function(e){return i.modifiersData[e.name]=Object.assign({},e.data)});for(var S=0;S<i.orderedModifiers.length;S++){if(!0===i.reset){i.reset=!1,S=-1;continue}var C=i.orderedModifiers[S],x=C.fn,T=C.options,E=void 0===T?{}:T,O=C.name;"function"==typeof x&&(i=x({state:i,options:E,name:O,instance:h})||i)}}}},update:(n=function(){return new Promise(function(e){h.forceUpdate(),e(i)})},function(){return o||(o=new Promise(function(e){Promise.resolve().then(function(){o=void 0,e(n())})})),o}),destroy:function(){d(),u=!0}};if(!nJ(e,t))return h;function d(){c.forEach(function(e){return e()}),c=[]}return h.setOptions(r).then(function(e){!u&&r.onFirstUpdate&&r.onFirstUpdate(e)}),h}),n2=["enabled","placement","strategy","modifiers"],n5={name:"applyStyles",enabled:!1,phase:"afterWrite",fn:()=>void 0},n3={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:({state:e})=>()=>{let{reference:t,popper:r}=e.elements;if("removeAttribute"in t){let e=(t.getAttribute("aria-describedby")||"").split(",").filter(e=>e.trim()!==r.id);e.length?t.setAttribute("aria-describedby",e.join(",")):t.removeAttribute("aria-describedby")}},fn:({state:e})=>{var t;let{popper:r,reference:n}=e.elements,o=null==(t=r.getAttribute("role"))?void 0:t.toLowerCase();if(r.id&&"tooltip"===o&&"setAttribute"in n){let e=n.getAttribute("aria-describedby");if(e&&-1!==e.split(",").indexOf(r.id))return;n.setAttribute("aria-describedby",e?`${e},${r.id}`:r.id)}}},n4=[],n8=function(e,t,r={}){let{enabled:n=!0,placement:o="bottom",strategy:i="absolute",modifiers:c=n4}=r,u=function(e,t){if(null==e)return{};var r={};for(var n in e)if(({}).hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(r,n2),h=(0,U.useRef)(c),d=(0,U.useRef)(),p=(0,U.useCallback)(()=>{var e;null==(e=d.current)||e.update()},[]),m=(0,U.useCallback)(()=>{var e;null==(e=d.current)||e.forceUpdate()},[]),[g,b]=rJ((0,U.useState)({placement:o,update:p,forceUpdate:m,attributes:{},styles:{popper:{},arrow:{}}})),v=(0,U.useMemo)(()=>({name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:({state:e})=>{let t={},r={};Object.keys(e.elements).forEach(n=>{t[n]=e.styles[n],r[n]=e.attributes[n]}),b({state:e,styles:t,attributes:r,update:p,forceUpdate:m,placement:e.placement})}}),[p,m,b]),w=(0,U.useMemo)(()=>(rX(h.current,c)||(h.current=c),h.current),[c]);return(0,U.useEffect)(()=>{d.current&&n&&d.current.setOptions({placement:o,strategy:i,modifiers:[...w,v,n5]})},[i,o,v,n,w]),(0,U.useEffect)(()=>{if(n&&null!=e&&null!=t)return d.current=n0(e,t,Object.assign({},u,{placement:o,strategy:i,modifiers:[...w,n3,v]})),()=>{null!=d.current&&(d.current.destroy(),d.current=void 0,b(e=>Object.assign({},e,{attributes:{},styles:{popper:{}}})))}},[n,e,t]),g};var n9=!1,n7=!1;try{var oe={get passive(){return n9=!0},get once(){return n7=n9=!0}};te&&(window.addEventListener("test",oe,oe),window.removeEventListener("test",oe,!0))}catch{}let ot=function(e,t,r,n){if(n&&"boolean"!=typeof n&&!n7){var o=n.once,i=n.capture,c=r;!n7&&o&&(c=r.__once||function e(n){this.removeEventListener(t,e,i),r.call(this,n)},r.__once=c),e.addEventListener(t,c,n9?n:i)}e.addEventListener(t,r,n)},or=function(e,t,r,n){var o=n&&"boolean"!=typeof n?n.capture:n;e.removeEventListener(t,r,o),r.__once&&e.removeEventListener(t,r.__once,o)},on=function(e,t,r,n){return ot(e,t,r,n),function(){or(e,t,r,n)}};function oo(e){return e&&e.ownerDocument||document}let oi=function(e){let t=(0,U.useRef)(e);return(0,U.useEffect)(()=>{t.current=e},[e]),t};function os(e){let t=oi(e);return(0,U.useCallback)(function(...e){return t.current&&t.current(...e)},[t])}function oa(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}var ol=n(771),oc=n.n(ol);let ou=()=>{},oh=e=>e&&("current"in e?e.current:e),od={click:"mousedown",mouseup:"mousedown",pointerup:"pointerdown"},op=function(e,t=ou,{disabled:r,clickTrigger:n="click"}={}){let o=(0,U.useRef)(!1),i=(0,U.useRef)(!1),c=(0,U.useCallback)(t=>{let r=oh(e);oc()(!!r,"ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"),o.current=!r||!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)||0!==t.button||!!oa(r,t.target)||i.current,i.current=!1},[e]),u=os(t=>{let r=oh(e);r&&oa(r,t.target)?i.current=!0:i.current=!1}),h=os(e=>{o.current||t(e)});(0,U.useEffect)(()=>{var t,o;if(r||null==e)return;let i=oo(oh(e)),d=i.defaultView||window,p=null!=(t=d.event)?t:null==(o=d.parent)?void 0:o.event,m=null;od[n]&&(m=on(i,od[n],u,!0));let g=on(i,n,c,!0),b=on(i,n,e=>{if(e===p){p=void 0;return}h(e)}),v=[];return"ontouchstart"in i.documentElement&&(v=[].slice.call(i.body.children).map(e=>on(e,"mousemove",ou))),()=>{null==m||m(),g(),b(),v.forEach(e=>e())}},[e,r,n,c,u,h])};function of(e){let t;if(!e||"function"==typeof e)return null;let{major:r}={major:+(t=U.version.split("."))[0],minor:+t[1],patch:+t[2]};return r>=19?e.props.ref:e.ref}let om=()=>{},og=function(e,t,{disabled:r,clickTrigger:n}={}){let o=t||om;op(e,o,{disabled:r,clickTrigger:n});let i=os(e=>{("Escape"===e.code||27===e.keyCode)&&o(e)});(0,U.useEffect)(()=>{if(r||null==e)return;let t=oo(oh(e)),n=(t.defaultView||window).event,o=on(t,"keyup",e=>{if(e===n){n=void 0;return}i(e)});return()=>{o()}},[e,r,i])},ov=(0,U.createContext)(te?window:void 0);ov.Provider;let oy=(e,t)=>te?null==e?(t||oo()).body:("function"==typeof e&&(e=e()),e&&"current"in e&&(e=e.current),e&&("nodeType"in e||e.getBoundingClientRect))?e:null:null;function ow(e,t){let r=(0,U.useContext)(ov),[n,o]=(0,U.useState)(()=>oy(e,null==r?void 0:r.document));if(!n){let t=oy(e);t&&o(t)}return(0,U.useEffect)(()=>{t&&n&&t(n)},[t,n]),(0,U.useEffect)(()=>{let t=oy(e);t!==n&&o(t)},[e,n]),n}let o_=void 0!==n.g&&n.g.navigator&&"ReactNative"===n.g.navigator.product,oS="undefined"!=typeof document||o_?U.useLayoutEffect:U.useEffect,oC=function({children:e,in:t,onExited:r,mountOnEnter:n,unmountOnExit:o}){let i=(0,U.useRef)(null),c=(0,U.useRef)(t),u=os(r);(0,U.useEffect)(()=>{t?c.current=!0:u(i.current)},[t,u]);let h=rY(i,of(e)),d=(0,U.cloneElement)(e,{ref:h});return t?d:o||!c.current&&n?null:d},ok=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];var oR=n(848);let oT=["component"],oE=U.forwardRef((e,t)=>{let{component:r}=e,n=function(e){let{onEnter:t,onEntering:r,onEntered:n,onExit:o,onExiting:i,onExited:c,addEndListener:u,children:h}=e,d=function(e,t){if(null==e)return{};var r={};for(var n in e)if(({}).hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,ok),p=(0,U.useRef)(null),m=rY(p,of(h)),g=e=>t=>{e&&p.current&&e(p.current,t)},b=(0,U.useCallback)(g(t),[t]),v=(0,U.useCallback)(g(r),[r]),w=(0,U.useCallback)(g(n),[n]),_=(0,U.useCallback)(g(o),[o]),S=(0,U.useCallback)(g(i),[i]),C=(0,U.useCallback)(g(c),[c]),x=(0,U.useCallback)(g(u),[u]);return Object.assign({},d,{nodeRef:p},t&&{onEnter:b},r&&{onEntering:v},n&&{onEntered:w},o&&{onExit:_},i&&{onExiting:S},c&&{onExited:C},u&&{addEndListener:x},{children:"function"==typeof h?(e,t)=>h(e,Object.assign({},t,{ref:m})):(0,U.cloneElement)(h,{ref:m})})}(function(e,t){if(null==e)return{};var r={};for(var n in e)if(({}).hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,oT));return(0,oR.jsx)(r,Object.assign({ref:t},n))});function oM({children:e,in:t,onExited:r,onEntered:n,transition:o}){let[i,c]=(0,U.useState)(!t);t&&i&&c(!1);let u=rY(function({in:e,onTransition:t}){let r=(0,U.useRef)(null),n=(0,U.useRef)(!0),o=os(t);return oS(()=>{if(!r.current)return;let t=!1;return o({in:e,element:r.current,initial:n.current,isStale:()=>t}),()=>{t=!0}},[e,o]),oS(()=>(n.current=!1,()=>{n.current=!0}),[]),r}({in:!!t,onTransition:e=>{Promise.resolve(o(e)).then(()=>{e.isStale()||(e.in?null==n||n(e.element,e.initial):(c(!0),null==r||r(e.element)))},t=>{throw e.in||c(!0),t})}}),of(e));return i&&!t?null:(0,U.cloneElement)(e,{ref:u})}let oI=U.forwardRef((e,t)=>{var r;let{flip:n,offset:o,placement:i,containerPadding:c,popperConfig:u={},transition:h,runTransition:d}=e,[p,m]=rV(),[g,b]=rV(),v=rY(m,t),w=ow(e.container),_=ow(e.target),[S,C]=(0,U.useState)(!e.show),x=n8(_,p,function({enabled:e,enableEvents:t,placement:r,flip:n,offset:o,fixed:i,containerPadding:c,arrowElement:u,popperConfig:h={}}){var d,p,m,g,b,v;let w,_=(v=h.modifiers,w={},Array.isArray(v)?(null==v||v.forEach(e=>{w[e.name]=e}),w):v||w);return Object.assign({},h,{placement:r,enabled:e,strategy:i?"fixed":h.strategy,modifiers:function(e={}){return Array.isArray(e)?e:Object.keys(e).map(t=>(e[t].name=t,e[t]))}(Object.assign({},_,{eventListeners:{enabled:t,options:null==(d=_.eventListeners)?void 0:d.options},preventOverflow:Object.assign({},_.preventOverflow,{options:c?Object.assign({padding:c},null==(p=_.preventOverflow)?void 0:p.options):null==(m=_.preventOverflow)?void 0:m.options}),offset:{options:Object.assign({offset:o},null==(g=_.offset)?void 0:g.options)},arrow:Object.assign({},_.arrow,{enabled:!!u,options:Object.assign({},null==(b=_.arrow)?void 0:b.options,{element:u})}),flip:Object.assign({enabled:!!n},_.flip)}))})}({placement:i,enableEvents:!!e.show,containerPadding:c||5,flip:n,offset:o,arrowElement:g,popperConfig:u}));e.show&&S&&C(!1);let T=e.show||!S;if(og(p,e.onHide,{disabled:!e.rootClose||e.rootCloseDisabled,clickTrigger:e.rootCloseEvent}),!T)return null;let{onExit:E,onExiting:O,onEnter:A,onEntering:D,onEntered:$}=e,P=e.children(Object.assign({},x.attributes.popper,{style:x.styles.popper,ref:v}),{popper:x,placement:i,show:!!e.show,arrowProps:Object.assign({},x.attributes.arrow,{style:x.styles.arrow,ref:b})});return r={in:!!e.show,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:P,onExit:E,onExiting:O,onExited:(...t)=>{C(!0),e.onExited&&e.onExited(...t)},onEnter:A,onEntering:D,onEntered:$},P=h?(0,oR.jsx)(oE,Object.assign({},r,{component:h})):d?(0,oR.jsx)(oM,Object.assign({},r,{transition:d})):(0,oR.jsx)(oC,Object.assign({},r)),w?tb().createPortal(P,w):null});oI.displayName="Overlay";let oA=function(e){let t=(0,U.useRef)(e);return(0,U.useEffect)(()=>{t.current=e},[e]),t},oN=void 0!==n.g&&n.g.navigator&&"ReactNative"===n.g.navigator.product,oD="undefined"!=typeof document||oN?U.useLayoutEffect:U.useEffect,oz=e=>e&&"function"!=typeof e?t=>{e.current=t}:e,o$=function(e,t){return(0,U.useMemo)(()=>{let r,n;return r=oz(e),n=oz(t),e=>{r&&r(e),n&&n(e)}},[e,t])};function oP(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}let oL=U.createContext({prefixes:{},breakpoints:["xxl","xl","lg","md","sm","xs"],minBreakpoint:"xs"}),{Consumer:oH,Provider:oW}=oL;function oF(e,t){let{prefixes:r}=(0,U.useContext)(oL);return e||r[t]||t}function oB(){let{dir:e}=(0,U.useContext)(oL);return"rtl"===e}let oU=U.forwardRef(({className:e,bsPrefix:t,as:r="div",...n},o)=>(t=oF(t,"popover-header"),(0,oR.jsx)(r,{ref:o,className:B()(e,t),...n})));oU.displayName="PopoverHeader";let oj=U.forwardRef(({className:e,bsPrefix:t,as:r="div",...n},o)=>(t=oF(t,"popover-body"),(0,oR.jsx)(r,{ref:o,className:B()(e,t),...n})));function oZ(e,t){let r=e;return"left"===e?r=t?"end":"start":"right"===e&&(r=t?"start":"end"),r}function oV(e="absolute"){return{position:e,top:"0",left:"0",opacity:"0",pointerEvents:"none"}}oj.displayName="PopoverBody";let oq=Object.assign(U.forwardRef(({bsPrefix:e,placement:t="right",className:r,style:n,children:o,body:i,arrowProps:c,hasDoneInitialMeasure:u,popper:h,show:d,...p},m)=>{let g=oF(e,"popover"),b=oB(),[v]=(null==t?void 0:t.split("-"))||[],w=oZ(v,b),_=n;return d&&!u&&(_={...n,...oV(null==h?void 0:h.strategy)}),(0,oR.jsxs)("div",{ref:m,role:"tooltip",style:_,"x-placement":v,className:B()(r,g,v&&`bs-popover-${w}`),...p,children:[(0,oR.jsx)("div",{className:"popover-arrow",...c}),i?(0,oR.jsx)(oj,{children:o}):o]})}),{Header:oU,Body:oj,POPPER_OFFSET:[0,8]}),oY=U.forwardRef(({bsPrefix:e,placement:t="right",className:r,style:n,children:o,arrowProps:i,hasDoneInitialMeasure:c,popper:u,show:h,...d},p)=>{e=oF(e,"tooltip");let m=oB(),[g]=(null==t?void 0:t.split("-"))||[],b=oZ(g,m),v=n;return h&&!c&&(v={...n,...oV(null==u?void 0:u.strategy)}),(0,oR.jsxs)("div",{ref:p,style:v,role:"tooltip","x-placement":g,className:B()(r,e,`bs-tooltip-${b}`),...d,children:[(0,oR.jsx)("div",{className:"tooltip-arrow",...i}),(0,oR.jsx)("div",{className:`${e}-inner`,children:o})]})});oY.displayName="Tooltip";let oK=Object.assign(oY,{TOOLTIP_OFFSET:[0,6]});function oQ(e,t){return(oQ=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}let oX={disabled:!1},oJ=j().createContext(null);var o0="unmounted",o1="exited",o2="entering",o5="entered",o3="exiting",o6=function(e){function t(t,r){var n,o=e.call(this,t,r)||this,i=r&&!r.isMounting?t.enter:t.appear;return o.appearStatus=null,t.in?i?(n=o1,o.appearStatus=o2):n=o5:n=t.unmountOnExit||t.mountOnEnter?o0:o1,o.state={status:n},o.nextCallback=null,o}t.prototype=Object.create(e.prototype),t.prototype.constructor=t,oQ(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===o0?{status:o1}:null};var r=t.prototype;return r.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},r.componentDidUpdate=function(e){var t=null;if(e!==this.props){var r=this.state.status;this.props.in?r!==o2&&r!==o5&&(t=o2):(r===o2||r===o5)&&(t=o3)}this.updateStatus(!1,t)},r.componentWillUnmount=function(){this.cancelNextCallback()},r.getTimeouts=function(){var e,t,r,n=this.props.timeout;return e=t=r=n,null!=n&&"number"!=typeof n&&(e=n.exit,t=n.enter,r=void 0!==n.appear?n.appear:t),{exit:e,enter:t,appear:r}},r.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t)if(this.cancelNextCallback(),t===o2){if(this.props.unmountOnExit||this.props.mountOnEnter){var r=this.props.nodeRef?this.props.nodeRef.current:tb().findDOMNode(this);r&&r.scrollTop}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===o1&&this.setState({status:o0})},r.performEnter=function(e){var t=this,r=this.props.enter,n=this.context?this.context.isMounting:e,o=this.props.nodeRef?[n]:[tb().findDOMNode(this),n],i=o[0],c=o[1],u=this.getTimeouts(),h=n?u.appear:u.enter;if(!e&&!r||oX.disabled)return void this.safeSetState({status:o5},function(){t.props.onEntered(i)});this.props.onEnter(i,c),this.safeSetState({status:o2},function(){t.props.onEntering(i,c),t.onTransitionEnd(h,function(){t.safeSetState({status:o5},function(){t.props.onEntered(i,c)})})})},r.performExit=function(){var e=this,t=this.props.exit,r=this.getTimeouts(),n=this.props.nodeRef?void 0:tb().findDOMNode(this);if(!t||oX.disabled)return void this.safeSetState({status:o1},function(){e.props.onExited(n)});this.props.onExit(n),this.safeSetState({status:o3},function(){e.props.onExiting(n),e.onTransitionEnd(r.exit,function(){e.safeSetState({status:o1},function(){e.props.onExited(n)})})})},r.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},r.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},r.setNextCallback=function(e){var t=this,r=!0;return this.nextCallback=function(n){r&&(r=!1,t.nextCallback=null,e(n))},this.nextCallback.cancel=function(){r=!1},this.nextCallback},r.onTransitionEnd=function(e,t){this.setNextCallback(t);var r=this.props.nodeRef?this.props.nodeRef.current:tb().findDOMNode(this),n=null==e&&!this.props.addEndListener;if(!r||n)return void setTimeout(this.nextCallback,0);if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[r,this.nextCallback],i=o[0],c=o[1];this.props.addEndListener(i,c)}null!=e&&setTimeout(this.nextCallback,e)},r.render=function(){var e=this.state.status;if(e===o0)return null;var t=this.props,r=t.children,n=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,function(e,t){if(null==e)return{};var r={};for(var n in e)if(({}).hasOwnProperty.call(e,n)){if(-1!==t.indexOf(n))continue;r[n]=e[n]}return r}(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return j().createElement(oJ.Provider,{value:null},"function"==typeof r?r(e,n):j().cloneElement(j().Children.only(r),n))},t}(j().Component);function o4(){}o6.contextType=oJ,o6.propTypes={},o6.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:o4,onEntering:o4,onEntered:o4,onExit:o4,onExiting:o4,onExited:o4},o6.UNMOUNTED=o0,o6.EXITED=o1,o6.ENTERING=o2,o6.ENTERED=o5,o6.EXITING=o3;var o8=/([A-Z])/g,o9=/^ms-/;function o7(e){return e.replace(o8,"-$1").toLowerCase().replace(o9,"-ms-")}var ie=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;let it=function(e,t){var r,n="",o="";if("string"==typeof t)return e.style.getPropertyValue(o7(t))||((r=oo(e))&&r.defaultView||window).getComputedStyle(e,void 0).getPropertyValue(o7(t));Object.keys(t).forEach(function(r){var i=t[r];i||0===i?r&&ie.test(r)?o+=r+"("+i+") ":n+=o7(r)+": "+i+";":e.style.removeProperty(o7(r))}),o&&(n+="transform: "+o+";"),e.style.cssText+=";"+n};function ir(e,t){let r=it(e,t)||"",n=-1===r.indexOf("ms")?1e3:1;return parseFloat(r)*n}function io(e,t){var r,n,o,i,c,u,h,d,p;let m=ir(e,"transitionDuration"),g=ir(e,"transitionDelay"),b=(r=r=>{r.target===e&&(b(),t(r))},null==(n=m+g)&&(i=-1===(o=it(e,"transitionDuration")||"").indexOf("ms")?1e3:1,n=parseFloat(o)*i||0),c=!1,u=setTimeout(function(){c||function(e,t,r,n){if(void 0===r&&(r=!1),void 0===n&&(n=!0),e){var o=document.createEvent("HTMLEvents");o.initEvent(t,r,n),e.dispatchEvent(o)}}(e,"transitionend",!0)},n+5),h=on(e,"transitionend",function(){c=!0},{once:!0}),d=function(){clearTimeout(u),h()},p=on(e,"transitionend",r),function(){d(),p()})}function ii(e){return e&&"setState"in e?tb().findDOMNode(e):null!=e?e:null}let is=j().forwardRef(({onEnter:e,onEntering:t,onEntered:r,onExit:n,onExiting:o,onExited:i,addEndListener:c,children:u,childRef:h,...d},p)=>{let m=(0,U.useRef)(null),g=o$(m,h),b=e=>{g(ii(e))},v=e=>t=>{e&&m.current&&e(m.current,t)},w=(0,U.useCallback)(v(e),[e]),_=(0,U.useCallback)(v(t),[t]),S=(0,U.useCallback)(v(r),[r]),C=(0,U.useCallback)(v(n),[n]),x=(0,U.useCallback)(v(o),[o]),T=(0,U.useCallback)(v(i),[i]),E=(0,U.useCallback)(v(c),[c]);return(0,oR.jsx)(o6,{ref:p,...d,onEnter:w,onEntered:S,onEntering:_,onExit:C,onExited:T,onExiting:x,addEndListener:E,nodeRef:m,children:"function"==typeof u?(e,t)=>u(e,{...t,ref:b}):j().cloneElement(u,{ref:b})})}),ia={[o2]:"show",[o5]:"show"},il=U.forwardRef(({className:e,children:t,transitionClasses:r={},onEnter:n,...o},i)=>{let c={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...o},u=(0,U.useCallback)((e,t)=>{e.offsetHeight,null==n||n(e,t)},[n]);return(0,oR.jsx)(is,{ref:i,addEndListener:io,...c,onEnter:u,childRef:of(t),children:(n,o)=>U.cloneElement(t,{...o,className:B()("fade",e,t.props.className,ia[n],r[n])})})});il.displayName="Fade";let ic=il,iu=U.forwardRef(({children:e,transition:t=ic,popperConfig:r={},rootClose:n=!1,placement:o="top",show:i=!1,...c},u)=>{var h;let d,p,m,g,b,v=(0,U.useRef)({}),[w,_]=(0,U.useState)(null),[S,C]=(h=c.offset,d=(0,U.useRef)(null),p=oF(void 0,"popover"),m=oF(void 0,"tooltip"),g=(0,U.useMemo)(()=>({name:"offset",options:{offset:()=>{if(h)return h;if(d.current){if(oP(d.current,p))return oq.POPPER_OFFSET;if(oP(d.current,m))return oK.TOOLTIP_OFFSET}return[0,0]}}}),[h,p,m]),[d,[g]]),x=o$(u,S),T=!0===t?ic:t||void 0,E=(b=oA(e=>{_(e),null==r||null==r.onFirstUpdate||r.onFirstUpdate(e)}),(0,U.useCallback)(function(...e){return b.current&&b.current(...e)},[b]));return oD(()=>{w&&c.target&&(null==v.current.scheduleUpdate||v.current.scheduleUpdate())},[w,c.target]),(0,U.useEffect)(()=>{i||_(null)},[i]),(0,oR.jsx)(oI,{...c,ref:x,popperConfig:{...r,modifiers:C.concat(r.modifiers||[]),onFirstUpdate:E},transition:T,rootClose:n,placement:o,show:i,children:(n,{arrowProps:o,popper:i,show:c})=>{var u;!function(e,t){let{ref:r}=e,{ref:n}=t;e.ref=r.__wrapped||(r.__wrapped=e=>r(ii(e))),t.ref=n.__wrapped||(n.__wrapped=e=>n(ii(e)))}(n,o);let h=null==i?void 0:i.placement,d=Object.assign(v.current,{state:null==i?void 0:i.state,scheduleUpdate:null==i?void 0:i.update,placement:h,outOfBoundaries:(null==i||null==(u=i.state)||null==(u=u.modifiersData.hide)?void 0:u.isReferenceHidden)||!1,strategy:r.strategy}),p=!!w;return"function"==typeof e?e({...n,placement:h,show:c,...!t&&c&&{className:"show"},popper:d,arrowProps:o,hasDoneInitialMeasure:p}):U.cloneElement(e,{...n,placement:h,arrowProps:o,popper:d,hasDoneInitialMeasure:p,className:B()(e.props.className,!t&&c&&"show"),style:{...e.props.style,...n.style}})}})});iu.displayName="Overlay";var ih=n(556),id=n.n(ih);function ip(e,t,r){let[n]=t,o=n.currentTarget,i=n.relatedTarget||n.nativeEvent[r];i&&i===o||oa(o,i)||e(...t)}n(311),id().oneOf(["click","hover","focus"]);let im=({trigger:e=["hover","focus"],overlay:t,children:r,popperConfig:n={},show:o,defaultShow:i=!1,onToggle:c,delay:u,placement:h,flip:d=h&&-1!==h.indexOf("auto"),...p})=>{var m,g,b,v,w,_,S;let C,x,T,E,O,A,D=(0,U.useRef)(null),$=o$(D,of(r)),P=(C=(0,U.useRef)(!0),x=(0,U.useRef)(()=>C.current),(0,U.useEffect)(()=>(C.current=!0,()=>{C.current=!1}),[]),T=x.current,E=(0,U.useRef)(),S=()=>clearTimeout(E.current),(O=(0,U.useRef)(S)).current=S,A=O,(0,U.useEffect)(()=>()=>A.current(),[]),(0,U.useMemo)(()=>{let e=()=>clearTimeout(E.current);return{set:function(t,r=0){T()&&(e(),r<=0x7fffffff?E.current=setTimeout(t,r):function e(t,r,n){let o=n-Date.now();t.current=o<=0x7fffffff?setTimeout(r,o):setTimeout(()=>e(t,r,n),0x7fffffff)}(E,t,Date.now()+r))},clear:e,handleRef:E}},[])),G=(0,U.useRef)(""),[W,F]=(m=(0,U.useRef)(void 0!==o),b=(g=(0,U.useState)(i))[0],v=g[1],w=void 0!==o,_=m.current,m.current=w,!w&&_&&b!==i&&v(i),[w?o:b,(0,U.useCallback)(function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];c&&c.apply(void 0,[e].concat(r)),v(e)},[c])]),B=u&&"object"==typeof u?u:{show:u,hide:u},{onFocus:j,onBlur:Z,onClick:V}="function"!=typeof r?U.Children.only(r).props:{},q=(0,U.useCallback)(()=>{if(P.clear(),G.current="show",!B.show)return void F(!0);P.set(()=>{"show"===G.current&&F(!0)},B.show)},[B.show,F,P]),K=(0,U.useCallback)(()=>{if(P.clear(),G.current="hide",!B.hide)return void F(!1);P.set(()=>{"hide"===G.current&&F(!1)},B.hide)},[B.hide,F,P]),Q=(0,U.useCallback)((...e)=>{q(),null==j||j(...e)},[q,j]),X=(0,U.useCallback)((...e)=>{K(),null==Z||Z(...e)},[K,Z]),J=(0,U.useCallback)((...e)=>{F(!W),null==V||V(...e)},[V,F,W]),ee=(0,U.useCallback)((...e)=>{ip(q,e,"fromElement")},[q]),et=(0,U.useCallback)((...e)=>{ip(K,e,"toElement")},[K]),er=null==e?[]:[].concat(e),en={ref:e=>{$(ii(e))}};return -1!==er.indexOf("click")&&(en.onClick=J),-1!==er.indexOf("focus")&&(en.onFocus=Q,en.onBlur=X),-1!==er.indexOf("hover")&&(en.onMouseOver=ee,en.onMouseOut=et),(0,oR.jsxs)(oR.Fragment,{children:["function"==typeof r?r(en):(0,U.cloneElement)(r,en),(0,oR.jsx)(iu,{...p,show:W,onHide:K,flip:d,placement:h,popperConfig:n,target:D.current,children:t})]})},ig={},ib=document.createElement("canvas");ib.id="gk-graph-avatar-canvas";let i5=class i5 extends j().Component{image;constructor(e){super(e),this.image=new Image,this.image.crossOrigin="anonymous",this.image.onload=()=>this.refreshImage(),this.state={dataURL:void 0}}static getDerivedStateFromProps(e,t){return{dataURL:!e.url&&t.dataURL?void 0:t.dataURL}}componentDidMount(){let{url:e}=this.props;e&&this.startImgLoading(e)}componentDidUpdate(e){let{url:t}=this.props;t&&e.url!==t&&this.startImgLoading(t)}componentWillUnmount(){this.image=void 0}refreshImage(){let e;if(this.image){if(this.image.complete){let t=this.image.height,r=this.image.width,n=ib.getContext("2d");n.canvas.width=r,n.canvas.height=t,n.drawImage(this.image,0,0,r,t),e=ib.toDataURL(),ig[this.image.src]=e}this.setState({dataURL:e})}}startImgLoading(e){if(!this.image)return;let t=ig[e];if(t)return void this.setState({dataURL:t});this.image.src=e}render(){let{avatarClassName:e,avatarStyle:t,children:r,className:n,context:o,enableTransparentBackground:i,style:c,height:u,hint:h,size:d,width:p}=this.props,{dataURL:m}=this.state,g=!m,b=g?c:{...c,...t,background:`url(${m}) 0% 0% / ${d}px no-repeat ${i?"":"var(--app__bg0, #1c1e23)"}`,height:u||d,width:p||d},v=B()(n,g?"":e,!g&&{avatar:!0}),w=g?j().createElement(j().Fragment,null,r):void 0;return j().createElement("div",{className:v,"data-test-class":m?"avatar":"local-avatar","data-vscode-context":(0,eC.DO)(o),style:b,title:h},w)}};let iv=(e,t,r,n)=>j().createElement("span",{className:"ref-avatar"},j().createElement(i5,{avatarClassName:t,context:n,enableTransparentBackground:!0,size:14,url:e},r));function iy({icon:e,tooltipClassName:t="",tooltipId:r,tooltipText:n}){return n&&r?j().createElement(im,{delay:400,overlay:j().createElement(oK,{className:B()("gk-graph","bs-tooltip",t),id:r},n),placement:"top",trigger:["hover","focus"]},e||j().createElement("span",null)):j().createElement(j().Fragment,null," ",e||j().createElement("span",null)," ")}function iw({id:e,toolTipText:t,getExternalIcon:r,issueTrackerType:n}){return j().createElement(iy,{icon:r(`issue-${n}`),tooltipClassName:"wide pull-left",tooltipId:`issue-tooltip-${e}`,tooltipText:t?t.trim():""})}function i_({hostingServiceType:e,icon:t,id:r,toolTipText:n}){return j().createElement(iy,{icon:t,tooltipClassName:"wide pull-left",tooltipId:`pr-tooltip-${e}-${r}`,tooltipText:n?n.trim():""})}function iS({icon:e,type:t,upstream:r,tooltipText:n}){return j().createElement(iy,{icon:e,tooltipClassName:"wide pull-left",tooltipId:`upstream-indicator-tooltip-${t}-${r}`,tooltipText:n})}function iC({avatarClassName:e,avatarUrl:t,context:r,icon:n,tooltipText:o}){return j().createElement(iy,{icon:iv(t,e,n,r),tooltipId:`remote-icon-${o||"tooltipText"}`,tooltipText:o})}var ix=n(810),ik=n(280),iR=function({className:e,name:t}){return j().createElement("span",{className:B()("ref-name","truncate",e),style:{height:et.F0}},t)};function iT(e,t,r,n=0){let o,i,c,{annotated:u,refType:h,message:d,name:p}=t;switch(h){case eE.z.REMOTE:{i=t.hostingServiceType?`${eE.z.REMOTE}-${t.hostingServiceType}`:eE.z.REMOTE,o=t.avatarUrl;let e=`${p} (${r("Ref-Remote")})`;c=t.owner?`${t.owner} -> ${e}`:e;break}case eE.z.TAG:i=eE.z.TAG,c=`${u&&d?d:p} (${r("Ref-Tag")})`;break;case eE.z.HEAD:default:{let e=null!=t.worktreeId;i=e?eE.z.WORKTREE:eE.z.HEAD,c=`${p} (${r(e?"Ref-Worktree":"Ref-Local")})`}}let m=t.context||void 0,g=j().createElement("span",{"data-vscode-context":(0,eC.DO)(m)},e(i));return j().createElement(iC,{avatarUrl:o||"",context:m,icon:g,key:`ref-icon-${n}-${h}-${p}`,tooltipText:c})}let ni=class ni extends j().PureComponent{getContextForRefGroupIfExists(e,t,r){let n,o=!1,i=!1,c=!1;for(let u of e){if(u.refType===eE.z.HEAD)return r?u.contextGroup||t:u.context;u.refType!==eE.z.REMOTE||("origin"===u.owner?(o=!0,n=r?u.contextGroup||t:u.context):o||"upstream"!==u.owner?o||i||(c=!0,n=r?u.contextGroup||t:u.context):(i=!0,n=r?u.contextGroup||t:u.context)),o||i||c||(n=r?u.contextGroup||t:u.context)}return n}getDecoratedRefIcon(e,t,r,n,o){return j().createElement("div",{className:o,"data-vscode-context":(0,eC.DO)(n),key:e,onClick:e=>this.onClickMetadata(e,r),onDoubleClick:e=>this.onDoubleClickMetadata(e,r)},t)}getPullRequestIconsAndTooltipsForRef(e,t,r){let n,{getExternalIcon:o,onMissingRefMetadata:i,translate:c}=this.props;if(!(n=t.refType===eE.z.HEAD?t.upstream?e?.[t.upstream.id]?.[ex.ki]:null:(0,eC.yb)(t,e,i,ex.ki))||0===n.length)return null;let u=[];for(let e of n){let{context:n,hostingServiceType:i,id:h,title:d}=e;if(r.has(h))continue;r.add(h);let p={refId:t.id,type:ex.ki,data:e},m=`pr-icon-${t.refType}-${t.name}-${h}`,g=this.getDecoratedRefIcon(m,o("pull-request"),p,n,B()("ref-pull-request"));u.push(j().createElement(i_,{hostingServiceType:i,icon:g,id:h,key:m,toolTipText:d&&""!==d.trim()?c("PullRequestIcon-Tooltip",h,d,(0,ix.T)(i)):""}))}return u}getUpstreamIndicatorIconsAndTooltipsForRef(e,t){let{getExternalIcon:r,onMissingRefMetadata:n,translate:o}=this.props,i=(0,eC.yb)(t,e,n,ex.RA);if(!i||0===i.ahead&&0===i.behind)return null;let c={refId:t.id,type:ex.RA,data:i},u=i.ahead>0,h=i.behind>0,d=i.context;if(u||h){let e,n,p=u?`${i.ahead>99?"99+":i.ahead}`:"",m=h?`${i.behind>99?"99+":i.behind}`:"",g=`${i.owner}/${i.name}`;h&&u?(e=o("UpstreamIndicatorIcon-BehindAndAheadTooltip",m,p,g),n="ahead-behind"):h?(e=o("UpstreamIndicatorIcon-BehindTooltip",m,g),n="behind"):u&&(e=o("UpstreamIndicatorIcon-AheadTooltip",p,g),n="ahead");let b=j().createElement(j().Fragment,null,h?j().createElement(j().Fragment,null,j().createElement("span",{className:"ref-upstream-behind"},m),r("upstream-behind")):null,u?j().createElement(j().Fragment,null,j().createElement("span",{className:"ref-upstream-ahead"},p),r("upstream-ahead")):null);return j().createElement(iS,{icon:this.getDecoratedRefIcon(`ref-upstream-${t.id}`,b,c,d,"ref-upstream"),tooltipText:e,type:n,upstream:g})}return null}getIssueIconsAndTooltipsForRef(e,t,r){let{getExternalIcon:n,onMissingRefMetadata:o,translate:i}=this.props,c=(0,eC.yb)(t,e,o,ex.fd);if(!c||0===c.length)return null;let u=[];for(let e of c){if(r.has(e.id))continue;let o={refId:t.id,type:ex.fd,data:e};r.add(e.id);let c=j().createElement(iw,{getExternalIcon:n,id:e.id,issueTrackerType:e.issueTrackerType,key:`issue-icon-${e.id}`,toolTipText:e.title&&""!==e.title.trim()?i("IssueIcon-Tooltip",e.displayId,e.title):""}),h=e.context||void 0;u.push(this.getDecoratedRefIcon(`ref-issue-${e.id}`,c,o,h,B()("ref-issue")))}return u}onContextMenu=e=>{let{onContextMenu:t,refGroup:r,sha:n}=this.props;t(e,r,n)};onClick=e=>{let{onClick:t,refGroup:r,sha:n}=this.props;t(e,r,n)};onClickMetadata=(e,t)=>{e.stopPropagation();let{onClick:r,refGroup:n,sha:o}=this.props;r(e,n,o,t)};onDoubleClick=e=>{let{onDoubleClick:t,refGroup:r,sha:n}=this.props;t(e,r,n)};onDoubleClickMetadata=(e,t)=>{e.stopPropagation();let{onDoubleClick:r,refGroup:n,sha:o}=this.props;r(e,n,o,t)};render(){let{enableShowHideRefsOptions:e,hasActive:t,hasRefs:r,isActive:n,isGhostRef:o,getExternalIcon:i,groupIsHovered:c,isInUnsupportedRebase:u,onRefBeginDrag:h,onRefDragEnter:d,onRefDragLeave:p,onRefDrop:m,onRefCanDrag:g,onRefCanDrop:b,onRefEndDrag:v,isRefGroupIncluded:w,refGroup:_,refGroupContext:S,refIconsPosition:C,refMetadata:x,onHovered:T,onHideRefClick:E,sha:O,showRemoteNamesOnRefs:A,enabledRefMetadataTypes:D,translate:$,type:P,useColumnHeaderIcons:G}=this.props,W=e&&!t&&c&&!w,F=C===eE.E.LEFT,U=C===eE.E.RIGHT,Z=B()("ref-node-wrapper","flex"),V={minWidth:0,marginLeft:3,height:et.$0},q=B()("ref-node","flex","items-center","p1",{"has-active":t,"dim-ref":!r&&c,"is-active":n}),K="";_.length>0&&(K=A&&_[0].fullName||_[0].name);let Q=B()({"display-none":G&&!c&&U,mr1:U}),X=j().createElement(iR,{className:Q,name:K}),J=[],ee=[],er=[],en=null,eo=new Set,ei=new Set;_.forEach((e,t)=>{if(J.push(iT(i,e,$,t)),D.includes(ex.fd)&&(e.refType===eE.z.HEAD||e.refType===eE.z.REMOTE)){let t=this.getIssueIconsAndTooltipsForRef(x,e,ei);t&&er.push(...t)}if(D.includes(ex.ki)&&e.refType===eE.z.REMOTE){let t=this.getPullRequestIconsAndTooltipsForRef(x,e,eo);t&&ee.push(...t)}D.includes(ex.RA)&&e.refType===eE.z.HEAD&&(en=this.getUpstreamIndicatorIconsAndTooltipsForRef(x,e))});let es=j().createElement("span",{className:B()("flex","items-center","ref-icons",{"is-active":n,"is-left-position":F})},[...J,...ee,...er]),ea=n?j().createElement(iy,{icon:j().createElement("span",{className:B()("ref-icon-current")},i("check")),tooltipId:"ref-icon-current",tooltipText:$("Ref-Current")}):null,el=this.getContextForRefGroupIfExists(_,S),ec=this.getContextForRefGroupIfExists(_,S,!0),eu=W?j().createElement("span",{className:"flex ml-auto"},j().createElement(iy,{icon:j().createElement("span",{className:B()("mr1","button"),onClick:e=>E(e,_,O)},i("hide")),tooltipId:`ref-node-toggle-visibility-btn-${K}`,tooltipText:$("Hide")})):null;return j().createElement(ik.A,{canDrag:e=>g(e),canDrop:(e,t,r)=>b(e,t,r),className:Z,"data-vscode-context":(0,eC.DO)(ec),dndData:{commitType:P,isGhostRef:o,isInUnsupportedRebase:u,refGroup:_,sha:O},dndId:`DndRefNode_${_[0].id}`,onBeginDrag:(e,t)=>h(e,t),onDragEnter:(e,t,r)=>d(e,t,r),onDragLeave:(e,t,r)=>p(e,t,r),onDrop:(e,t,r)=>m(e,t,r),onEndDrag:(e,t,r)=>v(e,t,r),style:V},j().createElement("span",{className:q,"data-test-class":"ref-node-span","data-vscode-context":(0,eC.DO)(el),onContextMenu:u?void 0:this.onContextMenu,onDoubleClick:u?void 0:this.onDoubleClick,onMouseDown:this.onClick,onMouseEnter:e=>T(e,_,O),style:{minWidth:"100%"}},ea,F&&es,X,U&&es,en,eu))}};let nn=class nn extends j().Component{headIconsRef=j().createRef();containerRef=j().createRef();popoverMenuTargetRef=j().createRef();constructor(e){super(e),this.state={showPopoverMenu:!1}}onHiddenRefsClick=e=>{let{showPopoverMenu:t}=this.state;e.stopPropagation(),this.setState({showPopoverMenu:!t})};onShowRefNodes=(e,t,r)=>{this.props.onToggleRefNodesShown(e,t,r),0===Object.keys(this.props.excludeRefsById).length&&this.setState({showPopoverMenu:!0})};compareGraphRefOpts(e,t){let r=e.name.localeCompare(t.name);return 0===r&&e.type===eE.z.REMOTE?-1:r}render(){let{columnSetting:e,enableResizer:t,enableShowHideRefsOptions:r,getExternalIcon:n,graphWidth:o,graphZones:i,graphZoneType:c,excludeRefsById:u,includeOnlyRefsById:h,isDraggable:d,onFilterColumnClick:p,onHover:m,onResize:g,onResizeEnd:b,onResizeFromPropChange:v,onResizeStart:w,onUnhover:_,onSettingsClick:S,rowsStatsLoading:C,settingsContext:x,showRemoteNamesOnRefs:T,translate:E}=this.props,{showPopoverMenu:O}=this.state,A=(0,eC.Et)(c,i);if(!A)return null;let D=(0,eC.z)(c,i),$=A.currentWidth-et.WQ,P=`${c}-header`,G=(0,eC.uQ)(A),W=e?.isFilterable||!1,F=G&&(W||r),U=B()("columns-btn",{"small-btn":F}),Z=null,V=null;if(c===et.ui){let e=Object.entries(u),t=Object.values(h),o=t.length>0,i=o&&t.some(e=>e.type===eE.z.TAG),c=e.filter(e=>e[1].type===eE.z.TAG&&(!o||!i)||!h[e[0]]);c.length>0&&(V=c.sort((e,t)=>this.compareGraphRefOpts(e[1],t[1])).map((e,t)=>{let r=e[0],o=e[1];u[r].id=r;let i={name:o.name,refType:o.type,owner:o.owner,avatarUrl:o.avatarUrl},c=(T||"*"===i.name)&&i.refType===eE.z.REMOTE?`${i.owner}/${i.name}`:i.name;return j().createElement("li",{id:r,key:r,onClick:e=>this.onShowRefNodes(e,[u[r]],!0)},iT(n,i,E,t),j().createElement("span",{className:"ml1 text-ellipsis"},c))}),Z=r?j().createElement("div",{className:B()(U,"right","text-normal","button",O?"active":null),ref:this.popoverMenuTargetRef},j().createElement(iy,{icon:j().createElement("span",{onClick:this.onHiddenRefsClick},n("hide")),tooltipId:"header-ref-node-hidden-refs-btn",tooltipText:E("GraphHeader-HiddenRefs-btn")})):null)}let q=W?j().createElement("div",{className:B()(U,"columns-filter","right","fs-1",{filtering:e?.isFilterActive||!1})},j().createElement(iy,{icon:j().createElement("span",{className:"columns-filter-icon text-disabled hover-icon",id:`${c}-header-filter`,onClick:e=>p(e,c),style:{height:et.bo,marginBottom:et.Qb}},n("filter")),tooltipId:"header-columns-filter",tooltipText:E("GraphHeader-Filter")})):null,K=!G&&c===et.Sq&&C?j().createElement("span",{className:B()(U,"spinner")},n("loading")):null,Q=j().createElement(iu,{container:this.containerRef.current,onHide:O?()=>{this.setState({showPopoverMenu:!1})}:void 0,placement:"bottom",rootClose:O,show:O,target:this.popoverMenuTargetRef.current},e=>j().createElement(oq,{className:B()({"is-last-header":D}),id:"opts-popover",...e},j().createElement("ul",null,V))),X=D&&S?j().createElement("div",{className:B()("columns-btn","columns-settings","right","fs-1"),"data-vscode-context":(0,eC.DO)(x)},j().createElement(iy,{icon:j().createElement("span",{className:"columns-settings-icon text-disabled hover-icon",onClick:e=>S(e,o)},n("settings")),tooltipId:"header-columns-settings",tooltipText:E("GraphHeader-EditColumns")})):null,J=this.headIconsRef?.current?.clientWidth??0,ee=j().createElement("div",{className:"header-columns-icons",ref:this.headIconsRef},X,K,q,Z),er=G?j().createElement(j().Fragment,null,j().createElement("div",{className:B()(U,"justify-start",{ml1:!F}),style:{width:$-J},title:E(A.headerLabelUntranslated)},n((0,eC.n0)(c))),ee):j().createElement(j().Fragment,null,j().createElement("div",{className:"text-disabled text-ellipsis",style:{height:et.bo,overflow:"hidden",width:$-J}},j().createElement("span",{className:"fs-1 ml1 font-monospace"},E(A.headerLabelUntranslated))),ee),en=j().createElement("div",{onMouseEnter:m,onMouseLeave:_},Q,er),eo=B()("panel-bg0","graph-header",{"is-draggable":d,"is-last-header":D});return j().createElement("div",{className:eo,id:P,key:P,ref:this.containerRef,style:{zIndex:2,transform:"translate3d(0, 0, 0)",...D?{minWidth:$}:{display:"flex",minWidth:A.currentWidth,width:A.currentWidth}}},D?en:j().createElement(ob,{className:eo,enable:t,handleStyles:{right:{right:0}},height:et.bo,id:`${c}HeaderColumn`,onResize:g?e=>g(A,e):void 0,onResizeEnd:b?e=>b(A,e):void 0,onResizeFromPropChange:v?e=>v(A,e):void 0,onResizeStart:w?e=>w(A,e):void 0,resizeContentClassName:"z1",resizeEdge:"right",resizeHandleClassName:"z2 border-right",style:{display:"flex"},translate:E,width:A.currentWidth,widthConstraints:(0,eC.qC)(c,i,o)},en))}};let ns=class ns extends j().PureComponent{canDrag=!1;isDraggable=e=>this.canDrag&&e.props.isDraggable;isDroppable=(e,t)=>e.props.graphZoneType!==t?.props?.graphZoneType&&(!t||t.props.isDroppable);onDrop=(e,t)=>{this.props.onColumnReOrdered&&this.props.onColumnReOrdered(e.props.graphZoneType,t?t.props.graphZoneType:null)};onZoneHover=()=>{this.canDrag=!0};onZoneUnHover=()=>{this.canDrag=!1};render(){let{columnsSettings:e,dragAppendToContainer:t,enableResizer:r,enableShowHideRefsOptions:n,getExternalIcon:o,excludeRefsById:i,headerContext:c,includeOnlyRefsById:u,onFilterColumnClick:h,onPopupGraphHeaderContextMenu:d,onGraphZoneResize:p,onGraphZoneResizeEnd:m,onGraphZoneResizeFromPropChange:g,onSettingsClick:b,onToggleRefNodesShown:v,graphZones:w,repoPath:_,rowsStatsLoading:S,showRemoteNamesOnRefs:C,translate:x,width:T,height:E,settingsContext:O}=this.props,A=j().createElement("div",{className:"panel-bg0",style:{height:et.bo,marginBottom:et.Qb,marginLeft:-et.xY,minWidth:et.xY+et.WQ}});return j().createElement("div",{className:"graph-header flex","data-vscode-context":(0,eC.DO)(c),onContextMenu:d?e=>d(e,T):void 0,style:{height:et.bo,marginBottom:et.Qb}},A,j().createElement(oG,{className:"flex",direction:"horizontal",isDraggable:this.isDraggable,isDroppable:this.isDroppable,mirrorContainer:t,onDrop:this.onDrop},w.map(t=>j().createElement(nn,{columnSetting:e[t.type],enableResizer:r,enableShowHideRefsOptions:n,excludeRefsById:i,getExternalIcon:o,graphHeight:E,graphWidth:T,graphZones:w,graphZoneType:t.type,id:`${t.type}Header`,includeOnlyRefsById:u,isDraggable:t.isCustomizable,isDroppable:t.isCustomizable,key:`${t.type}Header`,onFilterColumnClick:h,onHover:this.onZoneHover,onResize:p,onResizeEnd:m,onResizeFromPropChange:g,onSettingsClick:b,onToggleRefNodesShown:v,onUnhover:this.onZoneUnHover,repoPath:_,rowsStatsLoading:S,settingsContext:O,showRemoteNamesOnRefs:C,translate:x}))))}};function iE(e){let{constraints:{max:t,min:r},stats:{files:n,additions:o,deletions:i},getExternalIcon:c,isLastColumn:u,isRowSelected:h,verticalScrollWidth:d,zoneWidth:p}=e,m=o+i,g=Math.max(r,Math.min(t,m)),b=u?d+et.KA:et.KA;m<=g&&(b+=et.KA);let v=Math.max(et.MT,g/t*(p-52-b));return j().createElement("div",{className:B()("changes-zone",h?"selected":null)},j().createElement("span",{className:"changes-files",style:{width:52}},j().createElement("span",{className:"mr1"},c("files")),j().createElement("span",{className:"mr1"},n>999?"999+":n)),j().createElement("span",{className:"changes-bar",style:{width:v}},o?j().createElement("div",{className:"changes-sub-bar added",style:{width:o/m*v}}):null,i?j().createElement("div",{className:"changes-sub-bar deleted",style:{width:i/m*v}}):null))}let iO=B()("absolute","top-0","right-0","bottom-0","left-0","time-line"),iM=B()(iO,"z2");var iI=function({z2:e}){return j().createElement("div",{className:e?iM:iO,style:{height:2}})};let iA=j().createElement("div",{className:"color-strip height-100",style:{width:2}}),iN={},iD={};let nf=class nf extends j().PureComponent{render(){let e,t,{clearCurrentlyHoveredGraphCommit:r,children:n,column:o,columnForColoring:i,context:c,currentlyHoveredCommitSha:u,dimRowsOfSelectedCommit:h,getExternalIcon:d,graphZoneType:p,hasAvatars:m,highlightRowsOnRefHover:g,isDimmedMergeCommitRow:b,isHighlighted:v,isHovering:w,isLastColumn:_,isInUnsupportedRebase:S,isMissingHoveredRefGroup:C,isSelected:x,numGraphColumns:T,onContextMenu:E,onClickCommit:O,onDoubleClickCommit:A,rowContext:D,sha:$,showColorStrip:P,showConflictIcon:G,showTimeline:W,setAsCurrentlyHoveredGraphCommit:F,style:U,title:Z,type:V,verticalScrollWidth:q,zoneWidth:K}=this.props,Q=((t=iN[e=V+w.toString()])||(t=B()("graph-row-wrapper","grow-3","height-100","graph-zone-column","min-width-0","pb3","pointer","pt3","relative",V,{"is-hovering":w}),iN[e]=t),t),X=function(e,t,r,n,o,i=!1,c=!1,u=!1,h=!1){let d=`${e}${t}${n}${r}${i}${c}${u}${h}${o}`,p=iD[d];return p||(p=B()(`column-${t%o+1}`,"graph-row","height-100-percent","flex",e,{"is-selected":n},{"is-highlighted":r},{"dimmed-row":h&&!r||i&&(c||u)}),iD[d]=p),p}(V,i??o,v,x,T,C,g,h,b),J=W?j().createElement(iI,null):null;return j().createElement("div",{className:Q,"data-vscode-context":(0,eC.DO)(D),onContextMenu:S?void 0:e=>E(e,p,$),onDoubleClick:e=>A(e,p,$),onMouseDown:e=>O(e,p,$),onMouseEnter:e=>F(e,p,$,u),onMouseLeave:e=>r(e,p,$,u),style:U},J,j().createElement("div",{className:X,"data-vscode-context":(0,eC.DO)(c)},P?iA:null,G?j().createElement("span",{className:B()("ml2")},d("warning")):null,j().createElement("span",{className:B()("graph-zone","width-100","flex-1"),style:{lineHeight:`${et.$0}px`,..._&&{width:K-q},...m&&{marginLeft:5}},title:Z},n)))}};var iz=(e,t)=>{let{processedRows:r,rowStatsConstraints:n,getExternalIcon:o,highlightRowsOnRefHover:i,isInUnsupportedRebase:c,numGraphColumns:u,clearCurrentlyHoveredGraphCommit:h,currentlyHoveredCommitSha:d,dimMergeCommits:p,dimRowsOfSelectedCommit:m,onCommitContextMenu:g,onClickCommit:b,onDoubleClickCommit:v,rowsStats:w,setAsCurrentlyHoveredGraphCommit:_,suppressNonRefRowTooltips:S}=e,C=new eC.n$(e);return({rowIndex:e,style:x})=>{let T=t(e),E=r[e],{sha:O,type:A,contexts:D}=E,$=D?.stats||void 0,P=D?.row||void 0,G=w?.[O],W=[G?.files?`${G.files} files changed`:"",G?.additions?`${G.additions} lines added`:"",G?.deletions?`${G.deletions} lines deleted`:""].filter(Boolean).join(", ");W=A!==ee.bY?W:"";let F=et.Sq,B=C.isColumnFollowingGraphColumn(F),U=C.isLastColumn(F),Z=C.getZoneWidth(F),V=C.getVerticalScrollWidth(F);return j().createElement(nf,{clearCurrentlyHoveredGraphCommit:h,column:E.column,columnForColoring:E.columnForColoring,context:$,currentlyHoveredCommitSha:d,dimRowsOfSelectedCommit:m,getExternalIcon:o,graphZoneType:F,highlightRowsOnRefHover:i,isDimmedMergeCommitRow:A===ee.t$&&p,isHighlighted:C.isHighlighted(e),isHovering:C.isHovering(e),isInUnsupportedRebase:c,isLastColumn:U,isMissingHoveredRefGroup:C.isMissingHoveredRefGroup(e),isSelected:C.isSelected(e),key:T,numGraphColumns:u,onClickCommit:b,onContextMenu:g,onDoubleClickCommit:v,rowContext:P,setAsCurrentlyHoveredGraphCommit:_,sha:O,showColorStrip:B,showTimeline:C.hasTimeline(e),style:x,title:S?void 0:W,type:A,verticalScrollWidth:V,zoneWidth:Z},G&&A!==ee.bY?j().createElement(iE,{constraints:n,getExternalIcon:o,isLastColumn:U,isRowSelected:C.isSelected(e),stats:G,verticalScrollWidth:V,zoneWidth:Z}):null)}};function i$(e){let t=(e||"").trim().toUpperCase();if(0===t.length)return"?";let r=t.split(" ");return 1===r.length?r[0][0]:r.length>1?r[0][0]+r[r.length-1][0]:"?"}function iP(e,t){return e&&t?`${e} <${t}>`:e||t||""}let nv=class nv extends j().Component{constructor(e){super(e),this.state={tooltipText:""}}getDefaultAvatar=(e,t,r)=>{let{authorInitials:n,column:o,context:i,cssVariables:c,style:u,fontSize:h,minWidth:d,size:p,title:m=""}=this.props,g=void 0!==o&&c[(0,ec.$6)(o)]||et.BP,b=J(g.trim()),v={alignItems:"center",backgroundColor:g,backgroundSize:p,color:b,display:"flex",fontSize:`${h}px`,fontWeight:"bold",height:e,justifyContent:"center",minWidth:d,top:r,width:t,...u};return j().createElement("div",{className:this.getAvatarClassName(),"data-vscode-context":(0,eC.DO)(i),style:v,title:m},n?n.toUpperCase():"")};ensureTooltipText=()=>{let{tooltip:e}=this.props;this.setState({tooltipText:"function"==typeof e?e():e})};getAvatarClassName(){return B()("avatar","gravatar","rad2",this.props.className)}render(){let{tooltipText:e}=this.state,{avatarUrl:t,context:r,style:n,height:o,minWidth:i,size:c,title:u="",tooltip:h,top:d,useAuthorInitialsForAvatars:p,width:m}=this.props,g=o||c,b=m||c,v=d||et.lH/2-g/2,w={top:v,minWidth:i,...n},_=this.getDefaultAvatar(g,b,v),S=p?_:j().createElement("span",null,j().createElement(i5,{avatarClassName:this.getAvatarClassName(),avatarStyle:w,context:r,height:g,hint:u,size:c,url:t,width:b},this.getDefaultAvatar(g,b,v)));return h?j().createElement(im,{delay:250,onEnter:this.ensureTooltipText,overlay:j().createElement(oK,{className:"gk-graph",id:"graph-gravatar-tooltip"},e),placement:"top",trigger:["hover","focus"]},S):S}};var iL=(e,t)=>{let{avatarUrlByEmail:r,clearCurrentlyHoveredGraphCommit:n,cssVariables:o,currentlyHoveredCommitSha:i,dimMergeCommits:c,dimRowsOfSelectedCommit:u,getExternalIcon:h,highlightRowsOnRefHover:d,processedRows:p,isInUnsupportedRebase:m,onCommitContextMenu:g,onClickCommit:b,onDoubleClickCommit:v,numGraphColumns:w,setAsCurrentlyHoveredGraphCommit:_,suppressNonRefRowTooltips:S,useAuthorInitialsForAvatars:C}=e,x=new eC.n$(e);return({rowIndex:e,style:T})=>{let E=t(e),O=p[e],{author:A,email:D,message:$,sha:P,type:G,contexts:W}=O,F=et.fx,U=x.getActiveGraphZone(F),Z=G!==ee.bY?A:void 0,V=G!==ee.bY?iP(A,D):void 0,q=W?.author||void 0,K=W?.row||void 0,Q=x.isColumnFollowingGraphColumn(F),X=x.isLastColumn(F),J=x.getZoneWidth(F),er=(J<=U.minimumWidth||U?.mode===et.eB.Rich)&&G!==ee.bY;if(er){let e=C?void 0:r[D];Z=j().createElement(nv,{authorInitials:i$(A),avatarUrl:e,className:B()("node",ee.oB,"z6"),column:O.column,context:W?.avatar||void 0,cssVariables:o,fontSize:10,height:et.n0,size:et.CF,tooltip:S?void 0:()=>{let e=A&&""!==A.trim()&&"Unknown"!==A?iP(A,D):D,t=ea(ei($||"")),r="";if(0===t.length)r=e;else{t.unshift({email:D,name:A});for(let e=0;e<t.length;e+=1){let n=t[e];r+=iP(n.name,n.email),e<t.length-1&&(r+=", ")}}return r},useAuthorInitialsForAvatars:C,width:et.n0})}return j().createElement(nf,{clearCurrentlyHoveredGraphCommit:n,column:O.column,columnForColoring:O.columnForColoring,context:q,currentlyHoveredCommitSha:i,dimRowsOfSelectedCommit:u,getExternalIcon:h,graphZoneType:F,hasAvatars:er,highlightRowsOnRefHover:d,isDimmedMergeCommitRow:G===ee.t$&&c,isHighlighted:x.isHighlighted(e),isHovering:x.isHovering(e),isInUnsupportedRebase:m,isLastColumn:X,isMissingHoveredRefGroup:x.isMissingHoveredRefGroup(e),isSelected:x.isSelected(e),key:E,numGraphColumns:w,onClickCommit:b,onContextMenu:g,onDoubleClickCommit:v,rowContext:K,setAsCurrentlyHoveredGraphCommit:_,sha:P,showColorStrip:Q,showTimeline:x.hasTimeline(e),style:T,title:S?void 0:V,type:G,verticalScrollWidth:x.getVerticalScrollWidth(F),zoneWidth:J},Z)}},iH=(e,t)=>{let{processedRows:r,getExternalIcon:n,highlightRowsOnRefHover:o,isInUnsupportedRebase:i,numGraphColumns:c,formatCommitDateTime:u,clearCurrentlyHoveredGraphCommit:h,dimMergeCommits:d,dimRowsOfSelectedCommit:p,currentlyHoveredCommitSha:m,onCommitContextMenu:g,onClickCommit:b,onDoubleClickCommit:v,setAsCurrentlyHoveredGraphCommit:w,suppressNonRefRowTooltips:_}=e,S=new eC.n$(e);return({rowIndex:e,style:C})=>{let x=t(e),T=r[e],{date:E,sha:O,type:A,contexts:D}=T,$=E&&A!==ee.bY?u(E,ee.N.RowEntry):void 0,P=E&&A!==ee.bY?u(E,ee.N.Tooltip):void 0,G=D?.date||void 0,W=D?.row||void 0,F=et.$A,B=S.isColumnFollowingGraphColumn(F),U=S.isLastColumn(F),Z=S.getZoneWidth(F),V=S.getVerticalScrollWidth(F);return j().createElement(nf,{clearCurrentlyHoveredGraphCommit:h,column:T.column,columnForColoring:T.columnForColoring,context:G,currentlyHoveredCommitSha:m,dimRowsOfSelectedCommit:p,getExternalIcon:n,graphZoneType:F,highlightRowsOnRefHover:o,isDimmedMergeCommitRow:A===ee.t$&&d,isHighlighted:S.isHighlighted(e),isHovering:S.isHovering(e),isInUnsupportedRebase:i,isLastColumn:U,isMissingHoveredRefGroup:S.isMissingHoveredRefGroup(e),isSelected:S.isSelected(e),key:x,numGraphColumns:c,onClickCommit:b,onContextMenu:g,onDoubleClickCommit:v,rowContext:W,setAsCurrentlyHoveredGraphCommit:w,sha:O,showColorStrip:B,showTimeline:!1,style:C,title:_?void 0:P,type:A,verticalScrollWidth:V,zoneWidth:Z},$)}};let iG={type:id().string,tooltip:id().bool,as:id().elementType},iW=U.forwardRef(({as:e="div",className:t,type:r="valid",tooltip:n=!1,...o},i)=>(0,oR.jsx)(e,{...o,ref:i,className:B()(t,`${r}-${n?"tooltip":"feedback"}`)}));iW.displayName="Feedback",iW.propTypes=iG;let iF=U.createContext({}),iB=U.forwardRef(({bsPrefix:e,type:t,size:r,htmlSize:n,id:o,className:i,isValid:c=!1,isInvalid:u=!1,plaintext:h,readOnly:d,as:p="input",...m},g)=>{let{controlId:b}=(0,U.useContext)(iF);return e=oF(e,"form-control"),(0,oR.jsx)(p,{...m,type:t,size:n,ref:g,readOnly:d,id:o||b,className:B()(i,h?`${e}-plaintext`:e,r&&`${e}-${r}`,"color"===t&&`${e}-color`,c&&"is-valid",u&&"is-invalid")})});iB.displayName="FormControl";let iU=Object.assign(iB,{Feedback:iW});var ij=n(350);let iZ=e=>{switch(e){case ij.types.ADDED:return"added";case ij.types.MODIFIED:return"modified";case ij.types.DELETED:return"deleted";case ij.types.RENAMED:return"renamed";default:return null}},iV=e=>{switch(e){case ij.types.ADDED:return"color-green";case ij.types.MODIFIED:return"color-orange";case ij.types.DELETED:return"color-red";case ij.types.RENAMED:return"color-blue";default:return null}},iq=e=>{switch(e){case ij.types.ADDED:return"CommitDiffSection-FileAdded";case ij.types.MODIFIED:return"CommitDiffSection-FileModified";case ij.types.DELETED:return"CommitDiffSection-FileDeleted";case ij.types.RENAMED:return"CommitDiffSection-FileRenamed";default:return null}};let nx=class nx extends j().Component{render(){let{fileDiffType:e,getExternalIcon:t,translate:r}=this.props;if(!e)return null;let n=iZ(e),o=iV(e),i=iq(e),c=B()("fs-1",o,"mr1");return j().createElement("span",{className:c,title:r(i)},n&&t(n))}};let{ADDED:iY,DELETED:iK,MODIFIED:iQ,RENAMED:iX}=ij.types,iJ={[iY]:"CommitDiffSection-NFilesAdded",[iK]:"CommitDiffSection-NFilesDeleted",[iQ]:"CommitDiffSection-NFilesModified",[iX]:"CommitDiffSection-NFilesRenamed"};var i0=function({count:e,diffType:t,getExternalIcon:r,fileNodeListStyle:n,translate:o}){let i,c,u=n?e:o(iJ[t],e);return n&&(i={fontSize:et.Gu,marginRight:et.Ql},c={fontSize:et.ro,margin:`0px ${et.tl}px 0px 0px`}),j().createElement("span",{className:"tiny-files-readout",style:i},j().createElement(nx,{fileDiffType:t,getExternalIcon:r,style:c,translate:o}),j().createElement("span",{className:"tiny-files-readout-text"},u))},i1=function({diffStats:e,fileNodeListStyle:t,getExternalIcon:r,translate:n}){let{types:o}=ij;if(!e||!Object.values(e).some(e=>!!e))return j().createElement("span",null);let i=e.modified?j().createElement(i0,{count:e.modified,diffType:o.MODIFIED,fileNodeListStyle:!0,getExternalIcon:r,translate:n}):null,c=e.added?j().createElement(i0,{count:e.added,diffType:o.ADDED,fileNodeListStyle:!0,getExternalIcon:r,translate:n}):null,u=e.deleted?j().createElement(i0,{count:e.deleted,diffType:o.DELETED,fileNodeListStyle:!0,getExternalIcon:r,translate:n}):null,h=e.renamed?j().createElement(i0,{count:e.renamed,diffType:o.RENAMED,fileNodeListStyle:!0,getExternalIcon:r,translate:n}):null,d=t?{marginLeft:et.yX}:null;return j().createElement("span",{className:"summary",style:d},i,c,u,h)};let nk=class nk extends j().Component{textWidthRef=j().createRef();wrapperRef=j().createRef();static defaultProps={style:{},value:""};componentDidMount(){this.wrapperRef?.current&&(this.wrapperRef.current.style.width="0px")}componentDidUpdate(){this.textWidthRef?.current&&this.wrapperRef?.current&&(this.wrapperRef.current.style.width=`${Number(this.textWidthRef.current.offsetWidth)+35}px`)}componentWillUnmount(){this.props.onBlur&&this.props.onBlur()}onWipKeyDown(e){e.stopPropagation()}render(){let{clearCurrentlyHoveredGraphCommit:e,currentlyHoveredCommitSha:t,getExternalIcon:r,graphZoneType:n,isCommitting:o,isHovering:i,isSelected:c,onBlur:u,onClickCommit:h,onContextMenu:d,onFocus:p,onMessageChange:m,setAsCurrentlyHoveredGraphCommit:g,sha:b,style:v,translate:w,value:_,workDirStats:S}=this.props,C=B()("graph-zone-column","pt3","pb3","pointer","height-100-percent","grow-3","graph-row-wrapper",ee.bY,{"is-hovering":i}),x=B()("column-1","graph-row","flex",{"is-selected":c}),T=j().createElement(i1,{diffStats:S,getExternalIcon:r,translate:w}),E=j().createElement("div",{className:"work-dir-input",ref:this.wrapperRef},j().createElement(iU,{"data-test-class":"work-dir-input-field",disabled:o,onBlur:e=>u(e),onChange:e=>m(e.target.value),onContextMenu:e=>d(e,n,b),onFocus:e=>p(e),onKeyDown:e=>this.onWipKeyDown(e),placeholder:w("WorkDirMessageInput-WIPPlaceholder"),type:"text",value:_}),j().createElement("div",{className:"text-width","data-test-class":"work-dir-input-message",ref:this.textWidthRef},_));return j().createElement("div",{className:C,onMouseEnter:e=>g(e,n,b,t),onMouseLeave:r=>e(r,n,b,t),style:v},j().createElement("div",{className:x,"data-test-class":"work-dir-message-row-div",onMouseDown:e=>h(e,n,b)},E,T))}};var i2=(e,t)=>{let{dimMergeCommits:r,dimRowsOfSelectedCommit:n,processedRows:o,translate:i,getExternalIcon:c,graphCommitDescDisplayMode:u,highlightRowsOnRefHover:h,isInUnsupportedRebase:d,numGraphColumns:p,isCommitting:m,pendingCommitMessageSummary:g,workDirStats:b,onBlurWipNodeInput:v,onFocusWipNodeInput:w,onMessageChange:_,clearCurrentlyHoveredGraphCommit:S,currentlyHoveredCommitSha:C,onCommitContextMenu:x,onClickCommit:T,onDoubleClickCommit:E,setAsCurrentlyHoveredGraphCommit:O,suppressNonRefRowTooltips:A,wipMessageEditable:D}=e,$=new eC.n$(e);return({rowIndex:e,style:P})=>{let G=t(e),W=o[e],{displaySummary:F,displayBody:B,sha:U,type:Z,contexts:V,message:q}=W,K=V?.message||void 0,Q=V?.row||void 0,X=et.d4,J=$.isColumnFollowingGraphColumn(X),er=$.isLastColumn(X),en=$.getZoneWidth(X),eo=$.getVerticalScrollWidth(X),ei=$.isHovering(e),es=Z===ee.bY&&void 0!==b&&Object.keys(b).length>0,ea=es&&!D?j().createElement(i1,{diffStats:b,getExternalIcon:c,translate:i}):null,el=u===et.FQ.ALWAYS||u===et.FQ.ON_HOVER&&ei,ec=Z!==ee.bY||D?j().createElement(j().Fragment,null,j().createElement("span",{className:"message-zone--summary"},F),el&&B?j().createElement("span",{className:"message-zone--body"},B):null):j().createElement("span",{style:{display:"flex",alignItems:"stretch",textOverflow:"ellipsis"}},el?F:null,ea);return es&&D?j().createElement(nk,{clearCurrentlyHoveredGraphCommit:S,currentlyHoveredCommitSha:C,getExternalIcon:c,graphZoneType:X,isCommitting:m,isHovering:$.isHovering(e),isSelected:$.isSelected(e),key:G,onBlur:v,onClickCommit:T,onContextMenu:x,onFocus:w,onMessageChange:_,setAsCurrentlyHoveredGraphCommit:O,sha:U,style:P,translate:i,value:g,workDirStats:b}):j().createElement(nf,{clearCurrentlyHoveredGraphCommit:S,column:W.column,columnForColoring:W.columnForColoring,context:K,currentlyHoveredCommitSha:C,dimRowsOfSelectedCommit:n,getExternalIcon:c,graphZoneType:X,highlightRowsOnRefHover:h,isDimmedMergeCommitRow:Z===ee.t$&&r,isHighlighted:$.isHighlighted(e),isHovering:ei,isInUnsupportedRebase:d,isLastColumn:er,isMissingHoveredRefGroup:$.isMissingHoveredRefGroup(e),isSelected:$.isSelected(e),key:G,numGraphColumns:p,onClickCommit:T,onContextMenu:x,onDoubleClickCommit:E,rowContext:Q,setAsCurrentlyHoveredGraphCommit:O,sha:U,showColorStrip:J,showConflictIcon:Z===ee.l2||Z===ee.gL,showTimeline:$.hasTimeline(e),style:P,title:A?void 0:q,type:Z,verticalScrollWidth:eo,zoneWidth:en},ec)}},i3=(e,t)=>{let{processedRows:r,getExternalIcon:n,highlightRowsOnRefHover:o,isInUnsupportedRebase:i,numGraphColumns:c,clearCurrentlyHoveredGraphCommit:u,currentlyHoveredCommitSha:h,dimMergeCommits:d,dimRowsOfSelectedCommit:p,onCommitContextMenu:m,onClickCommit:g,onDoubleClickCommit:b,setAsCurrentlyHoveredGraphCommit:v,shaLength:w,suppressNonRefRowTooltips:_}=e,S=new eC.n$(e);return({rowIndex:e,style:C})=>{let x=t(e),T=r[e],{sha:E,type:O,contexts:A}=T,D=en(E,w),$=A?.sha||void 0,P=A?.row||void 0,G=et.AR,W=S.isColumnFollowingGraphColumn(G),F=S.isLastColumn(G),B=S.getZoneWidth(G),U=S.getVerticalScrollWidth(G);return j().createElement(nf,{clearCurrentlyHoveredGraphCommit:u,column:T.column,columnForColoring:T.columnForColoring,context:$,currentlyHoveredCommitSha:h,dimRowsOfSelectedCommit:p,getExternalIcon:n,graphZoneType:G,highlightRowsOnRefHover:o,isDimmedMergeCommitRow:O===ee.t$&&d,isHighlighted:S.isHighlighted(e),isHovering:S.isHovering(e),isInUnsupportedRebase:i,isLastColumn:F,isMissingHoveredRefGroup:S.isMissingHoveredRefGroup(e),isSelected:S.isSelected(e),key:x,numGraphColumns:c,onClickCommit:g,onContextMenu:m,onDoubleClickCommit:b,rowContext:P,setAsCurrentlyHoveredGraphCommit:v,sha:E,showColorStrip:W,showTimeline:S.hasTimeline(e),style:C,type:O,verticalScrollWidth:U,zoneWidth:B},O!==ee.bY?j().createElement("span",{className:"font-monospace pointer",title:_?void 0:D},D):null)}};function i6({hasRefs:e,isActiveSha:t,left:r,type:n,width:o}){let i=B()("ref-line","z4",{"is-active":t});return e&&[ee.oB,ee.t$,ee.l2].includes(n)?j().createElement("hr",{className:i,style:{left:r,width:o}}):null}function i4({graphZoneModeConstants:{RADIUS_DIFF_MERGE_NODE_COMMIT_NODE:e},hasRefs:t,isActiveSha:r,nodeOffset:n,type:o}){return j().createElement(i6,{hasRefs:t,isActiveSha:r,left:0,type:o,width:n+(o===ee.t$?e:0)})}function i8({className:e,marginLeft:t}){return j().createElement("div",{className:B()("app-bg0","absolute","left-0","right-0","bottom-0","top-0","pt3","pb3",e),style:{marginLeft:t}},j().createElement("div",{className:"commit-bg-color height-100-percent width-100-percent"}))}let i9=(e,t,r,n)=>r+t*e+n/2;function i7({column:e,graphZoneModeConstants:{COMMIT_COLUMN_WIDTH:t,COMMIT_NODE_DIAMETER:r,COMMIT_ZONE_GUTTER_WIDTH:n}}){return j().createElement(i8,{className:"z1",marginLeft:i9(e,t,n,r)})}function st(){return j().createElement(i8,{marginLeft:0})}let sn=({authorEmail:e,authorInitials:t,authorName:r,avatarUrl:n,column:o,context:i,cssVariables:c,graphZoneModeConstants:u,left:h,message:d,opacity:p,suppressNonRefRowTooltips:m,type:g,useAuthorInitialsForAvatars:b})=>j().createElement(nv,{authorInitials:t,avatarUrl:n,className:B()("node",g,"z6"),column:o,context:i,cssVariables:c,fontSize:10,height:u.COMMIT_NODE_DIAMETER,size:u.COMMIT_ZONE_AVATAR_DIAMETER,style:{left:h,opacity:p},tooltip:m?void 0:()=>{let t=r&&""!==r.trim()&&"Unknown"!==r?iP(r,e):e,n=ea(ei(d||"")),o="";if(0===n.length)o=t;else{n.unshift({email:e,name:r});for(let e=0;e<n.length;e+=1){let t=n[e];o+=iP(t.name,t.email),e<n.length-1&&(o+=", ")}}return o},top:u.COMMIT_NODE_TOP_OFFSET,useAuthorInitialsForAvatars:b,width:u.COMMIT_NODE_DIAMETER}),so=(e,t,r,n,o,i,c=!1)=>{let u={height:i.COMMIT_MERGE_NODE_DIAMETER,left:r+i.COMMIT_MERGE_NODE_LEFT_OFFSET,marginTop:i.COMMIT_MERGE_NODE_TOP_OFFSET,opacity:n,width:i.COMMIT_MERGE_NODE_DIAMETER},h=B()("node",o,"z6"),d=j().createElement(oK,{className:"gk-graph",id:"graph-merge-node-tooltip"},iP(t,e)),p=j().createElement("div",{className:h,"data-test-class":"tree-row-commit-node",style:u});return c?p:j().createElement(im,{delay:250,overlay:d,placement:"top",trigger:["hover","focus"]},p)},si=(e,t,r,n,o,i,c,u=!1,h,d=!1)=>{let p,m={height:h.COMMIT_NODE_DIAMETER,left:n,marginTop:h.COMMIT_NODE_TOP_OFFSET,opacity:o,width:h.COMMIT_NODE_DIAMETER};u&&(m.borderWidth=1);let g=B()("gk-graph","node",c,"z6",{compact:u});p=c===ee.OZ?i("Stash"):c===ee.bY?i("Graph-WorkInProgress"):iP(r,t);let b=j().createElement("div",{className:g,"data-test-class":"tree-row-commit-node",style:m},c!==ee.OZ||u?null:j().createElement("span",null,e("stash"))),v=j().createElement(oK,{className:"gk-graph",id:"graph-other-node-tooltip"},p);return d?b:j().createElement(im,{delay:250,overlay:v,placement:"top",trigger:["hover","focus"]},b)};let nq=class nq extends j().PureComponent{render(){let{authorEmail:e,authorName:t,getExternalIcon:r,graphZoneModeConstants:n,left:o,opacity:i,suppressNonRefRowTooltips:c,translate:u,type:h}=this.props;return(t||e)&&h===ee.oB?n.IS_COMPACT?so(e,t,o,i,ee.t$,n,c):sn(this.props):h===ee.t$||h===ee.l2||h===ee.gL?so(e,t,o,i,h,n,c):si(r,e,t,o,i,u,h,n.IS_COMPACT,n,c)}};let nX=class nX extends j().Component{render(){let{columnColorByColumn:e,edgeColumnMax:t,edges:r,nodeColumn:n,graphZoneModeConstants:{COMMIT_COLUMN_WIDTH:o,COMMIT_ZONE_GUTTER_WIDTH:i,COMMIT_ZONE_LINE_WIDTH:c,IS_COMPACT:u}}=this.props,h=function(e,t,r,n,o,i,c,u){let h=function(e,t,r,n){let o="";for(let i=0;i<=t;i++){let{passThrough:t,starting:c,ending:u}=e[i]??{};o=`${o}_${ew(i,r,c?.type,n)}_${ew(i,r,u?.type,n)}_${e_(i,t?.type,n)}`}return o}(e,t,r,u),d=eG[h];if(d)return d;let p="";for(let h=0;h<=t;h+=1){let t=e[h];if(!t)continue;let{passThrough:d,starting:m,ending:g}=t;p+=(m?function(e,t,r,n,o,i,c,u){let h=ew(e,t,r,u),d=eH[h];return d||(d=t===e?function(e,t,r,n,o,i,c){let u=ey(r,e,i,c);return u.x1=em(t,n,o,c),u.x2=em(t,n,o,c),u.y1=et.kU/2,u.y2=et.kU,ev(u)}(n[e],t,r,o,i,c,u):function(e,t,r,n,o,i,c,u){let h=ey(n,e,c,u),d=t<r?-et.nf:et.nf,p={...h};p.x1=em(r,o,i,u),p.x2=em(r,o,i,u),p.y1=et.kU-et.kj,p.y2=et.kU;let m={...h};return m.x1=em(r,o,i,u)+d,m.x2=em(t,o,i,u),m.y1=et.kU/2,m.y2=et.kU/2,`<g>${e$(e,t<r?180:270,270*(t<r),n,em(r,o,i,u)+d,et.kU-et.kj,c,u)}${ev(p)}${ev(m)}</g>`}(n[e],t,e,r,o,i,c,u),eH[h]=d),d}(h,r,m.type,n,o,i,c,u):"")+(d?function(e,t,r,n,o,i,c){let u=e_(e,t,c),h=eL[u];if(h)return h;let d=em(e,n,o,c),p=ey(t,r[e],i,c);return p.x1=d,p.x2=d,p.y1=0,p.y2=et.kU,h=ev(p),eL[u]=h,h}(h,d.type,n,o,i,c,u):"")+(g?function(e,t,r,n,o,i,c,u){let h=ew(e,t,r,u),d=eP[h];return d||(d=t===e?function(e,t,r,n,o,i,c){let u=ey(r,e,i,c);return u.x1=em(t,n,o,c),u.x2=em(t,n,o,c),u.y1=0,u.y2=et.kU/2,ev(u)}(n[e],t,r,o,i,c,u):function(e,t,r,n,o,i,c,u){let h=ey(n,e,c,u),d=t<r?-et.nf:et.nf,p={...h};p.x1=em(r,o,i,u),p.x2=em(r,o,i,u),p.y1=0,p.y2=et._b;let m={...h};return m.x1=em(r,o,i,u)+d,m.x2=em(t,o,i,u),m.y1=et.kU/2,m.y2=et.kU/2,`<g>${ev(p)}${e$(e,t>r?0:90,t>r?90:180,n,em(r,o,i,u)+d,et._b,c,u)}${ev(m)}</g>`}(n[e],t,e,r,o,i,c,u),eP[h]=d),d}(h,r,g.type,n,o,i,c,u):"")}return d=`url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><g>${p}</g></svg>')`,eG[h]=d,d}(r,t,n,e,o,i,c,u);return j().createElement("div",{className:"absolute top-0 right-0 bottom-0 left-0 z2",style:{background:h}})}};function ss({boxShadowAlpha:e,boxShadowLeft:t,children:r,className:n="",left:o,width:i}){return j().createElement("div",{className:B()("absolute","top-0","bottom-0","z3",n),style:{boxShadow:`${t}px 5px 10px rgba(0, 0, 0, ${e})`,left:o,width:i}},r)}function sa({boxShadowAlpha:e,hasTimeline:t,scrollLeft:r,width:n}){return j().createElement(ss,{boxShadowAlpha:e,boxShadowLeft:5,className:"app-bg0 left-0",left:r,width:n},t?j().createElement(iI,{z2:!0}):null)}function sl({boxShadowAlpha:e,commitZoneWidth:t,hasTimeline:r,scrollLeft:n,width:o}){return j().createElement(ss,{boxShadowAlpha:e,boxShadowLeft:-5,left:n+t-o,width:o},r?j().createElement(iI,{z2:!0}):null,j().createElement(st,null))}let n1=class n1 extends j().PureComponent{render(){let{authorEmail:e,authorName:t,avatarContext:r,avatarUrl:n,clearCurrentlyHoveredGraphCommit:o,column:i,columnColorByColumn:c,columnForColoring:u,commitZoneWidth:h,cssVariables:d,currentlyHoveredCommitSha:p,edgeColumnMax:m,edges:g,hasRefs:b,hasTimeline:v,getExternalIcon:w,graphZoneModeConstants:_,isActiveSha:S,isInUnsupportedRebase:C,isLastColumn:x,isSelected:T,leftGutterBoxShadowAlpha:E,leftGutterWidth:O,message:A,nodeOffset:D,nodeOpacity:$,numGraphColumns:P,onContextMenu:G,onClickCommit:W,onDoubleClickCommit:F,rightGutterBoxShadowAlpha:U,rightGutterWidth:Z,rowContext:V,scrollLeft:q,setAsCurrentlyHoveredGraphCommit:K,sha:Q,shouldShowRefLine:X,suppressNonRefRowTooltips:J,style:ee,translate:er,type:en,useAuthorInitialsForAvatars:eo,zoneContext:ei}=this.props,es=(u??i)%P+1,ea=B()("relative","commit-zone","height-100-percent","pt3",en,`column-${es}`,{"is-selected":T,"has-active":S}),el=v?j().createElement(iI,{z2:!0}):null,ec=j().createElement("div",{className:ea,"data-vscode-context":(0,eC.DO)(ei),onContextMenu:C?void 0:e=>G(e,et.md,Q),onDoubleClick:e=>F(e,et.md,Q),onMouseDown:e=>W(e,et.md,Q),onMouseEnter:e=>K(e,et.md,Q,p),onMouseLeave:e=>o(e,et.md,Q,p),style:{...ee,...x&&{width:"100%"}}},el,j().createElement(sa,{boxShadowAlpha:E,hasTimeline:v,scrollLeft:q,width:O}),X?j().createElement(i4,{graphZoneModeConstants:_,hasRefs:b,isActiveSha:S,nodeOffset:D,type:en}):null,j().createElement(nq,{authorEmail:e,authorInitials:i$(t),authorName:t,avatarUrl:n,column:i,context:r,cssVariables:d,getExternalIcon:w,graphZoneModeConstants:_,left:D,message:A,opacity:$,suppressNonRefRowTooltips:J,translate:er,type:en,useAuthorInitialsForAvatars:eo}),j().createElement(i7,{column:i,graphZoneModeConstants:_}),j().createElement(nX,{columnColorByColumn:c,edgeColumnMax:m,edges:g,graphZoneModeConstants:_,nodeColumn:i}),j().createElement(sl,{boxShadowAlpha:U,commitZoneWidth:h,hasTimeline:v,scrollLeft:q,width:Z}));return V?j().createElement("div",{"data-vscode-context":(0,eC.DO)(V)},ec):ec}};var sc=function(e,t){let{avatarUrlByEmail:r,onMissingAvatar:n,clearCurrentlyHoveredGraphCommit:o,columnColorByColumn:i,cssVariables:c,currentlyHoveredCommitSha:u,processedRows:h,getExternalIcon:d,graphZoneModeConstants:p,isInUnsupportedRebase:m,leftGutterBoxShadowAlpha:g,leftGutterWidth:b,onCommitContextMenu:v,onClickCommit:w,onDoubleClickCommit:_,nodeOffsetByColumn:S,nodeOpacityByColumn:C,numGraphColumns:x,rightGutterBoxShadowAlpha:T,rightGutterWidth:E,setAsCurrentlyHoveredGraphCommit:O,scrollLeft:A,shouldShowRefLine:D,suppressNonRefRowTooltips:$,translate:P,useAuthorInitialsForAvatars:G}=e,W=new eC.n$(e);return({rowIndex:e,style:F})=>{let B,U=t(e),Z=h[e],V=et.md,q=W.getZoneWidth(V),{email:K,author:Q,contexts:X,message:J,sha:ee,type:er}=Z,en=Z.column,eo=X?.graph||void 0,ei=X?.avatar||void 0,es=X?.row||void 0;G||(B=r[K])||n(K,ee);let ea=W.isLastColumn(V);return j().createElement(n1,{authorEmail:K,authorName:Q,avatarContext:ei,avatarUrl:B,clearCurrentlyHoveredGraphCommit:o,column:en,columnColorByColumn:i,columnForColoring:Z.columnForColoring,commitZoneWidth:q,cssVariables:c,currentlyHoveredCommitSha:u,edgeColumnMax:Z.edgeColumnMaxes,edges:Z.edges,getExternalIcon:d,graphZoneModeConstants:p,hasRefs:Z.hasRefs||!1,hasTimeline:W.hasTimeline(e),isActiveSha:W.rowContainsCurrentHeadRef(Z),isInUnsupportedRebase:m,isLastColumn:ea,isSelected:W.isSelected(e),key:U,leftGutterBoxShadowAlpha:g,leftGutterWidth:b,message:J,nodeOffset:S[en],nodeOpacity:C[en],numGraphColumns:x,onClickCommit:w,onContextMenu:v,onDoubleClickCommit:_,rightGutterBoxShadowAlpha:T,rightGutterWidth:E,rowContext:es,scrollLeft:A,setAsCurrentlyHoveredGraphCommit:O,sha:ee,shouldShowRefLine:D,style:F,suppressNonRefRowTooltips:$,translate:P,type:er,useAuthorInitialsForAvatars:G,zoneContext:eo})}};let su=U.forwardRef(({controlId:e,as:t="div",...r},n)=>{let o=(0,U.useMemo)(()=>({controlId:e}),[e]);return(0,oR.jsx)(iF.Provider,{value:o,children:(0,oR.jsx)(t,{...r,ref:n})})});su.displayName="FormGroup";let n6=class n6 extends j().PureComponent{handleClickOutside(){let{sha:e,shorthand:t,type:r,data:n}=this.props.createRefFormData;this.props.onCancel(t,e,r,n)}constructor(e){super(e);let{createRefFormData:t,formatRefShorthand:r}=this.props,{sha:n,shorthand:o,type:i,data:c}=t;this.state={currentShorthand:r(o,n,i,c),initShorthand:o}}static getDerivedStateFromProps(e,t){let{createRefFormData:r,formatRefShorthand:n}=e,{currentShorthand:o,initShorthand:i}=t,{sha:c,shorthand:u,type:h,data:d}=r,p=u!==i;return p&&n(u,c,h,d)!==o?{currentShorthand:n(u,c,h,d),initShorthand:u}:p?{currentShorthand:o,initShorthand:u}:null}onInputChange(e){let t=e||"";if(e){let{sha:e,type:r,data:n}=this.props.createRefFormData;t=this.props.formatRefShorthand(t,e,r,n)}this.setState({currentShorthand:t}),this.props.onRefShorthandChange?.(t)}render(){let{createRefFormData:e,isRefShorthandValid:t,onCancel:r,onContextMenu:n,onRefCreate:o,refZoneWidth:i,style:c,translate:u}=this.props,{currentShorthand:h}=this.state,{data:d,sha:p,type:m}=e,g=u(m===eE.z.TAG?"RefZone-EnterTagName":"RefZone-EnterBranchName");return j().createElement("div",{className:"create-ref","data-testid":"create-ref",style:{...c,minWidth:i,width:i}},j().createElement(su,null,j().createElement(iU,{autoFocus:!0,"data-testid":"create-ref-form-control",isInvalid:h.length>0&&!t(h,p,m,d),onChange:e=>this.onInputChange(e.target?.value),onContextMenu:e=>n(e,h,p,m,d),onKeyDown:e=>{if(e.stopPropagation(),"Escape"===e.key)return void r(h,p,m,d);p&&"Enter"===e.key&&o(h,p,m,d)},placeholder:g,type:"text",value:h})))}};var sh=function({hasActive:e,overflowCount:t}){return j().createElement("span",{className:B()("overflow-count ml1",{"is-active":e}),"data-test-class":"overflow-count"},"+",t)},sd=function({style:e,children:t,column:r,numGraphColumns:n,onMouseEnter:o,onMouseLeave:i,ref:c,...u}){return j().createElement("div",{...u,className:B()("gk-graph","ref-zone",`column-${r%n+1}`),ref:c},j().createElement("ul",{onMouseEnter:o,onMouseLeave:i,style:{...e,listStyle:"none",padding:0,zIndex:1}},t))};let sp=()=>`ref-overlay-container-${Math.random()}`;var sf=function({enabledRefMetadataTypes:e,column:t,columnForColoring:r,context:n,enableShowHideRefsOptions:o,targetRef:i,hasActive:c,hasRefs:u,getExternalIcon:h,includeOnlyRefsById:d,includeOnlyRemotesByName:p,isGhostRef:m,isHovered:g,isInUnsupportedRebase:b,numGraphColumns:v,onMissingRefMetadata:w,refGroupContexts:_,refGroupsByName:S,refIconsPosition:C,refMetadata:x,refNodeHovered:T,sha:E,showRemoteNamesOnRefs:O,showContextMenuForGroupedRef:A,onClickRef:D,onDoubleClickRef:$,onToggleRefNodesShown:P,onRefBeginDrag:G,onRefCanDrag:W,onRefCanDrop:F,onRefDragEnter:Z,onRefDragLeave:V,onRefDrop:q,onRefEndDrag:K,translate:Q,type:X,useColumnHeaderIcons:J}){let[ee,er]=(0,U.useState)(sp());(0,U.useEffect)(()=>{er(sp())},[g]);let en=(0,U.useCallback)((e,t,r)=>{P(e,t.map(e=>({id:(0,eC.$V)(e),name:e.name,type:e.refType,owner:e.owner,avatarUrl:e.avatarUrl})),!1,r)},[P]),eo=(0,U.useMemo)(()=>S&&S.length>et.gi?S.slice(0,et.gi):S,[S]),ei=eo.length>0?eo[0]:null,es=(0,U.useMemo)(()=>g?eo:ei?[ei]:[],[ei,g,eo]),ea=(0,U.useMemo)(()=>{let e=et.lE+(ei?.length||0)*et.RJ+(c?et.RJ:0);return g?{height:100,position:"relative"}:{minWidth:e}},[ei,c,g]),el=(0,U.useMemo)(()=>{let e=Object.values(d);return e.length>0&&e.some(e=>e.type===eE.z.TAG)},[d]),ec=(0,U.useMemo)(()=>({enabledRefMetadataTypes:e,enableShowHideRefsOptions:o,getExternalIcon:h,groupIsHovered:g,hasActive:c,hasRefs:u,isGhostRef:m,isInUnsupportedRebase:b,onClick:D,onContextMenu:A,onDoubleClick:$,onHideRefClick:en,onHovered:T,onMissingRefMetadata:w,onRefBeginDrag:G,onRefCanDrag:W,onRefCanDrop:F,onRefDragEnter:Z,onRefDragLeave:V,onRefDrop:q,onRefEndDrag:K,refIconsPosition:C,refMetadata:x,sha:E,showRemoteNamesOnRefs:O,translate:Q,type:X,useColumnHeaderIcons:J}),[o,e,h,c,u,m,g,b,D,$,en,w,G,W,F,Z,V,q,K,C,x,T,E,A,O,Q,X,J]),eu=(0,U.useMemo)(()=>es.map(e=>{let t=e[0],r=_?.[t.name]||void 0,n=e.some(e=>{let t=(0,eC.$V)(e);switch(e.refType){case eE.z.TAG:return el&&!!d[t];case eE.z.REMOTE:return!!d[t]||e.owner&&p[e.owner];default:return!!d[t]}});return{...ec,isActive:t.isCurrentHead,isRefGroupIncluded:n,key:`ref-node-${t.fullName||t.name}`,refGroup:e,refGroupContext:r}}),[ec,el,d,p,_,es]);return j().createElement("span",{"data-vscode-context":(0,eC.DO)(n),style:ea},j().createElement("div",{className:B()({"display-none":g})},eu.map(e=>j().createElement(ni,{...e,key:e.key}))),j().createElement(iu,{key:ee,placement:"right-start",show:g,target:i.current},j().createElement(sd,{column:r??t,numGraphColumns:v},eu.map(e=>j().createElement("li",{key:e.key},j().createElement(ni,{...e,key:void 0}))))))};let sm={};let se=class se extends j().PureComponent{popoverTargetRef=(0,U.createRef)();static defaultProps={style:{}};componentDidUpdate(e){!this.props.hasRefs&&this.props.isSingleSelected&&!e.isSingleSelected&&this.props.hoveredRefZoneSha===this.props.sha&&(this.props.refZoneUnhovered(),this.props.hoveredRefGroup&&this.props.refNodeUnhovered(void 0,this.props.hoveredRefGroup,this.props.sha))}onCustomToggleRefNodesShown=(e,t,r,n)=>{this.props.onToggleRefNodesShown(e,t,r,n),this.props.refZoneUnhovered()};render(){var e;let t,r,{enabledRefMetadataTypes:n,column:o,columnForColoring:i,context:c,enableShowHideRefsOptions:u,showGhostRefsOnRowHover:h,hasActive:d,hasRefs:p,hasTimeline:m,hoveredRefGroup:g,hoveredRefZoneSha:b,getExternalIcon:v,includeOnlyRefsById:w,includeOnlyRemotesByName:_,isInUnsupportedRebase:S,numGraphColumns:C,onClickRef:x,onDoubleClickRef:T,onMissingRefMetadata:E,onRefBeginDrag:O,onRefCanDrag:A,onRefCanDrop:D,onRefDragEnter:$,onRefDragLeave:P,onRefDrop:G,onRefEndDrag:W,refGroupContexts:F,refGroupsByName:U,refIconsPosition:Z,refMetadata:V,refNodeHovered:q,refNodeUnhovered:K,refZoneHovered:Q,refZoneUnhovered:X,sha:J,shouldShowRefLine:ee,showColorStrip:er,showContextMenuForGroupedRef:en,showRemoteNamesOnRefs:eo,style:ei,translate:es,type:ea,useColumnHeaderIcons:el,width:ec}=this.props,eu=b===J,eh={minWidth:ec,width:ec},ed={...ei,...eh},ep=m?j().createElement(iI,null):null,ef=U.length,em=e=>{Q(J),ef?q(e,U[0],J):g&&K(e,g,J)},eg=e=>{X(),g&&K(e,g,J)},eb=(0,eC.xJ)((e,t)=>{eg(e),O(e,t)}),ev=ef>0&&!p&&h,ey=(e=i??o,(r=sm[t=`${ea}${e}${eu}${d}${C}${ev}`])||(r=B()(`column-${e%C+1}`,"flex","pb3","pt3","ref-zone","relative",ea,{"dim-ref":ev,"has-active":d,z6:eu,z1:!eu}),sm[t]=r),r),ew=j().createElement("div",{className:"color-strip height-100",style:{width:2}});if(!ef)return j().createElement("div",{className:ey,onMouseEnter:em,onWheel:eg,style:ed},er?ew:null,ep);let e_={minWidth:0,overflow:"hidden",width:ec-et.Zk},eS=ef-1,ex=eS>0&&!eu?j().createElement(sh,{hasActive:d,overflowCount:eS}):null;return j().createElement("div",{className:ey,onMouseEnter:em,onMouseLeave:eg,onWheel:eg,style:ed},j().createElement("div",{ref:this.popoverTargetRef}),er?ew:null,ep,j().createElement("div",{className:"flex",style:e_},j().createElement(sf,{column:o,columnForColoring:i,context:c,enabledRefMetadataTypes:n,enableShowHideRefsOptions:u,getExternalIcon:v,hasActive:d,hasRefs:p,includeOnlyRefsById:w,includeOnlyRemotesByName:_,isGhostRef:ev,isHovered:eu,isInUnsupportedRebase:S,numGraphColumns:C,onClickRef:x,onDoubleClickRef:T,onMissingRefMetadata:E,onRefBeginDrag:eb,onRefCanDrag:A,onRefCanDrop:D,onRefDragEnter:(e,t,r)=>{eu||r?.sha!==J||em(e),$(e,t,r)},onRefDragLeave:P,onRefDrop:G,onRefEndDrag:W,onToggleRefNodesShown:this.onCustomToggleRefNodesShown,refGroupContexts:F,refGroupsByName:U,refIconsPosition:Z,refMetadata:V,refNodeHovered:q,sha:J,showContextMenuForGroupedRef:en,showRemoteNamesOnRefs:eo,targetRef:this.popoverTargetRef,translate:es,type:ea,useColumnHeaderIcons:el}),ex),p&&ee?j().createElement("div",{className:"absolute left-0 flex z1",style:eh},j().createElement(i6,{hasRefs:!0,isActiveSha:d,left:et.mE,type:ea,width:"100%"})):null)}};var sg=(e,t)=>{let{createRefFormData:r,formatRefShorthand:n,enableShowHideRefsOptions:o,enabledRefMetadataTypes:i,isRefShorthandValid:c,showGhostRefsOnRowHover:u,showRemoteNamesOnRefs:h,onDoubleClickRef:d,processedRows:p,includeOnlyRefsById:m,includeOnlyRemotesByName:g,isInUnsupportedRebase:b,getExternalIcon:v,hoveredRefGroup:w,hoveredRefZoneSha:_,numGraphColumns:S,onClickRef:C,onMissingRefMetadata:x,onShowContextMenuForGroupedRef:T,onRefBeginDrag:E,onRefCanDrag:O,onRefCanDrop:A,onRefCreate:D,onRefCreateCancel:$,onRefCreateContextMenu:P,onRefDragEnter:G,onRefDragLeave:W,onRefDrop:F,onRefEndDrag:B,onRefNodeHovered:U,onRefNodeUnhovered:Z,onRefShorthandChange:V,onRefZoneHovered:q,onRefZoneUnhovered:K,onToggleRefNodesShown:Q,refIconsPosition:X,refMetadataById:J,shouldShowRefLine:ee,translate:er}=e,en=new eC.n$(e);return({rowIndex:e,style:eo})=>{let ei=t(e),es=p[e],ea=et.ui,el=en.getZoneWidth(ea),ec=en.isHovering(e),{sha:eu,type:eh,hasRefs:ed,contexts:ep}=es,ef=ep?.ref||void 0,em=ep?.refGroups||void 0,eg=en.isSingleSelected(e),eb=(u||ed)&&(ed||ec||eg)?en.getGraphRefGroupsByNameForRow(e):[],ev=en.isColumnFollowingGraphColumn(ea),ey=en.shouldUseColumnHeaderIcons(ea);return r?.sha===eu?j().createElement(n6,{createRefFormData:r,formatRefShorthand:n,isRefShorthandValid:c,key:ei,onCancel:$,onContextMenu:P,onRefCreate:D,onRefShorthandChange:V,refZoneWidth:el,style:eo,translate:er}):j().createElement(se,{column:es.column,columnForColoring:es.columnForColoring,context:ef,enabledRefMetadataTypes:i,enableShowHideRefsOptions:o,getExternalIcon:v,hasActive:en.rowContainsCurrentHeadRef(es),hasRefs:ed||!1,hasTimeline:en.hasTimeline(e),hoveredRefGroup:w,hoveredRefZoneSha:_,includeOnlyRefsById:m,includeOnlyRemotesByName:g,isInUnsupportedRebase:b,isSingleSelected:eg,key:ei,numGraphColumns:S,onClickRef:C,onDoubleClickRef:d,onMissingRefMetadata:x,onRefBeginDrag:E,onRefCanDrag:O,onRefCanDrop:A,onRefDragEnter:G,onRefDragLeave:W,onRefDrop:F,onRefEndDrag:B,onToggleRefNodesShown:Q,refGroupContexts:em,refGroupsByName:eb,refIconsPosition:X,refMetadata:J,refNodeHovered:U,refNodeUnhovered:Z,refZoneHovered:q,refZoneUnhovered:K,sha:eu,shouldShowRefLine:ee,showColorStrip:ev,showContextMenuForGroupedRef:T,showGhostRefsOnRowHover:u,showRemoteNamesOnRefs:h,style:eo,translate:er,type:eh,useColumnHeaderIcons:ey,width:el})}},sb=(e,t)=>{let{translate:r,processedRows:n}=e,o=B()("graph-row-wrapper","grow-3","height-100","graph-zone-column","min-width-0","pb3","pointer","pt3","relative"),i=new eC.n$(e);return({rowIndex:e,style:c})=>{let u=t(e),h=B()("graph-row","height-100-percent","flex"),d=i.hasTimeline(e),p=n[e],m=p.contexts?.row||void 0,g=p.timeLineEntry?.label||"",b=p.timeLineEntry?.value||0,v=d?j().createElement(iI,null):null,w=d?j().createElement("span",{className:"time-line-message-container"},j().createElement("span",{className:"time-line-message"},r(g,b))):null;return j().createElement("div",{className:o,"data-vscode-context":(0,eC.DO)(m),key:u,style:c},v,j().createElement("div",{className:h,"data-vscode-context":(0,eC.DO)(m)},w))}};let sr=class sr extends j().Component{graphComponentRef=j().createRef();graphContainerRef=j().createRef();resizeObserver;lastNavSha=null;currentSha=null;isRefContextMenuShown=!1;isMounted=!1;selectedShas=new Set;lastFocusedSha;processedGraphRowBySha={};shaByRefId={};childrenBySha={};scrollToSha;headSha;headUpstreamSha;lastLazyLoadHeight=0;lastTopVisibleRowIndex=-1;lastBottomVisibleRowIndex=-1;maxColumns=0;orderedGraphRows=[];rowStatsConstraints={min:0,max:0};shouldFireShowMoreCommits=!0;columnsToFreeWhenFound={};hasMergeNodeChildBySha={};reserverInfoBySha={};columnsUsed={};rowsStats;workDirStats=et.pi;excludeByType={};excludeRefsById={};includeOnlyRefsById={};excludeRemotesByName={};includeOnlyRemotesByName={};highlightedShas={};searchMode="normal";scrollLeft=0;scrollTop=0;graphHeight=585;graphWidth=804;graphZoneModeConstants=(0,eC.jz)();graphZonesByType={};graphZoneOrdering=[et.ui,et.md,et.d4,et.fx,et.Sq,et.$A,et.AR];clientHeight=0;missingAvatarsTimer;pendingMissingAvatars={};requestedMissingAvatars={};missingRefsMetadataTimer;pendingMissingRefsMetadata={};requestedMissingRefsMetadata={};branchUpstreamRowIndices=[];downstreamsByUpstream={};timelinesInterval;constructor(e){for(let[t,r]of(super(e),this.resizeObserver=new ResizeObserver(e=>e.forEach(e=>this.onGraphResized(e.contentRect.width,e.contentRect.height))),Object.entries(e.isSelectedBySha||{})))r&&(this.selectedShas.add(t),this.lastFocusedSha=t);this.excludeByType=this.props.excludeByType||{},this.excludeRefsById=this.props.excludeRefsById||{},this.excludeRemotesByName=this.getExcludeRemotesByName(),this.includeOnlyRemotesByName=this.getIncludeOnlyRemotesByName(),this.includeOnlyRefsById=this.props.includeOnlyRefsById||{},this.downstreamsByUpstream=this.props.downstreamsByUpstream||{},this.highlightedShas=this.props.highlightedShas||{},this.searchMode=this.props.searchMode||"normal",this.rowsStats=this.props.rowsStats||this.rowsStats,this.workDirStats=this.props.workDirStats||this.workDirStats,this.processRows(this.props.graphRows),this.cleanupSelections(),this.updateMarkerRowIndices(["selection","highlights"]);let t=(0,ec.yr)(this.props.cssVariables);this.graphZoneModeConstants=(0,eC.jz)(this.props.columnsSettings?.[et.md]?.mode),this.maybeSortGraphZoneOrderingFromSettings(this.props.columnsSettings),this.state={avatarUrlByEmail:this.props.avatarUrlByEmail||{},contexts:this.props.contexts,createRefFormData:this.props.createRefFormData,cssVariablesWithDefaults:t,columnColorByColumn:this.getColumnColorByColumn(t),currentlyHoveredCommitSha:void 0,dimMergeCommits:this.props.dimMergeCommits||!1,dimRowsOfSelectedCommit:!1,enableShowHideRefsOptions:this.props.enableShowHideRefsOptions||!1,highlightRowsOnRefHover:this.props.highlightRowsOnRefHover||!1,showGhostRefsOnRowHover:this.props.showGhostRefsOnRowHover||!1,showRemoteNamesOnRefs:this.props.showRemoteNamesOnRefs||!1,enabledRefMetadataTypes:this.props.enabledRefMetadataTypes||[],enabledScrollMarkerTypes:this.props.enabledScrollMarkerTypes||[],graphCommitDescDisplayMode:this.props.graphCommitDescDisplayMode||et.FQ.ALWAYS,graphZones:this.initializeGraphZones(this.props.columnsSettings,this.graphZoneOrdering,580),hasMoreCommits:this.props.hasMoreCommits||!1,height:this.graphHeight,highlightedShas:this.props.highlightedShas,hoveredRefGroup:void 0,hoveredRefZoneSha:void 0,isLoadingRows:this.props.isLoadingRows||!1,numGraphColumns:this.getNumGraphColumns(t),markerRowIndices:{},pendingCommitMessageSummary:this.props.pendingCommitMessageSummary||"",processedRows:[...this.orderedGraphRows],refIconsPosition:this.getRefIconsPositionOrDefault(this.props.refIconsPosition),refMetadataById:this.props.refMetadataById,rowsStats:this.rowsStats,rowsStatsLoading:this.props.rowsStatsLoading||!1,useAuthorInitialsForAvatars:this.props.useAuthorInitialsForAvatars||!1,scrollLeft:this.getScrollLeft(),scrollToAlignment:this.getScrollToAlignment(),scrollToIndex:this.getScrollToIndex(),scrollTop:this.getScrollTop(),shaLength:this.props.shaLength,themeOpacityFactor:this.props.themeOpacityFactor||et.K3.dark,width:this.graphWidth,workDirStats:this.workDirStats}}componentDidMount(){this.isMounted=!0,this.resizeObserver.observe(this.graphComponentRef.current),window.addEventListener("keydown",this.onWindowKeyDown),window.addEventListener("keyup",this.onWindowKeyUp),window.addEventListener("blur",this.onWindowBlur);let e=this.getSelectedShas();e.length>0&&this.selectCommits(e,!1,!0)}UNSAFE_componentWillReceiveProps(e){let t=!1,r=!1,n={},o=!1;this.props.searchMode!==e.searchMode&&(this.searchMode=e.searchMode||"normal",r=!0,n.highlights=!0),this.props.highlightedShas!==e.highlightedShas&&(this.setState({highlightedShas:e.highlightedShas}),this.highlightedShas=e.highlightedShas||{},"filter"===this.searchMode&&(r=!0),n.highlights=!0);let i=this.props.isSelectedBySha!==e.isSelectedBySha,c=this.props.searchMode!==e.searchMode;if(c&&(o=!0),this.processedGraphRowBySha&&(i||this.props.highlightedShas!==e.highlightedShas)&&this.selectCommits(e.isSelectedBySha?Object.keys(e.isSelectedBySha):[],!1,!0),this.props.excludeByType!==e.excludeByType&&(this.excludeByType=e.excludeByType||{},e.graphRows?.length&&(r=!0)),this.props.excludeRefsById!==e.excludeRefsById&&(this.excludeRefsById=e.excludeRefsById||{},this.excludeRemotesByName=this.getExcludeRemotesByName(),e.graphRows?.length&&(r=!0)),this.props.includeOnlyRefsById!==e.includeOnlyRefsById&&(this.includeOnlyRefsById=e.includeOnlyRefsById||{},this.includeOnlyRemotesByName=this.getIncludeOnlyRemotesByName(),e.graphRows?.length&&(r=!0)),this.props.themeOpacityFactor!==e.themeOpacityFactor&&this.setState({themeOpacityFactor:e.themeOpacityFactor}),this.props.dimMergeCommits!==e.dimMergeCommits&&this.setState({dimMergeCommits:e.dimMergeCommits||!1}),this.props.highlightRowsOnRefHover!==e.highlightRowsOnRefHover&&this.setState({highlightRowsOnRefHover:e.highlightRowsOnRefHover||!1}),this.props.showGhostRefsOnRowHover!==e.showGhostRefsOnRowHover&&this.setState({showGhostRefsOnRowHover:e.showGhostRefsOnRowHover||!1}),this.props.showRemoteNamesOnRefs!==e.showRemoteNamesOnRefs&&this.setState({showRemoteNamesOnRefs:e.showRemoteNamesOnRefs||!1}),this.props.enabledRefMetadataTypes!==e.enabledRefMetadataTypes&&this.setState({enabledRefMetadataTypes:e.enabledRefMetadataTypes||[]}),this.props.enabledScrollMarkerTypes!==e.enabledScrollMarkerTypes&&this.setState({enabledScrollMarkerTypes:e.enabledScrollMarkerTypes||[]}),this.props.graphCommitDescDisplayMode!==e.graphCommitDescDisplayMode&&this.setState({graphCommitDescDisplayMode:e.graphCommitDescDisplayMode||et.FQ.ALWAYS}),this.props.isContainerWindowFocused!==e.isContainerWindowFocused&&this.dimRowsOfSelectedCommit(!1),this.props.downstreamsByUpstream!==e.downstreamsByUpstream&&(this.downstreamsByUpstream=e.downstreamsByUpstream||{},e.graphRows?.length&&(r=!0)),this.props.graphRows!==e.graphRows||this.props.cssVariables!==e.cssVariables||r){this.cleanEdgeCaches();let n=(0,ec.yr)(e.cssVariables);o=!0,this.setState({columnColorByColumn:this.getColumnColorByColumn(n),cssVariablesWithDefaults:n,numGraphColumns:this.getNumGraphColumns(n)}),this.cleanupSelections(),t=!0,(e.graphRows?.length<this.props.graphRows?.length||r)&&(this.lastLazyLoadHeight=0)}if(this.props.useAuthorInitialsForAvatars!==e.useAuthorInitialsForAvatars&&this.setState({useAuthorInitialsForAvatars:e.useAuthorInitialsForAvatars}),this.props.shaLength!==e.shaLength&&this.setState({shaLength:e.shaLength}),(this.props.hasMoreCommits!==e.hasMoreCommits||this.props.onShowMoreCommits!==e.onShowMoreCommits)&&this.setState({hasMoreCommits:e.hasMoreCommits||!1},()=>this.loadMoreCommitsIfNecessary(this.graphHeight,this.state.hasMoreCommits)),this.props.isLoadingRows!==e.isLoadingRows&&this.setState({isLoadingRows:e.isLoadingRows||!1}),this.props.rowsStats!==e.rowsStats&&(this.rowsStats=e.rowsStats,this.updateRowStatsConstraints(),this.setState({rowsStats:e.rowsStats})),this.props.rowsStatsLoading!==e.rowsStatsLoading&&this.setState({rowsStatsLoading:e.rowsStatsLoading||!1}),this.props.workDirStats!==e.workDirStats&&(this.workDirStats=e.workDirStats||et.pi,(!(0,eC.X1)(this.props.workDirStats)&&(0,eC.X1)(e.workDirStats)||(0,eC.X1)(this.props.workDirStats)&&!(0,eC.X1)(e.workDirStats))&&(o=!0),this.setState({workDirStats:this.workDirStats})),this.props.avatarUrlByEmail!==e.avatarUrlByEmail&&(this.setState({avatarUrlByEmail:e.avatarUrlByEmail||{}}),this.requestedMissingAvatars={}),this.props.refIconsPosition!==e.refIconsPosition&&this.setState({refIconsPosition:this.getRefIconsPositionOrDefault(e.refIconsPosition)}),this.props.refMetadataById!==e.refMetadataById&&(this.setState({refMetadataById:e.refMetadataById}),this.requestedMissingRefsMetadata={},n.pullRequests=!0),this.props.columnsSettings!==e.columnsSettings){if(e.columnsSettings?.[et.md]?.mode!==this.props.columnsSettings?.[et.md]?.mode){this.cleanEdgeCaches(),this.graphZoneModeConstants=(0,eC.jz)(e.columnsSettings?.[et.md]?.mode),this.updateCommitZoneContentWidthFromChange();let r=this.graphZonesByType[et.md];r.currentWidth=r.contentWidth,r.preferredWidth=r.contentWidth,r.minimumWidth=this.graphZoneModeConstants.COMMIT_ZONE_VIEWPORT_WIDTH_MIN,r.showIconWidth=this.graphZoneModeConstants.COMMIT_ZONE_SHOW_ICON_WIDTH,this.loadEdgesBySha(),t=!0}e.columnsSettings&&(this.updateZonesFromSettings(e.columnsSettings),t=!0)}if(this.props.contexts!==e.contexts&&this.setState({contexts:e.contexts}),this.props.pendingCommitMessageSummary!==e.pendingCommitMessageSummary&&this.setState({pendingCommitMessageSummary:e.pendingCommitMessageSummary||""}),this.props.enableShowHideRefsOptions!==e.enableShowHideRefsOptions&&this.setState({enableShowHideRefsOptions:e.enableShowHideRefsOptions}),this.props.createRefFormData!==e.createRefFormData&&(e.createRefFormData?.sha&&this.selectCommits([e.createRefFormData?.sha],!1,!0),this.setState({createRefFormData:e.createRefFormData})),o){this.processRows(e.graphRows);let t=(0,ec.yr)(e.cssVariables);(c||i)&&this.selectCommits(e.isSelectedBySha?Object.keys(e.isSelectedBySha):[],!1,!0),this.setState({processedRows:[...this.orderedGraphRows],columnColorByColumn:this.getColumnColorByColumn(t)})}if(t){this.updateCommitZoneContentWidthFromChange();let e=this.getOrderedActiveGraphZones();this.expandLastZoneMinWidthForScrollbar(e),this.ensureZoneWidthsMatchGraphWidth(e,this.graphWidth),this.setState({graphZones:e})}Object.keys(n).length&&this.updateMarkerRowIndices(Object.keys(n),e)}componentWillUnmount(){this.isMounted=!1,this.clearTimelinesInterval(),window.removeEventListener("keydown",this.onWindowKeyDown),window.removeEventListener("keyup",this.onWindowKeyUp),window.removeEventListener("blur",this.onWindowBlur),this.resizeObserver.disconnect()}focus(){this.graphContainerRef?.current?.focus()}getRefIconsPositionOrDefault(e){return e||eE.E.LEFT}onGraphVisibleRowsUpdatedThrottled=(0,eC.nF)(()=>this.onGraphVisibleRowsUpdated(),250,20);onBlurWipNodeInput=e=>{this.props.onBlurWipNodeInput&&this.props.onBlurWipNodeInput(e)};onDoubleClickRef=(e,t,r,n)=>{this.props.onDoubleClickGraphRef&&this.props.onDoubleClickGraphRef(e,t,this.processedGraphRowBySha[r],n)};onFocusWipNodeInput=e=>{this.props.onFocusWipNodeInput&&this.props.onFocusWipNodeInput(e)};onFilterColumnClick=(e,t)=>{this.props.onFilterColumnClick&&this.props.onFilterColumnClick(e,t)};onCurrentlyHoveredGraphCommit=(e,t,r,n)=>{n!==r&&(this.props.onGraphRowHovered&&this.props.onGraphRowHovered(e,t,this.processedGraphRowBySha[r]),this.setState({currentlyHoveredCommitSha:r}))};onClearCurrentlyHoveredGraphCommit=(e,t,r,n)=>{n&&(this.props.onGraphRowUnhovered&&this.props.onGraphRowUnhovered(e,t,this.processedGraphRowBySha[r]),this.setState({currentlyHoveredCommitSha:void 0}))};onGraphColumnReOrdered=(e,t)=>{let r=this.graphZoneOrdering.indexOf(e),n=t?this.graphZoneOrdering.indexOf(t):this.graphZoneOrdering.length-1;t&&r<n&&(n-=1),this.graphZoneOrdering.splice(r,1),this.graphZoneOrdering.splice(n,0,e);let o={};this.graphZoneOrdering.forEach((e,t)=>{this.graphZonesByType[e].order=t,o[e]=this.getGraphColumnSettingFromZoneType(this.graphZonesByType[e])}),this.setState({graphZones:this.initializeGraphZones(o,this.graphZoneOrdering,this.graphWidth)}),this.props.onGraphColumnsReOrdered&&this.props.onGraphColumnsReOrdered(o)};onGraphZoneResize=(0,eC.xJ)((e,t)=>{if(t?.width){let r=this.getOrderedActiveGraphZones();this.adjustResizedGraphZone(r,e,t,!1),this.setState({graphZones:r})}});onGraphZoneResizeEnd=(0,eC.xJ)((e,t)=>{if(t?.width){let r=this.getOrderedActiveGraphZones();this.adjustResizedGraphZone(r,e,t,!0),this.setState({graphZones:r})}this.props.onColumnResized&&this.props.onColumnResized(e.type,this.getGraphColumnSettingFromZoneType(this.graphZonesByType[e.type]))});onPopupGraphHeaderContextMenu=(e,t)=>{this.props.onPopupGraphHeaderContextMenu&&this.props.onPopupGraphHeaderContextMenu(e,t)};onSettingsClick=(e,t)=>{this.props.onSettingsClick&&(e.stopPropagation(),this.props.onSettingsClick(e,t))};onMessageChange=e=>{this.setState({pendingCommitMessageSummary:e}),this.props.onMessageChange&&this.props.onMessageChange(e)};onRefBeginDrag=(e,t)=>{this.props.onRefBeginDrag&&this.props.onRefBeginDrag(e,t)};onRefCanDrag=e=>!!this.props.onRefCanDrag&&this.props.onRefCanDrag(e);onRefCanDrop=(e,t,r)=>!!this.props.onRefCanDrop&&this.props.onRefCanDrop(e,t,r);onRefCreate=(e,t,r,n)=>{this.props.onRefCreate&&this.props.onRefCreate(e,t,r,n)};onRefCreateCancel=(e,t,r,n)=>{this.props.onRefCreateCancel&&this.props.onRefCreateCancel(e,t,r,n)};onRefCreateContextMenu=(e,t,r,n,o)=>{this.props.onRefCreateContextMenu&&this.props.onRefCreateContextMenu(e,t,r,n,o)};onRefDragEnter=(e,t,r)=>{this.props.onRefDragEnter&&this.props.onRefDragEnter(e,t,r)};onRefDragLeave=(e,t,r)=>{this.props.onRefDragLeave&&this.props.onRefDragLeave(e,t,r)};onRefDrop=(e,t,r)=>{this.props.onRefDrop&&this.props.onRefDrop(e,t,r)};onRefEndDrag=(e,t,r)=>{this.props.onRefEndDrag&&this.props.onRefEndDrag(e,t,r)};onZoneRowClick(e,t,r){if(0===e.button){let{enableMultiSelection:t,shiftSelectMode:n}=this.props,o=this.isMacOSPlatform();if(t&&(!o&&e.ctrlKey||o&&e.metaKey))this.selectCommits([r],!0,!1);else if(t&&"simple"===n&&e.shiftKey)if(this.lastFocusedSha){if(this.lastFocusedSha!==r){let e=this.getShiftSelectRange(r);e.length&&this.selectCommits(e,!0,!1)}}else this.selectCommits([r],!1,!1);else this.selectCommits([r],!1,!1)}}getShiftSelectRange(e){if(!this.lastFocusedSha||!this.selectedShas.size)return[e];let t=this.processedGraphRowBySha[this.lastFocusedSha].rowIndex,r=Array.from(this.selectedShas).map(e=>this.processedGraphRowBySha[e].rowIndex),n=Math.min(...r),o=Math.max(...r),i=o>t,c=this.selectedShas.size>1,u=this.processedGraphRowBySha[e].rowIndex,h=[];if(t<u)for(let e=t;e<=u;e++)c&&i?(u<=o&&e!==u||u>o&&e!==o)&&h.push(this.orderedGraphRows[e].sha):e!==t&&h.push(this.orderedGraphRows[e].sha);else for(let e=t;e>=u;e--)c&&!i?(u>=n&&e!==u||u<n&&e!==n)&&h.push(this.orderedGraphRows[e].sha):e!==t&&h.push(this.orderedGraphRows[e].sha);return h}onClickRef=(e,t,r,n)=>{this.onZoneRowClick(e,et.ui,r),this.props.onClickGraphRef&&this.props.onClickGraphRef(e,t,this.processedGraphRowBySha[r],n),this.currentSha=r,this.loadSelectedGraphRow(this.currentSha),this.lastNavSha=null};onClickCommit=(e,t,r)=>{if(this.onZoneRowClick(e,t,r),this.props.onClickGraphRow){let n=this.processedGraphRowBySha[r];this.props.onClickGraphRow(e,t,n)}this.currentSha=r,this.loadSelectedGraphRow(this.currentSha),this.lastNavSha=null};onDoubleClickCommit=(e,t,r)=>{if(this.props.onDoubleClickGraphRow){let n=this.processedGraphRowBySha[r];this.props.onDoubleClickGraphRow(e,t,n)}};onWindowKeyUp=e=>{switch(e.key){case eS.e.metaKey:this.isMacOSPlatform()&&this.dimRowsOfSelectedCommit(!1);break;case eS.e.controlKey:this.isMacOSPlatform()||this.dimRowsOfSelectedCommit(!1)}};onWindowBlur=e=>{let{hoveredRefGroup:t,hoveredRefZoneSha:r}=this.state;t&&r&&this.onRefNodeUnhovered(e,t,r),this.onRefZoneUnhovered(),this.dimRowsOfSelectedCommit(!1)};onWindowKeyDown=e=>{switch(e.key){case eS.e.metaKey:this.isMacOSPlatform()&&this.dimRowsOfSelectedCommit(!0);break;case eS.e.controlKey:this.isMacOSPlatform()||this.dimRowsOfSelectedCommit(!0);break;default:this.state.dimRowsOfSelectedCommit&&this.dimRowsOfSelectedCommit(!1)}};onKeyUp=e=>{this.lastNavSha&&this.isNavigationKey(e.key)&&this.currentSha!==this.lastNavSha&&(this.loadSelectedGraphRow(this.currentSha),this.lastNavSha=null)};onKeyDown=e=>{switch(null===this.lastNavSha&&this.isNavigationKey(e.key)&&(this.lastNavSha=this.currentSha),e.key){case eS.e.arrowUpKey:this.selectPrevious(e.shiftKey);break;case eS.e.arrowDownKey:this.selectNext(e.shiftKey);break;case"H":case"h":this.selectHead(e.shiftKey)}};isNavigationKey(e){return[eS.e.arrowUpKey,eS.e.arrowDownKey].some(t=>t===e)}loadSelectedGraphRow(e){let t=this.processedGraphRowBySha[e];t&&this.props.onLoadSelectedGraphRow&&this.props.onLoadSelectedGraphRow(t)}onRefNodeHovered=(e,t,r)=>{(!this.props.showGhostRefsOnRowHover||(0,eC.SY)(this.selectedShas,r)||this.processedGraphRowBySha[r]?.hasRefs)&&(this.props.onGraphRefNodeHovered&&this.props.onGraphRefNodeHovered(e,t,this.processedGraphRowBySha[r]),this.setState({hoveredRefGroup:[...t]}))};onRefNodeUnhovered=(e,t,r)=>{this.isRefContextMenuShown||(this.props.onGraphRefNodeUnhovered&&this.props.onGraphRefNodeUnhovered(e,t,this.processedGraphRowBySha[r]),this.setState({hoveredRefGroup:void 0}))};onRefShorthandChange=e=>{let{createRefFormData:t}=this.state;this.setState({createRefFormData:{...t,shorthand:e}})};onRefZoneHovered=e=>{this.setState({hoveredRefZoneSha:e})};onRefZoneUnhovered=()=>{this.isRefContextMenuShown||this.setState({hoveredRefZoneSha:void 0})};onShowMoreCommits=()=>{this.props.onShowMoreCommits&&this.shouldFireShowMoreCommits&&(this.props.onShowMoreCommits(),this.shouldFireShowMoreCommits=!1,setTimeout(()=>{this.shouldFireShowMoreCommits=!0},250))};onScrollForZone=(e,t,r,n,o)=>{this.setScroll(e,t),this.props.onScrollForZone&&this.props.onScrollForZone(e,t),this.loadMoreCommitsIfNecessary(n,o)};loadMoreCommitsIfNecessary(e,t){if(!this.props.onShowMoreCommits||!t||!e||e<0||!this.scrollTop||this.scrollTop<0||!this.orderedGraphRows?.length)return;let r=this.scrollTop+e,n=this.orderedGraphRows.length*et.yB;r>n-et.By&&r>this.lastLazyLoadHeight&&(this.lastLazyLoadHeight=Math.min(r,n-1),this.onShowMoreCommits())}onScrollToRowCausedUpdateForFirstColumn=(e,t)=>{let r={...t};if(e===et.md&&t.scrollTop){let t=this.getHorizontalScrollHeight(e,this.state.cssVariablesWithDefaults);r.scrollTop-=t+et.ar}this.setScroll(e,r),this.props.onScrollToRowCausedUpdateForFirstColumn?.(e,r)};onCommitContextMenu=(e,t,r)=>{if(this.props.onRowContextMenu){let n=this.processedGraphRowBySha[r];this.props.onRowContextMenu(e,t,n)}};onRefContextMenu=(e,t,r)=>{if(this.props.onRefContextMenu){this.isRefContextMenuShown=!0,this.onRefZoneHovered(r);let n=this.processedGraphRowBySha[r];this.props.onRefContextMenu(e,t,n),setTimeout(()=>{this.isRefContextMenuShown=!1},250)}};selectCommits(e,t,r){if(!t)for(let t of this.selectedShas)e.includes(t)||this.selectedShas.delete(t);for(let r of e)t&&this.selectedShas.has(r)?this.selectedShas.delete(r):this.processedGraphRowBySha?.[r]&&this.selectedShas.add(r);if(this.lastFocusedSha=e.length&&this.selectedShas.has(e[e.length-1])?e[e.length-1]:(0,eC.HV)(this.selectedShas),this.lastFocusedSha&&this.selectSha(this.lastFocusedSha,r),this.props.onSelectGraphRows){let e=this.getSelectedShas().map(e=>this.processedGraphRowBySha[e]);this.props.onSelectGraphRows(e)}this.updateMarkerRowIndices(["selection"]),this.setState({processedRows:[...this.orderedGraphRows]})}getCommitZoneContentWidthBetweenGutters(){return this.getCurrentWidthByZone(et.md)-this.getLeftGutterWidth()-this.getRightGutterWidth()}getSelectedShas(){return[...this.selectedShas]}getExcludeRemotesByName(){let e={};return Object.values(this.excludeRefsById).forEach(t=>{t.type===eE.z.REMOTE&&t.owner&&"*"===t.name&&(e[t.owner]=!0)}),e}getIncludeOnlyRemotesByName(){let e={};return Object.values(this.includeOnlyRefsById).forEach(t=>{t.type===eE.z.REMOTE&&t.owner&&"*"===t.name&&(e[t.owner]=!0)}),e}clearScrollToIndex=(0,eC.xJ)(()=>{this.isMounted&&this.setState({scrollToIndex:void 0})});getTopAndBottomVisibleRowIndex(){let{graphHeight:e,orderedGraphRows:t,scrollTop:r}=this,n=e||0;if(!n||!t?.length)return{top:-1,bottom:-1};let o=(n-et.q4)/et.yB,i=r/et.yB,c=Math.min(Math.ceil(i+(o-1)),t.length-1);return{top:Math.max(Math.floor(i),0),bottom:c}}getOffsetSha(e){let t=this.graphHeight||0,r=this.props.scrollRowPadding||0;if(!r||!t)return e;let n=r;if(n<=0)return e;let o=this.getTopAndBottomVisibleRowIndex(),i=o.top,c=o.bottom;if(-1===i||-1===c)return e;let u=Math.floor((c-i)/2);if(u<1)return e;n=Math.min(n,u);let h=this.orderedGraphRows.length,d=this.orderedGraphRows.findIndex(t=>t.sha===e);if(!d||!this.orderedGraphRows.length)return e;let p=i+n>d,m=c-n<d;return p?this.orderedGraphRows[Math.max(d-n,0)].sha||e:m&&this.orderedGraphRows[Math.min(d+n,h-1)].sha||e}selectSha(e,t=!1){let r=this.processedGraphRowBySha[e]?.column||0,n=this.getScrollLeft(),o=this.getCommitZoneContentWidthBetweenGutters(),i=this.getCurrentWidthByZone(et.md),c=this.getCommitZoneContentWidth(),u=r*this.graphZoneModeConstants.COMMIT_COLUMN_WIDTH,h=n-this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH/3<=u&&u<=n+o?n:(0,eO.q)(u-o/2,0,Math.max(0,c-i));this.setScrollToSha(t?this.getOffsetSha(e):e,h),this.setState({scrollToAlignment:this.getScrollToAlignment(),scrollToIndex:this.getScrollToIndex()},this.clearScrollToIndex)}updateWidthByZone(e,t,r){let n=this.getOrderedActiveGraphZones(),o=this.graphZonesByType[t],i=(0,eC.jY)(o,n,e);if(o.currentWidth=i,t===et.md){let e=Math.max(0,this.getCommitZoneContentWidth()-o.currentWidth);this.getScrollLeft()>e&&this.setScrollLeft(e)}r&&(o.preferredWidth=i)}updateCommitZoneContentWidthFromChange(){let e=this.graphZonesByType[et.md];if(!e.isHidden){let t=this.getOrderedActiveGraphZones(),r=this.getCommitZoneContentWidth();e.contentWidth=r,e.maximumWidth=r,e.currentWidth>r&&(e.currentWidth=(0,eC.jY)(e,t,r)),this.setState({graphZones:t})}}getCurrentWidthByZone(e,t=!0){let r=t?this.getVerticalScrollWidth(et.md,this.props.cssVariables,!0):0,n=this.graphZonesByType[e];return n&&!n.isHidden?n.currentWidth-r:0}getCommitZoneContentWidth(){return(this.maxColumns||1)*this.graphZoneModeConstants.COMMIT_COLUMN_WIDTH+2*this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH+2*this.graphZoneModeConstants.COMMIT_ZONE_PADDING_RIGHT}getCommitZoneWidth(e=!0){let t=e?this.getVerticalScrollWidth(et.md,this.props.cssVariables,!0):0;if(this.graphZonesByType[et.md])return this.graphZonesByType[et.md].currentWidth-t;let{columnsSettings:r}=this.props;return r?.[et.md]?r[et.md].width-t:et.W[et.md].minimumWidth-t}getSingleColumnModeFactor(){let e=this.maxColumns,t=this.getCurrentWidthByZone(et.md);return 1===e?0:(0,eO.q)(1-(t-2*this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH-this.graphZoneModeConstants.COMMIT_ZONE_PADDING_RIGHT)/this.graphZoneModeConstants.COMMIT_COLUMN_WIDTH,0,1)}setClientHeight(e){this.clientHeight=e}getClientHeight(){return this.clientHeight}setScroll(e,t){this.setClientHeight(t.clientHeight),null!=t.scrollTop&&this.setScrollTop(t.scrollTop),e===et.md&&null!=t.scrollLeft&&this.setScrollLeft(t.scrollLeft)}getNonAdjustedScrollLeft(){return this.scrollLeft}setScrollLeft(e){this.scrollLeft!==e&&(this.scrollLeft=e,this.setState({scrollLeft:e}))}getScrollLeft(){let e=this.getNonAdjustedScrollLeft();return this.getCommitZoneContentWidth()!==this.getCommitZoneWidth()?e:0}setScrollTop(e){this.scrollTop!==e&&(this.scrollTop=e,this.setState({scrollTop:e}),this.onGraphVisibleRowsUpdatedThrottled())}getScrollTop(){return this.scrollTop}getScrollToSha(){return this.scrollToSha}setScrollToSha(e,t){this.scrollToSha=e,this.setScrollLeft(t),this.onGraphVisibleRowsUpdated()}getScrollToIndex(){let e=this.getScrollToSha();if(e){let t=this.processedGraphRowBySha[e]?.rowIndex;return void 0===t?this.orderedGraphRows.findIndex(t=>t.sha===e):t}return -1}getScrollToAlignment(){let e=this.getClientHeight(),t=this.getScrollTop(),r=this.getScrollToIndex();return(0,eC.Mz)(et.yB,e,t,r)}getMinNodeOffset(){let e=this.getScrollLeft(),t=this.getSingleColumnModeFactor();return(1-t)*(e+2*this.graphZoneModeConstants.COMMIT_ZONE_PADDING_LEFT)+t*(e+this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH)}getHorizontalScrollHeight(e,t,r){return this.graphZonesByType[e]?(0,eC.xy)(e,this.getOrderedActiveGraphZones(),this.orderedGraphRows,t,r):0}getVerticalScrollWidth(e,t,r){return this.graphZonesByType[e]?(0,eC.K8)(e,this.getOrderedActiveGraphZones(),this.props.hasMoreCommits,this.props.isLoadingRows,this.graphHeight,this.orderedGraphRows,this.props.enabledScrollMarkerTypes?.length>0,t,r):0}getMaxNodeOffset(){let e=this.getCurrentWidthByZone(et.md),t=this.getScrollLeft(),r=this.getSingleColumnModeFactor();return(1-r)*(e+t+(this.graphZoneModeConstants.COMMIT_ZONE_PADDING_RIGHT-this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH))+r*(t+this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH)}getAbsoluteNodeLeftByColumn(){let e={};for(let t=0;t<=this.maxColumns;t+=1)e[t]=this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH+this.graphZoneModeConstants.COMMIT_COLUMN_WIDTH*t;return e}getNodeOffsetByColumn(){let e=this.getMinNodeOffset(),t=this.getMaxNodeOffset(),r=this.getAbsoluteNodeLeftByColumn(),n={};return Object.keys(r).forEach(o=>{let i=r[o];n[o]=(0,eO.q)(i,e,t)}),n}getMaxNodeLeft(){return this.getScrollLeft()+(this.getCurrentWidthByZone(et.md)-this.graphZoneModeConstants.COMMIT_COLUMN_WIDTH-this.graphZoneModeConstants.COMMIT_ZONE_PADDING_RIGHT)}getMinNodeLeft(){let e=this.getScrollLeft(),t=this.getSingleColumnModeFactor();return e+this.graphZoneModeConstants.COMMIT_ZONE_PADDING_LEFT+t*this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH}getRightGutterSlideOutFactor(){let e=this.getCurrentWidthByZone(et.md),t=this.getCommitZoneContentWidth(),r=this.getSingleColumnModeFactor();return(0,eO.q)((e-(t-(this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH+this.graphZoneModeConstants.COMMIT_ZONE_PADDING_RIGHT)))/this.graphZoneModeConstants.COMMIT_COLUMN_WIDTH,0,1)+r/2}getNodeOpacityByColumn(){let e=this.getMinNodeLeft(),t=this.getMaxNodeLeft(),r=this.getAbsoluteNodeLeftByColumn(),n=this.getRightGutterSlideOutFactor(),o=this.getSingleColumnModeFactor(),i={};return Object.keys(r).forEach(c=>{let u=r[c],h=u-(e-o*this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH),d=t+this.graphZoneModeConstants.COMMIT_COLUMN_WIDTH-(u+this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH*(1-n));i[c]=et.Td+(1-et.Td)*Math.max(Math.min(h,d)/(this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH/2),o)}),i}getLeftGutterWidth(){let e=this.getSingleColumnModeFactor();return this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH+this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH/2*e}getRightGutterWidth(){return(1-this.getRightGutterSlideOutFactor())*this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH}getBoxShadowAlphaForGutter(e,t){return .4*(1-Math.max(e,t))}getLeftGutterBoxShadowAlpha(e){let t=this.getScrollLeft(),r=this.getSingleColumnModeFactor();return e*this.getBoxShadowAlphaForGutter(r,(0,eO.q)(1-t/this.graphZoneModeConstants.COMMIT_COLUMN_WIDTH,0,1))}getRightGutterBoxShadowAlpha(e){let t=this.getSingleColumnModeFactor(),r=this.getRightGutterSlideOutFactor();return e*this.getBoxShadowAlphaForGutter(t,r)}updateMarkerRowIndices(e,t){this.isMounted&&this.setState(({markerRowIndices:r})=>{e.forEach(e=>{r[e]=[]}),e.includes("selection")&&this.getSelectedShas().forEach(e=>{this.processedGraphRowBySha[e]?.rowIndex!==void 0&&r.selection.push(this.processedGraphRowBySha[e].rowIndex)});let n=t?.searchMode??this.props.searchMode;if(e.includes("highlights")&&"filter"!==n&&Object.keys(t.highlightedShas||this.state?.highlightedShas||this.props.highlightedShas||{}).forEach(e=>{this.processedGraphRowBySha[e]?.rowIndex!==void 0&&r.highlights.push(this.processedGraphRowBySha[e].rowIndex)}),e.includes("pullRequests")){let e=t?.refMetadataById||this.state?.refMetadataById||this.props.refMetadataById||{};Object.keys(e).forEach(t=>{if(e[t]?.[ex.ki]?.length>0){let e=this.shaByRefId[t];null!=e&&this.processedGraphRowBySha[e]?.rowIndex!==void 0&&r.pullRequests.push(this.processedGraphRowBySha[e].rowIndex)}})}})}getMarkerColors(){let e=getComputedStyle(document.documentElement),t={};return Object.values(et.wx).forEach(r=>{let n=e.getPropertyValue(r.colorCssKey).trim();n&&(t[r.type]=n)}),t}initializeGraphZones(e,t,r){this.graphZonesByType={};let n=[],o=0;t.forEach((t,r)=>{let i=e?e[t]:void 0,c=et.W[t],u=i?.width?i.width:c.minimumWidth,h={...c,type:t,currentWidth:u,preferredWidth:u,isHidden:i?.isHidden||!1,mode:i?.mode,order:c.isCustomizable&&i?.order!==void 0?i?.order:r};i?.isHidden||(o+=h.currentWidth),t===et.md&&(h.contentWidth=this.getCommitZoneContentWidth(),h.minimumWidth=this.graphZoneModeConstants.COMMIT_ZONE_VIEWPORT_WIDTH_MIN,h.showIconWidth=this.graphZoneModeConstants.COMMIT_ZONE_SHOW_ICON_WIDTH,this.maxColumns>0&&(h.maximumWidth=h.contentWidth)),this.graphZonesByType[t]=h,h?.isHidden||n.push(h)});let i=n[n.length-1];if(i){let e=(0,eC.eQ)(this.props.cssVariables,!0),t=i.minimumWidth+e;(null==i.maximumWidth||i.maximumWidth>=t)&&(i.minimumWidth=t,null!=i.showIconWidth&&(i.showIconWidth+=e),n[n.length-1]=i)}for(n.forEach(e=>{let t=(0,eC.jY)(e,n,e.currentWidth);t!==e.currentWidth&&(o-=e.currentWidth,e.currentWidth=t,o+=t)});o>r;){let e=(0,eC.Q9)(n);if(!e)break;let t=e.currentWidth,i=o-r,c=Math.max(e.minimumWidth,t-i),u=t-c;this.graphZonesByType[e.type].currentWidth=c,o-=u}if(o<r){let e=t[t.length-1],o=r-(0,eC.al)(n,e);this.graphZonesByType[e].currentWidth=o}return n}maybeSortGraphZoneOrderingFromSettings(e){this.graphZoneOrdering.every(t=>e?.[t]?.order!==void 0)&&this.graphZoneOrdering.sort((t,r)=>e[t].order<e[r].order?-1:+(e[t].order>e[r].order))}updateZonesFromSettings(e){let t=!1;this.graphZoneOrdering.forEach((r,n)=>{let o=this.graphZonesByType[r],i=e?.[o.type];i&&(i.isHidden===o.isHidden||(t=!0,o.type!==et.Sq||i.isHidden||this.updateRowStatsConstraints()),o.isHidden=i.isHidden,o.order=o.isCustomizable&&i?.order!==void 0?i?.order:n,o.mode=i.mode,o.preferredWidth=i.width??o.preferredWidth,o.currentWidth=o.preferredWidth)}),t&&this.graphZoneOrdering.forEach(e=>{let t=this.graphZonesByType[e];t.currentWidth=t.minimumWidth})}getEdgeColumnMaxes(e){let t=0;return Object.keys(this.processedGraphRowBySha[e]?.edges||{}).forEach(e=>{t=Math.max(t,parseInt(e,10))}),t}getEndingAndPassThroughEdgesByColumnFromPrevRow(e,t){let r,n,o,i,c={};return Object.keys(t).forEach(u=>{n=(r=t[u]).passThrough,o=r.starting,(i=n&&!er(n.type)?n:o&&!er(o.type)?o:n||o||void 0)&&(i.parentSha===e.sha?c[u]={ending:i}:c[u]={passThrough:i})}),c}getFinalEdgeStateForGraphAndRow(e,t){let r=this.getEndingAndPassThroughEdgesByColumnFromPrevRow(e,t),n=this.getStartingEdgesByColumn(e);return Object.keys(n).forEach(e=>{r[e]||(r[e]={ending:void 0,passThrough:void 0,starting:void 0}),r[e].starting=n[e]}),r}loadEdgesBySha(){this.maxColumns=0,this.isCommitListFiltered()||this.orderedGraphRows.forEach((e,t)=>{let r=this.orderedGraphRows[t-1],n=r&&this.processedGraphRowBySha[r.sha]?.edges?this.processedGraphRowBySha[r.sha].edges:{};this.processedGraphRowBySha[e.sha].edges=this.getFinalEdgeStateForGraphAndRow(e,n);let o=this.getEdgeColumnMaxes(e.sha);this.processedGraphRowBySha[e.sha].edgeColumnMaxes=o,o>this.maxColumns&&(this.maxColumns=o)})}processRows(e){this.loadRowsbySha(e||[]),this.loadEdgesBySha()}getStartingEdgesByColumn(e){let t={},r=e.parents;if(r.length>0){let n=e.type,o=this.processedGraphRowBySha[e.sha]?.column;void 0!==o&&(t[o]={parentSha:r[0],type:n});for(let e=1;e<r.length;e+=1){let o=r[e],i=this.processedGraphRowBySha[o]?.column;void 0!==i&&(t[i]={parentSha:o,type:n})}}return t}formatCommitDateTimeCallback=(e,t)=>this.props.formatCommitDateTime?this.props.formatCommitDateTime(e,t):function(e,t,r,n=!0){t=t??void 0;let i=`${(void 0)??""}:${t}`,c=ed.get(i);if(null==c){let e=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};let t=eh.exec(e);if(t?.groups!=null){let{dateStyle:e,timeStyle:r}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:r||void 0}}let r={localeMatcher:"best fit"};for(let{groups:t}of e.matchAll(eu))if(null!=t)for(let e in t){let n=t[e];if(null!=n)switch(e){case"year":r.year=4===n.length?"numeric":"2-digit";break;case"month":switch(n.length){case 4:r.month="long";break;case 3:r.month="short";break;case 2:r.month="2-digit";break;case 1:r.month="numeric"}break;case"day":"DD"===n?r.day="2-digit":r.day="numeric";break;case"weekday":switch(n.length){case 4:r.weekday="long";break;case 3:r.weekday="short";break;case 2:r.weekday="narrow"}break;case"hour":r.hour=2===n.length?"2-digit":"numeric",r.hour12="hh"===n||"h"===n;break;case"minute":r.minute=2===n.length?"2-digit":"numeric";break;case"second":r.second=2===n.length?"2-digit":"numeric";break;case"fractionalSecond":r.fractionalSecondDigits=3;break;case"dayPeriod":r.dayPeriod="narrow",r.hour12=!0,r.hourCycle="h12";break;case"timeZoneName":r.timeZoneName=2===n.length?"long":"short"}}return r}(t);c=new Intl.DateTimeFormat(o,e),n&&ed.set(i,c)}if(null==t||eh.test(t))return c.format(e);let u=c.formatToParts(e);return t.replace(eu,(t,r,i,c,h,d,p,m,g,b,v,w,_,S,C)=>{if(null!=r)return r.substring(1,r.length-1);for(let t in C){let r=C[t];if(null==r)continue;let i=u.find(e=>e.type===t);if("Do"===r&&i?.type==="day")return function(e){let t=e%100;return`${e}${ep[(t-20)%10]??ep[t]??"th"}`}(Number(i.value));if("a"===r&&i?.type==="dayPeriod"){let t=(function(e){let t=`${(void 0)??""}:time:${e}`,r=ed.get(t);null==r&&(r=new Intl.DateTimeFormat(o,{localeMatcher:"best fit",timeStyle:e}),n&&ed.set(t,r));return r})("short").formatToParts(e).find(e=>"dayPeriod"===e.type);return` ${(t??i)?.value??""}`}return i?.value??""}return""})}(e,et.qO);formatCommitMessageCallback=e=>this.props.formatCommitMessage?this.props.formatCommitMessage(e):e;formatRefShorthandCallback=(e,t,r,n)=>this.props.formatRefShorthand?this.props.formatRefShorthand(e,t,r,n):e.replace(/\s/g,"");isRefShorthandValidCallback=(e,t,r,n)=>!this.props.isRefShorthandValid||this.props.isRefShorthandValid(e,t,r,n);translateCallback=(e,...t)=>this.props.translate?this.props.translate(e,...t):eR.H[e]?function(e,t){if(0===t.length)return e;let r=e;return t.forEach((e,t)=>{let n=RegExp(`\\{${t}\\}`,"g");r=r.replace(n,e)}),r}(eR.H[e],t):e;getIconCallback=e=>this.props.getExternalIcon?.(e)||j().createElement("span",null);onMissingAvatar=(e,t)=>{this.props.onEmailsMissingAvatarUrls&&!this.requestedMissingAvatars[e]&&(this.pendingMissingAvatars[e]=t,this.missingAvatarsTimer&&(clearTimeout(this.missingAvatarsTimer),this.missingAvatarsTimer=void 0),this.missingAvatarsTimer=setTimeout(()=>{if(!this.isMounted)return;let e={...this.pendingMissingAvatars};this.pendingMissingAvatars={};let t=Object.keys(e);if(t.length){for(let e of t)this.requestedMissingAvatars[e]=!0;this.props.onEmailsMissingAvatarUrls?.(e)}},100))};onMissingRefMetadata=(e,t)=>{if(!this.props.onRefsMissingMetadata||this.requestedMissingRefsMetadata[e])return;let r=this.pendingMissingRefsMetadata[e]||[],n=t.filter(e=>!r.includes(e));this.pendingMissingRefsMetadata[e]=[...r,...n],this.missingRefsMetadataTimer&&(clearTimeout(this.missingRefsMetadataTimer),this.missingRefsMetadataTimer=void 0),this.missingRefsMetadataTimer=setTimeout(()=>{if(!this.isMounted)return;let e={...this.pendingMissingRefsMetadata};this.pendingMissingRefsMetadata={};let t=Object.keys(e);if(t.length){for(let e of t)this.requestedMissingRefsMetadata[e]=!0;this.props.onRefsMissingMetadata?.(e)}},100)};selectNext(e){let t;if(e&&"normal"===this.searchMode&&this.lastFocusedSha){let e=this.processedGraphRowBySha[this.lastFocusedSha];e?.parents?.length&&(t=e.parents[0])}else{let e=Math.min((this.lastFocusedSha?this.orderedGraphRows.findIndex(e=>e.sha===this.lastFocusedSha):-1)+1,this.orderedGraphRows.length-1);t=this.orderedGraphRows[e]?.sha}this.currentSha=t||null,t&&this.selectCommits([t],!1,!0)}selectPrevious(e){let t;if(e&&"normal"===this.searchMode&&this.lastFocusedSha){let e=this.childrenBySha[this.lastFocusedSha];if(e?.length){for(let r=0;r<e.length;r+=1)if(r===e.length-1)t=e[r];else if(this.processedGraphRowBySha[e[r]]?.type!==ee.OZ){t=e[r];break}}}else{let e=Math.max(-1,(this.lastFocusedSha?this.orderedGraphRows.findIndex(e=>e.sha===this.lastFocusedSha):-1)-1);t=this.orderedGraphRows[e]?.sha,e<0&&(t=this.orderedGraphRows[0]?.sha)}this.currentSha=t||null,t&&this.selectCommits([t],!1,!0)}selectHead(e){let t=null;e&&this.headUpstreamSha?t=this.headUpstreamSha:this.headSha&&(t=this.headSha),this.currentSha=t||null,t&&this.selectCommits([t],!1,!0)}getAvailableColumnAndUseIt(){let e=0;for(;this.columnsUsed[e];)e+=1;return this.columnsUsed[e]=!0,e}getColumns(e){let t,r;this.hasMergeNodeChildBySha[e.sha]&&delete this.hasMergeNodeChildBySha[e.sha];let n=e.parents||[],o=this.columnsToFreeWhenFound[e.sha];if(void 0!==o)for(let e=0;e<o.length;e+=1)delete this.columnsUsed[o[e]];let i=0,c=this.reserverInfoBySha[e.sha];c?.column!==void 0?(i=c.column,delete this.reserverInfoBySha[e.sha]):i=this.getAvailableColumnAndUseIt();for(let o=0;o<n.length;o+=1)if(t=n[o],e.type===ee.t$&&(this.hasMergeNodeChildBySha[t]=!0),r=this.reserverInfoBySha[t],0===o&&r?.column!==void 0&&r?.column!==i){let n=this.columnsToFreeWhenFound[t]||[],o=r?.type===ee.OZ&&e.type!==ee.OZ&&c?.newestDate>r?.newestDate;(r?.column>i||o)&&!this.hasMergeNodeChildBySha[t]?(this.reserverInfoBySha[t]={type:e.type,newestDate:c?.newestDate,column:i},n.push(r.column)):n.push(i),this.columnsToFreeWhenFound[t]=n}else r?.column===void 0&&(this.reserverInfoBySha[t]={type:e.type,newestDate:c?.column===i?c?.newestDate:e.date,column:0===o?i:this.getAvailableColumnAndUseIt()});return i}getFilteredHeadsForGraphRow(e,t){return e.heads.filter(e=>e.isCurrentHead||(t?void 0!==this.includeOnlyRefsById[(0,eC.mH)(eE.z.HEAD,e)]:!this.excludeByType.heads&&void 0===this.excludeRefsById[(0,eC.mH)(eE.z.HEAD,e)]))}getFilteredRemotesForGraphRow(e,t){return e.remotes.filter(e=>t?void 0!==this.includeOnlyRefsById[(0,eC.mH)(eE.z.REMOTE,e)]||!e.owner||void 0!==this.includeOnlyRemotesByName[e.owner]:(!this.excludeByType.remotes||e.owner&&this.downstreamsByUpstream[`${e.owner}/${e.name}`]?.length>0)&&void 0===this.excludeRefsById[(0,eC.mH)(eE.z.REMOTE,e)]&&(!e.owner||void 0===this.excludeRemotesByName[e.owner]))}getFilteredTagsForGraphRow(e,t,r){let n=t&&Object.values(this.includeOnlyRefsById).some(e=>e.type===eE.z.TAG),o=t&&(this.getFilteredHeadsForGraphRow(e,t).length>0||this.getFilteredRemotesForGraphRow(e,t).length>0);return e.tags.filter(e=>n?void 0!==this.includeOnlyRefsById[(0,eC.mH)(eE.z.TAG,e)]:!this.excludeByType.tags&&void 0===this.excludeRefsById[(0,eC.mH)(eE.z.TAG,e)]&&(!t||o||r))}loadRowsbySha(e){this.orderedGraphRows=[],this.processedGraphRowBySha={};let t=this.isCommitListFiltered();this.childrenBySha={},this.shaByRefId={},this.reserverInfoBySha={},this.columnsToFreeWhenFound={},this.columnsUsed={};let r=new Map,n={},o=[],i=[];this.branchUpstreamRowIndices=[];let c=[],u=[],h=[],d=[],p={};if((0,eC.X1)(this.workDirStats)&&e.length>0&&!(0,eC.l7)(e[0].type)){let t=(0,eC.pg)(e),r={sha:ee.bY,parents:t?[t]:[],author:"",email:"",date:new Date().getTime(),message:this.translateCallback("Graph-WorkInProgress"),type:ee.bY,heads:[],remotes:[],tags:[]};this.workDirStats.context&&(r.contexts={row:this.workDirStats.context}),e.unshift(r)}else!(0,eC.X1)(this.workDirStats)&&e.length>0&&(0,eC.l7)(e[0].type)&&e.shift();let m=Object.keys(this.includeOnlyRefsById).length>0;e.forEach((e,g)=>{let b,v=this.childrenBySha[e.sha]?.length>0,w=e.heads?.length>0?this.getFilteredHeadsForGraphRow(e,m):[],_=e.remotes?.length>0?this.getFilteredRemotesForGraphRow(e,m):[],S=e.tags?.length>0?this.getFilteredTagsForGraphRow(e,m,!!(p[e.sha]||v)):[],C=e.parents?.length>0?e.parents.filter(e=>!n[e]):[],x=w.length>0||_.length>0||S.length>0,T=w.length>0||_.length>0;if(e.type!==ee.oB&&e.type!==ee.t$||p[e.sha]){if(e.type===ee.OZ&&this.excludeByType.stashes&&(n[e.sha]=!0),!n[e.sha]&&C.length>0){let e;for(e of C)p[e]=!0}}else e.type!==ee.oB&&e.type!==ee.t$||p[e.sha]||x||v||(n[e.sha]=!0);let E=n[e.sha],O=E?0:this.getColumns(e);t&&(b=O,O=0);let A=new ek.Y(this,{...e,heads:w,remotes:_,tags:S,parents:C},O,void 0,void 0,void 0,void 0,b);if(!E){let n,p=r.get(e.sha);p?.length&&(p.sort((e,t)=>{if(e.parentIndexScore<t.parentIndexScore)return -1;if(e.parentIndexScore>t.parentIndexScore)return 1;if(e.parentIndexScore===t.parentIndexScore){if(e.rowEntered<t.rowEntered)return -1;if(e.rowEntered>t.rowEntered)return 1}return 0}),n=p[0],A.childRefs={heads:[...n?.heads||[]],remotes:[...n?.remotes||[]],tags:[...n?.tags||[]]},r.delete(e.sha));for(let t=0;t<C.length;t+=1){let o=C[t];this.childrenBySha[o]||(this.childrenBySha[o]=[]),this.childrenBySha[o].push(e.sha);let i=r.get(o);(T||n)&&void 0===i&&(i=[],r.set(o,i)),T?i?.unshift({sha:e.sha,parentIndexScore:t,rowEntered:g,heads:w,remotes:_,tags:S}):n&&i?.unshift({...n,parentIndexScore:t,rowEntered:g})}let m=this.orderedGraphRows.length;if(A.rowIndex=m,w.length>0)for(let e of(c.push(m),w.some(e=>e.isCurrentHead)&&(this.headSha=A.sha,o.push(m)),w))this.shaByRefId[(0,eC.mH)(eE.z.HEAD,e)]=A.sha;if(_.length>0)for(let e of(u.push(m),_))e.current&&(i.push(m),this.headUpstreamSha=A.sha),this.downstreamsByUpstream[`${e.owner}/${e.name}`]?.length>0&&this.branchUpstreamRowIndices.push(m),this.shaByRefId[(0,eC.mH)(eE.z.REMOTE,e)]=A.sha;if(S.length>0)for(let e of(h.push(m),S))this.shaByRefId[(0,eC.mH)(eE.z.TAG,e)]=A.sha;e.type===ee.OZ&&d.push(m),(!t||this.highlightedShas[e.sha])&&this.orderedGraphRows.push(A)}this.processedGraphRowBySha[e.sha]=A}),this.isMounted?this.setState(e=>({markerRowIndices:{...e.markerRowIndices,head:o,upstream:i,localBranches:c,remoteBranches:u,tags:h,stashes:d}})):this.state={...this.state,markerRowIndices:{...this.state?.markerRowIndices,head:o,upstream:i,localBranches:c,remoteBranches:u,tags:h,stashes:d}},this.clearTimelinesInterval(),this.updateTimelines(),this.timelinesInterval=setInterval(this.onTimelinesRefreshInterval,9e5),this.onGraphVisibleRowsUpdated()}updateRowStatsConstraints(){this.rowStatsConstraints=(0,eC.S6)(null!=this.rowsStats?Object.values(this.rowsStats).map(e=>e.additions+e.deletions):[])}updateTimelines(){Object.values((0,eC.ug)()).forEach(e=>{e.forEach(e=>{let{date:t}=e,r=this.orderedGraphRows.find(e=>e.date<t);r&&this.processedGraphRowBySha[r.sha]&&(this.processedGraphRowBySha[r.sha].timeLineEntry=e)})})}clearTimelines(){Object.keys(this.processedGraphRowBySha).forEach(e=>{this.processedGraphRowBySha[e].timeLineEntry&&delete this.processedGraphRowBySha[e].timeLineEntry})}clearTimelinesInterval(){this.timelinesInterval&&(clearInterval(this.timelinesInterval),this.timelinesInterval=void 0)}onTimelinesRefreshInterval=()=>{this.isMounted&&(this.clearTimelines(),this.updateTimelines(),this.setState({processedRows:[...this.orderedGraphRows]}))};cleanupSelections(){for(let e of this.selectedShas)this.processedGraphRowBySha[e]||(this.selectedShas.delete(e),this.lastFocusedSha!==e||(this.lastFocusedSha=void 0))}getColumnColorByColumn(e){let t=this.getNumGraphColumns(e),r=this.maxColumns>t?this.maxColumns:t,n={};for(let i=0;i<=r;i+=1)if(i<t){var o;let t=e[(0,ec.$6)(i)];n[i]="rgba"===(o=X(t)).type?`rgba(${o.r}, ${o.g}, ${o.b}, ${Number(o.a.toFixed(2))})`:`hsla(${o.h}, ${(100*o.s).toFixed(2)}%, ${(100*o.l).toFixed(2)}%, ${Number(o.a.toFixed(2))})`}else{let e=n[i%t];n[i]=e}return n}getNumGraphColumns(e){let t=Number.parseInt(e[el.u],et.Dl);return Number.isNaN(t)?et.Dl:t}expandLastZoneMinWidthForScrollbar(e){let t=e[e.length-1]?.type;if(!t)return;let r=(0,eC.eQ)(this.props.cssVariables,!0),n=et.W[t].minimumWidth+r,o=this.graphZonesByType[t];if(!o||null!=o.maximumWidth&&n>o.maximumWidth)return;o.minimumWidth=n;let i=et.W[t].showIconWidth;null!=i&&(o.showIconWidth=i+r),o.currentWidth<o.minimumWidth&&(o.currentWidth=o.minimumWidth),o.preferredWidth<o.minimumWidth&&(o.preferredWidth=o.minimumWidth)}ensureZoneWidthsMatchGraphWidth(e,t){let r=(0,eC.al)(e);r>t&&this.shrinkZoneWidthsToFitWidth(e,t),r<t&&this.expandZoneWidthsToFitWidth(e,t)}shrinkZoneWidthsToFitWidth(e,t,r){let n=(0,eC.al)(e);for(;n>t;){let o=(0,eC.Q9)(e,r);if(!o)break;let i=(0,eC.al)(e,o.type);if(i+o.currentWidth>t){let r=(0,eC.jY)(o,e,t-i);this.updateWidthByZone(r,o.type)}n=(0,eC.al)(e)}}getOrderedActiveGraphZones(){return this.graphZoneOrdering.sort((e,t)=>this.graphZonesByType[e].order-this.graphZonesByType[t].order).filter(e=>!this.graphZonesByType[e].isHidden).map(e=>this.graphZonesByType[e])}expandZoneWidthsToFitWidth(e,t,r){let n=(0,eC.al)(e);for(;n<t;){let o=(0,eC.fW)(e,r);if(!o)break;let i=(0,eC.al)(e,o.type),c=o.maximumWidth?Math.min(o.maximumWidth,o.preferredWidth||1/0):o.preferredWidth||0;if(i+o.currentWidth<t){let r=t-i;!(0,eC.z)(o.type,e)&&r>c&&(r=c),r=(0,eC.jY)(o,e,r),this.updateWidthByZone(r,o.type)}n=(0,eC.al)(e)}}onGraphHeaderRowMouseDown=e=>{1===e.button&&e.preventDefault()};onToggleRefNodesShown=(e,t,r,n)=>{t.forEach(e=>{r&&this.excludeRefsById[e.id]?delete this.excludeRefsById[e.id]:r||(this.excludeRefsById[e.id]=e)}),this.excludeRemotesByName=this.getExcludeRemotesByName(),this.props.onToggleRefsVisibilityClick&&this.props.onToggleRefsVisibilityClick(e,t,r,n?this.processedGraphRowBySha[n]:void 0),this.processRows(this.props.graphRows),this.setState({processedRows:[...this.orderedGraphRows]})};cleanEdgeCaches(){eG={},eH={},eL={},eP={},ef={}}onZoneEnter=(e,t,r,n)=>{t!==et.ui&&(r&&n&&this.onRefNodeUnhovered(e,r,n),this.onRefZoneUnhovered())};adjustResizedGraphZone(e,t,r,n){if(r?.width){let o=t.currentWidth;this.updateWidthByZone(r.width,t.type,n);let i=(0,eC.kU)(t.type,e),c=this.graphZonesByType[t.type];o>c.currentWidth&&this.expandZoneWidthsToFitWidth(e,this.graphWidth,i+1),o<c.currentWidth&&this.shrinkZoneWidthsToFitWidth(e,this.graphWidth,i-1)}}dimRowsOfSelectedCommit(e){this.setState({dimRowsOfSelectedCommit:e})}onGraphContainerBlurred=(e,t,r)=>{setTimeout(()=>{this.isMounted&&(t&&r&&this.onRefNodeUnhovered(e,t,r),this.onRefZoneUnhovered())},250)};onGraphContainerMouseEnter=e=>{this.props.onGraphMouseEnter&&this.props.onGraphMouseEnter(e)};onGraphContainerMouseLeave=e=>{this.props.onGraphMouseLeave&&this.props.onGraphMouseLeave(e)};onGraphResized=(0,eC.xJ)((e,t)=>{if(!this.isMounted)return;let r=Math.floor(t),n=Math.floor(e),o=r!==this.graphHeight,i=n!==this.graphWidth,c={};if(o&&(this.graphHeight=r,c.height=r),i){this.graphWidth=n;let e=this.getOrderedActiveGraphZones();this.ensureZoneWidthsMatchGraphWidth(e,this.graphWidth),c.width=this.graphWidth,c.graphZones=e}(o||i)&&(this.setState(c),o&&this.onGraphVisibleRowsUpdatedThrottled(),this.props.onGraphResized&&this.props.onGraphResized(this.graphWidth,this.graphHeight))});onGraphVisibleRowsUpdated(){if(!this.isMounted||!this.props.onGraphVisibleRowsChanged||!this.orderedGraphRows?.length)return;let{top:e,bottom:t}=this.getTopAndBottomVisibleRowIndex();-1===e||-1===t||e>=this.orderedGraphRows.length||t>=this.orderedGraphRows.length||e===this.lastTopVisibleRowIndex&&t===this.lastBottomVisibleRowIndex||(this.lastTopVisibleRowIndex=e,this.lastBottomVisibleRowIndex=t,this.props.onGraphVisibleRowsChanged&&this.props.onGraphVisibleRowsChanged(this.orderedGraphRows[e],this.orderedGraphRows[t]))}getCurrentPlatform(){return this.props.platform||"darwin"}isMacOSPlatform(){return"darwin"===this.getCurrentPlatform()}isCommitListFiltered(){return"filter"===this.searchMode&&Object.values(this.highlightedShas).length>0}getGraphColumnSettingFromZoneType(e){return{width:e.preferredWidth||0,isHidden:e.isHidden,mode:e.mode,order:e.order}}decorateWithHelmet=(e,t,r)=>{let n=(0,ec.JQ)(t);return j().createElement(j().Fragment,null,j().createElement("style",{nonce:r},n),j().createElement("div",{className:"gk-graph"},e))};render(){let{columnsSettings:e,customFooterRow:t,isInUnsupportedRebase:r,isCommitting:n,repoPath:o,nonce:i,suppressNonRefRowTooltips:c,wipMessageEditable:u}=this.props,{avatarUrlByEmail:h,columnColorByColumn:d,contexts:p,createRefFormData:m,cssVariablesWithDefaults:g,currentlyHoveredCommitSha:b,dimMergeCommits:v,dimRowsOfSelectedCommit:w,enableShowHideRefsOptions:_,highlightRowsOnRefHover:S,showGhostRefsOnRowHover:C,showRemoteNamesOnRefs:x,enabledRefMetadataTypes:T,enabledScrollMarkerTypes:E,graphCommitDescDisplayMode:O,graphZones:A,hasMoreCommits:D,height:$,highlightedShas:P,hoveredRefGroup:G,hoveredRefZoneSha:W,themeOpacityFactor:F,isLoadingRows:U,rowsStatsLoading:Z,numGraphColumns:V,pendingCommitMessageSummary:q,processedRows:K,refIconsPosition:Q,refMetadataById:X,useAuthorInitialsForAvatars:J,scrollToAlignment:ee,scrollToIndex:er,scrollTop:en,scrollLeft:eo,shaLength:ei,width:es,workDirStats:ea}=this.state,el=B()("flex","graph-container"),ec=(0,eC.xd)(K),eu=eT(e=>ec(e)),eh=this.getLeftGutterWidth(),ed=this.getRightGutterWidth(),ep=this.getRightGutterBoxShadowAlpha(F),ef=this.getLeftGutterBoxShadowAlpha(F),em=this.getNodeOffsetByColumn(),eg=this.getNodeOpacityByColumn(),eb=(0,eC.kU)(et.ui,A),ev=(0,eC.kU)(et.md,A),ey=!G,ew={alwaysShowTimelines:this.isCommitListFiltered(),avatarUrlByEmail:h,createRefFormData:m,dimMergeCommits:v,dimRowsOfSelectedCommit:w,enableShowHideRefsOptions:_,highlightRowsOnRefHover:S,showGhostRefsOnRowHover:C,showRemoteNamesOnRefs:x,enabledRefMetadataTypes:T,enabledScrollMarkerTypes:E,isInUnsupportedRebase:r,isCommitting:n||!1,pendingCommitMessageSummary:q,workDirStats:ea,repoPath:o,columnColorByColumn:d,currentlyHoveredCommitSha:b,cssVariables:g,graphCommitDescDisplayMode:O,graphZoneModeConstants:this.graphZoneModeConstants,graphZones:A,hasMoreCommits:D,height:$,highlightedShas:P,hoveredRefGroup:G,hoveredRefZoneSha:W,includeOnlyRefsById:this.includeOnlyRefsById,includeOnlyRemotesByName:this.includeOnlyRemotesByName,isLoadingRows:U,selectedShas:this.selectedShas,leftGutterBoxShadowAlpha:ef,leftGutterWidth:eh,nodeOffsetByColumn:em,nodeOpacityByColumn:eg,nonce:i,numGraphColumns:V,processedRows:K,processedGraphRowBySha:this.processedGraphRowBySha,refIconsPosition:Q,refMetadataById:X,rightGutterBoxShadowAlpha:ep,rightGutterWidth:ed,rowStatsConstraints:this.rowStatsConstraints,rowsStats:this.rowsStats,suppressNonRefRowTooltips:c,useAuthorInitialsForAvatars:J,scrollToAlignment:ee,scrollLeft:eo,scrollTop:en,shaLength:ei,shouldShowRefLine:-1!==eb&&-1!==ev&&ev-eb==1,width:es,wipMessageEditable:u||!1,onMissingAvatar:this.onMissingAvatar,onMissingRefMetadata:this.onMissingRefMetadata,clearCurrentlyHoveredGraphCommit:this.onClearCurrentlyHoveredGraphCommit,setAsCurrentlyHoveredGraphCommit:this.onCurrentlyHoveredGraphCommit,onClickRef:this.onClickRef,onClickCommit:this.onClickCommit,onDoubleClickCommit:this.onDoubleClickCommit,onBlurWipNodeInput:this.onBlurWipNodeInput,onFocusWipNodeInput:this.onFocusWipNodeInput,onDoubleClickRef:this.onDoubleClickRef,onMessageChange:this.onMessageChange,onRefBeginDrag:this.onRefBeginDrag,onRefCanDrag:this.onRefCanDrag,onRefCanDrop:this.onRefCanDrop,onRefCreate:this.onRefCreate,onRefCreateCancel:this.onRefCreateCancel,onRefCreateContextMenu:this.onRefCreateContextMenu,onRefDragEnter:this.onRefDragEnter,onRefDragLeave:this.onRefDragLeave,onRefDrop:this.onRefDrop,onRefEndDrag:this.onRefEndDrag,onRefNodeHovered:this.onRefNodeHovered,onRefNodeUnhovered:this.onRefNodeUnhovered,onRefShorthandChange:this.onRefShorthandChange,onRefZoneHovered:this.onRefZoneHovered,onRefZoneUnhovered:this.onRefZoneUnhovered,onToggleRefNodesShown:this.onToggleRefNodesShown,onCommitContextMenu:this.onCommitContextMenu,onShowContextMenuForGroupedRef:this.onRefContextMenu,getExternalIcon:this.getIconCallback,formatCommitDateTime:this.formatCommitDateTimeCallback,formatRefShorthand:this.formatRefShorthandCallback,isRefShorthandValid:this.isRefShorthandValidCallback,translate:this.translateCallback},e_={[et.ui]:sg(ew,ec),[et.md]:sc(ew,ec),[et.d4]:i2(ew,ec),[et.fx]:iL(ew,ec),[et.$A]:iH(ew,ec),[et.AR]:i3(ew,ec),[et.Sq]:iz(ew,ec),[et.OU]:sb(ew,ec)},eS=A.map((e,r)=>{let n=0===r;return j().createElement(rB,{branchUpstreamRowIndices:this.branchUpstreamRowIndices,cellRenderersByIds:e_,columnIndex:r,customFooterRow:t,enabledScrollMarkerTypes:E,enableResizer:ey,getExternalIcon:this.getIconCallback,getKeyForCell:ec,graphHeight:$-et.q4,graphWidth:es,graphZones:A,graphZoneType:e.type,hasMoreCommits:D,horizontalScrollHeight:this.getHorizontalScrollHeight(e.type,g),isLoadingRows:U,key:`${e.type}ColumnContainer`,markerColors:this.getMarkerColors(),markerRowIndices:this.state.markerRowIndices,onResize:this.onGraphZoneResize,onResizeEnd:this.onGraphZoneResizeEnd,onScroll:this.onScrollForZone,onScrollToRowCausedUpdate:n?this.onScrollToRowCausedUpdateForFirstColumn:void 0,onZoneEnter:t=>this.onZoneEnter(t,e.type,G,W),rowCount:K.length,scrollLeft:eo,scrollToAlignment:n?ee:void 0,scrollToIndex:n?er:void 0,scrollTop:en,smartCellRangeRenderer:eu,translate:this.translateCallback,verticalScrollWidth:this.getVerticalScrollWidth(e.type,g)})}),ex=this.graphComponentRef?.current&&j().createElement(ns,{columnsSettings:e,dragAppendToContainer:this.graphComponentRef?.current,enableResizer:ey,enableShowHideRefsOptions:_,excludeRefsById:this.excludeRefsById,getExternalIcon:this.getIconCallback,graphZones:A,headerContext:p?.header,height:$,includeOnlyRefsById:this.includeOnlyRefsById,onColumnReOrdered:this.onGraphColumnReOrdered,onFilterColumnClick:this.onFilterColumnClick,onGraphZoneResize:this.onGraphZoneResize,onGraphZoneResizeEnd:this.onGraphZoneResizeEnd,onPopupGraphHeaderContextMenu:this.onPopupGraphHeaderContextMenu,onSettingsClick:this.onSettingsClick,onToggleRefNodesShown:this.onToggleRefNodesShown,repoPath:o,rowsStatsLoading:Z,settingsContext:p?.settings,showRemoteNamesOnRefs:x,translate:this.translateCallback,width:es}),ek=j().createElement("div",{className:"graph-component","data-vscode-context":(0,eC.DO)(p?.graph),onBlur:e=>this.onGraphContainerBlurred(e,G,W),onMouseEnter:this.onGraphContainerMouseEnter,onMouseLeave:this.onGraphContainerMouseLeave,ref:this.graphComponentRef,style:{height:"100%",width:"100%",position:"absolute"},tabIndex:-1},ex,j().createElement("div",{className:P&&Object.keys(P).length?B()(el,"graph-highlighted"):el,id:"graph-container",onKeyDown:this.onKeyDown,onKeyUp:this.onKeyUp,onMouseDown:this.onGraphHeaderRowMouseDown,ref:this.graphContainerRef,style:{height:$,width:es},tabIndex:-1},eS));return this.decorateWithHelmet(ek,g,i)}};var sv=sr},468:(e,t,r)=>{r.d(t,{A:()=>c});var n=r(15),o=r.n(n),i=r(66);let s=class s extends o().PureComponent{resizeObserver;scrollbarContainerRef=o().createRef();horizontalScrollRef=o().createRef();scrollabbleContentRef=o().createRef();verticalScrollRef=o().createRef();outerHorizontalScrollRef=o().createRef();constructor(e){super(e),this.resizeObserver=new ResizeObserver(e=>e.forEach(e=>this.onContainerResized(e.contentRect.width,e.contentRect.height)))}updateScrollbarValues(e,t){this.horizontalScrollRef?.current&&(this.horizontalScrollRef.current.scrollLeft=e||0),this.verticalScrollRef?.current&&(this.verticalScrollRef.current.scrollTop=t||0)}componentDidUpdate(e){let{scrollLeft:t,scrollTop:r}=this.props;(e.scrollLeft!==t||e.scrollTop!==r)&&this.updateScrollbarValues(t,r)}onHorizontalScroll(e){this.props.onScroll&&this.props.onScroll({clientHeight:this.props.height||0,clientWidth:e.target.clientWidth,scrollHeight:this.getAdjustedContentHeight(),scrollLeft:e.target.scrollLeft,scrollTop:this.props.scrollTop||0,scrollWidth:e.target.scrollWidth})}onVerticalScroll(e){let t=1>Math.abs(e.target.scrollTop-(this.props.scrollTop??0));this.props.onScroll&&!t&&this.props.onScroll({clientHeight:e.target.clientHeight,clientWidth:this.props.width||0,scrollHeight:e.target.scrollHeight,scrollLeft:this.props.scrollLeft||0,scrollTop:e.target.scrollTop,scrollWidth:this.props.contentWidth||0})}onWheel(e){if(!this.props.onScroll||!this.verticalScrollRef.current&&!this.props.forceOnVerticalWheel&&!this.horizontalScrollRef.current&&!this.props.forceOnHorizontalWheel)return;let t=this.props.scrollLeft||0,r=t;(this.horizontalScrollRef.current||this.props.forceOnHorizontalWheel)&&(r+=e.deltaX,(r=r>=0?r:0)>t&&this.horizontalScrollRef?.current&&(0,i.y6)(this.horizontalScrollRef.current)&&(r=t));let n=this.props.scrollTop||0,o=n;(this.verticalScrollRef.current||this.props.forceOnVerticalWheel)&&(o+=e.deltaY,(o=o>=0?o:0)>n&&this.verticalScrollRef?.current&&(0,i.br)(this.verticalScrollRef.current)&&(o=n)),(o!==n||r!==t)&&this.props.onScroll({clientHeight:this.props.height||0,clientWidth:this.props.width||0,scrollHeight:this.getAdjustedContentHeight(),scrollLeft:r>=0?r:0,scrollTop:o>=0?o:0,scrollWidth:this.props.contentWidth||0})}componentDidMount(){this.updateScrollbarValues(this.props.scrollLeft,this.props.scrollTop),this.resizeObserver.observe(this.scrollbarContainerRef.current)}componentWillUnmount(){this.resizeObserver.disconnect()}onContainerResized=(0,i.xJ)((e,t)=>{let r=this.props.contentHeight||0,n=this.props.contentWidth||0,o=this.props.scrollTop||0,i=this.props.scrollLeft||0,c=t<r?o:0,u=e<n?i:0;(o!==c||i!==u)&&(this.updateScrollbarValues(u,c),this.props.onScroll?.({clientHeight:t,clientWidth:e,scrollHeight:r,scrollLeft:u,scrollTop:c,scrollWidth:n}))});hasHorizontalScroll(){let{contentWidth:e,displayHorizontalScrollbar:t,forceHorizontalScrollbar:r,width:n}=this.props;return r||t&&n<e}hasVerticalScroll(){let{displayVerticalScrollbar:e,forceVerticalScrollbar:t,height:r}=this.props;return t||e&&r<this.getAdjustedContentHeight()}getHorizontalScrollbarTickness(){return parseInt(this.outerHorizontalScrollRef.current?.clientHeight,10)||0}getAdjustedContentHeight(){return this.props.contentHeight+this.getHorizontalScrollbarTickness()}adjustScrollWhileDragging(e){let t,r=this.getAdjustedContentHeight();if(!this.scrollabbleContentRef.current||this.props.height>=r||!this.props.onScroll)return;let n=this.scrollabbleContentRef.current.getBoundingClientRect(),o=e.clientY-n.top,i=Math.abs(r-this.props.height);if(this.props.scrollTop>0&&o<=20){let e=this.props.scrollTop-20;t={clientHeight:n.height,clientWidth:n.width,scrollHeight:i,scrollLeft:this.props.scrollLeft||0,scrollTop:e>0?e:0,scrollWidth:this.props.contentWidth||0}}if(this.props.scrollTop<i&&o>=this.props.height-20){let e=this.props.scrollTop+20;t={clientHeight:n.height,clientWidth:n.width,scrollHeight:i,scrollLeft:this.props.scrollLeft||0,scrollTop:e<i?e:i,scrollWidth:this.props.contentWidth||0}}t&&this.props.onScroll(t)}render(){let{children:e,contentHeight:t,contentWidth:r,forceHorizontalScrollbar:n,forceVerticalScrollbar:i,height:c,width:u}=this.props,h=this.hasVerticalScroll(),d=this.hasHorizontalScroll(),p=d&&o().createElement("div",{className:"scrollbar-outer horizontal",ref:this.outerHorizontalScrollRef,style:{top:`calc(${c}px - var(--scrollable-scrollbar-thickness))`,width:u}},o().createElement("div",{className:"scrollbar-inner horizontal_scrollbar",onScroll:e=>this.onHorizontalScroll(e),ref:this.horizontalScrollRef,style:{overflowX:n?"scroll":"auto",width:h?`calc(${u}px - var(--scrollable-scrollbar-thickness))`:u}},o().createElement("div",{style:{height:"1px",width:r}}))),m=h&&o().createElement("div",{className:"scrollbar-outer vertical",style:{height:c}},o().createElement("div",{className:"scrollbar-inner vertical_scrollbar",onScroll:e=>this.onVerticalScroll(e),ref:this.verticalScrollRef,style:{overflowY:i?"scroll":"auto",height:d?`calc(${c}px - var(--scrollable-scrollbar-thickness))`:c}},o().createElement("div",{style:{height:`calc(${t}px + var(--scrollable-scrollbar-thickness))`,width:"1px"}})));return o().createElement("div",{className:"scrollbar-container",onWheelCapture:e=>this.onWheel(e),ref:this.scrollbarContainerRef,style:{height:c,width:u}},o().createElement("div",{className:"scrollable-content",onDragOverCapture:e=>this.adjustScrollWhileDragging(e),ref:this.scrollabbleContentRef,style:{height:c,width:u}},e),p,m)}};var c=s},298:(e,t,r)=>{r.d(t,{N:()=>p,OZ:()=>u,bY:()=>h,gL:()=>c,l2:()=>o,oB:()=>n,t$:()=>i});let n="commit-node",o="merge-conflict-node",i="merge-node",c="unsupported-rebase-warning-node",u="stash-node",h="work-dir-changes";var d,p=((d=p||{}).RowEntry="rowEntry",d.Tooltip="tooltip",d)},218:()=>{},522:(e,t,r)=>{r.d(t,{Y:()=>o,u:()=>n});let n="--num-columns-supported",o={"--graph-row-height":"22px","--font-default":"'Open Sans', Arial, sans-serif !important","--font-monospace":"'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace","--font-size":"62.5%","--fs-1":"1rem","--fs-2":"1.2rem","--fs-3":"1.4rem","--fs-4":"1.6rem","--fs-5":"1.8rem","--fs-6":"2rem","--fs-7":"2.4rem","--button-xs-padding-y":".15rem","--button-xs-padding-x":".25rem","--button-small-padding-y":".25rem","--button-small-padding-x":".5rem","--button-medium-padding-y":".5rem","--button-medium-padding-x":".75rem","--button-large-padding-y":"1rem","--button-large-padding-x":"1.25rem","--button-radius":".2rem","--input-radius":"3px","--about-modal-bg-color":"#e2e4e9","--about-modal-width":"650px","--label__purple-color-f25":"rgba(197,23,182,0.25)","--registration-modal-width":"400px","--file-history-header-height":"35px","--shop-modal-width":"95vw","--shop-modal-height":"95vh","--scrollable-scrollbar-thickness":"14px","--mini-commit-col-left-width":"30px","--mini-commit-col-middle-padding":"6px","--mini-commit-col-right-width":"56px","--fuzzy-finder-repo-color":"rgba(46,206,157,0.1)","--fuzzy-finder-checkout-color":"rgba(6,105,247,0.1)","--fuzzy-finder-history-color":"rgba(197,23,182,0.1)","--handle-width":"7px","--shadow-color":"rgba(0,0,0,0.4)","--graph-color-5-f10":"rgba(205,1,1,0.1)","--graph-color-6-f10":"rgba(242,93,46,0.1)","--graph-color-7-f10":"rgba(242,202,51,0.1)","--graph-color-8-f10":"rgba(123,217,56,0.1)","--graph-color-9-f10":"rgba(46,206,157,0.1)","--graph-color-0-f10":"rgba(21,160,191,0.1)","--graph-color-1-f10":"rgba(6,105,247,0.1)","--graph-color-2-f10":"rgba(142,0,194,0.1)","--graph-color-3-f10":"rgba(197,23,182,0.1)","--graph-color-4-f10":"rgba(217,1,113,0.1)","--graph-color-5-f50":"rgba(205,1,1,0.5)","--graph-color-6-f50":"rgba(242,93,46,0.5)","--graph-color-7-f50":"rgba(242,202,51,0.5)","--graph-color-8-f50":"rgba(123,217,56,0.5)","--graph-color-9-f50":"rgba(46,206,157,0.5)","--graph-color-0-f50":"rgba(21,160,191,0.5)","--graph-color-1-f50":"rgba(6,105,247,0.5)","--graph-color-2-f50":"rgba(142,0,194,0.5)","--graph-color-3-f50":"rgba(197,23,182,0.5)","--graph-color-4-f50":"rgba(217,1,113,0.5)","--axo-orange":"#e75225","--axo-ink":"#141422","--axo-cream":"#f9efc1","--axo-yellow":"#d8c13a","--info-bar-height":"26px","--left-panel-header-height":"60px","--toolbar-height":"48px","--toolbar-border":"1px","--toolbar-item-height":"calc(var(--toolbar-height, 0px) - var(--toolbar-border, 1px))","--expand-detail-panel-transition":"flex-grow 250ms ease-in-out","--conflict-left-color":"rgba(21,160,191,0.25)","--conflict-right-color":"rgba(242,202,51,0.25)","--conflict-output-color":"rgba(197,23,182,0.25)","--graph-color-5-bg50":"#751012","--graph-color-6-bg50":"#873e29","--graph-color-7-bg50":"#87742b","--graph-color-8-bg50":"#4c7c2e","--graph-color-9-bg50":"#257660","--graph-color-0-bg50":"#195f71","--graph-color-1-bg50":"#11448d","--graph-color-2-bg50":"#550f73","--graph-color-3-bg50":"#711b6d","--graph-color-4-bg50":"#7b104a","--graph-color-5-bg45":"#6c1114","--graph-color-6-bg45":"#7c3a28","--graph-color-7-bg45":"#7c6b2a","--graph-color-8-bg45":"#47722c","--graph-color-9-bg45":"#246d5a","--graph-color-0-bg45":"#195969","--graph-color-1-bg45":"#124082","--graph-color-2-bg45":"#4f116b","--graph-color-3-bg45":"#681b65","--graph-color-4-bg45":"#711146","--graph-color-5-bg25":"#48171b","--graph-color-6-bg25":"#522e26","--graph-color-7-bg25":"#524927","--graph-color-8-bg25":"#344d28","--graph-color-9-bg25":"#214a42","--graph-color-0-bg25":"#1a3f4a","--graph-color-1-bg25":"#173158","--graph-color-2-bg25":"#39174b","--graph-color-3-bg25":"#461c48","--graph-color-4-bg25":"#4b1737","--graph-color-5-bg15":"#371a1e","--graph-color-6-bg15":"#3c2725","--graph-color-7-bg15":"#3c3825","--graph-color-8-bg15":"#2a3a26","--graph-color-9-bg15":"#1f3835","--graph-color-0-bg15":"#1b323a","--graph-color-1-bg15":"#192943","--graph-color-2-bg15":"#2d1a3b","--graph-color-3-bg15":"#351d39","--graph-color-4-bg15":"#381a2f","--semi-bold":"500","--bold":"600","--num-columns-supported":"10","--column-0-color":"#15a0bf","--column-1-color":"#0669f7","--column-2-color":"#8e00c2","--column-3-color":"#c517b6","--column-4-color":"#d90171","--column-5-color":"#cd0101","--column-6-color":"#f25d2e","--column-7-color":"#f2ca33","--column-8-color":"#7bd938","--column-9-color":"#2ece9d","--red":"#D9413D","--orange":"#DE9B43","--yellow":"#ECB91C","--green":"#5CB85C","--blue":"#4D88FF","--ltblue":"#5bc0de","--app__bg0":"#1C1E23","--toolbar__bg0":"rgb(42,45,52)","--toolbar__bg1":"rgb(51,55,63)","--toolbar__bg2":"rgb(65,70,80)","--panel__bg0":"rgb(39,42,49)","--panel__bg1":"rgb(50,54,63)","--panel__bg2":"rgb(61,66,77)","--input__bg":"rgba(0,0,0,0.2)","--input-bg-warn-color":"rgba(222,155,67,0.6)","--panel-border":"rgb(19,20,24)","--section-border":"rgba(255,255,255,0.08)","--subtle-border":"rgba(255,255,255,0.04)","--modal-overlay-color":"rgba(0,0,0,.5)","--graph-color-0":"#15a0bf","--graph-color-1":"#0669f7","--graph-color-2":"#8e00c2","--graph-color-3":"#c517b6","--graph-color-4":"#d90171","--graph-color-5":"#cd0101","--graph-color-6":"#f25d2e","--graph-color-7":"#f2ca33","--graph-color-8":"#7bd938","--graph-color-9":"#2ece9d","--text-selected":"#FFFFFF","--text-selected-row":"#FFFFFF","--text-dimmed":"rgba(255,255,255,0.2)","--text-dimmed-selected":"rgba(255,255,255,0.5)","--text-normal":"rgba(255,255,255,0.75)","--text-secondary":"rgba(255,255,255,0.6)","--text-disabled":"rgba(255,255,255,0.4)","--text-accent":"#93A9EC","--text-inverse":"#222222","--text-bright":"#FFFFFF","--btn-text":"rgba(255,255,255,0.75)","--btn-text-hover":"#FFFFFF","--default-border":"rgba(255,255,255,0.75)","--default-bg":"transparent","--default-hover":"transparent","--default-border-hover":"#FFFFFF","--primary-border":"#4D88FF","--primary-bg":"rgba(77,136,255,0.2)","--primary-hover":"rgba(77,136,255,0.6)","--success-border":"#5CB85C","--success-bg":"rgba(92,184,92,0.2)","--success-hover":"rgba(92,184,92,0.6)","--warning-border":"#DE9B43","--warning-bg":"rgba(222,155,67,0.2)","--warning-hover":"rgba(222,155,67,0.6)","--danger-border":"#D9413D","--danger-bg":"rgba(217,65,61,0.2)","--danger-hover":"rgba(217,65,61,0.6)","--hover-row":"rgba(77,136,255,0.1)","--hover-row-border":"none","--danger-row":"rgba(217,65,61,0.6)","--selected-row":"rgba(77,136,255,0.2)","--selected-row-border":"none","--warning-row":"rgba(222,155,67,0.6)","--droppable":"rgba(236,185,28,0.3)","--drop-target":"rgba(92,184,92,0.5)","--input--disabled":"rgba(0,0,0,0.1)","--link-color":"#40c5ec","--link-color-bright":"#40c5ec","--form-control-focus":"#4D88FF","--scroll-thumb-border":"#1C1E23","--scroll-thumb-bg":"rgb(65,70,80)","--scroll-thumb-bg-light":"rgb(111,119,136)","--wip-status":"rgba(77,136,255,0.4)","--card__bg":"rgb(61,66,77)","--card-shadow":"rgba(0,0,0,.2)","--statusbar__warning-bg":"#87742b","--label__yellow-color":"#f2ca33","--label__light-blue-color":"#15a0bf","--label__purple-color":"#c517b6","--filtering":"rgba(77,136,255,0.5)","--soloing":"rgba(222,155,67,0.5)","--checked-out":"rgba(92,184,92,0.3)","--soloed":"rgba(222,155,67,0.3)","--filter-match":"rgba(77,136,255,0.5)","--clone__progress":"rgba(77,136,255,0.7)","--toolbar__prompt":"rgba(77,136,255,0.2)","--verified":"rgba(92,184,92,0.3)","--unverified":"rgba(255,255,255,0.1)","--drop-sort-border":"#5CB85C","--terminal__repo-name-color":"turquoise","--terminal__repo-branch-color":"violet","--terminal__repo-tag-color":"lightcoral","--terminal__repo-upstream-color":"yellowgreen","--terminal__background":"#000000","--terminal__cursor":"#FFFFFF","--terminal__cursorAccent":"#000000","--terminal__foreground":"#FFFFFF","--terminal__selection":"#304676","--terminal__black":"#000000","--terminal__red":"#F24A4A","--terminal__green":"#0DBC79","--terminal__yellow":"#E5E510","--terminal__blue":"#4A98EE","--terminal__magenta":"#E063E0","--terminal__cyan":"#11A8CD","--terminal__white":"#E5E5E5","--terminal__brightBlack":"#686868","--terminal__brightRed":"#FF5656","--terminal__brightGreen":"#23D18B","--terminal__brightYellow":"#F5F543","--terminal__brightBlue":"#51A4FF","--terminal__brightMagenta":"#D670D6","--terminal__brightCyan":"#29B8DB","--terminal__brightWhite":"#E5E5E5","--code-bg":"#1C1E23","--code-foreground":"rgba(255,255,255,0.75)","--code-blame-color-0":"#15a0bf","--code-blame-color-1":"#0669f7","--code-blame-color-2":"#8e00c2","--code-blame-color-3":"#c517b6","--code-blame-color-4":"#d90171","--code-blame-color-5":"#cd0101","--code-blame-color-6":"#f25d2e","--code-blame-color-7":"#f2ca33","--code-blame-color-8":"#7bd938","--code-blame-color-9":"#2ece9d","--added-line":"rgba(92,184,92,0.2)","--deleted-line":"rgba(217,65,61,0.2)","--modified-line":"rgba(0,0,0,0.25)","--conflict-info-color":"#15a0bf","--conflict-left-border-color":"#15a0bf","--conflict-right-border-color":"#f2ca33","--conflict-output-border-color":"#c517b6","--scroll-marker-head-color":"#16c216","--scroll-marker-highlights-color":"#e6e62b","--scroll-marker-local-branches-color":"#ffa500","--scroll-marker-pull-requests-color":"#ff8f18","--scroll-marker-remote-branches-color":"#ffd68b","--scroll-marker-selection-color":"#0821ff","--scroll-marker-stashes-color":"#fb94ff","--scroll-marker-tags-color":"#affcff","--scroll-marker-upstream-color":"#9bff9b","--stats-added-color":"#347d39","--stats-deleted-color":"#c93c37","--stats-files-color":"#e2c08d","--stats-bar-border-radius":"3px","--stats-bar-height":"40%"}},686:(e,t,r)=>{r.d(t,{$6:()=>o,JQ:()=>c,yr:()=>i});var n=r(522);function o(e){return`--column-${e}-color`}function i(e={}){let t={};return Object.keys(e).forEach(r=>{r.includes("--graph-color-")||r.match(/^--column-\d+-color$/)?CSS.supports("color",e[r])&&(t[r]=e[r]):t[r]=e[r]}),function(e={}){return{...n.Y,...e}}(t)}function c(e){let t=e||n.Y,r="";for(let e of(r+=`.gk-graph {
`,Object.keys(t)))r+=`${e}: ${t[e]};
`;return r+`}
`}},350:(e,t,r)=>{r.d(t,{types:()=>n});let n={ADDED:"added",DELETED:"deleted",MODIFIED:"modified",RENAMED:"renamed"}},366:()=>{},210:(e,t,r)=>{r.d(t,{e:()=>o});var n,o=((n=o||{}).arrowDownKey="ArrowDown",n.arrowUpKey="ArrowUp",n.controlKey="Control",n.metaKey="Meta",n.shiftKey="Shift",n)},214:(e,t,r)=>{r.d(t,{$0:()=>u,$A:()=>e_,AR:()=>eS,BP:()=>n,By:()=>h,CF:()=>E,CY:()=>ed,Dl:()=>eI,E5:()=>F,EB:()=>C,F0:()=>B,FQ:()=>e$,G3:()=>V,Gu:()=>el,H6:()=>G,Hm:()=>W,K3:()=>es,KA:()=>er,KV:()=>X,MT:()=>et,OU:()=>eg,Oe:()=>w,Qb:()=>ei,Ql:()=>ec,RJ:()=>K,Sb:()=>eE,Sq:()=>eC,Td:()=>p,W:()=>eN,WC:()=>eD,WQ:()=>em,Yx:()=>o,Zk:()=>Z,_b:()=>g,ar:()=>d,bo:()=>eo,cD:()=>P,d4:()=>ey,di:()=>U,eB:()=>eT,fx:()=>ew,gK:()=>O,gi:()=>J,iX:()=>A,io:()=>q,j:()=>eO,jp:()=>$,kU:()=>b,kj:()=>m,lE:()=>Q,lH:()=>v,mE:()=>j,mP:()=>ep,md:()=>ev,n0:()=>T,n9:()=>ee,nf:()=>_,oC:()=>en,pi:()=>ez,q4:()=>i,qO:()=>D,ro:()=>eh,tl:()=>eu,ui:()=>eb,wF:()=>S,wT:()=>eA,wx:()=>eM,xY:()=>ef,yB:()=>c,yX:()=>ea,z$:()=>x});let n="#199489",o=3,i=26,c=28,u=22,h=1400,d=6,p=.5,m=3,g=3,b=28,v=22,w=3,_=11,S=56,C=56,x=32,T=22,E=18,O=55,A=50,D="short+short",$=55,P=50,G=50,W=50,F=55,B=18,U=32,j=2,Z=6,V=14,q=5,K=19,Q=10,X=55,J=100,ee=50,et=10,er=25,en=58,eo=22,ei=2,es={dark:1,light:.5},ea=10,el=12,ec=6,eu=3,eh=12,ed="auto",ep="center",ef=7,em=4,eg="timelineMessage",eb="ref",ev="graph",ey="message",ew="author",e_="datetime",eS="sha",eC="changes";var ex,ek,eR,eT=((ex=eT||{}).Compact="compact",ex.Rich="rich",ex.Text="text",ex),eE=((ek=eE||{}).Block="block",ek.FullLine="fullLine",ek.ThinLine="thinLine",ek);let eO={block:{type:"block",baseHeight:+c,minHeight:5,maxHeight:20},fullLine:{type:"fullLine",baseHeight:.5*c,minHeight:2,maxHeight:4},thinLine:{type:"thinLine",baseHeight:.25*c,minHeight:1,maxHeight:2}},eM={stashes:{type:"stashes",colorCssKey:"--color-graph-scroll-marker-stashes",lanes:[0],shape:"block"},tags:{type:"tags",colorCssKey:"--color-graph-scroll-marker-tags",lanes:[2],shape:"block"},remoteBranches:{type:"remoteBranches",colorCssKey:"--color-graph-scroll-marker-remote-branches",lanes:[2],shape:"block"},localBranches:{type:"localBranches",colorCssKey:"--color-graph-scroll-marker-local-branches",lanes:[0],shape:"block"},highlights:{type:"highlights",colorCssKey:"--color-graph-scroll-marker-highlights",lanes:[1],shape:"block"},upstream:{type:"upstream",colorCssKey:"--color-graph-scroll-marker-upstream",lanes:[1,2],shape:"block"},pullRequests:{type:"pullRequests",colorCssKey:"--color-graph-scroll-marker-pull-requests",lanes:[2],shape:"block"},head:{type:"head",colorCssKey:"--scroll-marker-head-color",lanes:[0,1],shape:"block"},selection:{type:"selection",colorCssKey:"--color-graph-scroll-marker-selection",lanes:[0,1,2],shape:"fullLine"}},eI=10,eA=6,eN={[ew]:{headerLabelUntranslated:"GraphHeader-CommitAuthor",isCustomizable:!0,listId:"commit-author-zone",minimumWidth:x,showIconWidth:O},[e_]:{headerLabelUntranslated:"GraphHeader-CommitDateTime",isCustomizable:!0,listId:"commit-date-time-zone",minimumWidth:A,showIconWidth:$},[ey]:{headerLabelUntranslated:"GraphHeader-CommitMessage",isCustomizable:!0,listId:"commit-message-zone",minimumWidth:W,showIconWidth:F},[eS]:{headerLabelUntranslated:"GraphHeader-CommitSha",isCustomizable:!0,listId:"commit-sha-zone",minimumWidth:P,showIconWidth:G},[ev]:{headerLabelUntranslated:"GraphHeader-CommitGraph",isCustomizable:!0,listId:"commit-zone",minimumWidth:S,showIconWidth:C},[eb]:{headerLabelUntranslated:"GraphHeader-BranchTag",isCustomizable:!0,listId:"ref-zone",minimumWidth:U,showIconWidth:X},[eC]:{headerLabelUntranslated:"GraphHeader-Changes",isCustomizable:!0,listId:"changes-zone",minimumWidth:ee,showIconWidth:en}},eD={hour:23,day:6,week:4,month:11,year:6},ez={added:0,deleted:0,modified:0};var e$=((eR=e$||{}).ALWAYS="ALWAYS",eR.ON_HOVER="ON_HOVER",eR.NEVER="NEVER",eR)},66:(e,t,r)=>{r.d(t,{$V:()=>x,DO:()=>v,Et:()=>Z,HV:()=>el,K8:()=>B,Mz:()=>eo,Q9:()=>T,S6:()=>w,SY:()=>en,U0:()=>W,Ve:()=>G,X1:()=>er,Yy:()=>$,a5:()=>ea,al:()=>A,br:()=>g,eQ:()=>O,fW:()=>E,jY:()=>j,jz:()=>Q,kU:()=>q,l7:()=>et,mH:()=>C,n$:()=>Y,n0:()=>ei,nF:()=>m,pg:()=>ee,qC:()=>K,uQ:()=>V,ug:()=>S,xJ:()=>p,xd:()=>X,xy:()=>F,y6:()=>b,yJ:()=>P,yb:()=>_,z:()=>D});var n=r(126),o=r(298),i=r(686),c=r(666),u=r(214),h=r(406),d=r(635);let p=e=>{let t;return(...r)=>{t&&cancelAnimationFrame(t),t=requestAnimationFrame(()=>{e(...r)})}},m=(e,t,r)=>{let n,o,i,c=!1,u=t;return(...h)=>{void 0!==r&&(o=new Date().getTime(),u=!n||o-n>u+r?r:t),i&&(clearTimeout(i),i=null),c?i=setTimeout(()=>{e(...h)},u):(e(...h),n=new Date().getTime(),c=!0,setTimeout(()=>{c=!1},u))}};function g(e){return 1>Math.abs(e.scrollHeight-e.scrollTop-e.clientHeight)}function b(e){return 1>Math.abs(e.scrollWidth-e.scrollLeft-e.clientWidth)}function v(e){return e?"string"==typeof e?e:JSON.stringify(e):null}function w(e){let{length:t}=e;if(0===t)return{min:0,max:0};if(1===t)return{min:0,max:e[0]};e.sort((e,t)=>e-t);let r=e[0],n=e[Math.floor(.25*t)],o=e[Math.floor(.5*t)],i=e[Math.floor(.75*t)],c=e[t-1],u=i-n;return{min:Math.max(r,o-1.5*u),max:Math.min(c,o+1.5*u)}}function _(e,t,r,n){let{id:o}=e;return!o||null===t||t?.[o]===null||n&&t?.[o]?.[n]===null?null:t&&o in t?n&&!t[o]?.[n]?(r(o,[n]),null):n?t?.[o]?.[n]:t?.[o]:(r(o,h.ej),null)}function S(){let e,t=new Date,r={hour:[],day:[],week:[],month:[],year:[]};for(e=1;e<=u.WC.hour;e+=1)r.hour.push({date:t.getTime()-36e5*e,label:1===e?"Timeline-1HourAgo":"Timeline-NHoursAgo",timeUnit:"hour",value:e});for(e=1;e<=u.WC.day;e+=1)r.day.push({date:t.getTime()-864e5*e,label:1===e?"Timeline-Yesterday":"Timeline-NDaysAgo",timeUnit:"day",value:e});for(e=1;e<=u.WC.week;e+=1)r.week.push({date:t.getTime()-6048e5*e,label:1===e?"Timeline-1WeekAgo":"Timeline-NWeeksAgo",timeUnit:"week",value:e});let n=new Date;for(n.setHours(0,0,0,0),e=1;e<=u.WC.month;e+=1)n.setMonth(n.getMonth()-1),n.setHours(0,0,0,0),r.month.push({date:n.getTime(),label:1===e?"Timeline-1MonthAgo":"Timeline-NMonthsAgo",timeUnit:"month",value:e});let o=new Date;for(o.setHours(0,0,0,0),e=1;e<=u.WC.year;e+=1){let t;switch(o.setFullYear(o.getFullYear()-1),o.setHours(0,0,0,0),e){case 1:t="Timeline-1YearAgo";break;case u.WC.year:t="Timeline-NPlusYearsAgo";break;default:t="Timeline-NYearsAgo"}r.year.push({date:o.getTime(),label:t,timeUnit:"year",value:e})}return r}function C(e,t){if(t.id)return t.id;let r=t.owner||"";return e===c.z.REMOTE?`${e}/${r}/${t.name}`:`${e}/${t.name}`}function x(e){return C(e.refType,e)}function T(e,t=0){for(let r=e.length-1;r>=t;r-=1){let t=e[r];if(t.currentWidth>t.minimumWidth)return t}}function E(e,t=0){if(e.length){for(let r=t;r<e.length;r+=1){let t=e[r],n=t.maximumWidth?Math.min(t.maximumWidth,t.preferredWidth||1/0):t.preferredWidth;if(n&&t.currentWidth<n)return t}return e[e.length-1]}}function O(e,t=!1){let r="--scrollable-scrollbar-thickness",n=t||!e[r]?(0,i.yr)(e):e,o=n[r]?parseInt(n[r],10):0;return Number.isNaN(o)?0:o}function A(e,t){let r=0;for(let n of e)t&&n.type===t||(r+=n.currentWidth);return r}let D=(e,t)=>e===t[t.length-1].type;function $(e,t,r){return t||r||0===e}function P(e,t,r){let n=$(e,t,r);return e+ +!!n}function G(e,t,r){let n=P(e,t,r);return u.yB*n}function W(e,t){return e.type===u.md&&t>0?e.contentWidth||0:e.currentWidth}function F(e,t,r,n,o){var i;let c=Z(e,t);return c&&(i=r.length,c.currentWidth<W(c,i))?O(n,o):0}function B(e,t,r,n,o,i,c,u,h){var d;let p,m=Z(e,t);return m&&(d=i.length,p=G(d,r,n),D(m.type,t)&&(o<p||c))?O(u,h):0}let U=(e,t)=>{let r=q(e,t),n=q(u.md,t);return -1!==r&&-1!==n&&r-n==1};function j(e,t,r){return(0,n.q)(r,e.minimumWidth||0,e.maximumWidth&&!D(e.type,t)?e.maximumWidth||0:Number.MAX_VALUE)}function Z(e,t){return t.find(({type:t})=>t===e)}function V(e){return!!e&&e.currentWidth<=e.showIconWidth}function q(e,t){return t.findIndex(({type:t})=>t===e)}function K(e,t,r){let n=0,o=0,i=q(e,t);if(i>-1){let e=function(e,t=0){let r=0;for(let n=t;n<e.length;n+=1)r+=e[n].minimumWidth;return r}(t,i+1),c=function(e,t=e.length-1){let r=0;for(let n=0;n<=t;n+=1)r+=e[n].currentWidth;return r}(t,i-1),u=t[i].maximumWidth||Number.MAX_VALUE;n=t[i].minimumWidth,o=Math.min(u,r-e-c)}return{min:n,max:o}}function Q(e){let t=!!e&&e===u.eB.Compact,r=t?1:2,n=t?10:28,o=t?1:3,i=t?1:3,c=t?10:22,h=t?c:u.lH,d=t?c:c/2+1;return{COMMIT_ZONE_LINE_WIDTH:r,COMMIT_ZONE_GUTTER_WIDTH:n,COMMIT_ZONE_PADDING_LEFT:o,COMMIT_ZONE_PADDING_RIGHT:i,COMMIT_COLUMN_WIDTH:c,COMMIT_NODE_DIAMETER:h,COMMIT_MERGE_NODE_DIAMETER:d,COMMIT_NODE_TOP_OFFSET:.5*u.lH-.5*h,COMMIT_MERGE_NODE_LEFT_OFFSET:c/2-d/2,COMMIT_MERGE_NODE_TOP_OFFSET:.5*u.lH-.5*d,COMMIT_ZONE_AVATAR_DIAMETER:h-2*r,COMMIT_ZONE_VIEWPORT_WIDTH_MIN:h+o+i+n,COMMIT_ZONE_SHOW_ICON_WIDTH:t?45:56,IS_COMPACT:t,RADIUS_DIFF_MERGE_NODE_COMMIT_NODE:h/2-d/2}}let X=e=>t=>t===e.length?"SHOW_MORE_COMMITS":e[t].sha;function J(e){return e instanceof d.Y?!!e.refsData?.activeGraphRef:!!e?.heads&&e.heads.some(e=>es(e))}function ee(e){let t=e.find(J);return t?.sha||void 0}function et(e){return[o.l2,o.gL,o.bY].includes(e)}function er(e){return!!e&&Object.values(e).some(e=>e>0)}function en(e,t){return e.has(t)&&1===e.size}function eo(e,t,r,n){if(n<0)return u.CY;let o=e+2,i=n*e;return i>=r-o&&i<r+t+o?u.CY:u.mP}function ei(e){switch(e){case u.md:return"graph";case u.ui:return"branch";case u.d4:return"message";case u.fx:return"author";case u.$A:return"datetime";case u.AR:return"commit";case u.Sq:return"changes";default:return}}function es(e){return e.isCurrentHead}function ea(e){return e.refType===c.z.HEAD&&es(e)}let Y=class Y{props;constructor(e){this.props=e}getActiveGraphZone(e){let t=Z(e,this.props.graphZones);return!t||t.isHidden?void 0:t}getGraphRefGroupsByNameForRow(e){let t=this.getRow(e);return t&&t.refsData?.orderedRefGroups||[]}getRow(e){if(!(e<0)&&!(e>this.props.processedRows.length-1))return this.props.processedRows[e]}getZoneWidth(e,t=!0){var r;let n=t?this.getVerticalScrollWidth(e):0;return r=this.props.graphZones,(Z(e,r)?.currentWidth||u.W[e].minimumWidth)-n}isDateTimeZoneActive(){return!!this.getActiveGraphZone(u.$A)}shouldShowTimelines(){return this.props.alwaysShowTimelines||!this.isDateTimeZoneActive()}isFirstRow(e){return 0===e}isColumnFollowingGraphColumn(e){return U(e,this.props.graphZones)}isHighlighted(e){if(this.props.processedRows[e]&&this.props.highlightedShas){let t=this.props.processedRows[e]?.sha;return this.props.highlightedShas[t]||!1}return!1}isHovering(e){return!!this.props.processedRows[e]&&this.props.currentlyHoveredCommitSha===this.props.processedRows[e]?.sha}isLastColumn(e){return D(e,this.props.graphZones)}getSelectedRefGroupByName(){if(1===this.props.selectedShas.size){let e=this.props.selectedShas[Symbol.iterator]().next().value;if(e){let t=this.props.processedGraphRowBySha[e];if(t)return t.refsData?.orderedRefGroups||[]}}return[]}getHorizontalScrollHeight(e){return F(e,this.props.graphZones,this.props.processedRows,this.props.cssVariables)}getVerticalScrollWidth(e){return B(e,this.props.graphZones,this.props.hasMoreCommits,this.props.isLoadingRows,this.props.height,this.props.processedRows,this.props.enabledScrollMarkerTypes.length>0,this.props.cssVariables)}shouldUseColumnHeaderIcons(e){let t=Z(e,this.props.graphZones);return!!t&&V(t)}isMissingHoveredRefGroup(e){if(this.props.highlightedShas)return!1;let t=this.getRow(e);if(!t)return!1;let r=[];if(this.props.dimRowsOfSelectedCommit){let e=this.getSelectedRefGroupByName();if(!e.length)return!1;r=e[0]}else{let{hoveredRefGroup:e}=this.props;if(!e?.length)return!1;r=e}let{name:n,refType:o}=r[0],i=o===c.z.TAG,u=t.tags.length>0&&!t.heads.length&&!t.remotes.length,{heads:h,tags:d,remotes:p}=t.hasRefs&&(!u||i)?t:t.childRefs;return!h.length&&!p.length&&!d.length||!h.some(e=>e.name===n&&r.some(e=>e.refType===c.z.HEAD))&&!p.some(e=>e.name===n&&r.some(t=>t.refType===c.z.REMOTE&&t.owner===e.owner))&&!d.some(e=>e.name===n&&r.some(e=>e.refType===c.z.TAG))}isSelected(e){let t=this.getRow(e)?.sha;return!!t&&this.props.selectedShas.has(t)}isSingleSelected(e){let t=this.getRow(e)?.sha;return!!t&&en(this.props.selectedShas,t)}hasTimeline(e){return this.shouldShowTimelines()&&!!this.props.processedRows[e]?.timeLineEntry&&!this.isFirstRow(e)}rowContainsCurrentHeadRef(e){return J(e)}};function el(e){let t;for(t of e);return t}},406:(e,t,r)=>{r.d(t,{RA:()=>o,ej:()=>c,fd:()=>i,ki:()=>n});let n="pullRequest",o="upstream",i="issue",c=[n,o,i]},635:(e,t,r)=>{r.d(t,{Y:()=>s});var n=r(666),o=r(66);let i={[n.z.WORKTREE]:3,[n.z.HEAD]:2,[n.z.REMOTE]:1,[n.z.TAG]:0};let s=class s{_graph;_message;_heads;_remotes;_tags;_activeGraphRef;_activeGraphRefGroup;_refGroupsByName;_orderedRefGroups;sha;parents;author;email;date;type;contexts;rowIndex;column;columnForColoring;edgeColumnMaxes;edges;childRefs;timeLineEntry;summary;body;displayMessage;displaySummary;displayBody;set message(e){this._message!==e&&(this._message=e,this.displayMessage=this._graph.formatCommitMessageCallback(e),this.updateSummaryAndBody(e))}get message(){return this._message}get heads(){return this._heads}set heads(e){this._heads!==e&&(this._heads=e,this.initializeRefGroups())}set remotes(e){this._remotes!==e&&(this._remotes=e,this.initializeRefGroups())}get remotes(){return this._remotes}set tags(e){this._tags!==e&&(this._tags=e,this.initializeRefGroups())}get tags(){return this._tags}get hasRefs(){return this.heads.length>0||this.remotes.length>0||this.tags.length>0}get hasChildRefs(){return this.childRefs.heads.length>0||this.childRefs.remotes.length>0||this.childRefs.tags.length>0}get refsData(){if(this.hasRefs||this.hasChildRefs)return 0===this._orderedRefGroups.length&&this.loadGraphRefGroupsData(),{activeGraphRef:this._activeGraphRef,activeGraphRefGroup:this._activeGraphRefGroup,orderedRefGroups:this._orderedRefGroups,refGroupsByName:this._refGroupsByName}}constructor(e,t,r,n,o,i,c,u){this._graph=e,this._heads=t.heads||[],this._remotes=t.remotes||[],this._tags=t.tags||[],this._message=t.message,this.sha=t.sha,this.parents=t.parents,this.author=t.author,this.email=t.email,this.date=t.date,this.type=t.type,this.contexts=t.contexts,this.column=r||0,this.columnForColoring=u,this.edgeColumnMaxes=n||0,this.edges=o||{},this.childRefs=i||{heads:[],tags:[],remotes:[]},this.timeLineEntry=c,this.initializeRefGroups(),this.updateSummaryAndBody(t.message)}updateSummaryAndBody(e){let t,r=e?e.trim():"",n=r.indexOf(`
`);-1!==n&&(t=r.substring(n+1).trim().replace(/\n+(?:\s+\n+)?/g," | "),r=r.substring(0,n)),this.body=t,this.summary=r,this.displaySummary=this._graph.formatCommitMessageCallback(r),this.displayBody=t?this._graph.formatCommitMessageCallback(t):void 0}initializeRefGroups(){this._activeGraphRefGroup=void 0,this._activeGraphRef=void 0,this._refGroupsByName={},this._orderedRefGroups=[]}addRefToRefGroup(e){let t=e.name;this._refGroupsByName[t]||(this._refGroupsByName[t]=[]),this._refGroupsByName[t].push(e)}loadGraphRefGroupsData(){this.initializeRefGroups();let e=[],{heads:t,tags:r,remotes:c}=this.hasRefs?this:this.childRefs;for(let r of t){let t={...r,refType:n.z.HEAD};this.addRefToRefGroup(t),(0,o.a5)(t)?(this._activeGraphRefGroup=this._refGroupsByName[t.name],this._activeGraphRef=t,e.unshift(this._refGroupsByName[t.name])):e.push(this._refGroupsByName[t.name])}for(let t of c){let r={...t,fullName:t.owner?`${t.owner}/${t.name}`:t.name,refType:n.z.REMOTE},o=this._refGroupsByName[r.name];this.addRefToRefGroup(r),o||e.push(this._refGroupsByName[r.name])}for(let t of r){let r={...t,refType:n.z.TAG};this.addRefToRefGroup(r),e.push(this._refGroupsByName[r.name])}this._orderedRefGroups=e.sort((e,t)=>e===this._activeGraphRefGroup?-1:t===this._activeGraphRefGroup?1:i[e[0].refType]>i[t[0].refType]?-1:i[e[0].refType]<i[t[0].refType]?1:e.length>t.length?-1:e.length<t.length?1:e[0].name.localeCompare(t[0].name))}}},810:(e,t,r)=>{function n(e){switch(e){case"github":return"GitHub";case"githubEnterprise":return"GitHub Enterprise";case"gitlab":return"GitLab";case"gitlabSelfHosted":return"GitLab Self-Hosted";case"azureDevops":return"Azure DevOps";case"bitbucket":return"Bitbucket";case"bitbucketServer":return"Bitbucket Server";default:return e}}r.d(t,{T:()=>n})},852:(e,t,r)=>{r.d(t,{H:()=>n});let n={"CommitDiffSection-FileAdded":"added","CommitDiffSection-FileDeleted":"deleted","CommitDiffSection-FileModified":"modified","CommitDiffSection-FileRenamed":"renamed","CommitDiffSection-NFilesAdded":"{0} added","CommitDiffSection-NFilesDeleted":"{0} deleted","CommitDiffSection-NFilesModified":"{0} modified","CommitDiffSection-NFilesRenamed":"{0} renamed","Graph-IsLoadingRows":"Loading...","Graph-NoCommits":"No commits","Graph-WorkInProgress":"Work in progress","GraphHeader-BranchTag":"BRANCH / TAG","GraphHeader-Changes":"CHANGES","GraphHeader-CommitAuthor":"AUTHOR","GraphHeader-CommitDateTime":"COMMIT DATE / TIME","GraphHeader-CommitGraph":"GRAPH","GraphHeader-CommitMessage":"COMMIT MESSAGE","GraphHeader-CommitSha":"SHA","GraphHeader-EditColumns":"Columns settings","GraphHeader-Filter":"Filter","GraphHeader-HiddenRefs-btn":"Hidden Branches / Tags","OptionalGraphZone-CommitAuthor":"Author","OptionalGraphZone-CommitDateTime":"Date / Time","OptionalGraphZone-CommitSha":"Sha","IssueIcon-Tooltip":"{0}: {1}","PullRequestIcon-Tooltip":`#{0}: {1}
 Double-click to open pull request on {2}`,"Ref-Current":"Current Branch","Ref-Local":"Local Branch","Ref-Remote":"Remote Branch","Ref-Tag":"Tag","Ref-Worktree":"Worktree","RefZone-EnterBranchName":"enter branch name","RefZone-EnterTagName":"enter tag name","Timeline-1HourAgo":"1 hour ago","Timeline-NHoursAgo":"{0} hours ago","Timeline-Yesterday":"yesterday","Timeline-NDaysAgo":"{0} days ago","Timeline-1WeekAgo":"a week ago","Timeline-NWeeksAgo":"{0} weeks ago","Timeline-1MonthAgo":"a month ago","Timeline-NMonthsAgo":"{0} months ago","Timeline-1YearAgo":"a year ago","Timeline-NYearsAgo":"{0} years ago","Timeline-NPlusYearsAgo":"{0}+ years ago","UpstreamIndicatorIcon-BehindAndAheadTooltip":`{0} commit(s) behind and {1} commit(s) ahead of {2}
 Double-click to pull changes`,"UpstreamIndicatorIcon-BehindTooltip":`{0} commit(s) behind {1}
 Double-click to pull changes`,"UpstreamIndicatorIcon-AheadTooltip":`{0} commit(s) ahead of {1}
 Double-click to push changes`,ResizePanel:"Resize Panel",Stash:"Stash",Hide:"Hide",Show:"Show","WorkDirMessageInput-WIPPlaceholder":"WIP"}},899:()=>{},666:(e,t,r)=>{r.d(t,{E:()=>i,z:()=>n});let n={HEAD:"head",REMOTE:"remote",TAG:"tag",WORKTREE:"worktree"};var o,i=((o=i||{}).LEFT="LEFT",o.RIGHT="RIGHT",o)},285:()=>{},456:()=>{},310:()=>{},118:(e,t,r)=>{r.r(t),r.d(t,{CHANGES_BAR_MIN_WIDTH:()=>u.MT,CHANGES_BAR_RIGHT_MARGIN:()=>u.KA,CHANGES_ZONE_MIN_WIDTH:()=>u.n9,CHANGES_ZONE_SHOW_ICON_WIDTH:()=>u.oC,COMMIT_AUTHOR_ZONE_AVATAR_INNER_DIAMETER:()=>u.CF,COMMIT_AUTHOR_ZONE_AVATAR_OUTER_DIAMETER:()=>u.n0,COMMIT_AUTHOR_ZONE_MIN_WIDTH:()=>u.z$,COMMIT_AUTHOR_ZONE_SHOW_ICON_WIDTH:()=>u.gK,COMMIT_DATE_TIME_ZONE_MIN_WIDTH:()=>u.iX,COMMIT_DATE_TIME_ZONE_SHOW_ICON_WIDTH:()=>u.jp,COMMIT_MESSAGE_ZONE_MIN_WIDTH:()=>u.Hm,COMMIT_MESSAGE_ZONE_SHOW_ICON_WIDTH:()=>u.E5,COMMIT_NODE_MIN_ALPHA:()=>u.Td,COMMIT_SHA_ZONE_MIN_WIDTH:()=>u.cD,COMMIT_SHA_ZONE_SHOW_ICON_WIDTH:()=>u.H6,COMMIT_ZONE_DEFAULT_VIEWPORT_WIDTH_MIN:()=>u.wF,COMMIT_ZONE_EDGE_ARC_PADDING:()=>u.Oe,COMMIT_ZONE_EDGE_ARC_RADIUS:()=>u.nf,COMMIT_ZONE_MARGIN_BOTTOM:()=>u.kj,COMMIT_ZONE_MARGIN_TOP:()=>u._b,COMMIT_ZONE_ROW_HEIGHT:()=>u.kU,COMMIT_ZONE_ROW_INNER_HEIGHT:()=>u.lH,COMMIT_ZONE_SHOW_ICON_WIDTH:()=>u.EB,CommitDateTimeSources:()=>n.N,DEFAULT_AVATAR_BACKGROUND_COLOR:()=>u.BP,DEFAULT_COMMIT_SHA_LENGTH:()=>u.wT,DEFAULT_CSS_VARIABLES:()=>_.Y,DEFAULT_TRANSLATIONS:()=>w.H,DEFAULT_WORKDIR_STATS:()=>u.pi,GRAPH_HEADER_ROW_HEIGHT:()=>u.q4,GRAPH_ROW_HEIGHT:()=>u.yB,GRAPH_ROW_INNER_HEIGHT:()=>u.$0,GRAPH_ROW_LAZY_LOAD_COMMITS_OFFSET:()=>u.By,GRAPH_ROW_PADDING:()=>u.ar,GRAPH_SCROLL_MARKER_LANES:()=>u.Yx,GraphColumnMode:()=>u.eB,GraphMarkerShape:()=>u.Sb,HEADER_ROW_HEIGHT:()=>u.bo,HEADER_ROW_MARGIN_BOTTOM:()=>u.Qb,INLINE_SUMMARY_MARGIN_LEFT:()=>u.yX,LeftPanelToGraphMarginGap:()=>u.xY,NUM_COLUMNS_SUPPORTED_PROP_NAME:()=>_.u,NamedKeys:()=>o.e,OPACITY_FACTOR_BY_THEME:()=>u.K3,REF_NODE_ICON_MARGIN:()=>u.io,REF_NODE_ICON_SPACING:()=>u.RJ,REF_NODE_ICON_WIDTH:()=>u.G3,REF_NODE_OUTER_SPACING:()=>u.lE,REF_ZONE_MARGIN_LEFT:()=>u.mE,REF_ZONE_MARGIN_RIGHT:()=>u.Zk,REF_ZONE_MAX_REFS_TO_RENDER:()=>u.gi,REF_ZONE_MIN_WIDTH:()=>u.di,REF_ZONE_SHOW_ICON_WIDTH:()=>u.KV,REF_ZONE_TEXT_HEIGHT:()=>u.F0,ResizableHandleCorrection:()=>u.WQ,SCROLL_TO_ALIGNMENT_AUTO:()=>u.CY,SCROLL_TO_ALIGNMENT_CENTER:()=>u.mP,TIMESTAMP_FORMAT_DATE_TIME:()=>u.qO,TINY_FILES_READOUT_FONT_SIZE:()=>u.Gu,TINY_FILES_READOUT_RIGHT_MARGIN:()=>u.Ql,TINY_ICON_RIGHT_MARGIN:()=>u.tl,TINY_ICON_SIZE:()=>u.ro,allMetadataTypes:()=>h.ej,changesZone:()=>u.Sq,commitAuthorZone:()=>u.fx,commitDateTimeZone:()=>u.$A,commitMessageZone:()=>u.d4,commitNodeType:()=>n.oB,commitShaZone:()=>u.AR,commitZone:()=>u.md,getHostingServiceName:()=>d.T,graphCommitDescDisplayModes:()=>u.FQ,graphMarkerMetadata:()=>u.wx,graphMarkerShapeMetadata:()=>u.j,graphZoneMetaData:()=>u.W,issueMetadataType:()=>h.fd,lookbackLimitByPeriod:()=>u.WC,mergeConflictNodeType:()=>n.l2,mergeNodeType:()=>n.t$,numGraphColumnsDefault:()=>u.Dl,pullRequestMetadataType:()=>h.ki,refIconsPositions:()=>p.E,refTypes:()=>p.z,refZone:()=>u.ui,stashNodeType:()=>n.OZ,timelineMsgRowRenderId:()=>u.OU,types:()=>C.types,unsupportedRebaseWarningNodeType:()=>n.gL,upstreamMetadataType:()=>h.RA,workDirType:()=>n.bY});var n=r(298),o=r(210),i=r(218),c={};for(let e in i)0>["default","CommitDateTimeSources","commitNodeType","mergeConflictNodeType","mergeNodeType","stashNodeType","unsupportedRebaseWarningNodeType","workDirType","NamedKeys"].indexOf(e)&&(c[e]=()=>i[e]);r.d(t,c);var u=r(214),h=r(406),d=r(810),p=r(666),m=r(285),c={};for(let e in m)0>["default","CommitDateTimeSources","commitNodeType","mergeConflictNodeType","mergeNodeType","stashNodeType","unsupportedRebaseWarningNodeType","workDirType","NamedKeys","CHANGES_BAR_MIN_WIDTH","CHANGES_BAR_RIGHT_MARGIN","CHANGES_ZONE_MIN_WIDTH","CHANGES_ZONE_SHOW_ICON_WIDTH","COMMIT_AUTHOR_ZONE_AVATAR_INNER_DIAMETER","COMMIT_AUTHOR_ZONE_AVATAR_OUTER_DIAMETER","COMMIT_AUTHOR_ZONE_MIN_WIDTH","COMMIT_AUTHOR_ZONE_SHOW_ICON_WIDTH","COMMIT_DATE_TIME_ZONE_MIN_WIDTH","COMMIT_DATE_TIME_ZONE_SHOW_ICON_WIDTH","COMMIT_MESSAGE_ZONE_MIN_WIDTH","COMMIT_MESSAGE_ZONE_SHOW_ICON_WIDTH","COMMIT_NODE_MIN_ALPHA","COMMIT_SHA_ZONE_MIN_WIDTH","COMMIT_SHA_ZONE_SHOW_ICON_WIDTH","COMMIT_ZONE_DEFAULT_VIEWPORT_WIDTH_MIN","COMMIT_ZONE_EDGE_ARC_PADDING","COMMIT_ZONE_EDGE_ARC_RADIUS","COMMIT_ZONE_MARGIN_BOTTOM","COMMIT_ZONE_MARGIN_TOP","COMMIT_ZONE_ROW_HEIGHT","COMMIT_ZONE_ROW_INNER_HEIGHT","COMMIT_ZONE_SHOW_ICON_WIDTH","DEFAULT_AVATAR_BACKGROUND_COLOR","DEFAULT_COMMIT_SHA_LENGTH","DEFAULT_WORKDIR_STATS","GRAPH_HEADER_ROW_HEIGHT","GRAPH_ROW_HEIGHT","GRAPH_ROW_INNER_HEIGHT","GRAPH_ROW_LAZY_LOAD_COMMITS_OFFSET","GRAPH_ROW_PADDING","GRAPH_SCROLL_MARKER_LANES","GraphColumnMode","GraphMarkerShape","HEADER_ROW_HEIGHT","HEADER_ROW_MARGIN_BOTTOM","INLINE_SUMMARY_MARGIN_LEFT","LeftPanelToGraphMarginGap","OPACITY_FACTOR_BY_THEME","REF_NODE_ICON_MARGIN","REF_NODE_ICON_SPACING","REF_NODE_ICON_WIDTH","REF_NODE_OUTER_SPACING","REF_ZONE_MARGIN_LEFT","REF_ZONE_MARGIN_RIGHT","REF_ZONE_MAX_REFS_TO_RENDER","REF_ZONE_MIN_WIDTH","REF_ZONE_SHOW_ICON_WIDTH","REF_ZONE_TEXT_HEIGHT","ResizableHandleCorrection","SCROLL_TO_ALIGNMENT_AUTO","SCROLL_TO_ALIGNMENT_CENTER","TIMESTAMP_FORMAT_DATE_TIME","TINY_FILES_READOUT_FONT_SIZE","TINY_FILES_READOUT_RIGHT_MARGIN","TINY_ICON_RIGHT_MARGIN","TINY_ICON_SIZE","changesZone","commitAuthorZone","commitDateTimeZone","commitMessageZone","commitShaZone","commitZone","graphCommitDescDisplayModes","graphMarkerMetadata","graphMarkerShapeMetadata","graphZoneMetaData","lookbackLimitByPeriod","numGraphColumnsDefault","refZone","timelineMsgRowRenderId","allMetadataTypes","issueMetadataType","pullRequestMetadataType","upstreamMetadataType","getHostingServiceName","refIconsPositions","refTypes"].indexOf(e)&&(c[e]=()=>m[e]);r.d(t,c);var g=r(310),c={};for(let e in g)0>["default","CommitDateTimeSources","commitNodeType","mergeConflictNodeType","mergeNodeType","stashNodeType","unsupportedRebaseWarningNodeType","workDirType","NamedKeys","CHANGES_BAR_MIN_WIDTH","CHANGES_BAR_RIGHT_MARGIN","CHANGES_ZONE_MIN_WIDTH","CHANGES_ZONE_SHOW_ICON_WIDTH","COMMIT_AUTHOR_ZONE_AVATAR_INNER_DIAMETER","COMMIT_AUTHOR_ZONE_AVATAR_OUTER_DIAMETER","COMMIT_AUTHOR_ZONE_MIN_WIDTH","COMMIT_AUTHOR_ZONE_SHOW_ICON_WIDTH","COMMIT_DATE_TIME_ZONE_MIN_WIDTH","COMMIT_DATE_TIME_ZONE_SHOW_ICON_WIDTH","COMMIT_MESSAGE_ZONE_MIN_WIDTH","COMMIT_MESSAGE_ZONE_SHOW_ICON_WIDTH","COMMIT_NODE_MIN_ALPHA","COMMIT_SHA_ZONE_MIN_WIDTH","COMMIT_SHA_ZONE_SHOW_ICON_WIDTH","COMMIT_ZONE_DEFAULT_VIEWPORT_WIDTH_MIN","COMMIT_ZONE_EDGE_ARC_PADDING","COMMIT_ZONE_EDGE_ARC_RADIUS","COMMIT_ZONE_MARGIN_BOTTOM","COMMIT_ZONE_MARGIN_TOP","COMMIT_ZONE_ROW_HEIGHT","COMMIT_ZONE_ROW_INNER_HEIGHT","COMMIT_ZONE_SHOW_ICON_WIDTH","DEFAULT_AVATAR_BACKGROUND_COLOR","DEFAULT_COMMIT_SHA_LENGTH","DEFAULT_WORKDIR_STATS","GRAPH_HEADER_ROW_HEIGHT","GRAPH_ROW_HEIGHT","GRAPH_ROW_INNER_HEIGHT","GRAPH_ROW_LAZY_LOAD_COMMITS_OFFSET","GRAPH_ROW_PADDING","GRAPH_SCROLL_MARKER_LANES","GraphColumnMode","GraphMarkerShape","HEADER_ROW_HEIGHT","HEADER_ROW_MARGIN_BOTTOM","INLINE_SUMMARY_MARGIN_LEFT","LeftPanelToGraphMarginGap","OPACITY_FACTOR_BY_THEME","REF_NODE_ICON_MARGIN","REF_NODE_ICON_SPACING","REF_NODE_ICON_WIDTH","REF_NODE_OUTER_SPACING","REF_ZONE_MARGIN_LEFT","REF_ZONE_MARGIN_RIGHT","REF_ZONE_MAX_REFS_TO_RENDER","REF_ZONE_MIN_WIDTH","REF_ZONE_SHOW_ICON_WIDTH","REF_ZONE_TEXT_HEIGHT","ResizableHandleCorrection","SCROLL_TO_ALIGNMENT_AUTO","SCROLL_TO_ALIGNMENT_CENTER","TIMESTAMP_FORMAT_DATE_TIME","TINY_FILES_READOUT_FONT_SIZE","TINY_FILES_READOUT_RIGHT_MARGIN","TINY_ICON_RIGHT_MARGIN","TINY_ICON_SIZE","changesZone","commitAuthorZone","commitDateTimeZone","commitMessageZone","commitShaZone","commitZone","graphCommitDescDisplayModes","graphMarkerMetadata","graphMarkerShapeMetadata","graphZoneMetaData","lookbackLimitByPeriod","numGraphColumnsDefault","refZone","timelineMsgRowRenderId","allMetadataTypes","issueMetadataType","pullRequestMetadataType","upstreamMetadataType","getHostingServiceName","refIconsPositions","refTypes"].indexOf(e)&&(c[e]=()=>g[e]);r.d(t,c);var b=r(456),c={};for(let e in b)0>["default","CommitDateTimeSources","commitNodeType","mergeConflictNodeType","mergeNodeType","stashNodeType","unsupportedRebaseWarningNodeType","workDirType","NamedKeys","CHANGES_BAR_MIN_WIDTH","CHANGES_BAR_RIGHT_MARGIN","CHANGES_ZONE_MIN_WIDTH","CHANGES_ZONE_SHOW_ICON_WIDTH","COMMIT_AUTHOR_ZONE_AVATAR_INNER_DIAMETER","COMMIT_AUTHOR_ZONE_AVATAR_OUTER_DIAMETER","COMMIT_AUTHOR_ZONE_MIN_WIDTH","COMMIT_AUTHOR_ZONE_SHOW_ICON_WIDTH","COMMIT_DATE_TIME_ZONE_MIN_WIDTH","COMMIT_DATE_TIME_ZONE_SHOW_ICON_WIDTH","COMMIT_MESSAGE_ZONE_MIN_WIDTH","COMMIT_MESSAGE_ZONE_SHOW_ICON_WIDTH","COMMIT_NODE_MIN_ALPHA","COMMIT_SHA_ZONE_MIN_WIDTH","COMMIT_SHA_ZONE_SHOW_ICON_WIDTH","COMMIT_ZONE_DEFAULT_VIEWPORT_WIDTH_MIN","COMMIT_ZONE_EDGE_ARC_PADDING","COMMIT_ZONE_EDGE_ARC_RADIUS","COMMIT_ZONE_MARGIN_BOTTOM","COMMIT_ZONE_MARGIN_TOP","COMMIT_ZONE_ROW_HEIGHT","COMMIT_ZONE_ROW_INNER_HEIGHT","COMMIT_ZONE_SHOW_ICON_WIDTH","DEFAULT_AVATAR_BACKGROUND_COLOR","DEFAULT_COMMIT_SHA_LENGTH","DEFAULT_WORKDIR_STATS","GRAPH_HEADER_ROW_HEIGHT","GRAPH_ROW_HEIGHT","GRAPH_ROW_INNER_HEIGHT","GRAPH_ROW_LAZY_LOAD_COMMITS_OFFSET","GRAPH_ROW_PADDING","GRAPH_SCROLL_MARKER_LANES","GraphColumnMode","GraphMarkerShape","HEADER_ROW_HEIGHT","HEADER_ROW_MARGIN_BOTTOM","INLINE_SUMMARY_MARGIN_LEFT","LeftPanelToGraphMarginGap","OPACITY_FACTOR_BY_THEME","REF_NODE_ICON_MARGIN","REF_NODE_ICON_SPACING","REF_NODE_ICON_WIDTH","REF_NODE_OUTER_SPACING","REF_ZONE_MARGIN_LEFT","REF_ZONE_MARGIN_RIGHT","REF_ZONE_MAX_REFS_TO_RENDER","REF_ZONE_MIN_WIDTH","REF_ZONE_SHOW_ICON_WIDTH","REF_ZONE_TEXT_HEIGHT","ResizableHandleCorrection","SCROLL_TO_ALIGNMENT_AUTO","SCROLL_TO_ALIGNMENT_CENTER","TIMESTAMP_FORMAT_DATE_TIME","TINY_FILES_READOUT_FONT_SIZE","TINY_FILES_READOUT_RIGHT_MARGIN","TINY_ICON_RIGHT_MARGIN","TINY_ICON_SIZE","changesZone","commitAuthorZone","commitDateTimeZone","commitMessageZone","commitShaZone","commitZone","graphCommitDescDisplayModes","graphMarkerMetadata","graphMarkerShapeMetadata","graphZoneMetaData","lookbackLimitByPeriod","numGraphColumnsDefault","refZone","timelineMsgRowRenderId","allMetadataTypes","issueMetadataType","pullRequestMetadataType","upstreamMetadataType","getHostingServiceName","refIconsPositions","refTypes"].indexOf(e)&&(c[e]=()=>b[e]);r.d(t,c);var v=r(899),c={};for(let e in v)0>["default","CommitDateTimeSources","commitNodeType","mergeConflictNodeType","mergeNodeType","stashNodeType","unsupportedRebaseWarningNodeType","workDirType","NamedKeys","CHANGES_BAR_MIN_WIDTH","CHANGES_BAR_RIGHT_MARGIN","CHANGES_ZONE_MIN_WIDTH","CHANGES_ZONE_SHOW_ICON_WIDTH","COMMIT_AUTHOR_ZONE_AVATAR_INNER_DIAMETER","COMMIT_AUTHOR_ZONE_AVATAR_OUTER_DIAMETER","COMMIT_AUTHOR_ZONE_MIN_WIDTH","COMMIT_AUTHOR_ZONE_SHOW_ICON_WIDTH","COMMIT_DATE_TIME_ZONE_MIN_WIDTH","COMMIT_DATE_TIME_ZONE_SHOW_ICON_WIDTH","COMMIT_MESSAGE_ZONE_MIN_WIDTH","COMMIT_MESSAGE_ZONE_SHOW_ICON_WIDTH","COMMIT_NODE_MIN_ALPHA","COMMIT_SHA_ZONE_MIN_WIDTH","COMMIT_SHA_ZONE_SHOW_ICON_WIDTH","COMMIT_ZONE_DEFAULT_VIEWPORT_WIDTH_MIN","COMMIT_ZONE_EDGE_ARC_PADDING","COMMIT_ZONE_EDGE_ARC_RADIUS","COMMIT_ZONE_MARGIN_BOTTOM","COMMIT_ZONE_MARGIN_TOP","COMMIT_ZONE_ROW_HEIGHT","COMMIT_ZONE_ROW_INNER_HEIGHT","COMMIT_ZONE_SHOW_ICON_WIDTH","DEFAULT_AVATAR_BACKGROUND_COLOR","DEFAULT_COMMIT_SHA_LENGTH","DEFAULT_WORKDIR_STATS","GRAPH_HEADER_ROW_HEIGHT","GRAPH_ROW_HEIGHT","GRAPH_ROW_INNER_HEIGHT","GRAPH_ROW_LAZY_LOAD_COMMITS_OFFSET","GRAPH_ROW_PADDING","GRAPH_SCROLL_MARKER_LANES","GraphColumnMode","GraphMarkerShape","HEADER_ROW_HEIGHT","HEADER_ROW_MARGIN_BOTTOM","INLINE_SUMMARY_MARGIN_LEFT","LeftPanelToGraphMarginGap","OPACITY_FACTOR_BY_THEME","REF_NODE_ICON_MARGIN","REF_NODE_ICON_SPACING","REF_NODE_ICON_WIDTH","REF_NODE_OUTER_SPACING","REF_ZONE_MARGIN_LEFT","REF_ZONE_MARGIN_RIGHT","REF_ZONE_MAX_REFS_TO_RENDER","REF_ZONE_MIN_WIDTH","REF_ZONE_SHOW_ICON_WIDTH","REF_ZONE_TEXT_HEIGHT","ResizableHandleCorrection","SCROLL_TO_ALIGNMENT_AUTO","SCROLL_TO_ALIGNMENT_CENTER","TIMESTAMP_FORMAT_DATE_TIME","TINY_FILES_READOUT_FONT_SIZE","TINY_FILES_READOUT_RIGHT_MARGIN","TINY_ICON_RIGHT_MARGIN","TINY_ICON_SIZE","changesZone","commitAuthorZone","commitDateTimeZone","commitMessageZone","commitShaZone","commitZone","graphCommitDescDisplayModes","graphMarkerMetadata","graphMarkerShapeMetadata","graphZoneMetaData","lookbackLimitByPeriod","numGraphColumnsDefault","refZone","timelineMsgRowRenderId","allMetadataTypes","issueMetadataType","pullRequestMetadataType","upstreamMetadataType","getHostingServiceName","refIconsPositions","refTypes"].indexOf(e)&&(c[e]=()=>v[e]);r.d(t,c);var w=r(852),_=r(522),S=r(366),c={};for(let e in S)0>["default","CommitDateTimeSources","commitNodeType","mergeConflictNodeType","mergeNodeType","stashNodeType","unsupportedRebaseWarningNodeType","workDirType","NamedKeys","CHANGES_BAR_MIN_WIDTH","CHANGES_BAR_RIGHT_MARGIN","CHANGES_ZONE_MIN_WIDTH","CHANGES_ZONE_SHOW_ICON_WIDTH","COMMIT_AUTHOR_ZONE_AVATAR_INNER_DIAMETER","COMMIT_AUTHOR_ZONE_AVATAR_OUTER_DIAMETER","COMMIT_AUTHOR_ZONE_MIN_WIDTH","COMMIT_AUTHOR_ZONE_SHOW_ICON_WIDTH","COMMIT_DATE_TIME_ZONE_MIN_WIDTH","COMMIT_DATE_TIME_ZONE_SHOW_ICON_WIDTH","COMMIT_MESSAGE_ZONE_MIN_WIDTH","COMMIT_MESSAGE_ZONE_SHOW_ICON_WIDTH","COMMIT_NODE_MIN_ALPHA","COMMIT_SHA_ZONE_MIN_WIDTH","COMMIT_SHA_ZONE_SHOW_ICON_WIDTH","COMMIT_ZONE_DEFAULT_VIEWPORT_WIDTH_MIN","COMMIT_ZONE_EDGE_ARC_PADDING","COMMIT_ZONE_EDGE_ARC_RADIUS","COMMIT_ZONE_MARGIN_BOTTOM","COMMIT_ZONE_MARGIN_TOP","COMMIT_ZONE_ROW_HEIGHT","COMMIT_ZONE_ROW_INNER_HEIGHT","COMMIT_ZONE_SHOW_ICON_WIDTH","DEFAULT_AVATAR_BACKGROUND_COLOR","DEFAULT_COMMIT_SHA_LENGTH","DEFAULT_WORKDIR_STATS","GRAPH_HEADER_ROW_HEIGHT","GRAPH_ROW_HEIGHT","GRAPH_ROW_INNER_HEIGHT","GRAPH_ROW_LAZY_LOAD_COMMITS_OFFSET","GRAPH_ROW_PADDING","GRAPH_SCROLL_MARKER_LANES","GraphColumnMode","GraphMarkerShape","HEADER_ROW_HEIGHT","HEADER_ROW_MARGIN_BOTTOM","INLINE_SUMMARY_MARGIN_LEFT","LeftPanelToGraphMarginGap","OPACITY_FACTOR_BY_THEME","REF_NODE_ICON_MARGIN","REF_NODE_ICON_SPACING","REF_NODE_ICON_WIDTH","REF_NODE_OUTER_SPACING","REF_ZONE_MARGIN_LEFT","REF_ZONE_MARGIN_RIGHT","REF_ZONE_MAX_REFS_TO_RENDER","REF_ZONE_MIN_WIDTH","REF_ZONE_SHOW_ICON_WIDTH","REF_ZONE_TEXT_HEIGHT","ResizableHandleCorrection","SCROLL_TO_ALIGNMENT_AUTO","SCROLL_TO_ALIGNMENT_CENTER","TIMESTAMP_FORMAT_DATE_TIME","TINY_FILES_READOUT_FONT_SIZE","TINY_FILES_READOUT_RIGHT_MARGIN","TINY_ICON_RIGHT_MARGIN","TINY_ICON_SIZE","changesZone","commitAuthorZone","commitDateTimeZone","commitMessageZone","commitShaZone","commitZone","graphCommitDescDisplayModes","graphMarkerMetadata","graphMarkerShapeMetadata","graphZoneMetaData","lookbackLimitByPeriod","numGraphColumnsDefault","refZone","timelineMsgRowRenderId","allMetadataTypes","issueMetadataType","pullRequestMetadataType","upstreamMetadataType","getHostingServiceName","refIconsPositions","refTypes","DEFAULT_TRANSLATIONS","DEFAULT_CSS_VARIABLES","NUM_COLUMNS_SUPPORTED_PROP_NAME"].indexOf(e)&&(c[e]=()=>S[e]);r.d(t,c);var C=r(350)},126:(e,t,r)=>{function n(e,t,r){return(e=e<=r?e:r)>=t?e:t}r.d(t,{q:()=>n})},311:e=>{e.exports=function(e,t,r,n,o,i,c,u){if(!e){var h;if(void 0===t)h=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var d=[r,n,o,i,c,u],p=0;(h=Error(t.replace(/%s/g,function(){return d[p++]}))).name="Invariant Violation"}throw h.framesToPop=1,h}}},694:(e,t,r)=>{var n=r(925);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,i,c){if(c!==n){var u=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},556:(e,t,r)=>{e.exports=r(694)()},925:e=>{e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},547:(e,t,r)=>{var n=r(427),o=r(396);e.exports=function(){return n.apply(this,o(arguments)).on("cloned",function(t){e(t),o(t.getElementsByTagName("*")).forEach(e)});function e(e){e.removeAttribute("data-reactid")}}},698:(e,t)=>{var r=Symbol.for("react.transitional.element");function n(e,t,n){var o=null;if(void 0!==n&&(o=""+n),void 0!==t.key&&(o=""+t.key),"key"in t)for(var i in n={},t)"key"!==i&&(n[i]=t[i]);else n=t;return{$$typeof:r,type:e,key:o,ref:void 0!==(t=n.ref)?t:null,props:n}}t.Fragment=Symbol.for("react.fragment"),t.jsx=n,t.jsxs=n},848:(e,t,r)=>{e.exports=r(698)},394:e=>{e.exports="function"==typeof setImmediate?function(e){setImmediate(e)}:function(e){setTimeout(e,0)}},771:e=>{e.exports=function(){}},15:e=>{e.exports=r(975)},942:(e,t)=>{var r,n={}.hasOwnProperty;function o(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=i(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)n.call(e,r)&&e[r]&&(t=i(t,r));return t}(r)))}return e}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(o.default=o,e.exports=o):void 0!==(r=(function(){return o}).apply(t,[]))&&(e.exports=r)}},o={};function i(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={exports:{}};return n[e](r,r.exports,i),r.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch{if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var c={};(()=>{i.r(c),i.d(c,{DndComponent:()=>e.A,ScrollbarContainer:()=>t.A,default:()=>u});var e=i(280),t=i(468),r=i(797),n=i(118),o={};for(let e in n)0>["default","DndComponent","ScrollbarContainer"].indexOf(e)&&(o[e]=()=>n[e]);i.d(c,o);var u=r.A})(),e.exports=c},602:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isWide=t.isFullWidth=t.isAmbiguous=void 0,t.isAmbiguous=e=>161===e||164===e||167===e||168===e||170===e||173===e||174===e||e>=176&&e<=180||e>=182&&e<=186||e>=188&&e<=191||198===e||208===e||215===e||216===e||e>=222&&e<=225||230===e||e>=232&&e<=234||236===e||237===e||240===e||242===e||243===e||e>=247&&e<=250||252===e||254===e||257===e||273===e||275===e||283===e||294===e||295===e||299===e||e>=305&&e<=307||312===e||e>=319&&e<=322||324===e||e>=328&&e<=331||333===e||338===e||339===e||358===e||359===e||363===e||462===e||464===e||466===e||468===e||470===e||472===e||474===e||476===e||593===e||609===e||708===e||711===e||e>=713&&e<=715||717===e||720===e||e>=728&&e<=731||733===e||735===e||e>=768&&e<=879||e>=913&&e<=929||e>=931&&e<=937||e>=945&&e<=961||e>=963&&e<=969||1025===e||e>=1040&&e<=1103||1105===e||8208===e||e>=8211&&e<=8214||8216===e||8217===e||8220===e||8221===e||e>=8224&&e<=8226||e>=8228&&e<=8231||8240===e||8242===e||8243===e||8245===e||8251===e||8254===e||8308===e||8319===e||e>=8321&&e<=8324||8364===e||8451===e||8453===e||8457===e||8467===e||8470===e||8481===e||8482===e||8486===e||8491===e||8531===e||8532===e||e>=8539&&e<=8542||e>=8544&&e<=8555||e>=8560&&e<=8569||8585===e||e>=8592&&e<=8601||8632===e||8633===e||8658===e||8660===e||8679===e||8704===e||8706===e||8707===e||8711===e||8712===e||8715===e||8719===e||8721===e||8725===e||8730===e||e>=8733&&e<=8736||8739===e||8741===e||e>=8743&&e<=8748||8750===e||e>=8756&&e<=8759||8764===e||8765===e||8776===e||8780===e||8786===e||8800===e||8801===e||e>=8804&&e<=8807||8810===e||8811===e||8814===e||8815===e||8834===e||8835===e||8838===e||8839===e||8853===e||8857===e||8869===e||8895===e||8978===e||e>=9312&&e<=9449||e>=9451&&e<=9547||e>=9552&&e<=9587||e>=9600&&e<=9615||e>=9618&&e<=9621||9632===e||9633===e||e>=9635&&e<=9641||9650===e||9651===e||9654===e||9655===e||9660===e||9661===e||9664===e||9665===e||e>=9670&&e<=9672||9675===e||e>=9678&&e<=9681||e>=9698&&e<=9701||9711===e||9733===e||9734===e||9737===e||9742===e||9743===e||9756===e||9758===e||9792===e||9794===e||9824===e||9825===e||e>=9827&&e<=9829||e>=9831&&e<=9834||9836===e||9837===e||9839===e||9886===e||9887===e||9919===e||e>=9926&&e<=9933||e>=9935&&e<=9939||e>=9941&&e<=9953||9955===e||9960===e||9961===e||e>=9963&&e<=9969||9972===e||e>=9974&&e<=9977||9979===e||9980===e||9982===e||9983===e||10045===e||e>=10102&&e<=10111||e>=11094&&e<=11097||e>=12872&&e<=12879||e>=57344&&e<=63743||e>=65024&&e<=65039||65533===e||e>=127232&&e<=127242||e>=127248&&e<=127277||e>=127280&&e<=127337||e>=127344&&e<=127373||127375===e||127376===e||e>=127387&&e<=127404||e>=917760&&e<=917999||e>=983040&&e<=1048573||e>=1048576&&e<=1114109,t.isFullWidth=e=>12288===e||e>=65281&&e<=65376||e>=65504&&e<=65510,t.isWide=e=>e>=4352&&e<=4447||8986===e||8987===e||9001===e||9002===e||e>=9193&&e<=9196||9200===e||9203===e||9725===e||9726===e||9748===e||9749===e||e>=9800&&e<=9811||9855===e||9875===e||9889===e||9898===e||9899===e||9917===e||9918===e||9924===e||9925===e||9934===e||9940===e||9962===e||9970===e||9971===e||9973===e||9978===e||9981===e||9989===e||9994===e||9995===e||10024===e||10060===e||10062===e||e>=10067&&e<=10069||10071===e||e>=10133&&e<=10135||10160===e||10175===e||11035===e||11036===e||11088===e||11093===e||e>=11904&&e<=11929||e>=11931&&e<=12019||e>=12032&&e<=12245||e>=12272&&e<=12287||e>=12289&&e<=12350||e>=12353&&e<=12438||e>=12441&&e<=12543||e>=12549&&e<=12591||e>=12593&&e<=12686||e>=12688&&e<=12771||e>=12783&&e<=12830||e>=12832&&e<=12871||e>=12880&&e<=19903||e>=19968&&e<=42124||e>=42128&&e<=42182||e>=43360&&e<=43388||e>=44032&&e<=55203||e>=63744&&e<=64255||e>=65040&&e<=65049||e>=65072&&e<=65106||e>=65108&&e<=65126||e>=65128&&e<=65131||e>=94176&&e<=94180||94192===e||94193===e||e>=94208&&e<=100343||e>=100352&&e<=101589||e>=101632&&e<=101640||e>=110576&&e<=110579||e>=110581&&e<=110587||110589===e||110590===e||e>=110592&&e<=110882||110898===e||e>=110928&&e<=110930||110933===e||e>=110948&&e<=110951||e>=110960&&e<=111355||126980===e||127183===e||127374===e||e>=127377&&e<=127386||e>=127488&&e<=127490||e>=127504&&e<=127547||e>=127552&&e<=127560||127568===e||127569===e||e>=127584&&e<=127589||e>=127744&&e<=127776||e>=127789&&e<=127797||e>=127799&&e<=127868||e>=127870&&e<=127891||e>=127904&&e<=127946||e>=127951&&e<=127955||e>=127968&&e<=127984||127988===e||e>=127992&&e<=128062||128064===e||e>=128066&&e<=128252||e>=128255&&e<=128317||e>=128331&&e<=128334||e>=128336&&e<=128359||128378===e||128405===e||128406===e||128420===e||e>=128507&&e<=128591||e>=128640&&e<=128709||128716===e||e>=128720&&e<=128722||e>=128725&&e<=128727||e>=128732&&e<=128735||128747===e||128748===e||e>=128756&&e<=128764||e>=128992&&e<=129003||129008===e||e>=129292&&e<=129338||e>=129340&&e<=129349||e>=129351&&e<=129535||e>=129648&&e<=129660||e>=129664&&e<=129672||e>=129680&&e<=129725||e>=129727&&e<=129733||e>=129742&&e<=129755||e>=129760&&e<=129768||e>=129776&&e<=129784||e>=131072&&e<=196605||e>=196608&&e<=262141},723:(e,t,r)=>{!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch{}}(),e.exports=r(59)},841:(e,t)=>{function r(e,t){var r=e.length;for(e.push(t);0<r;){var n=r-1>>>1,o=e[n];if(0<i(o,t))e[n]=t,e[r]=o,r=n;else break}}function n(e){return 0===e.length?null:e[0]}function o(e){if(0===e.length)return null;var t=e[0],r=e.pop();if(r!==t){e[0]=r;for(var n=0,o=e.length,c=o>>>1;n<c;){var u=2*(n+1)-1,h=e[u],d=u+1,p=e[d];if(0>i(h,r))d<o&&0>i(p,h)?(e[n]=p,e[d]=r,n=d):(e[n]=h,e[u]=r,n=u);else if(d<o&&0>i(p,r))e[n]=p,e[d]=r,n=d;else break}}return t}function i(e,t){var r=e.sortIndex-t.sortIndex;return 0!==r?r:e.id-t.id}if(t.unstable_now=void 0,"object"==typeof performance&&"function"==typeof performance.now){var c,u=performance;t.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();t.unstable_now=function(){return h.now()-d}}var p=[],m=[],g=1,b=null,v=3,w=!1,_=!1,S=!1,C="function"==typeof setTimeout?setTimeout:null,x="function"==typeof clearTimeout?clearTimeout:null,T="undefined"!=typeof setImmediate?setImmediate:null;function E(e){for(var t=n(m);null!==t;){if(null===t.callback)o(m);else if(t.startTime<=e)o(m),t.sortIndex=t.expirationTime,r(p,t);else break;t=n(m)}}function O(e){if(S=!1,E(e),!_)if(null!==n(p))_=!0,U();else{var t=n(m);null!==t&&j(O,t.startTime-e)}}var A=!1,D=-1,$=5,P=-1;function G(){return!(t.unstable_now()-P<$)}function W(){if(A){var e=t.unstable_now();P=e;var r=!0;try{e:{_=!1,S&&(S=!1,x(D),D=-1),w=!0;var i=v;try{t:{for(E(e),b=n(p);null!==b&&!(b.expirationTime>e&&G());){var u=b.callback;if("function"==typeof u){b.callback=null,v=b.priorityLevel;var h=u(b.expirationTime<=e);if(e=t.unstable_now(),"function"==typeof h){b.callback=h,E(e),r=!0;break t}b===n(p)&&o(p),E(e)}else o(p);b=n(p)}if(null!==b)r=!0;else{var d=n(m);null!==d&&j(O,d.startTime-e),r=!1}}break e}finally{b=null,v=i,w=!1}}}finally{r?c():A=!1}}}if("function"==typeof T)c=function(){T(W)};else if("undefined"!=typeof MessageChannel){var F=new MessageChannel,B=F.port2;F.port1.onmessage=W,c=function(){B.postMessage(null)}}else c=function(){C(W,0)};function U(){A||(A=!0,c())}function j(e,r){D=C(function(){e(t.unstable_now())},r)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){_||w||(_=!0,U())},t.unstable_forceFrameRate=function(e){0>e||125<e||($=0<e?Math.floor(1e3/e):5)},t.unstable_getCurrentPriorityLevel=function(){return v},t.unstable_getFirstCallbackNode=function(){return n(p)},t.unstable_next=function(e){switch(v){case 1:case 2:case 3:var t=3;break;default:t=v}var r=v;v=t;try{return e()}finally{v=r}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var r=v;v=e;try{return t()}finally{v=r}},t.unstable_scheduleCallback=function(e,o,i){var c=t.unstable_now();switch(i="object"==typeof i&&null!==i&&"number"==typeof(i=i.delay)&&0<i?c+i:c,e){case 1:var u=-1;break;case 2:u=250;break;case 5:u=0x3fffffff;break;case 4:u=1e4;break;default:u=5e3}return u=i+u,e={id:g++,callback:o,priorityLevel:e,startTime:i,expirationTime:u,sortIndex:-1},i>c?(e.sortIndex=i,r(m,e),null===n(p)&&e===n(m)&&(S?(x(D),D=-1):S=!0,j(O,i-c))):(e.sortIndex=u,r(p,e),_||w||(_=!0,U())),e},t.unstable_shouldYield=G,t.unstable_wrapCallback=function(e){var t=v;return function(){var r=v;v=t;try{return e.apply(this,arguments)}finally{v=r}}}},975:(e,t,r)=>{e.exports=r(284)},980:(e,t,r)=>{!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch{}}(),e.exports=r(169)}},E={};function O(e){var t=E[e];if(void 0!==t)return t.exports;var r=E[e]={exports:{}};return T[e](r,r.exports,O),r.exports}O.m=T,O.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return O.d(t,{a:t}),t},O.d=(e,t)=>{for(var r in t)O.o(t,r)&&!O.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},O.f={},O.e=e=>Promise.all(Object.keys(O.f).reduce((t,r)=>(O.f[r](e,t),t),[])),O.u=e=>"lib-billboard.js",O.miniCssF=e=>{},O.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),O.p="#{root}/dist/webviews/",Object.defineProperty(O,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch{return"#{root}/dist/webviews/"}},set:function(e){}}),u={77:0},h=e=>{var t,r,{__webpack_ids__:n,__webpack_modules__:o,__webpack_runtime__:i}=e,c=0;for(t in o)O.o(o,t)&&(O.m[t]=o[t]);for(i&&i(O);c<n.length;c++)r=n[c],O.o(u,r)&&u[r]&&u[r][0](),u[n[c]]=0},O.f.j=(e,t)=>{var r=O.o(u,e)?u[e]:void 0;if(0!==r)if(r)t.push(r[1]);else{var n=import(O.p+"./"+O.u(e)).then(h,t=>{throw 0!==u[e]&&(u[e]=void 0),t}),n=Promise.race([n,new Promise(t=>r=u[e]=[t])]);t.push(r[1]=n)}};let context_request_event_s=class context_request_event_s extends Event{constructor(e,t,r,n){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t,this.callback=r,this.subscribe=n??!1}};let s=class s{constructor(e,t,r,n){(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(e,t)=>{this.unsubscribe&&(this.unsubscribe!==t&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=e,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(e,t)),this.unsubscribe=t},this.host=e,void 0!==t.context)?(this.context=t.context,this.callback=t.callback,this.subscribe=t.subscribe??!1):(this.context=t,this.callback=r,this.subscribe=n??!1),this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new context_request_event_s(this.context,this.host,this.t,this.subscribe))}};let value_notifier_s=class value_notifier_s{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){let r=t||!Object.is(e,this.o);this.o=e,r&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(let[e,{disposer:t}]of this.subscriptions)e(this.o,t)},void 0!==e&&(this.value=e)}addCallback(e,t,r){if(!r)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});let{disposer:n}=this.subscriptions.get(e);e(this.value,n)}clearCallbacks(){this.subscriptions.clear()}};let context_provider_e=class context_provider_e extends Event{constructor(e,t){super("context-provider",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t}};let context_provider_i=class context_provider_i extends value_notifier_s{constructor(e,t,r){super(void 0!==t.context?t.initialValue:r),this.onContextRequest=e=>{if(e.context!==this.context)return;let t=e.contextTarget??e.composedPath()[0];t!==this.host&&(e.stopPropagation(),this.addCallback(e.callback,t,e.subscribe))},this.onProviderRequest=e=>{if(e.context!==this.context||(e.contextTarget??e.composedPath()[0])===this.host)return;let t=new Set;for(let[e,{consumerHost:r}]of this.subscriptions)t.has(e)||(t.add(e),r.dispatchEvent(new context_request_event_s(this.context,r,e,!0)));e.stopPropagation()},this.host=e,void 0!==t.context?this.context=t.context:this.context=t,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new context_provider_e(this.context,this.host))}};function A({context:e}){return(t,r)=>{let n=new WeakMap;if("object"==typeof r)return{get(){return t.get.call(this)},set(e){return n.get(this).setValue(e),t.set.call(this,e)},init(t){return n.set(this,new context_provider_i(this,{context:e,initialValue:t})),t}};{let o;t.constructor.addInitializer(t=>{n.set(t,new context_provider_i(t,{context:e}))});let i=Object.getOwnPropertyDescriptor(t,r);if(void 0===i){let e=new WeakMap;o={get(){return e.get(this)},set(t){n.get(this).setValue(t),e.set(this,t)},configurable:!0,enumerable:!0}}else{let e=i.set;o={...i,set(t){n.get(this).setValue(t),e?.call(this,t)}}}return void Object.defineProperty(t,r,o)}}}function D({context:e,subscribe:t}){return(r,n)=>{"object"==typeof n?n.addInitializer(function(){new s(this,{context:e,callback:e=>{r.set.call(this,e)},subscribe:t})}):r.constructor.addInitializer(r=>{new s(r,{context:e,callback:e=>{r[n]=e},subscribe:t})})}}let $=globalThis,P=$.ShadowRoot&&(void 0===$.ShadyCSS||$.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,G=Symbol(),W=new WeakMap;let css_tag_n=class css_tag_n{constructor(e,t,r){if(this._$cssResult$=!0,r!==G)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(P&&void 0===e){let r=void 0!==t&&1===t.length;r&&(e=W.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&W.set(t,e))}return e}toString(){return this.cssText}};let F=e=>new css_tag_n("string"==typeof e?e:e+"",void 0,G),B=(e,...t)=>new css_tag_n(1===e.length?e[0]:t.reduce((t,r,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[n+1],e[0]),e,G),U=(e,t)=>{if(P)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let r of t){let t=document.createElement("style"),n=$.litNonce;void 0!==n&&t.setAttribute("nonce",n),t.textContent=r.cssText,e.appendChild(t)}},j=P?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return F(t)})(e):e,{is:Z,defineProperty:V,getOwnPropertyDescriptor:q,getOwnPropertyNames:K,getOwnPropertySymbols:Q,getPrototypeOf:X}=Object,J=globalThis,ee=J.trustedTypes,et=ee?ee.emptyScript:"",er=J.reactiveElementPolyfillSupport,en=(e,t)=>e,eo={toAttribute(e,t){switch(t){case Boolean:e=e?et:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},ei=(e,t)=>!Z(e,t),es={attribute:!0,type:String,converter:eo,reflect:!1,useDefault:!1,hasChanged:ei};Symbol.metadata??=Symbol("metadata"),J.litPropertyMetadata??=new WeakMap;let y=class y extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=es){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let r=Symbol(),n=this.getPropertyDescriptor(e,r,t);void 0!==n&&V(this.prototype,e,n)}}static getPropertyDescriptor(e,t,r){let{get:n,set:o}=q(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:n,set(t){let i=n?.call(this);o?.call(this,t),this.requestUpdate(e,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??es}static _$Ei(){if(this.hasOwnProperty(en("elementProperties")))return;let e=X(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(en("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(en("properties"))){let e=this.properties;for(let t of[...K(e),...Q(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,r]of t)this.elementProperties.set(e,r)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let r=this._$Eu(e,t);void 0!==r&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let r of new Set(e.flat(1/0).reverse()))t.unshift(j(r));else void 0!==e&&t.push(j(e));return t}static _$Eu(e,t){let r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return U(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){let r=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,r);if(void 0!==n&&!0===r.reflect){let o=(void 0!==r.converter?.toAttribute?r.converter:eo).toAttribute(t,r.type);this._$Em=e,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(e,t){let r=this.constructor,n=r._$Eh.get(e);if(void 0!==n&&this._$Em!==n){let e=r.getPropertyOptions(n),o="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:eo;this._$Em=n,this[n]=o.fromAttribute(t,e.type)??this._$Ej?.get(n)??null,this._$Em=null}}requestUpdate(e,t,r){if(void 0!==e){let n=this.constructor,o=this[e];if(!(((r??=n.getPropertyOptions(e)).hasChanged??ei)(o,t)||r.useDefault&&r.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,r))))return;this.C(e,t,r)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:n,wrapped:o},i){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,i??t??this[e]),!0!==o||void 0!==i)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),!0===n&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,r]of e){let{wrapped:e}=r,n=this[t];!0!==e||this._$AL.has(t)||void 0===n||this.C(t,void 0,r,n)}}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[en("elementProperties")]=new Map,y[en("finalized")]=new Map,er?.({ReactiveElement:y}),(J.reactiveElementVersions??=[]).push("2.1.0");let ea=globalThis,el=ea.trustedTypes,ec=el?el.createPolicy("lit-html",{createHTML:e=>e}):void 0,eu="$lit$",eh=`lit$${Math.random().toFixed(9).slice(2)}$`,ed="?"+eh,ep=`<${ed}>`,ef=document,em=()=>ef.createComment(""),eg=e=>null===e||"object"!=typeof e&&"function"!=typeof e,eb=Array.isArray,ev=e=>eb(e)||"function"==typeof e?.[Symbol.iterator],ey=`[ 	
\f\r]`,ew=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,e_=/-->/g,eS=/>/g,eC=RegExp(`>|${ey}(?:([^\\s"'>=/]+)(${ey}*=${ey}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ex=/'/g,ek=/"/g,eR=/^(?:script|style|textarea|title)$/i,eT=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),eE=eT(1),eO=eT(2),eM=eT(3),eI=Symbol.for("lit-noChange"),eA=Symbol.for("lit-nothing"),eN=new WeakMap,eD=ef.createTreeWalker(ef,129);function ez(e,t){if(!eb(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==ec?ec.createHTML(t):t}let e$=(e,t)=>{let r=e.length-1,n=[],o,i=2===t?"<svg>":3===t?"<math>":"",c=ew;for(let t=0;t<r;t++){let r=e[t],u,h,d=-1,p=0;for(;p<r.length&&(c.lastIndex=p,null!==(h=c.exec(r)));)p=c.lastIndex,c===ew?"!--"===h[1]?c=e_:void 0!==h[1]?c=eS:void 0!==h[2]?(eR.test(h[2])&&(o=RegExp("</"+h[2],"g")),c=eC):void 0!==h[3]&&(c=eC):c===eC?">"===h[0]?(c=o??ew,d=-1):void 0===h[1]?d=-2:(d=c.lastIndex-h[2].length,u=h[1],c=void 0===h[3]?eC:'"'===h[3]?ek:ex):c===ek||c===ex?c=eC:c===e_||c===eS?c=ew:(c=eC,o=void 0);let m=c===eC&&e[t+1].startsWith("/>")?" ":"";i+=c===ew?r+ep:d>=0?(n.push(u),r.slice(0,d)+eu+r.slice(d)+eh+m):r+eh+(-2===d?t:m)}return[ez(e,i+(e[r]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),n]};let N=class N{constructor({strings:e,_$litType$:t},r){let n;this.parts=[];let o=0,i=0,c=e.length-1,u=this.parts,[h,d]=e$(e,t);if(this.el=N.createElement(h,r),eD.currentNode=this.el.content,2===t||3===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=eD.nextNode())&&u.length<c;){if(1===n.nodeType){if(n.hasAttributes())for(let e of n.getAttributeNames())if(e.endsWith(eu)){let t=d[i++],r=n.getAttribute(e).split(eh),c=/([.?@])?(.*)/.exec(t);u.push({type:1,index:o,name:c[2],strings:r,ctor:"."===c[1]?H:"?"===c[1]?I:"@"===c[1]?L:k}),n.removeAttribute(e)}else e.startsWith(eh)&&(u.push({type:6,index:o}),n.removeAttribute(e));if(eR.test(n.tagName)){let e=n.textContent.split(eh),t=e.length-1;if(t>0){n.textContent=el?el.emptyScript:"";for(let r=0;r<t;r++)n.append(e[r],em()),eD.nextNode(),u.push({type:2,index:++o});n.append(e[t],em())}}}else if(8===n.nodeType)if(n.data===ed)u.push({type:2,index:o});else{let e=-1;for(;-1!==(e=n.data.indexOf(eh,e+1));)u.push({type:7,index:o}),e+=eh.length-1}o++}}static createElement(e,t){let r=ef.createElement("template");return r.innerHTML=e,r}};function eP(e,t,r=e,n){if(t===eI)return t;let o=void 0!==n?r._$Co?.[n]:r._$Cl,i=eg(t)?void 0:t._$litDirective$;return o?.constructor!==i&&(o?._$AO?.(!1),void 0===i?o=void 0:(o=new i(e))._$AT(e,r,n),void 0!==n?(r._$Co??=[])[n]=o:r._$Cl=o),void 0!==o&&(t=eP(e,o._$AS(e,t.values),o,n)),t}let M=class M{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:r}=this._$AD,n=(e?.creationScope??ef).importNode(t,!0);eD.currentNode=n;let o=eD.nextNode(),i=0,c=0,u=r[0];for(;void 0!==u;){if(i===u.index){let t;2===u.type?t=new R(o,o.nextSibling,this,e):1===u.type?t=new u.ctor(o,u.name,u.strings,this,e):6===u.type&&(t=new z(o,this,e)),this._$AV.push(t),u=r[++c]}i!==u?.index&&(o=eD.nextNode(),i++)}return eD.currentNode=ef,n}p(e){let t=0;for(let r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}};let R=class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,n){this.type=2,this._$AH=eA,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){eg(e=eP(this,e,t))?e===eA||null==e||""===e?(this._$AH!==eA&&this._$AR(),this._$AH=eA):e!==this._$AH&&e!==eI&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):ev(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==eA&&eg(this._$AH)?this._$AA.nextSibling.data=e:this.T(ef.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:r}=e,n="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=N.createElement(ez(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===n)this._$AH.p(t);else{let e=new M(n,this),r=e.u(this.options);e.p(t),this.T(r),this._$AH=e}}_$AC(e){let t=eN.get(e.strings);return void 0===t&&eN.set(e.strings,t=new N(e)),t}k(e){eb(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,n=0;for(let o of e)n===t.length?t.push(r=new R(this.O(em()),this.O(em()),this,this.options)):r=t[n],r._$AI(o),n++;n<t.length&&(this._$AR(r&&r._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}};let k=class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,n,o){this.type=1,this._$AH=eA,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=o,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=eA}_$AI(e,t=this,r,n){let o=this.strings,i=!1;if(void 0===o)(i=!eg(e=eP(this,e,t,0))||e!==this._$AH&&e!==eI)&&(this._$AH=e);else{let n,c,u=e;for(e=o[0],n=0;n<o.length-1;n++)(c=eP(this,u[r+n],t,n))===eI&&(c=this._$AH[n]),i||=!eg(c)||c!==this._$AH[n],c===eA?e=eA:e!==eA&&(e+=(c??"")+o[n+1]),this._$AH[n]=c}i&&!n&&this.j(e)}j(e){e===eA?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};let H=class H extends k{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===eA?void 0:e}};let I=class I extends k{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==eA)}};let L=class L extends k{constructor(e,t,r,n,o){super(e,t,r,n,o),this.type=5}_$AI(e,t=this){if((e=eP(this,e,t,0)??eA)===eI)return;let r=this._$AH,n=e===eA&&r!==eA||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==eA&&(r===eA||n);n&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}};let z=class z{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){eP(this,e)}};let eL=ea.litHtmlPolyfillSupport;eL?.(N,R),(ea.litHtmlVersions??=[]).push("3.3.0");let eH=(e,t,r)=>{let n=r?.renderBefore??t,o=n._$litPart$;if(void 0===o){let e=r?.renderBefore??null;n._$litPart$=o=new R(t.insertBefore(em(),e),e,void 0,r??{})}return o._$AI(e),o},eG=globalThis;let lit_element_i=class lit_element_i extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=eH(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return eI}};lit_element_i._$litElement$=!0,lit_element_i.finalized=!0,eG.litElementHydrateSupport?.({LitElement:lit_element_i});let eW=eG.litElementPolyfillSupport;eW?.({LitElement:lit_element_i}),(eG.litElementVersions??=[]).push("4.2.0");let eF=e=>(t,r)=>{void 0!==r?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},eB={attribute:!0,type:String,converter:eo,reflect:!1,hasChanged:ei},eU=(e=eB,t,r)=>{let{kind:n,metadata:o}=r,i=globalThis.litPropertyMetadata.get(o);if(void 0===i&&globalThis.litPropertyMetadata.set(o,i=new Map),"setter"===n&&((e=Object.create(e)).wrapped=!0),i.set(r.name,e),"accessor"===n){let{name:n}=r;return{set(r){let o=t.get.call(this);t.set.call(this,r),this.requestUpdate(n,o,e)},init(t){return void 0!==t&&this.C(n,void 0,e,t),t}}}if("setter"===n){let{name:n}=r;return function(r){let o=this[n];t.call(this,r),this.requestUpdate(n,o,e)}}throw Error("Unsupported decorator location: "+n)};function ej(e){return(t,r)=>"object"==typeof r?eU(e,t,r):((e,t,r)=>{let n=t.hasOwnProperty(r);return t.constructor.createProperty(r,e),n?Object.getOwnPropertyDescriptor(t,r):void 0})(e,t,r)}function eZ(e){return ej({...e,state:!0,attribute:!1})}let eV=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,r),r);function eq(e,t){return(r,n,o)=>{let i=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}="object"==typeof n?r:o??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return eV(r,n,{get(){let r=e.call(this);return void 0===r&&(null!==(r=i(this))||this.hasUpdated)&&t.call(this,r),r}})}return eV(r,n,{get(){return i(this)}})}}function eY(e){return(t,r)=>{let{slot:n,selector:o}=e??{},i="slot"+(n?`[name=${n}]`:":not([name])");return eV(t,r,{get(){let t=this.renderRoot?.querySelector(i),r=t?.assignedElements(e)??[];return void 0===o?r:r.filter(e=>e.matches(o))}})}}var eK=((d=eK||{})[d.Hash=35]="Hash",d[d.Slash=47]="Slash",d[d.Digit0=48]="Digit0",d[d.Digit1=49]="Digit1",d[d.Digit2=50]="Digit2",d[d.Digit3=51]="Digit3",d[d.Digit4=52]="Digit4",d[d.Digit5=53]="Digit5",d[d.Digit6=54]="Digit6",d[d.Digit7=55]="Digit7",d[d.Digit8=56]="Digit8",d[d.Digit9=57]="Digit9",d[d.Backslash=92]="Backslash",d[d.A=65]="A",d[d.B=66]="B",d[d.C=67]="C",d[d.D=68]="D",d[d.E=69]="E",d[d.F=70]="F",d[d.Z=90]="Z",d[d.a=97]="a",d[d.b=98]="b",d[d.c=99]="c",d[d.d=100]="d",d[d.e=101]="e",d[d.f=102]="f",d[d.z=122]="z",d),eQ=((p=eQ||{}).AngleBracketLeftHeavy="❰",p.AngleBracketRightHeavy="❱",p.ArrowBack="↩",p.ArrowDown="↓",p.ArrowDownUp="⇵",p.ArrowDropRight="⤷",p.ArrowHeadRight="➤",p.ArrowLeft="←",p.ArrowLeftDouble="⇐",p.ArrowLeftRight="↔",p.ArrowLeftRightDouble="⇔",p.ArrowLeftRightDoubleStrike="⇎",p.ArrowLeftRightLong="⟷",p.ArrowRight="→",p.ArrowRightDouble="⇒",p.ArrowRightHollow="⇨",p.ArrowUp="↑",p.ArrowUpDown="⇅",p.ArrowUpRight="↗",p.ArrowsHalfLeftRight="⇋",p.ArrowsHalfRightLeft="⇌",p.ArrowsLeftRight="⇆",p.ArrowsRightLeft="⇄",p.Asterisk="∗",p.Bullseye="◎",p.Check="✔",p.Dash="—",p.Dot="•",p.Ellipsis="…",p.EnDash="–",p.Envelope="✉",p.EqualsTriple="≡",p.Flag="⚑",p.FlagHollow="⚐",p.MiddleEllipsis="⋯",p.MuchLessThan="≪",p.MuchGreaterThan="≫",p.Pencil="✎",p.Space=" ",p.SpaceThin=" ",p.SpaceThinnest=" ",p.SquareWithBottomShadow="❏",p.SquareWithTopShadow="❐",p.Warning="⚠",p.ZeroWidthSpace="​",p);Object.freeze({".png":"image/png",".gif":"image/gif",".jpg":"image/jpeg",".jpeg":"image/jpeg",".jpe":"image/jpeg",".webp":"image/webp",".tif":"image/tiff",".tiff":"image/tiff",".bmp":"image/bmp"}),Object.freeze(["left","alt+left","ctrl+left","right","alt+right","ctrl+right","alt+,","alt+.","alt+enter","ctrl+enter","escape"]);var eX=((m=eX||{}).File="file",m.Git="git",m.GitHub="github",m.GitLens="gitlens",m.PRs="pr",m.Remote="vscode-remote",m.Vsls="vsls",m.VslsScc="vsls-scc",m.Virtual="vscode-vfs",m);Object.freeze(new Set(["file","git","gitlens","pr","vscode-remote","vsls","vsls-scc","vscode-vfs","github"]));let eJ="source=gitlens&product=gitlens&utm_source=gitlens-extension&utm_medium=in-app-links",e0=Object.freeze({codeSuggest:`https://gitkraken.com/solutions/code-suggest?${eJ}`,cloudPatches:`https://gitkraken.com/solutions/cloud-patches?${eJ}`,graph:`https://gitkraken.com/solutions/commit-graph?${eJ}`,launchpad:`https://gitkraken.com/solutions/launchpad?${eJ}`,platform:`https://gitkraken.com/devex?${eJ}`,pricing:`https://gitkraken.com/gitlens/pricing?${eJ}`,proFeatures:`https://gitkraken.com/gitlens/pro-features?${eJ}`,security:`https://help.gitkraken.com/gitlens/security?${eJ}`,workspaces:`https://gitkraken.com/solutions/workspaces?${eJ}`,cli:`https://gitkraken.com/cli?${eJ}`,browserExtension:`https://gitkraken.com/browser-extension?${eJ}`,desktop:`https://gitkraken.com/git-client?${eJ}`,githubIssues:`https://github.com/gitkraken/vscode-gitlens/issues/?${eJ}`,githubDiscussions:`https://github.com/gitkraken/vscode-gitlens/discussions/?${eJ}`,helpCenter:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${eJ}`,helpCenterHome:`https://help.gitkraken.com/gitlens/home-view/?${eJ}`,releaseNotes:`https://help.gitkraken.com/gitlens/gitlens-release-notes-current/?${eJ}`,acceleratePrReviews:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${eJ}#accelerate-pr-reviews`,communityVsPro:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${eJ}`,homeView:`https://help.gitkraken.com/gitlens/home-view/?${eJ}&utm_campaign=walkthrough`,interactiveCodeHistory:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${eJ}#interactive-code-history`,startIntegrations:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${eJ}#improve-workflows-with-integrations`,streamlineCollaboration:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${eJ}#streamline-collaboration`,aiFeatures:`https://help.gitkraken.com/gitlens/gl-gk-ai/?${eJ}`});function e1(e,t){let r=Math.pow(10,t);return Math.round(e*r)/r}let RGBA=class RGBA{constructor(e,t,r,n=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,r)),this.a=e1(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}};let HSLA=class HSLA{constructor(e,t,r,n){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=e1(Math.max(Math.min(1,t),0),3),this.l=e1(Math.max(Math.min(1,r),0),3),this.a=e1(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){let t=e.r/255,r=e.g/255,n=e.b/255,o=e.a,i=Math.max(t,r,n),c=Math.min(t,r,n),u=0,h=0,d=(c+i)/2,p=i-c;if(p>0){switch(h=Math.min(d<=.5?p/(2*d):p/(2-2*d),1),i){case t:u=(r-n)/p+6*(r<n);break;case r:u=(n-t)/p+2;break;case n:u=(t-r)/p+4}u*=60,u=Math.round(u)}return new HSLA(u,h,d,o)}static _hue2rgb(e,t,r){return(r<0&&(r+=1),r>1&&(r-=1),r<1/6)?e+(t-e)*6*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}static toRGBA(e){let t,r,n,o=e.h/360,{s:i,l:c,a:u}=e;if(0===i)t=r=n=c;else{let e=c<.5?c*(1+i):c+i-c*i,u=2*c-e;t=HSLA._hue2rgb(u,e,o+1/3),r=HSLA._hue2rgb(u,e,o),n=HSLA._hue2rgb(u,e,o-1/3)}return new RGBA(Math.round(255*t),Math.round(255*r),Math.round(255*n),u)}};let HSVA=class HSVA{constructor(e,t,r,n){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=e1(Math.max(Math.min(1,t),0),3),this.v=e1(Math.max(Math.min(1,r),0),3),this.a=e1(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){let t,r=e.r/255,n=e.g/255,o=e.b/255,i=Math.max(r,n,o),c=i-Math.min(r,n,o);return new HSVA(Math.round(60*(0===c?0:i===r?((n-o)/c%6+6)%6:i===n?(o-r)/c+2:(r-n)/c+4)),0===i?0:c/i,i,e.a)}static toRGBA(e){let{h:t,s:r,v:n,a:o}=e,i=n*r,c=i*(1-Math.abs(t/60%2-1)),u=n-i,[h,d,p]=[0,0,0];return t<60?(h=i,d=c):t<120?(h=c,d=i):t<180?(d=i,p=c):t<240?(d=c,p=i):t<300?(h=c,p=i):t<=360&&(h=i,p=c),new RGBA(h=Math.round((h+u)*255),d=Math.round((d+u)*255),p=Math.round((p+u)*255),o)}};function e2(e,t){return t.getPropertyValue(e).trim()}let Color=class Color{static from(e){return e instanceof Color?e:e6(e)||Color.red}static fromCssVariable(e,t){return e6(e2(e,t))||Color.red}static fromHex(e){return e4(e)||Color.red}static equals(e,t){return!e&&!t||!!e&&!!t&&e.equals(t)}get hsla(){return this._hsla?this._hsla:HSLA.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:HSVA.fromRGBA(this.rgba)}constructor(e){if(e)if(e instanceof RGBA)this.rgba=e;else if(e instanceof HSLA)this._hsla=e,this.rgba=HSLA.toRGBA(e);else if(e instanceof HSVA)this._hsva=e,this.rgba=HSVA.toRGBA(e);else throw Error("Invalid color ctor argument");else throw Error("Color needs a value")}equals(e){return null!=e&&!!e&&RGBA.equals(this.rgba,e.rgba)&&HSLA.equals(this.hsla,e.hsla)&&HSVA.equals(this.hsva,e.hsva)}getRelativeLuminance(){let e=Color._relativeLuminanceForComponent(this.rgba.r),t=Color._relativeLuminanceForComponent(this.rgba.g);return e1(.2126*e+.7152*t+.0722*Color._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){let t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return function(e,t){if(0===t)return new Color(new RGBA(0,0,0,e.rgba.a));if(1===t)return new Color(new RGBA(255,255,255,e.rgba.a));let r=e.getRelativeLuminance(),n=20,o=(e,r)=>{let i=e.mix(r,.5),c=i.getRelativeLuminance();return!(1e-7>Math.abs(t-c))&&n--?c>t?o(e,i):o(i,r):i},i=(r>t?o(Color.black,e):o(e,Color.white)).rgba;return new Color(new RGBA(i.r,i.g,i.b,e.rgba.a))}(this,e)}getContrastRatio(e){let t=this.getRelativeLuminance(),r=e.getRelativeLuminance();return t>r?(t+.05)/(r+.05):(r+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(e){return new Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*e,this.hsla.a))}darken(e){return new Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*e,this.hsla.a))}transparent(e){let{r:t,g:r,b:n,a:o}=this.rgba;return new Color(new RGBA(t,r,n,o*e))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new Color(new RGBA(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(e){let t=e.rgba,r=this.rgba.a,n=t.a,o=r+n*(1-r);if(o<1e-6)return Color.transparent;let i=this.rgba.r*r/o+t.r*n*(1-r)/o;return new Color(new RGBA(i,this.rgba.g*r/o+t.g*n*(1-r)/o,this.rgba.b*r/o+t.b*n*(1-r)/o,o))}mix(e,t){let r=this.rgba,n=e.rgba;return new Color(new RGBA(r.r+t*(n.r-r.r),r.g+t*(n.g-r.g),r.b+t*(n.b-r.b),r.a+t*(n.a-r.a)))}makeOpaque(e){if(this.isOpaque()||1!==e.rgba.a)return this;let{r:t,g:r,b:n,a:o}=this.rgba;return new Color(new RGBA(e.rgba.r-o*(e.rgba.r-t),e.rgba.g-o*(e.rgba.g-r),e.rgba.b-o*(e.rgba.b-n),1))}flatten(...e){let t=e.reduceRight((e,t)=>Color._flatten(t,e));return Color._flatten(this,t)}static _flatten(e,t){let r=1-e.rgba.a;return new Color(new RGBA(r*t.rgba.r+e.rgba.a*e.rgba.r,r*t.rgba.g+e.rgba.a*e.rgba.g,r*t.rgba.b+e.rgba.a*e.rgba.b))}toString(){return this._toString||(this._toString=function(e){return e.isOpaque()?`#${e5(e.rgba.r)}${e5(e.rgba.g)}${e5(e.rgba.b)}`:`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`}(this)),this._toString}static getLighterColor(e,t,r){if(e.isLighterThan(t))return e;r=r||.5;let n=e.getRelativeLuminance(),o=t.getRelativeLuminance();return r=r*(o-n)/o,e.lighten(r)}static getDarkerColor(e,t,r){if(e.isDarkerThan(t))return e;r=r||.5;let n=e.getRelativeLuminance(),o=t.getRelativeLuminance();return r=r*(n-o)/n,e.darken(r)}static{this.white=new Color(new RGBA(255,255,255,1))}static{this.black=new Color(new RGBA(0,0,0,1))}static{this.red=new Color(new RGBA(255,0,0,1))}static{this.blue=new Color(new RGBA(0,0,255,1))}static{this.green=new Color(new RGBA(0,255,0,1))}static{this.cyan=new Color(new RGBA(0,255,255,1))}static{this.lightgrey=new Color(new RGBA(211,211,211,1))}static{this.transparent=new Color(new RGBA(0,0,0,0))}};function e5(e){let t=e.toString(16);return 2!==t.length?`0${t}`:t}let e3=/^((?:rgb|hsl)a?)\((-?\d+(?:%|deg)?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d.]+%?)?\)$/i;function e6(e){let t;if(0===(e=e.trim()).length)return null;if(e.charCodeAt(0)===eK.Hash)return e4(e);let r=e3.exec(e);if(null==r)return null;let n=r[1];switch(n){case"rgb":case"hsl":t=[parseInt(r[2],10),parseInt(r[3],10),parseInt(r[4],10),1];break;case"rgba":case"hsla":t=[parseInt(r[2],10),parseInt(r[3],10),parseInt(r[4],10),parseFloat(r[5])];break;default:return null}switch(n){case"rgb":case"rgba":return new Color(new RGBA(t[0],t[1],t[2],t[3]));case"hsl":case"hsla":return new Color(new HSLA(t[0],t[1],t[2],t[3]))}return Color.red}function e4(e){let t=(e=e.trim()).length;if(0===t||e.charCodeAt(0)!==eK.Hash)return null;switch(t){case 7:{let t=16*e8(e.charCodeAt(1))+e8(e.charCodeAt(2));return new Color(new RGBA(t,16*e8(e.charCodeAt(3))+e8(e.charCodeAt(4)),16*e8(e.charCodeAt(5))+e8(e.charCodeAt(6)),1))}case 9:{let t=16*e8(e.charCodeAt(1))+e8(e.charCodeAt(2)),r=16*e8(e.charCodeAt(3))+e8(e.charCodeAt(4));return new Color(new RGBA(t,r,16*e8(e.charCodeAt(5))+e8(e.charCodeAt(6)),(16*e8(e.charCodeAt(7))+e8(e.charCodeAt(8)))/255))}case 4:{let t=e8(e.charCodeAt(1)),r=e8(e.charCodeAt(2)),n=e8(e.charCodeAt(3));return new Color(new RGBA(16*t+t,16*r+r,16*n+n))}case 5:{let t=e8(e.charCodeAt(1)),r=e8(e.charCodeAt(2)),n=e8(e.charCodeAt(3)),o=e8(e.charCodeAt(4));return new Color(new RGBA(16*t+t,16*r+r,16*n+n,(16*o+o)/255))}default:return null}}function e8(e){switch(e){case eK.Digit0:break;case eK.Digit1:return 1;case eK.Digit2:return 2;case eK.Digit3:return 3;case eK.Digit4:return 4;case eK.Digit5:return 5;case eK.Digit6:return 6;case eK.Digit7:return 7;case eK.Digit8:return 8;case eK.Digit9:return 9;case eK.a:case eK.A:return 10;case eK.b:case eK.B:return 11;case eK.c:case eK.C:return 12;case eK.d:case eK.D:return 13;case eK.e:case eK.E:return 14;case eK.f:case eK.F:return 15}return 0}function e9(e,t,r){let n,o,i,c,u,h,d,p,m,g,b=0;null!=r&&({edges:h,maxWait:d,signal:p,aggregator:m}=r);let v="leading"===(h??="trailing")||"both"===h,w="trailing"===h||"both"===h;function _(){if(null!=n){b=Date.now();let t=n,r=g;return g=void 0,n=void 0,i=e.apply(r,t)}}function S(){null!=c&&(clearTimeout(c),c=void 0)}function C(){null!=u&&(clearTimeout(u),u=void 0)}function x(){S(),C(),g=void 0,n=void 0,o=void 0,b=0}function T(...e){if(p?.aborted)return;let r=Date.now();null!=m&&null!=n?n=m(n,e):(g=this,n=e);let h=null==c&&null==u;o=r,S();let C=Date.now();if(o=C,c=setTimeout(()=>{c=void 0,function(e){let r=e-(o??0),n=e-b;return null==o||r>=t||r<0||null!=d&&n>=d}(Date.now())&&w&&_(),x()},t),null!=d&&!u){let e=d-(C-b);e>0?u=setTimeout(()=>{u=void 0,w&&null!=n&&_(),b=Date.now()},e):(w&&null!=n&&_(),x())}return v&&h?_():i}return T.cancel=x,T.flush=function(){return S(),C(),_()},T.pending=function(){return null!=c||null!=u},p?.addEventListener("abort",x,{once:!0}),T}let IpcCall=class IpcCall{constructor(e,t,r=!1,n=!1){this.scope=e,this.reset=r,this.pack=n,this.method=`${e}/${t}`}is(e){return e.method===this.method}};let IpcCommand=class IpcCommand extends IpcCall{};let IpcRequest=class IpcRequest extends IpcCall{constructor(e,t,r,n){super(e,t,r,n),this.response=new IpcNotification(this.scope,`${t}/completion`,this.reset,this.pack)}};let IpcNotification=class IpcNotification extends IpcCall{};let e7=new IpcCommand("core","webview/ready"),te=new IpcCommand("core","webview/focus/changed");new IpcCommand("core","command/execute");let tt=new IpcRequest("core","promos/applicable");new IpcCommand("core","configuration/update");let tr=new IpcCommand("core","telemetry/sendEvent"),tn=new IpcNotification("core","ipc/promise/settled"),to=new IpcNotification("core","window/focus/didChange"),ti=new IpcCommand("core","webview/focus/didChange"),ts=new IpcNotification("core","webview/visibility/didChange");new IpcNotification("core","configuration/didChange");let ta=new WeakMap;function tl(e,t){return function(r,n,o){let i=ta.get(r.constructor);null==i&&ta.set(r.constructor,i=[]),i.push({method:o.value,keys:Array.isArray(e)?e:[e],afterFirstUpdate:t?.afterFirstUpdate??!1})}}let GlElement=class GlElement extends lit_element_i{emit(e,t,r){let n=new CustomEvent(e,{bubbles:!0,cancelable:!1,composed:!0,...r,detail:t});return this.dispatchEvent(n),n}update(e){let t=ta.get(this.constructor);if(null!=t)for(let{keys:r,method:n,afterFirstUpdate:o}of t){if(o&&!this.hasUpdated)continue;let t=r.filter(t=>e.has(t));t.length&&n.call(this,t)}super.update(e)}};function tc(e){let t=.001*performance.now(),r=Math.floor(t),n=Math.floor(t%1*1e9);return void 0!==e&&(r-=e[0],(n-=e[1])<0&&(r--,n+=1e9)),[r,n]}O(47);let tu=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,th=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,td=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]],tp=new Map,tf=new Map;function tm(o,i){let c=("number"==typeof o?o:o.getTime())-new Date().getTime();for(let[o,u,h,d]of td){let p=Math.abs(c);if(p>=u||1e3===u){if(i){if(null==e&&(e=null!=n?n.resolvedOptions().locale:null!=r?r.resolvedOptions().locale:(n=new Intl.RelativeTimeFormat(t,{localeMatcher:"best fit",numeric:"always",style:"narrow"})).resolvedOptions().locale),"en"===e||e?.startsWith("en-")){let e=Math.round(p/h);return`${e}${d}`}return null==n&&(n=new Intl.RelativeTimeFormat(t,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),n.format(Math.round(c/h),o)}return null==r&&(r=new Intl.RelativeTimeFormat(t,{localeMatcher:"best fit",numeric:"auto",style:"long"})),r.format(Math.round(c/h),o)}}return""}function tg(e,r,n,o=!0){r=r??void 0;let i=`${n??""}:${r}`,c=tp.get(i);if(null==c){let e,u=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};let t=th.exec(e);if(t?.groups!=null){let{dateStyle:e,timeStyle:r}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:r||void 0}}let r={localeMatcher:"best fit"};for(let{groups:t}of e.matchAll(tu))if(null!=t){for(let[e,n]of Object.entries(t))if(null!=n)switch(e){case"year":r.year=4===n.length?"numeric":"2-digit";break;case"month":switch(n.length){case 4:r.month="long";break;case 3:r.month="short";break;case 2:r.month="2-digit";break;case 1:r.month="numeric"}break;case"day":"DD"===n?r.day="2-digit":r.day="numeric";break;case"weekday":switch(n.length){case 4:r.weekday="long";break;case 3:r.weekday="short";break;case 2:r.weekday="narrow"}break;case"hour":r.hour=2===n.length?"2-digit":"numeric",r.hour12="hh"===n||"h"===n;break;case"minute":r.minute=2===n.length?"2-digit":"numeric";break;case"second":r.second=2===n.length?"2-digit":"numeric";break;case"fractionalSecond":r.fractionalSecondDigits=3;break;case"dayPeriod":r.dayPeriod="narrow",r.hour12=!0,r.hourCycle="h12";break;case"timeZoneName":r.timeZoneName=2===n.length?"long":"short"}}return r}(r);e=null==n?t:"system"===n?void 0:[n],c=new Intl.DateTimeFormat(e,u),o&&tp.set(i,c)}if(null==r||th.test(r))return c.format(e);let u=c.formatToParts(e);return r.replace(tu,(r,i,c,h,d,p,m,g,b,v,w,_,S,C,x)=>{if(null!=i)return i.substring(1,i.length-1);for(let[r,i]of Object.entries(x)){if(null==i)continue;let c=u.find(e=>e.type===r);if("Do"===i&&c?.type==="day"){var T=Number(c.value);let e=T%100;return`${T}${tb[(e-20)%10]??tb[e]??tb[0]}`}if("a"===i&&c?.type==="dayPeriod"){let r=(function(e){let r=`${n??""}:time:${e}`,i=tp.get(r);if(null==i){let c;c=null==n?t:"system"===n?void 0:[n],i=new Intl.DateTimeFormat(c,{localeMatcher:"best fit",timeStyle:e}),o&&tp.set(r,i)}return i})("short").formatToParts(e).find(e=>"dayPeriod"===e.type);return` ${(r??c)?.value??""}`}return c?.value??""}return""})}let tb=["th","st","nd","rd"];function tv(e,r){null==e&&(e="decimal");let n=`${r??""}:${e}`,o=tf.get(n);if(null==o){let i,c={localeMatcher:"best fit",style:e};i=null==r?t:"system"===r?void 0:[r],o=new Intl.NumberFormat(i,c),tf.set(n,o)}return o.format}let{fromCharCode:ty}=String;function tw(e){return`${e[0].toLocaleUpperCase()}${e.slice(1)}`}function t_(e){let[t,r]=tc(e);return 1e3*t+Math.floor(r/1e6)}function tS(e,t,r){let n;if(null==r)return o??=tv(),`${o(t)} ${e}${1===t?"":"s"}`;let i=1===t?e:r.plural??`${e}s`;return r.only?i:(0===t?n=r.zero??t:!1===r.format?n=t:null!=r.format?n=r.format(t):(o??=tv(),n=o(t)),`${n}${r.infix??" "}${i}`)}new TextEncoder,new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,62,0,0,0,63,52,53,54,55,56,57,58,59,60,61,0,0,0,64,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,0,0,0,0,0,0,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51]);var tC=((g=tC||{})[g.Off=0]="Off",g[g.Error=1]="Error",g[g.Warn=2]="Warn",g[g.Info=3]="Info",g[g.Debug=4]="Debug",g);let tx=["accessToken","password","token"],tk=new class Logger2{constructor(){this._isDebugging=!1,this.level=0,this._logLevel="off"}configure(e,t,r=!1){if(null!=e.sanitizeKeys)for(let t of tx)e.sanitizeKeys.add(t);else e.sanitizeKeys=new Set(tx);this.provider=e,this._isDebugging=r,this.logLevel=t}enabled(e){return this.level>=tR(e)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=tR(this._logLevel),"off"===e?(this.output?.dispose?.(),this.output=void 0):this.output??=this.provider.createChannel(this.provider.name)}get timestamp(){return`[${new Date().toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){let r;(!(this.level<4)||this.isDebugging)&&("string"==typeof e?r=e:(r=t.shift(),null!=e&&(r=`${e.prefix} ${r??""}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${r??""}${this.toLoggableParams(!0,t)}`))}error(e,t,...r){let n;if(!(this.level<1)||this.isDebugging){if(null==(n=null==t||"string"==typeof t?t:`${t.prefix} ${r.shift()??""}`)){let t=e instanceof Error?e.stack:void 0;if(t){let e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(n=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${n??""}${this.toLoggableParams(!1,r)}${null!=e?`
${String(e)}`:""}`)}}log(e,...t){let r;(!(this.level<3)||this.isDebugging)&&("string"==typeof e?r=e:(r=t.shift(),null!=e&&(r=`${e.prefix} ${r??""}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${r??""}${this.toLoggableParams(!1,t)}`))}warn(e,...t){let r;(!(this.level<2)||this.isDebugging)&&("string"==typeof e?r=e:(r=t.shift(),null!=e&&(r=`${e.prefix} ${r??""}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${r??""}${this.toLoggableParams(!1,t)}`))}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);if(Array.isArray(e))return`[${e.map(e=>this.toLoggable(e,t)).join(", ")}]`;let r=this.provider.toLoggable?.(e);if(null!=r)return r;try{return JSON.stringify(e,(e,r)=>this.provider.sanitizeKeys.has(e)?`<${e}>`:(null!=t&&(r=t(e,r)),this.provider?.sanitizer!=null&&(r=this.provider.sanitizer(e,r)),r))}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return"";let r=t.map(e=>this.toLoggable(e)).join(", ");return 0!==r.length?` \u2014 ${r}`:""}};function tR(e){switch(e){case"off":default:return 0;case"error":return 1;case"warn":return 2;case"info":return 3;case"debug":return 4}}let tT=new WeakMap,tE={enabled:e=>tk.enabled(e)||tk.isDebugging,log:(e,t,r,...n)=>{switch(e){case"error":tk.error(void 0,t,r,...n);break;case"warn":tk.warn(t,r,...n);break;case"info":tk.log(t,r,...n);break;default:tk.debug(t,r,...n)}}},tO=0x40000000-1;function tM(){let e=0;return{get current(){return e},next:function(){return e===tO&&(e=0),++e},reset:function(){e=0}}}let tI=tM(),tA=new Map;function tN(e,t){return null==t?`[${e.toString(16).padStart(13)}]`:`[${t.toString(16).padStart(5)} \u2192 ${e.toString(16).padStart(5)}]`}function tD(){return tA.get(tI.current)}function tz(e,t){if(null!=t&&"boolean"!=typeof t)return{scopeId:t.scopeId,prevScopeId:t.prevScopeId,prefix:`${t.prefix}${e}`};let r=t?tI.current:void 0,n=tI.next();return{scopeId:n,prevScopeId:r,prefix:`${tN(n,r)} ${e}`}}let LoggerContext=class LoggerContext{constructor(e){this.scope=tz(e,void 0),tk.configure({name:e,createChannel:function(e){return{name:e,appendLine:tk.isDebugging?function(){}:function(e){}}}},"off",!1)}log(e,...t){"string"==typeof e?tk.log(this.scope,e,...t):tk.log(e,t.shift(),...t)}};let PromosContext=class PromosContext{constructor(e){this.disposables=[],this._promos=new Map,this.ipc=e}async getApplicablePromo(e){let t=this._promos.get(e);return null==t&&(t=this.ipc.sendRequest(tt,{location:e}).then(e=>e.promo,()=>void 0),this._promos.set(e,t)),await t}dispose(){this.disposables.forEach(e=>e.dispose())}};let TelemetryContext=class TelemetryContext{constructor(e){this.disposables=[],this.ipc=e}sendEvent(e){this.ipc.sendCommand(tr,e)}dispose(){this.disposables.forEach(e=>e.dispose())}};let t$=/\(([\s\S]*)\)/,tP=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,tL=/\s?=.*$/;function tH(e,t){return e?.status==="fulfilled"?e.value:t}function tG(e){return null!=e&&(e instanceof Promise||"function"==typeof e?.then)}function tW(e){return function(e,t=!1){let r,n,o,i,c,u=0,h=!1,d=!1,p=!0;null!=e&&({args:r,if:n,enter:o,exit:i,prefix:c,logThreshold:u=0,scoped:h=!0,singleLine:d=!1,timed:p=!0}=e),u>0&&(d=!0,p=!0),p&&(h=!0);let m=tk.isDebugging,g=t?tk.debug:tk.log,b=m?"debug":"info";return(e,t,v)=>{let w,_;if("function"==typeof v.value?(w=v.value,_="value"):"function"==typeof v.get&&(w=v.get,_="get"),null==w||null==_)throw Error("Not supported");let S=!1!==r?function(e){if("function"!=typeof e)throw Error("Not supported");if(0===e.length)return[];let t=Function.prototype.toString.call(e),r=(t=(t=t.replace(tP,"")||t).slice(0,t.indexOf("{"))).indexOf("("),n=t.indexOf(")");r=r>=0?r+1:0,n=n>0?n:t.indexOf("="),t=t.slice(r,n),t=`(${t})`;let o=t$.exec(t);return null!=o?o[1].split(",").map(e=>e.trim().replace(tL,"")):[]}(w):[];v[_]=function(...e){var v;let _,C;if(!m&&!tk.enabled(b)||null!=n&&!n.apply(this,e))return w.apply(this,e);let x=tI.current,T=tI.next(),E=this!=null?function(e){let t;if("function"==typeof e){if(null==(t=e.prototype?.constructor))return e.name}else t=e.constructor;let r=t?.name??"",n=r.indexOf("_");-1!==n&&(r=r.substring(n+1));let o=tT.get(t);return o?.(e,r)??r}(this):void 0,O=E?h?`${tN(T,x)} ${E}.${t}`:`${E}.${t}`:t;null!=c&&(O=c({id:T,instance:this,instanceName:E??"",name:t,prefix:O},...e)),h&&(v={scopeId:T,prevScopeId:x,prefix:O},v={prevScopeId:tI.current,...v},tA.set(T,v),_=v);let A=null!=o?o(...e):"";if(!1===r||0===e.length)C="",d||g.call(tk,`${O}${A}`);else{let t,n,o,i;C="";let c=-1;for(i of e){if(n=S[++c],null!=(t=r?.[c])){if("boolean"==typeof t)continue;if(C.length>0&&(C+=", "),"string"==typeof t){C+=t;continue}o=String(t(i))}else C.length>0&&(C+=", "),o=tk.toLoggable(i);C+=n?`${n}=${o}`:o}d||g.call(tk,C?`${O}${A}(${C})`:`${O}${A}`)}if(d||p||null!=i){let t,r=p?tc():void 0,n=e=>{let t=void 0!==r?` [${t_(r)}ms]`:"";d?tk.error(e,C?`${O}${A}(${C})`:`${O}${A}`,_?.exitDetails?`failed${_.exitDetails}${t}`:`failed${t}`):tk.error(e,O,_?.exitDetails?`failed${_.exitDetails}${t}`:`failed${t}`),h&&tA.delete(T)};try{t=w.apply(this,e)}catch(e){throw n(e),e}let o=e=>{let t,n,o,c;if(null!=r?(t=t_(r))>500?(n=tk.warn,o=` [*${t}ms] (slow)`):(n=g,o=` [${t}ms]`):(o="",n=g),null!=i)if("function"==typeof i)try{c=i(e)}catch(e){c=`@log.exit error: ${e}`}else!0===i&&(c=`returned ${tk.toLoggable(e)}`);else _?.exitFailed?(c=_.exitFailed,n=(e,...t)=>tk.error(null,e,...t)):c="completed";d?(0===u||t>u)&&n.call(tk,C?`${O}${A}(${C}) ${c}${_?.exitDetails||""}${o}`:`${O}${A} ${c}${_?.exitDetails||""}${o}`):n.call(tk,C?`${O}(${C}) ${c}${_?.exitDetails||""}${o}`:`${O} ${c}${_?.exitDetails||""}${o}`),h&&tA.delete(T)};return null!=t&&tG(t)?t.then(o,n):o(t),t}return w.apply(this,e)}}}(e,!0)}Symbol.dispose??=Symbol("Symbol.dispose"),Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");let Stopwatch=class Stopwatch{constructor(e,t,...r){let n;if(this._stopped=!1,this.logScope=null!=e&&"string"!=typeof e?e:tz(e??"",!1),n="boolean"==typeof t?.log?t.log?{}:void 0:t?.log??{},this.logLevel=t?.logLevel??"info",this.logProvider=t?.provider??tE,this._time=tc(),null!=n){if(!this.logProvider.enabled(this.logLevel))return;r.length?this.logProvider.log(this.logLevel,this.logScope,`${n.message??""}${n.suffix??""}`,...r):this.logProvider.log(this.logLevel,this.logScope,`${n.message??""}${n.suffix??""}`)}}get startTime(){return this._time}[Symbol.dispose](){this.stop()}elapsed(){let[e,t]=tc(this._time);return 1e3*e+Math.floor(t/1e6)}log(e){this.logCore(e,!1)}restart(e){this.logCore(e,!0),this._time=tc(),this._stopped=!1}stop(e){this._stopped||(this.restart(e),this._stopped=!0)}logCore(e,t){if(!this.logProvider.enabled(this.logLevel))return;if(!t)return void this.logProvider.log(this.logLevel,this.logScope,`${e?.message??""}${e?.suffix??""}`);let[r,n]=tc(this._time),o=1e3*r+Math.floor(n/1e6),i=e?.message??"";this.logProvider.log(o>250?"warn":this.logLevel,this.logScope,`${i?`${i} `:""}[${o}ms]${e?.suffix??""}`)}};function tF(e){return(e=e.toString().toLowerCase()).includes("ms")?parseFloat(e):e.includes("s")?1e3*parseFloat(e):parseFloat(e)}function tB(e,t){return new Promise(r=>{e.addEventListener(t,function n(o){o.target===e&&(e.removeEventListener(t,n),r())})})}(_||(_={})).on=function(e,t,r,n){let o=!1;if("string"==typeof e){let i=function(t){let n=t?.target?.closest(e);null!=n&&r(t,n)};return document.addEventListener(t,i,n??!0),{dispose:()=>{o||(o=!0,document.removeEventListener(t,i,n??!0))}}}let i=function(e){r(e,this)};return e.addEventListener(t,i,n??!1),{dispose:()=>{o||(o=!0,e.removeEventListener(t,i,n??!1))}}};let Emitter=class Emitter{constructor(){this._disposed=!1}static{this._noop=function(){}}get event(){return null==this._event&&(this._event=(e,t,r)=>{null==this.listeners&&(this.listeners=new LinkedList);let n=this.listeners.push(null==t?e:[e,t]),o={dispose:()=>{o.dispose=Emitter._noop,this._disposed||n()}};return Array.isArray(r)&&r.push(o),o}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new LinkedList);for(let t=this.listeners.iterator(),r=t.next();!r.done;r=t.next())this._deliveryQueue.push([r.value,e]);for(;this._deliveryQueue.size>0;){let[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch{}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};let tU={done:!0,value:void 0};let events_Node=class events_Node{static{this.Undefined=new events_Node(void 0)}constructor(e){this.element=e,this.next=events_Node.Undefined,this.prev=events_Node.Undefined}};let LinkedList=class LinkedList{constructor(){this._first=events_Node.Undefined,this._last=events_Node.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===events_Node.Undefined}clear(){this._first=events_Node.Undefined,this._last=events_Node.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){let r=new events_Node(e);if(this._first===events_Node.Undefined)this._first=r,this._last=r;else if(t){let e=this._last;this._last=r,r.prev=e,e.next=r}else{let e=this._first;this._first=r,r.next=e,e.prev=r}this._size+=1;let n=!1;return()=>{n||(n=!0,this._remove(r))}}shift(){if(this._first===events_Node.Undefined)return;let e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===events_Node.Undefined)return;let e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==events_Node.Undefined&&e.next!==events_Node.Undefined){let t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===events_Node.Undefined&&e.next===events_Node.Undefined?(this._first=events_Node.Undefined,this._last=events_Node.Undefined):e.next===events_Node.Undefined?(this._last=this._last.prev,this._last.next=events_Node.Undefined):e.prev===events_Node.Undefined&&(this._first=this._first.next,this._first.prev=events_Node.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===events_Node.Undefined?tU:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){let e=[];for(let t=this._first;t!==events_Node.Undefined;t=t.next)e.push(t.element);return e}};var tj=Object.defineProperty,tZ=Object.getOwnPropertyDescriptor,tV=(e,t,r,n)=>{for(var o,i=n>1?void 0:n?tZ(t,r):t,c=e.length-1;c>=0;c--)(o=e[c])&&(i=(n?o(t,r,i):o(i))||i);return n&&i&&tj(t,r,i),i};let tq=tM();function tY(){return`webview:${tq.next()}`}let tK=class{constructor(e){this.appName=e,this._onReceiveMessage=new Emitter,this._pendingHandlers=new Map,this._api=i??=acquireVsCodeApi(),this._disposable=_.on(window,"message",e=>this.onMessageReceived(e))}get onReceiveMessage(){return this._onReceiveMessage.event}dispose(){this._disposable.dispose()}onMessageReceived(e){let t=tD(),r=e.data;if(r.packed&&r.params instanceof Uint8Array){let n=function(e,t,...r){return(t?.provider??tE).enabled(t?.logLevel??"info")?new Stopwatch(e,t,...r):void 0}(tz(` deserializing msg=${e.data.method}`,t),{log:!1,logLevel:"debug"});this._textDecoder??=new TextDecoder,r.params=JSON.parse(this._textDecoder.decode(r.params)),n?.stop()}if(this.replaceIpcPromisesWithPromises(r.params),null!=r.completionId){var n,o;let e=(n=r.method,o=r.completionId,`${n}|${o}`);this._pendingHandlers.get(e)?.(r);return}this._onReceiveMessage.fire(r)}replaceIpcPromisesWithPromises(e){if(null!=e&&"object"==typeof e)for(let t in e){let r=e[t];null!=r&&"object"==typeof r&&"__ipc"in r&&"promise"===r.__ipc&&"id"in r&&"string"==typeof r.id&&"method"in r&&"string"==typeof r.method?e[t]=this.getResponsePromise(r.method,r.id):this.replaceIpcPromisesWithPromises(r)}}sendCommand(e,t){let r=tY();this.postMessage({id:r,scope:e.scope,method:e.method,params:t})}async sendRequest(e,t){let r=tY(),n=this.getResponsePromise(e.response.method,r);return this.postMessage({id:r,scope:e.scope,method:e.method,params:t,completionId:r}),n}getResponsePromise(e,t){return new Promise((r,n)=>{var o,i;let c,u=(o=e,i=t,`${o}|${i}`);function h(){clearTimeout(c),c=void 0,this._pendingHandlers.delete(u)}c=setTimeout(()=>{h.call(this),n(Error(`Timed out waiting for completion of ${u}`))},(tk.isDebugging?60:5)*6e4),this._pendingHandlers.set(u,e=>{if(h.call(this),e.method===tn.method){let t=e.params;"rejected"===t.status?queueMicrotask(()=>n(Error(t.reason))):queueMicrotask(()=>r(t.value))}else queueMicrotask(()=>r(e.params))})})}setPersistedState(e){this._api.setState(e)}updatePersistedState(e){let t=this._api.getState();null!=t&&"object"==typeof t?(t={...t,...e},this._api.setState(t)):t=e,this.setPersistedState(t)}postMessage(e){this._api.postMessage(e)}};tV([tW({args:{0:e=>`${e.data.id}, method=${e.data.method}`}})],tK.prototype,"onMessageReceived",1),tV([tW({args:{0:e=>e.method,1:!1}})],tK.prototype,"sendCommand",1),tV([tW({args:{0:e=>e.method,1:!1,2:!1}})],tK.prototype,"sendRequest",1),tV([tW({args:{0:e=>`${e.id}, method=${e.method}`}})],tK.prototype,"postMessage",1),tK=tV([(b=e=>`${e.appName}(HostIpc)`,e=>void tT.set(e,b))],tK);let tQ=new Emitter,tX=tQ.event;function tJ(e){let t=document.documentElement,r=window.getComputedStyle(t),n=document.body.classList,o=n.contains("vscode-light")||n.contains("vscode-high-contrast-light"),i=n.contains("vscode-high-contrast")||n.contains("vscode-high-contrast-light"),c=e2("--vscode-editor-background",r),u=e2("--vscode-editor-foreground",r);return u||(u=e2("--vscode-foreground",r)),{colors:{background:c,foreground:u},computedStyle:r,isLightTheme:o,isHighContrastTheme:i,isInitializing:null==e}}var t0=Object.defineProperty,t1=Object.getOwnPropertyDescriptor,t2=(e,t,r,n)=>{for(var o,i=n>1?void 0:n?t1(t,r):t,c=e.length-1;c>=0;c--)(o=e[c])&&(i=(n?o(t,r,i):o(i))||i);return n&&i&&t0(t,r,i),i};let GlAppHost=class GlAppHost extends GlElement{constructor(){super(...arguments),this.placement="editor",this.disposables=[],this.onFocusIn=e=>{let t=e.composedPath().some(e=>"INPUT"===e.tagName);(!0!==this._focused||this._inputFocused!==t)&&(this._focused=!0,this._inputFocused=t,this._sendWebviewFocusChangedCommandDebounced({focused:!0,inputFocused:t}))},this.onFocusOut=e=>{(!1!==this._focused||!1!==this._inputFocused)&&(this._focused=!1,this._inputFocused=!1,this._sendWebviewFocusChangedCommandDebounced({focused:!1,inputFocused:!1}))}}static{this.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0}}get state(){return this._stateProvider.state}connectedCallback(){super.connectedCallback(),this._logger=new LoggerContext(this.name),this._logger.log("connected"),this._ipc=new tK(this.name),this._ipc.sendCommand(e7,void 0);let e=this.bootstrap;this.bootstrap=void 0,this._ipc.replaceIpcPromisesWithPromises(e),this.onPersistState?.(e);let t=tJ();null!=this.onThemeUpdated&&(this.onThemeUpdated(t),this.disposables.push(function(){let e=new MutationObserver(e=>{tQ.fire(tJ(e))});return e.observe(document.body,{attributeFilter:["class"]}),{dispose:()=>e.disconnect()}}()),this.disposables.push(tX(this.onThemeUpdated,this))),this.disposables.push(this._stateProvider=this.createStateProvider(e,this._ipc),this._ipc.onReceiveMessage(e=>{switch(!0){case ti.is(e):this.onWebviewFocusChanged?.(e.params.focused),window.dispatchEvent(new CustomEvent(e.params.focused?"webview-focus":"webview-blur"));break;case ts.is(e):this.onWebviewVisibilityChanged?.(e.params.visible),window.dispatchEvent(new CustomEvent(e.params.visible?"webview-visible":"webview-hidden"))}}),this._ipc,this._promos=new PromosContext(this._ipc),this._telemetry=new TelemetryContext(this._ipc)),this._sendWebviewFocusChangedCommandDebounced=e9(e=>{this._ipc.sendCommand(te,e)},150),document.querySelectorAll("a").forEach(e=>{e.href===e.title&&e.removeAttribute("title")}),document.addEventListener("focusin",this.onFocusIn),document.addEventListener("focusout",this.onFocusOut),document.body.classList.contains("preload")&&setTimeout(()=>{document.body.classList.remove("preload")},500)}disconnectedCallback(){super.disconnectedCallback(),this._logger.log("disconnected"),document.removeEventListener("focusin",this.onFocusIn),document.removeEventListener("focusout",this.onFocusOut),this.disposables.forEach(e=>e.dispose())}render(){return eE`<slot></slot>`}};t2([ej({type:String})],GlAppHost.prototype,"name",2),t2([ej({type:String})],GlAppHost.prototype,"placement",2),t2([A({context:"ipc"})],GlAppHost.prototype,"_ipc",2),t2([A({context:"logger"})],GlAppHost.prototype,"_logger",2),t2([A({context:"promos"})],GlAppHost.prototype,"_promos",2),t2([A({context:"telemetry"})],GlAppHost.prototype,"_telemetry",2),t2([ej({type:Object,noAccessor:!0})],GlAppHost.prototype,"bootstrap",2);let t5="graph",t3=new IpcCommand(t5,"chooseRepository"),t6=new IpcCommand(t5,"dblclick");new IpcCommand(t5,"dblclick");let t4=new IpcCommand(t5,"avatars/get"),t8=new IpcCommand(t5,"refs/metadata/get"),t9=new IpcCommand(t5,"rows/get"),t7=new IpcCommand(t5,"pullRequest/openDetails"),re=new IpcCommand(t5,"search/openInView"),rt=new IpcCommand(t5,"columns/update"),rr=new IpcCommand(t5,"refs/update/visibility"),rn=new IpcCommand(t5,"filters/update/excludeTypes"),ro=new IpcCommand(t5,"configuration/update"),ri=new IpcCommand(t5,"search/update/mode"),rs=new IpcCommand(t5,"filters/update/includedRefs"),ra=new IpcCommand(t5,"selection/update"),rl=new IpcRequest(t5,"chooseRef"),rc=new IpcRequest(t5,"rows/ensure"),ru=new IpcRequest(t5,"counts"),rh=new IpcRequest(t5,"row/hover/get"),rd=new IpcRequest(t5,"search"),rp=new IpcNotification(t5,"repositories/integration/didChange"),rf=new IpcNotification(t5,"didChange",!0,!0),rm=new IpcNotification(t5,"configuration/didChange"),rg=new IpcNotification(t5,"subscription/didChange"),rb=new IpcNotification(t5,"avatars/didChange"),rv=new IpcNotification(t5,"branchState/didChange"),ry=new IpcNotification(t5,"refs/didChangeMetadata"),rw=new IpcNotification(t5,"columns/didChange"),r_=new IpcNotification(t5,"scrollMarkers/didChange"),rS=new IpcNotification(t5,"refs/didChangeVisibility"),rC=new IpcNotification(t5,"rows/didChange",void 0,!0),rx=new IpcNotification(t5,"rows/stats/didChange"),rk=new IpcNotification(t5,"selection/didChange"),rR=new IpcNotification(t5,"workingTree/didChange"),rT=new IpcNotification(t5,"didSearch"),rE=new IpcNotification(t5,"didFetch"),rO=new IpcNotification(t5,"featurePreview/didStart");var rM=Object.defineProperty,rI=(e,t,r)=>t in e?rM(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,rA=(e,t,r)=>(rI(e,"symbol"!=typeof t?t+"":t,r),r),rN=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)},rD=(e,t)=>{if(Object(t)!==t)throw TypeError('Cannot use the "in" operator on this value');return e.has(t)},rz=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},r$=(e,t,r)=>(rN(e,t,"access private method"),r);function rP(e,t){return Object.is(e,t)}let rL=null,rH=!1,rG=1,rW=Symbol("SIGNAL");function rF(e){let t=rL;return rL=e,t}let rB={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function rU(e){if(rH)throw Error("undefined"!=typeof ngDevMode&&ngDevMode?"Assertion error: signal read during notification phase":"");if(null===rL)return;rL.consumerOnSignalRead(e);let t=rL.nextProducerIndex++;rV(rL),t<rL.producerNode.length&&rL.producerNode[t]!==e&&rZ(rL)&&rj(rL.producerNode[t],rL.producerIndexOfThis[t]),rL.producerNode[t]!==e&&(rL.producerNode[t]=e,rL.producerIndexOfThis[t]=rZ(rL)?function e(t,r,n){var o;if(rq(t),rV(t),0===t.liveConsumerNode.length){null==(o=t.watched)||o.call(t.wrapper);for(let r=0;r<t.producerNode.length;r++)t.producerIndexOfThis[r]=e(t.producerNode[r],t,r)}return t.liveConsumerIndexOfThis.push(n),t.liveConsumerNode.push(r)-1}(e,rL,t):0),rL.producerLastReadVersion[t]=e.version}function rj(e,t){var r;if(rq(e),rV(e),"undefined"!=typeof ngDevMode&&ngDevMode&&t>=e.liveConsumerNode.length)throw Error(`Assertion error: active consumer index ${t} is out of bounds of ${e.liveConsumerNode.length} consumers)`);if(1===e.liveConsumerNode.length){null==(r=e.unwatched)||r.call(e.wrapper);for(let t=0;t<e.producerNode.length;t++)rj(e.producerNode[t],e.producerIndexOfThis[t])}let n=e.liveConsumerNode.length-1;if(e.liveConsumerNode[t]=e.liveConsumerNode[n],e.liveConsumerIndexOfThis[t]=e.liveConsumerIndexOfThis[n],e.liveConsumerNode.length--,e.liveConsumerIndexOfThis.length--,t<e.liveConsumerNode.length){let r=e.liveConsumerIndexOfThis[t],n=e.liveConsumerNode[t];rV(n),n.producerIndexOfThis[r]=t}}function rZ(e){var t;return e.consumerIsAlwaysLive||((null==(t=null==e?void 0:e.liveConsumerNode)?void 0:t.length)??0)>0}function rV(e){e.producerNode??(e.producerNode=[]),e.producerIndexOfThis??(e.producerIndexOfThis=[]),e.producerLastReadVersion??(e.producerLastReadVersion=[])}function rq(e){e.liveConsumerNode??(e.liveConsumerNode=[]),e.liveConsumerIndexOfThis??(e.liveConsumerIndexOfThis=[])}function rY(e){if(function e(t){if(t.dirty||t.lastCleanEpoch!==rG){if(!t.producerMustRecompute(t)&&!function(t){rV(t);for(let r=0;r<t.producerNode.length;r++){let n=t.producerNode[r],o=t.producerLastReadVersion[r];if(o!==n.version||(e(n),o!==n.version))return!0}return!1}(t)){t.dirty=!1,t.lastCleanEpoch=rG;return}t.producerRecomputeValue(t),t.dirty=!1,t.lastCleanEpoch=rG}}(e),rU(e),e.value===rX)throw e.error;return e.value}let rK=Symbol("UNSET"),rQ=Symbol("COMPUTING"),rX=Symbol("ERRORED"),rJ={...rB,value:rK,dirty:!0,error:null,equal:rP,producerMustRecompute:e=>e.value===rK||e.value===rQ,producerRecomputeValue(e){let t;if(e.value===rQ)throw Error("Detected cycle in computations.");let r=e.value;e.value=rQ;let n=(e&&(e.nextProducerIndex=0),rF(e)),o=!1;try{t=e.computation.call(e.wrapper),o=r!==rK&&r!==rX&&e.equal.call(e.wrapper,r,t)}catch(r){t=rX,e.error=r}finally{if(rF(n),e&&void 0!==e.producerNode&&void 0!==e.producerIndexOfThis&&void 0!==e.producerLastReadVersion){if(rZ(e))for(let t=e.nextProducerIndex;t<e.producerNode.length;t++)rj(e.producerNode[t],e.producerIndexOfThis[t]);for(;e.producerNode.length>e.nextProducerIndex;)e.producerNode.pop(),e.producerLastReadVersion.pop(),e.producerIndexOfThis.pop()}}if(o){e.value=r;return}e.value=t,e.version++}},r0=function(){throw Error()};function r1(){return rU(this),this.value}let r2={...rB,equal:rP,value:void 0},r5=Symbol("node");(e=>{var t,r,n,o;let State=class State{constructor(n,o={}){rz(this,r),rA(this,t);let i=function(e){let t=Object.create(r2);t.value=e;let r=()=>(rU(t),t.value);return r[rW]=t,r}(n)[rW];if(this[r5]=i,i.wrapper=this,o){let t=o.equals;t&&(i.equal=t),i.watched=o[e.subtle.watched],i.unwatched=o[e.subtle.unwatched]}}get(){if(!(0,e.isState)(this))throw TypeError("Wrong receiver type for Signal.State.prototype.get");return r1.call(this[r5])}set(t){var r,n;if(!(0,e.isState)(this))throw TypeError("Wrong receiver type for Signal.State.prototype.set");if(rH)throw Error("Writes to signals not permitted during Watcher callback");r=this[r5],(null==rL?void 0:rL.consumerAllowSignalWrites)===!1&&r0(),r.equal.call(r.wrapper,r.value,t)||(r.value=t,n=r,n.version++,rG++,function e(t){if(void 0===t.liveConsumerNode)return;let r=rH;rH=!0;try{for(let r of t.liveConsumerNode)r.dirty||function(t){var r;t.dirty=!0,e(t),null==(r=t.consumerMarkedDirty)||r.call(t.wrapper??t)}(r)}finally{rH=r}}(n))}};t=r5,r=new WeakSet,e.isState=e=>"object"==typeof e&&rD(r,e),e.State=State;let Computed=class Computed{constructor(t,r){rz(this,o),rA(this,n);let i=function(e){let t=Object.create(rJ);t.computation=e;let r=()=>rY(t);return r[rW]=t,r}(t)[rW];if(i.consumerAllowSignalWrites=!0,this[r5]=i,i.wrapper=this,r){let t=r.equals;t&&(i.equal=t),i.watched=r[e.subtle.watched],i.unwatched=r[e.subtle.unwatched]}}get(){if(!(0,e.isComputed)(this))throw TypeError("Wrong receiver type for Signal.Computed.prototype.get");return rY(this[r5])}};n=r5,o=new WeakSet,e.isComputed=e=>"object"==typeof e&&rD(o,e),e.Computed=Computed,(t=>{var r,n,o,i;t.untrack=function(e){let t,r=null;try{r=rF(null),t=e()}finally{rF(r)}return t},t.introspectSources=function(t){var r;if(!(0,e.isComputed)(t)&&!(0,e.isWatcher)(t))throw TypeError("Called introspectSources without a Computed or Watcher argument");return(null==(r=t[r5].producerNode)?void 0:r.map(e=>e.wrapper))??[]},t.introspectSinks=function(t){var r;if(!(0,e.isComputed)(t)&&!(0,e.isState)(t))throw TypeError("Called introspectSinks without a Signal argument");return(null==(r=t[r5].liveConsumerNode)?void 0:r.map(e=>e.wrapper))??[]},t.hasSinks=function(t){if(!(0,e.isComputed)(t)&&!(0,e.isState)(t))throw TypeError("Called hasSinks without a Signal argument");let r=t[r5].liveConsumerNode;return!!r&&r.length>0},t.hasSources=function(t){if(!(0,e.isComputed)(t)&&!(0,e.isWatcher)(t))throw TypeError("Called hasSources without a Computed or Watcher argument");let r=t[r5].producerNode;return!!r&&r.length>0};let Watcher=class Watcher{constructor(e){rz(this,n),rz(this,o),rA(this,r);let t=Object.create(rB);t.wrapper=this,t.consumerMarkedDirty=e,t.consumerIsAlwaysLive=!0,t.consumerAllowSignalWrites=!1,t.producerNode=[],this[r5]=t}watch(...t){if(!(0,e.isWatcher)(this))throw TypeError("Called unwatch without Watcher receiver");r$(this,o,i).call(this,t);let r=this[r5];r.dirty=!1;let n=rF(r);for(let e of t)rU(e[r5]);rF(n)}unwatch(...t){if(!(0,e.isWatcher)(this))throw TypeError("Called unwatch without Watcher receiver");r$(this,o,i).call(this,t);let r=this[r5];rV(r);for(let e=r.producerNode.length-1;e>=0;e--)if(t.includes(r.producerNode[e].wrapper)){rj(r.producerNode[e],r.producerIndexOfThis[e]);let t=r.producerNode.length-1;if(r.producerNode[e]=r.producerNode[t],r.producerIndexOfThis[e]=r.producerIndexOfThis[t],r.producerNode.length--,r.producerIndexOfThis.length--,r.nextProducerIndex--,e<r.producerNode.length){let t=r.producerIndexOfThis[e],n=r.producerNode[e];rq(n),n.liveConsumerIndexOfThis[t]=e}}}getPending(){if(!(0,e.isWatcher)(this))throw TypeError("Called getPending without Watcher receiver");return this[r5].producerNode.filter(e=>e.dirty).map(e=>e.wrapper)}};r=r5,n=new WeakSet,o=new WeakSet,i=function(t){for(let r of t)if(!(0,e.isComputed)(r)&&!(0,e.isState)(r))throw TypeError("Called watch/unwatch without a Computed or State argument")},e.isWatcher=e=>rD(n,e),t.Watcher=Watcher,t.currentComputed=function(){var e;return null==(e=rL)?void 0:e.wrapper},t.watched=Symbol("watched"),t.unwatched=Symbol("unwatched")})(e.subtle||(e.subtle={}))})(S||(S={}));let r3=Symbol("SignalWatcherBrand"),r6=new FinalizationRegistry(({watcher:e,signal:t})=>{e.unwatch(t)}),r4=new WeakMap;function r8(e){return!0===e[r3]?e:class extends e{constructor(){super(...arguments),this._$St=new S.State(0),this._$Si=!1,this._$So=!0,this._$Sh=new Set}_$Sl(){if(void 0!==this._$Su)return;this._$Sv=new S.Computed(()=>{this._$St.get(),super.performUpdate()});let e=this._$Su=new S.subtle.Watcher(function(){let e=r4.get(this);void 0!==e&&(!1===e._$Si&&e.requestUpdate(),this.watch())});r4.set(e,this),r6.register(this,{watcher:e,signal:this._$Sv}),e.watch(this._$Sv)}_$Sp(){void 0!==this._$Su&&(this._$Su.unwatch(this._$Sv),this._$Sv=void 0,this._$Su=void 0)}performUpdate(){this.isUpdatePending&&(this._$Sl(),this._$Si=!0,this._$St.set(this._$St.get()+1),this._$Si=!1,this._$Sv.get())}update(e){try{this._$So?(this._$So=!1,super.update(e)):this._$Sh.forEach(e=>e.commit())}finally{this.isUpdatePending=!1,this._$Sh.clear()}}requestUpdate(e,t,r){this._$So=!0,super.requestUpdate(e,t,r)}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),queueMicrotask(()=>{!1===this.isConnected&&this._$Sp()})}_(e){this._$Sh.add(e);let t=this._$So;this.requestUpdate(),this._$So=t}m(e){this._$Sh.delete(e)}}}let r9=e=>(...t)=>({_$litDirective$:e,values:t});let directive_i=class directive_i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};let{I:r7}={M:eu,P:eh,A:ed,C:1,L:e$,R:M,D:ev,V:eP,I:R,H:k,N:I,U:L,B:H,F:z},ne=e=>null===e||"object"!=typeof e&&"function"!=typeof e,nt=(e,t)=>void 0===t?void 0!==e?._$litType$:e?._$litType$===t,nr=e=>null!=e?._$litType$?.h,no=e=>void 0===e.strings,na=()=>document.createComment(""),nl=(e,t,r)=>{let n=e._$AA.parentNode,o=void 0===t?e._$AB:t._$AA;if(void 0===r)r=new r7(n.insertBefore(na(),o),n.insertBefore(na(),o),e,e.options);else{let t=r._$AB.nextSibling,i=r._$AM,c=i!==e;if(c){let t;r._$AQ?.(e),r._$AM=e,void 0!==r._$AP&&(t=e._$AU)!==i._$AU&&r._$AP(t)}if(t!==o||c){let e=r._$AA;for(;e!==t;){let t=e.nextSibling;n.insertBefore(e,o),e=t}}}return r},nc=(e,t,r=e)=>(e._$AI(t,r),e),nu={},nh=(e,t=nu)=>e._$AH=t,nd=e=>e._$AH,np=e=>{e._$AP?.(!1,!0);let t=e._$AA,r=e._$AB.nextSibling;for(;t!==r;){let e=t.nextSibling;t.remove(),t=e}},nm=e=>{e._$AR()},ng=(e,t)=>{let r=e._$AN;if(void 0===r)return!1;for(let e of r)e._$AO?.(t,!1),ng(e,t);return!0},nb=e=>{let t,r;do{if(void 0===(t=e._$AM))break;(r=t._$AN).delete(e),e=t}while(0===r?.size)},ny=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(void 0===r)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),nS(t)}};function nw(e){void 0!==this._$AN?(nb(this),this._$AM=e,ny(this)):this._$AM=e}function n_(e,t=!1,r=0){let n=this._$AH,o=this._$AN;if(void 0!==o&&0!==o.size)if(t)if(Array.isArray(n))for(let e=r;e<n.length;e++)ng(n[e],!1),nb(n[e]);else null!=n&&(ng(n,!1),nb(n));else ng(this,e)}let nS=e=>{2==e.type&&(e._$AP??=n_,e._$AQ??=nw)};let async_directive_f=class async_directive_f extends directive_i{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),ny(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(ng(this,e),nb(this))}setValue(e){if(no(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};let watch_h=class watch_h extends async_directive_f{_$Sl(){if(void 0!==this._$Su)return;this._$SW=new S.Computed(()=>{var e;return null==(e=this._$Sj)?void 0:e.get()});let e=this._$Su=new S.subtle.Watcher(()=>{var t;null==(t=this._$SO)||t._(this),e.watch()});e.watch(this._$SW)}_$Sp(){var e;void 0!==this._$Su&&(this._$Su.unwatch(this._$SW),this._$SW=void 0,this._$Su=void 0,null==(e=this._$SO)||e.m(this))}commit(){this.setValue(S.subtle.untrack(()=>{var e;return null==(e=this._$SW)?void 0:e.get()}))}render(e){return S.subtle.untrack(()=>e.get())}update(e,[t]){var r,n;return null!=this._$SO||(this._$SO=null==(n=e.options)?void 0:n.host),t!==this._$Sj&&void 0!==this._$Sj&&this._$Sp(),this._$Sj=t,this._$Sl(),S.subtle.untrack(()=>this._$SW.get())}disconnected(){this._$Sp()}reconnected(){this._$Sl()}};let nC=r9(watch_h),nR=e=>(t,...r)=>e(t,...r.map(e=>e instanceof S.State||e instanceof S.Computed?nC(e):e));nR(eE),nR(eO),S.State,S.Computed;let nT=(e,t)=>new S.Computed(e,t),nE=(e=null)=>new S.State(e,{equals:()=>!1});new WeakMap;let SignalObjectImpl=class SignalObjectImpl{static fromEntries(e){return new SignalObjectImpl(Object.fromEntries(e))}#e=new Map;#t=nE();constructor(e={}){let t=Object.getPrototypeOf(e),r=Object.getOwnPropertyDescriptors(e),n=Object.create(t);for(let e in r)Object.defineProperty(n,e,r[e]);let o=this;return new Proxy(n,{get:(e,t,r)=>(o.#r(t),Reflect.get(e,t,r)),has:(e,t)=>(o.#r(t),t in e),ownKeys:e=>(o.#t.get(),Reflect.ownKeys(e)),set(e,t,r,n){let i=Reflect.set(e,t,r,n);return o.#n(t),o.#o(),i},deleteProperty:(e,t)=>(t in e&&(delete e[t],o.#n(t),o.#o()),!0),getPrototypeOf:()=>SignalObjectImpl.prototype})}#r(e){let t=this.#e.get(e);void 0===t&&(t=nE(),this.#e.set(e,t)),t.get()}#n(e){let t=this.#e.get(e);t&&t.set(null)}#o(){this.#t.set(null)}};function nO(e){return(t,r,n)=>{if(n.get&&n.set){let t=new S.State(e);return{get:function(){return t.get()},set:function(e){t.set(e)}}}throw Error("@signal can only be used on accessors or getters")}}let nM=(e,t={})=>(r,n,o)=>{if(o.get&&o.set){let n=new SignalObjectImpl(e);return{get:function(){return n},set:function(e){Object.entries(e).forEach(([e,t])=>{n[e]=t}),t.afterChange?.(r,e)}}}throw Error("@signal can only be used on accessors or getters")};var nI=Object.defineProperty,nA=Object.getOwnPropertyDescriptor,nN=(e,t,r,n)=>{for(var o,i=n>1?void 0:n?nA(t,r):t,c=e.length-1;c>=0;c--)(o=e[c])&&(i=(n?o(t,r,i):o(i))||i);return n&&i&&nI(t,r,i),i};function nD(e){let t,r;return null!=e&&("error"in e?r=e:t=e),{results:t,resultsError:r}}let GraphAppState=class GraphAppState{#i;get activeDay(){return this.#i}set activeDay(e){this.#i=e}#s=void 0;get activeRow(){return this.#s}set activeRow(e){this.#s=e}#a=!1;get loading(){return this.#a}set loading(e){this.#a=e}#l=!1;get searching(){return this.#l}set searching(e){this.#l=e}#c;get visibleDays(){return this.#c}set visibleDays(e){this.#c=e}#u;get theming(){return this.#u}set theming(e){this.#u=e}#h;get filter(){return this.#h}set filter(e){this.#h=e}#d=!1;get searchResultsHidden(){return this.#d}set searchResultsHidden(e){this.#d=e}#p;get searchResultsResponse(){return this.#p}set searchResultsResponse(e){this.#p=e}get searchResults(){return nD(this.searchResultsResponse).results}get searchResultsError(){return nD(this.searchResultsResponse).resultsError}#f;get selectedRows(){return this.#f}set selectedRows(e){this.#f=e}};nN([nO()],GraphAppState.prototype,"activeDay",1),nN([nO()],GraphAppState.prototype,"activeRow",1),nN([nO(!1)],GraphAppState.prototype,"loading",1),nN([nO(!1)],GraphAppState.prototype,"searching",1),nN([nM()],GraphAppState.prototype,"visibleDays",1),nN([nM()],GraphAppState.prototype,"theming",1),nN([nM({query:""},{afterChange:e=>{e.searchResultsHidden=!1}})],GraphAppState.prototype,"filter",1),nN([nO(!1)],GraphAppState.prototype,"searchResultsHidden",1),nN([nO()],GraphAppState.prototype,"searchResultsResponse",1),nN([nO()],GraphAppState.prototype,"selectedRows",1);let GraphStateProvider=class GraphStateProvider{constructor(e,t,r,n,o={}){this._ipc=r,this._logger=n,this.options=o,this._state=t,this.provider=new context_provider_i(e,{context:"state",initialValue:t}),this.disposable=this._ipc.onReceiveMessage(e=>{let t=tD(),r={};switch(!0){case rf.is(e):this.updateState(e.params.state);break;case rE.is(e):this._state.lastFetched=e.params.lastFetched,this.updateState({lastFetched:e.params.lastFetched});break;case rb.is(e):this.updateState({avatars:e.params.avatars});break;case rO.is(e):this._state.featurePreview=e.params.featurePreview,this._state.allowed=e.params.allowed,this.updateState({featurePreview:e.params.featurePreview,allowed:e.params.allowed});break;case rv.is(e):this.updateState({branchState:e.params.branchState});break;case to.is(e):this.updateState({windowFocused:e.params.focused});break;case rw.is(e):this.updateState({columns:e.params.columns,context:{...this._state.context,header:e.params.context,settings:e.params.settingsContext}});break;case rS.is(e):this.updateState({branchesVisibility:e.params.branchesVisibility,excludeRefs:e.params.excludeRefs,excludeTypes:e.params.excludeTypes,includeOnlyRefs:e.params.includeOnlyRefs});break;case ry.is(e):this.updateState({refsMetadata:e.params.metadata});break;case rC.is(e):{var n;let o;if(e.params.rows.length&&e.params.paging?.startingCursor!=null&&null!=this._state.rows){let r=this._state.rows,n=r[r.length-1]?.sha,i=r.length,c=e.params.rows.length;if(this._logger.log(t,`paging in ${c} rows into existing ${i} rows at ${e.params.paging.startingCursor} (last existing row: ${n})`),(o=[]).length=i+c,e.params.paging.startingCursor!==n){let n;this._logger.log(t,`searching for ${e.params.paging.startingCursor} in existing rows`);let u=0;for(n of r)if(o[u++]=n,n.sha===e.params.paging.startingCursor){this._logger.log(t,`found ${e.params.paging.startingCursor} in existing rows`),(i=u)!==r.length&&(o.length=i+c);break}}else for(let e=0;e<i;e++)o[e]=r[e];for(let t=0;t<c;t++)o[i+t]=e.params.rows[t]}else this._logger.log(t,`setting to ${e.params.rows.length} rows`),o=0===e.params.rows.length?this._state.rows:e.params.rows;r.avatars=e.params.avatars,r.downstreams=e.params.downstreams,void 0!==e.params.refsMetadata&&(r.refsMetadata=e.params.refsMetadata),r.rows=o,r.paging=e.params.paging,null!=e.params.rowsStats&&(r.rowsStats={...this._state.rowsStats,...e.params.rowsStats}),r.rowsStatsLoading=e.params.rowsStatsLoading,null!=e.params.searchResults&&(r.searchResults=e.params.searchResults),null!=e.params.selectedRows&&(r.selectedRows=e.params.selectedRows),r.loading=!1,this.updateState(r),n=` \u2022 rows=${this._state.rows?.length??0}`,null!=t&&(t.exitDetails=n);break}case rx.is(e):this.updateState({rowsStats:{...this._state.rowsStats,...e.params.rowsStats},rowsStatsLoading:e.params.rowsStatsLoading});break;case r_.is(e):this.updateState({context:{...this._state.context,settings:e.params.context}});break;case rT.is(e):null!=e.params.selectedRows&&(r.selectedRows=e.params.selectedRows),r.searchResults=e.params.results,this.updateState(r);break;case rk.is(e):this.updateState({selectedRows:e.params.selection});break;case rm.is(e):this.updateState({config:e.params.config});break;case rg.is(e):this.updateState({subscription:e.params.subscription,allowed:e.params.allowed});break;case rR.is(e):this.updateState({workingTreeStats:e.params.stats});break;case rp.is(e):this.updateState({repositories:e.params.repositories})}})}get state(){return this._state}updateState(e){for(let t in e)this._state[t]=e[t];this.options.onStateUpdate?.(e),this.provider.setValue(this._state,!0)}dispose(){this.disposable.dispose()}};var nz=O(527),n$=O.n(nz);function nP(e,t,r){return e?t(e):r?.(e)}function nL(e,t){e.dispatchEvent(new CustomEvent("gl-telemetry-fired",{bubbles:!0,detail:t}))}let nH=e=>e??eA;function nG(e,t,r,n){return`command:${e}?${encodeURIComponent(JSON.stringify({webview:t,webviewInstance:r,...n}))}`}let nW=B`
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
`;B`
	hr {
		border: none;
		border-top: 1px solid var(--color-foreground--25);
	}
`;var nF=((v=nF||{}).Community="community",v.CommunityWithAccount="community-with-account",v.Pro="pro",v.Advanced="advanced",v.Business="teams",v.Enterprise="enterprise",v),nB=((w=nB||{})[w.VerificationRequired=-1]="VerificationRequired",w[w.Community=0]="Community",w[w.ProPreview=1]="ProPreview",w[w.ProPreviewExpired=2]="ProPreviewExpired",w[w.ProTrial=3]="ProTrial",w[w.ProTrialExpired=4]="ProTrialExpired",w[w.ProTrialReactivationEligible=5]="ProTrialReactivationEligible",w[w.Paid=6]="Paid",w);function nU(e){var t;return(t=e.plan.actual.id)!==nF.Community&&t!==nF.CommunityWithAccount}function nj(e,t){return null==t?`command:${e}`:`command:${e}?${encodeURIComponent("string"==typeof t?t:JSON.stringify(t))}`}nF.Community,nF.CommunityWithAccount,nF.Pro,nF.Advanced,nF.Business,nF.Enterprise;let nZ=B`
	clip: rect(0 0 0 0);
	clip-path: inset(50%);
	width: 1px;
	height: 1px;
	overflow: hidden;
	position: absolute;
	white-space: nowrap;
`;B`
	.sr-only,
	.sr-only-focusable:not(:active):not(:focus-visible):not(:focus-within) {
		${nZ}
	}
`;let nV=B`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`,nY=B`
	outline: 1px solid var(--color-focus-border);
	outline-offset: 2px;
`;B`
	:focus-visible {
		${nV}
	}
`;let nK=B`
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
`,nQ=B`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${nV}
	}
	a:hover {
		text-decoration: underline;
	}
`,nJ=B`
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
`,n0=B`
	.inline-code {
		background: var(--vscode-textCodeBlock-background);
		border-radius: 3px;
		padding: 0px 4px 2px 4px;
		font-family: var(--vscode-editor-font-family);
	}
`;var n2=B`
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
`;let n5=new Set,n3=new Map,n4="ltr",n8="en",n9="undefined"!=typeof MutationObserver&&"undefined"!=typeof document&&void 0!==document.documentElement;if(n9){let e=new MutationObserver(oe);n4=document.documentElement.dir||"ltr",n8=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function n7(...e){e.map(e=>{let t=e.$code.toLowerCase();n3.has(t)?n3.set(t,Object.assign(Object.assign({},n3.get(t)),e)):n3.set(t,e),c||(c=e)}),oe()}function oe(){n9&&(n4=document.documentElement.dir||"ltr",n8=document.documentElement.lang||navigator.language),[...n5.keys()].map(e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()})}let LocalizeController=class LocalizeController{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){n5.add(this.host)}hostDisconnected(){n5.delete(this.host)}dir(){return`${this.host.dir||n4}`.toLowerCase()}lang(){return`${this.host.lang||n8}`.toLowerCase()}getTranslationData(e){var t,r;let n=new Intl.Locale(e.replace(/_/g,"-")),o=null==n?void 0:n.language.toLowerCase(),i=null!=(r=null==(t=null==n?void 0:n.region)?void 0:t.toLowerCase())?r:"",c=n3.get(`${o}-${i}`),u=n3.get(o);return{locale:n,language:o,region:i,primary:c,secondary:u}}exists(e,t){var r;let{primary:n,secondary:o}=this.getTranslationData(null!=(r=t.lang)?r:this.lang());return t=Object.assign({includeFallback:!1},t),!!n&&!!n[e]||!!o&&!!o[e]||!!t.includeFallback&&!!c&&!!c[e]}term(e,...t){let r,{primary:n,secondary:o}=this.getTranslationData(this.lang());if(n&&n[e])r=n[e];else if(o&&o[e])r=o[e];else{if(!c||!c[e])return String(e);r=c[e]}return"function"==typeof r?r(...t):r}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return isNaN(e=Number(e))?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(e,t)}};var ot={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};n7(ot);var or=class extends LocalizeController{};n7(ot);var on=B`
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
`,oo=Object.defineProperty,oi=Object.defineProperties,os=Object.getOwnPropertyDescriptor,oa=Object.getOwnPropertyDescriptors,ol=Object.getOwnPropertySymbols,oc=Object.prototype.hasOwnProperty,ou=Object.prototype.propertyIsEnumerable,oh=e=>{throw TypeError(e)},od=(e,t,r)=>t in e?oo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,op=(e,t)=>{for(var r in t||(t={}))oc.call(t,r)&&od(e,r,t[r]);if(ol)for(var r of ol(t))ou.call(t,r)&&od(e,r,t[r]);return e},of=(e,t)=>oi(e,oa(t)),om=(e,t,r,n)=>{for(var o,i=n>1?void 0:n?os(t,r):t,c=e.length-1;c>=0;c--)(o=e[c])&&(i=(n?o(t,r,i):o(i))||i);return n&&i&&oo(t,r,i),i},og=(e,t,r)=>t.has(e)||oh("Cannot "+r),ov=(e,t,r)=>(og(e,t,"read from private field"),r?r.call(e):t.get(e)),oy=(e,t,r)=>t.has(e)?oh("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),ow=(e,t,r,n)=>(og(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),o_=class extends lit_element_i{constructor(){super(),oy(this,C,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){let r=new CustomEvent(e,op({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(r),r}static define(e,t=this,r={}){let n=customElements.get(e);if(!n){try{customElements.define(e,t,r)}catch(n){customElements.define(e,class extends t{},r)}return}let o=" (unknown version)",i=o;if("version"in t&&t.version&&(o=" v"+t.version),"version"in n&&n.version&&(i=" v"+n.version),o&&i&&o===i)return}attributeChangedCallback(e,t,r){ov(this,C)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&null!=this[t]&&this.initialReflectedProperties.set(t,this[t])}),ow(this,C,!0)),super.attributeChangedCallback(e,t,r)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,r)=>{e.has(r)&&null==this[r]&&(this[r]=t)})}};C=new WeakMap,o_.version="2.20.1",o_.dependencies={},om([ej()],o_.prototype,"dir",2),om([ej()],o_.prototype,"lang",2);let oS=Math.min,oC=Math.max,ok=Math.round,oR=Math.floor,oT=e=>({x:e,y:e}),oE={left:"right",right:"left",bottom:"top",top:"bottom"},oM={start:"end",end:"start"};function oI(e,t){return"function"==typeof e?e(t):e}function oA(e){return e.split("-")[0]}function oN(e){return e.split("-")[1]}function oD(e){return"x"===e?"y":"x"}function oz(e){return"y"===e?"height":"width"}function o$(e){return["top","bottom"].includes(oA(e))?"y":"x"}function oP(e){return e.replace(/start|end/g,e=>oM[e])}function oL(e){return e.replace(/left|right|bottom|top/g,e=>oE[e])}function oH(e){return"number"!=typeof e?{top:0,right:0,bottom:0,left:0,...e}:{top:e,right:e,bottom:e,left:e}}function oW(e){let{x:t,y:r,width:n,height:o}=e;return{width:n,height:o,top:r,left:t,right:t+n,bottom:r+o,x:t,y:r}}function oF(e,t,r){let n,{reference:o,floating:i}=e,c=o$(t),u=oD(o$(t)),h=oz(u),d=oA(t),p="y"===c,m=o.x+o.width/2-i.width/2,g=o.y+o.height/2-i.height/2,b=o[h]/2-i[h]/2;switch(d){case"top":n={x:m,y:o.y-i.height};break;case"bottom":n={x:m,y:o.y+o.height};break;case"right":n={x:o.x+o.width,y:g};break;case"left":n={x:o.x-i.width,y:g};break;default:n={x:o.x,y:o.y}}switch(oN(t)){case"start":n[u]-=b*(r&&p?-1:1);break;case"end":n[u]+=b*(r&&p?-1:1)}return n}let oB=async(e,t,r)=>{let{placement:n="bottom",strategy:o="absolute",middleware:i=[],platform:c}=r,u=i.filter(Boolean),h=await (null==c.isRTL?void 0:c.isRTL(t)),d=await c.getElementRects({reference:e,floating:t,strategy:o}),{x:p,y:m}=oF(d,n,h),g=n,b={},v=0;for(let r=0;r<u.length;r++){let{name:i,fn:w}=u[r],{x:_,y:S,data:C,reset:x}=await w({x:p,y:m,initialPlacement:n,placement:g,strategy:o,middlewareData:b,rects:d,platform:c,elements:{reference:e,floating:t}});p=null!=_?_:p,m=null!=S?S:m,b={...b,[i]:{...b[i],...C}},x&&v<=50&&(v++,"object"==typeof x&&(x.placement&&(g=x.placement),x.rects&&(d=!0===x.rects?await c.getElementRects({reference:e,floating:t,strategy:o}):x.rects),{x:p,y:m}=oF(d,g,h)),r=-1)}return{x:p,y:m,placement:g,strategy:o,middlewareData:b}};async function oU(e,t){var r;void 0===t&&(t={});let{x:n,y:o,platform:i,rects:c,elements:u,strategy:h}=e,{boundary:d="clippingAncestors",rootBoundary:p="viewport",elementContext:m="floating",altBoundary:g=!1,padding:b=0}=oI(t,e),v=oH(b),w=u[g?"floating"===m?"reference":"floating":m],_=oW(await i.getClippingRect({element:null==(r=await (null==i.isElement?void 0:i.isElement(w)))||r?w:w.contextElement||await (null==i.getDocumentElement?void 0:i.getDocumentElement(u.floating)),boundary:d,rootBoundary:p,strategy:h})),S="floating"===m?{x:n,y:o,width:c.floating.width,height:c.floating.height}:c.reference,C=await (null==i.getOffsetParent?void 0:i.getOffsetParent(u.floating)),x=await (null==i.isElement?void 0:i.isElement(C))&&await (null==i.getScale?void 0:i.getScale(C))||{x:1,y:1},T=oW(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:u,rect:S,offsetParent:C,strategy:h}):S);return{top:(_.top-T.top+v.top)/x.y,bottom:(T.bottom-_.bottom+v.bottom)/x.y,left:(_.left-T.left+v.left)/x.x,right:(T.right-_.right+v.right)/x.x}}async function oj(e,t){let{placement:r,platform:n,elements:o}=e,i=await (null==n.isRTL?void 0:n.isRTL(o.floating)),c=oA(r),u=oN(r),h="y"===o$(r),d=["left","top"].includes(c)?-1:1,p=i&&h?-1:1,m=oI(t,e),{mainAxis:g,crossAxis:b,alignmentAxis:v}="number"==typeof m?{mainAxis:m,crossAxis:0,alignmentAxis:null}:{mainAxis:m.mainAxis||0,crossAxis:m.crossAxis||0,alignmentAxis:m.alignmentAxis};return u&&"number"==typeof v&&(b="end"===u?-1*v:v),h?{x:b*p,y:g*d}:{x:g*d,y:b*p}}function oZ(){return"undefined"!=typeof window}function oV(e){return oK(e)?(e.nodeName||"").toLowerCase():"#document"}function oq(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function oY(e){var t;return null==(t=(oK(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function oK(e){return!!oZ()&&(e instanceof Node||e instanceof oq(e).Node)}function oQ(e){return!!oZ()&&(e instanceof Element||e instanceof oq(e).Element)}function oX(e){return!!oZ()&&(e instanceof HTMLElement||e instanceof oq(e).HTMLElement)}function oJ(e){return!!oZ()&&"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof oq(e).ShadowRoot)}function o0(e){let{overflow:t,overflowX:r,overflowY:n,display:o}=o6(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+r)&&!["inline","contents"].includes(o)}function o1(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function o2(e){let t=o5(),r=oQ(e)?o6(e):e;return["transform","translate","scale","rotate","perspective"].some(e=>!!r[e]&&"none"!==r[e])||!!r.containerType&&"normal"!==r.containerType||!t&&!!r.backdropFilter&&"none"!==r.backdropFilter||!t&&!!r.filter&&"none"!==r.filter||["transform","translate","scale","rotate","perspective","filter"].some(e=>(r.willChange||"").includes(e))||["paint","layout","strict","content"].some(e=>(r.contain||"").includes(e))}function o5(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}function o3(e){return["html","body","#document"].includes(oV(e))}function o6(e){return oq(e).getComputedStyle(e)}function o4(e){return oQ(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function o8(e){if("html"===oV(e))return e;let t=e.assignedSlot||e.parentNode||oJ(e)&&e.host||oY(e);return oJ(t)?t.host:t}function o9(e,t,r){var n;void 0===t&&(t=[]),void 0===r&&(r=!0);let o=function e(t){let r=o8(t);return o3(r)?t.ownerDocument?t.ownerDocument.body:t.body:oX(r)&&o0(r)?r:e(r)}(e),i=o===(null==(n=e.ownerDocument)?void 0:n.body),c=oq(o);if(i){let e=o7(c);return t.concat(c,c.visualViewport||[],o0(o)?o:[],e&&r?o9(e):[])}return t.concat(o,o9(o,[],r))}function o7(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function ie(e){let t=o6(e),r=parseFloat(t.width)||0,n=parseFloat(t.height)||0,o=oX(e),i=o?e.offsetWidth:r,c=o?e.offsetHeight:n,u=ok(r)!==i||ok(n)!==c;return u&&(r=i,n=c),{width:r,height:n,$:u}}function it(e){return oQ(e)?e:e.contextElement}function ir(e){let t=it(e);if(!oX(t))return oT(1);let r=t.getBoundingClientRect(),{width:n,height:o,$:i}=ie(t),c=(i?ok(r.width):r.width)/n,u=(i?ok(r.height):r.height)/o;return c&&Number.isFinite(c)||(c=1),u&&Number.isFinite(u)||(u=1),{x:c,y:u}}let io=oT(0);function ii(e){let t=oq(e);return o5()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:io}function is(e,t,r,n){var o;void 0===t&&(t=!1),void 0===r&&(r=!1);let i=e.getBoundingClientRect(),c=it(e),u=oT(1);t&&(n?oQ(n)&&(u=ir(n)):u=ir(e));let h=(void 0===(o=r)&&(o=!1),n&&(!o||n===oq(c))&&o)?ii(c):oT(0),d=(i.left+h.x)/u.x,p=(i.top+h.y)/u.y,m=i.width/u.x,g=i.height/u.y;if(c){let e=oq(c),t=n&&oQ(n)?oq(n):n,r=e,o=o7(r);for(;o&&n&&t!==r;){let e=ir(o),t=o.getBoundingClientRect(),n=o6(o),i=t.left+(o.clientLeft+parseFloat(n.paddingLeft))*e.x,c=t.top+(o.clientTop+parseFloat(n.paddingTop))*e.y;d*=e.x,p*=e.y,m*=e.x,g*=e.y,d+=i,p+=c,o=o7(r=oq(o))}}return oW({width:m,height:g,x:d,y:p})}function ia(e,t){let r=o4(e).scrollLeft;return t?t.left+r:is(oY(e)).left+r}function il(e,t,r){void 0===r&&(r=!1);let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-(r?0:ia(e,n)),y:n.top+t.scrollTop}}function ic(e,t,r){let n;if("viewport"===t)n=function(e,t){let r=oq(e),n=oY(e),o=r.visualViewport,i=n.clientWidth,c=n.clientHeight,u=0,h=0;if(o){i=o.width,c=o.height;let e=o5();(!e||e&&"fixed"===t)&&(u=o.offsetLeft,h=o.offsetTop)}return{width:i,height:c,x:u,y:h}}(e,r);else if("document"===t)n=function(e){let t=oY(e),r=o4(e),n=e.ownerDocument.body,o=oC(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),i=oC(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight),c=-r.scrollLeft+ia(e),u=-r.scrollTop;return"rtl"===o6(n).direction&&(c+=oC(t.clientWidth,n.clientWidth)-o),{width:o,height:i,x:c,y:u}}(oY(e));else if(oQ(t))n=function(e,t){let r=is(e,!0,"fixed"===t),n=r.top+e.clientTop,o=r.left+e.clientLeft,i=oX(e)?ir(e):oT(1),c=e.clientWidth*i.x,u=e.clientHeight*i.y;return{width:c,height:u,x:o*i.x,y:n*i.y}}(t,r);else{let r=ii(e);n={x:t.x-r.x,y:t.y-r.y,width:t.width,height:t.height}}return oW(n)}function iu(e){return"static"===o6(e).position}function ih(e,t){if(!oX(e)||"fixed"===o6(e).position)return null;if(t)return t(e);let r=e.offsetParent;return oY(e)===r&&(r=r.ownerDocument.body),r}function id(e,t){let r=oq(e);if(o1(e))return r;if(!oX(e)){let t=o8(e);for(;t&&!o3(t);){if(oQ(t)&&!iu(t))return t;t=o8(t)}return r}let n=ih(e,t);for(;n&&["table","td","th"].includes(oV(n))&&iu(n);)n=ih(n,t);return n&&o3(n)&&iu(n)&&!o2(n)?r:n||function(e){let t=o8(e);for(;oX(t)&&!o3(t);){if(o2(t))return t;if(o1(t))break;t=o8(t)}return null}(e)||r}let ip=async function(e){let t=this.getOffsetParent||id,r=this.getDimensions,n=await r(e.floating);return{reference:function(e,t,r){let n=oX(t),o=oY(t),i="fixed"===r,c=is(e,!0,i,t),u={scrollLeft:0,scrollTop:0},h=oT(0);if(n||!n&&!i)if(("body"!==oV(t)||o0(o))&&(u=o4(t)),n){let e=is(t,!0,i,t);h.x=e.x+t.clientLeft,h.y=e.y+t.clientTop}else o&&(h.x=ia(o));i&&!n&&o&&(h.x=ia(o));let d=!o||n||i?oT(0):il(o,u);return{x:c.left+u.scrollLeft-h.x-d.x,y:c.top+u.scrollTop-h.y-d.y,width:c.width,height:c.height}}(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}},im={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:r,offsetParent:n,strategy:o}=e,i="fixed"===o,c=oY(n),u=!!t&&o1(t.floating);if(n===c||u&&i)return r;let h={scrollLeft:0,scrollTop:0},d=oT(1),p=oT(0),m=oX(n);if((m||!m&&!i)&&(("body"!==oV(n)||o0(c))&&(h=o4(n)),oX(n))){let e=is(n);d=ir(n),p.x=e.x+n.clientLeft,p.y=e.y+n.clientTop}let g=!c||m||i?oT(0):il(c,h,!0);return{width:r.width*d.x,height:r.height*d.y,x:r.x*d.x-h.scrollLeft*d.x+p.x+g.x,y:r.y*d.y-h.scrollTop*d.y+p.y+g.y}},getDocumentElement:oY,getClippingRect:function(e){let{element:t,boundary:r,rootBoundary:n,strategy:o}=e,i=[..."clippingAncestors"===r?o1(t)?[]:function(e,t){let r=t.get(e);if(r)return r;let n=o9(e,[],!1).filter(e=>oQ(e)&&"body"!==oV(e)),o=null,i="fixed"===o6(e).position,c=i?o8(e):e;for(;oQ(c)&&!o3(c);){let t=o6(c),r=o2(c);r||"fixed"!==t.position||(o=null),(i?!r&&!o:!r&&"static"===t.position&&!!o&&["absolute","fixed"].includes(o.position)||o0(c)&&!r&&function e(t,r){let n=o8(t);return!(n===r||!oQ(n)||o3(n))&&("fixed"===o6(n).position||e(n,r))}(e,c))?n=n.filter(e=>e!==c):o=t,c=o8(c)}return t.set(e,n),n}(t,this._c):[].concat(r),n],c=i[0],u=i.reduce((e,r)=>{let n=ic(t,r,o);return e.top=oC(n.top,e.top),e.right=oS(n.right,e.right),e.bottom=oS(n.bottom,e.bottom),e.left=oC(n.left,e.left),e},ic(t,c,o));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}},getOffsetParent:id,getElementRects:ip,getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){let{width:t,height:r}=ie(e);return{width:t,height:r}},getScale:ir,isElement:oQ,isRTL:function(e){return"rtl"===o6(e).direction}};function ig(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}let ib=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){var r,n;let o,i,{placement:c,rects:u,platform:h,elements:d}=t,{apply:p=()=>{},...m}=oI(e,t),g=await oU(t,m),b=oA(c),v=oN(c),w="y"===o$(c),{width:_,height:S}=u.floating;"top"===b||"bottom"===b?(o=b,i=v===(await (null==h.isRTL?void 0:h.isRTL(d.floating))?"start":"end")?"left":"right"):(i=b,o="end"===v?"top":"bottom");let C=S-g.top-g.bottom,x=_-g.left-g.right,T=oS(S-g[o],C),E=oS(_-g[i],x),O=!t.middlewareData.shift,A=T,D=E;if(null!=(r=t.middlewareData.shift)&&r.enabled.x&&(D=x),null!=(n=t.middlewareData.shift)&&n.enabled.y&&(A=C),O&&!v){let e=oC(g.left,0),t=oC(g.right,0),r=oC(g.top,0),n=oC(g.bottom,0);w?D=_-2*(0!==e||0!==t?e+t:oC(g.left,g.right)):A=S-2*(0!==r||0!==n?r+n:oC(g.top,g.bottom))}await p({...t,availableWidth:D,availableHeight:A});let $=await h.getDimensions(d.floating);return _!==$.width||S!==$.height?{reset:{rects:!0}}:{}}}},iv=e=>({name:"arrow",options:e,async fn(t){let{x:r,y:n,placement:o,rects:i,platform:c,elements:u,middlewareData:h}=t,{element:d,padding:p=0}=oI(e,t)||{};if(null==d)return{};let m=oH(p),g={x:r,y:n},b=oD(o$(o)),v=oz(b),w=await c.getDimensions(d),_="y"===b,S=_?"clientHeight":"clientWidth",C=i.reference[v]+i.reference[b]-g[b]-i.floating[v],x=g[b]-i.reference[b],T=await (null==c.getOffsetParent?void 0:c.getOffsetParent(d)),E=T?T[S]:0;E&&await (null==c.isElement?void 0:c.isElement(T))||(E=u.floating[S]||i.floating[v]);let O=E/2-w[v]/2-1,A=oS(m[_?"top":"left"],O),D=oS(m[_?"bottom":"right"],O),$=E-w[v]-D,P=E/2-w[v]/2+(C/2-x/2),G=oC(A,oS(P,$)),W=!h.arrow&&null!=oN(o)&&P!==G&&i.reference[v]/2-(P<A?A:D)-w[v]/2<0,F=W?P<A?P-A:P-$:0;return{[b]:g[b]+F,data:{[b]:G,centerOffset:P-G-F,...W&&{alignmentOffset:F}},reset:W}}}),iy=(e,t,r)=>{let n=new Map,o={platform:im,...r},i={...o.platform,_c:n};return oB(e,t,{...o,platform:i})},iw=r9(class extends directive_i{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){for(let r in this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),t)t[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(t)}let r=e.element.classList;for(let e of this.st)e in t||(r.remove(e),this.st.delete(e));for(let e in t){let n=!!t[e];n===this.st.has(e)||this.nt?.has(e)||(n?(r.add(e),this.st.add(e)):(r.remove(e),this.st.delete(e)))}return eI}});function i_(e){var t=e;for(let e=t;e;e=iS(e))if(e instanceof Element&&"none"===getComputedStyle(e).display)return null;for(let e=iS(t);e;e=iS(e)){if(!(e instanceof Element))continue;let t=getComputedStyle(e);if("contents"!==t.display&&("static"!==t.position||o2(t)||"BODY"===e.tagName))return e}return null}function iS(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}var iC=class extends o_{constructor(){super(...arguments),this.localize=new or(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){let e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),r=this.placement.includes("top")||this.placement.includes("bottom"),n=0,o=0,i=0,c=0,u=0,h=0,d=0,p=0;r?e.top<t.top?(n=e.left,o=e.bottom,i=e.right,c=e.bottom,u=t.left,h=t.top,d=t.right,p=t.top):(n=t.left,o=t.bottom,i=t.right,c=t.bottom,u=e.left,h=e.top,d=e.right,p=e.top):e.left<t.left?(n=e.right,o=e.top,i=t.left,c=t.top,u=e.right,h=e.bottom,d=t.left,p=t.bottom):(n=t.right,o=t.top,i=e.left,c=e.top,u=t.right,h=t.bottom,d=e.left,p=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${n}px`),this.style.setProperty("--hover-bridge-top-left-y",`${o}px`),this.style.setProperty("--hover-bridge-top-right-x",`${i}px`),this.style.setProperty("--hover-bridge-top-right-y",`${c}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${u}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${h}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${d}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${p}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){let e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else{var e;this.anchor instanceof Element||null!==(e=this.anchor)&&"object"==typeof e&&"getBoundingClientRect"in e&&(!("contextElement"in e)||e.contextElement instanceof Element)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]')}this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&this.active&&(this.cleanup=function(e,t,r,n){let o;void 0===n&&(n={});let{ancestorScroll:i=!0,ancestorResize:c=!0,elementResize:u="function"==typeof ResizeObserver,layoutShift:h="function"==typeof IntersectionObserver,animationFrame:d=!1}=n,p=it(e),m=i||c?[...p?o9(p):[],...o9(t)]:[];m.forEach(e=>{i&&e.addEventListener("scroll",r,{passive:!0}),c&&e.addEventListener("resize",r)});let g=p&&h?function(e,t){let r,n=null,o=oY(e);function i(){var e;clearTimeout(r),null==(e=n)||e.disconnect(),n=null}return!function c(u,h){void 0===u&&(u=!1),void 0===h&&(h=1),i();let d=e.getBoundingClientRect(),{left:p,top:m,width:g,height:b}=d;if(u||t(),!g||!b)return;let v=oR(m),w=oR(o.clientWidth-(p+g)),_={rootMargin:-v+"px "+-w+"px "+-oR(o.clientHeight-(m+b))+"px "+-oR(p)+"px",threshold:oC(0,oS(1,h))||1},S=!0;function C(t){let n=t[0].intersectionRatio;if(n!==h){if(!S)return c();n?c(!1,n):r=setTimeout(()=>{c(!1,1e-7)},1e3)}1!==n||ig(d,e.getBoundingClientRect())||c(),S=!1}try{n=new IntersectionObserver(C,{..._,root:o.ownerDocument})}catch{n=new IntersectionObserver(C,_)}n.observe(e)}(!0),i}(p,r):null,b=-1,v=null;u&&(v=new ResizeObserver(e=>{let[n]=e;n&&n.target===p&&v&&(v.unobserve(t),cancelAnimationFrame(b),b=requestAnimationFrame(()=>{var e;null==(e=v)||e.observe(t)})),r()}),p&&!d&&v.observe(p),v.observe(t));let w=d?is(e):null;return d&&function t(){let n=is(e);w&&!ig(w,n)&&r(),w=n,o=requestAnimationFrame(t)}(),r(),()=>{var e;m.forEach(e=>{i&&e.removeEventListener("scroll",r),c&&e.removeEventListener("resize",r)}),null==g||g(),null==(e=v)||e.disconnect(),v=null,d&&cancelAnimationFrame(o)}}(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){var e,t,r;if(!this.active||!this.anchorEl)return;let n=[{name:"offset",options:e={mainAxis:this.distance,crossAxis:this.skidding},async fn(t){var r,n;let{x:o,y:i,placement:c,middlewareData:u}=t,h=await oj(t,e);return c===(null==(r=u.offset)?void 0:r.placement)&&null!=(n=u.arrow)&&n.alignmentOffset?{}:{x:o+h.x,y:i+h.y,data:{...h,placement:c}}}}];this.sync?n.push(ib({apply:({rects:e})=>{let t="width"===this.sync||"both"===this.sync,r="height"===this.sync||"both"===this.sync;this.popup.style.width=t?`${e.reference.width}px`:"",this.popup.style.height=r?`${e.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&n.push({name:"flip",options:t={boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding},async fn(e){var r,n,o,i,c,u;let{placement:h,middlewareData:d,rects:p,initialPlacement:m,platform:g,elements:b}=e,{mainAxis:v=!0,crossAxis:w=!0,fallbackPlacements:_,fallbackStrategy:S="bestFit",fallbackAxisSideDirection:C="none",flipAlignment:x=!0,...T}=oI(t,e);if(null!=(r=d.arrow)&&r.alignmentOffset)return{};let E=oA(h),O=o$(m),A=oA(m)===m,D=await (null==g.isRTL?void 0:g.isRTL(b.floating)),$=_||(A||!x?[oL(m)]:function(e){let t=oL(e);return[oP(e),t,oP(t)]}(m)),P="none"!==C;!_&&P&&$.push(...function(e,t,r,n){let o=oN(e),i=function(e,t,r){let n=["left","right"],o=["right","left"];switch(e){case"top":case"bottom":if(r)return t?o:n;return t?n:o;case"left":case"right":return t?["top","bottom"]:["bottom","top"];default:return[]}}(oA(e),"start"===r,n);return o&&(i=i.map(e=>e+"-"+o),t&&(i=i.concat(i.map(oP)))),i}(m,x,C,D));let G=[m,...$],W=await oU(e,T),F=[],B=(null==(n=d.flip)?void 0:n.overflows)||[];if(v&&F.push(W[E]),w){let e=function(e,t,r){void 0===r&&(r=!1);let n=oN(e),o=oD(o$(e)),i=oz(o),c="x"===o?n===(r?"end":"start")?"right":"left":"start"===n?"bottom":"top";return t.reference[i]>t.floating[i]&&(c=oL(c)),[c,oL(c)]}(h,p,D);F.push(W[e[0]],W[e[1]])}if(B=[...B,{placement:h,overflows:F}],!F.every(e=>e<=0)){let e=((null==(o=d.flip)?void 0:o.index)||0)+1,t=G[e];if(t){let r="alignment"===w&&O!==o$(t),n=(null==(c=B[0])?void 0:c.overflows[0])>0;if(!r||n)return{data:{index:e,overflows:B},reset:{placement:t}}}let r=null==(i=B.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:i.placement;if(!r)switch(S){case"bestFit":{let e=null==(u=B.filter(e=>{if(P){let t=o$(e.placement);return t===O||"y"===t}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:u[0];e&&(r=e);break}case"initialPlacement":r=m}if(h!==r)return{reset:{placement:r}}}return{}}}),this.shift&&n.push({name:"shift",options:r={boundary:this.shiftBoundary,padding:this.shiftPadding},async fn(e){let{x:t,y:n,placement:o}=e,{mainAxis:i=!0,crossAxis:c=!1,limiter:u={fn:e=>{let{x:t,y:r}=e;return{x:t,y:r}}},...h}=oI(r,e),d={x:t,y:n},p=await oU(e,h),m=o$(oA(o)),g=oD(m),b=d[g],v=d[m];if(i){let e="y"===g?"top":"left",t="y"===g?"bottom":"right",r=b+p[e],n=b-p[t];b=oC(r,oS(b,n))}if(c){let e="y"===m?"top":"left",t="y"===m?"bottom":"right",r=v+p[e],n=v-p[t];v=oC(r,oS(v,n))}let w=u.fn({...e,[g]:b,[m]:v});return{...w,data:{x:w.x-t,y:w.y-n,enabled:{[g]:i,[m]:c}}}}}),this.autoSize?n.push(ib({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${t}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${e}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&n.push(iv({element:this.arrowEl,padding:this.arrowPadding}));let o="absolute"===this.strategy?e=>im.getOffsetParent(e,i_):im.getOffsetParent;iy(this.anchorEl,this.popup,{placement:this.placement,middleware:n,strategy:this.strategy,platform:of(op({},im),{getOffsetParent:o})}).then(({x:e,y:t,middlewareData:r,placement:n})=>{let o="rtl"===this.localize.dir(),i={top:"bottom",right:"left",bottom:"top",left:"right"}[n.split("-")[0]];if(this.setAttribute("data-current-placement",n),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){let e=r.arrow.x,t=r.arrow.y,n="",c="",u="",h="";if("start"===this.arrowPlacement){let r="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";n="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",c=o?r:"",h=o?"":r}else if("end"===this.arrowPlacement){let r="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";c=o?"":r,h=o?r:"",u="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(h="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":"",n="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":""):(h="number"==typeof e?`${e}px`:"",n="number"==typeof t?`${t}px`:"");Object.assign(this.arrowEl.style,{top:n,right:c,bottom:u,left:h,[i]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return eE`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${iw({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${iw({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?eE`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};iC.styles=[on,n2],om([eq(".popup")],iC.prototype,"popup",2),om([eq(".popup__arrow")],iC.prototype,"arrowEl",2),om([ej()],iC.prototype,"anchor",2),om([ej({type:Boolean,reflect:!0})],iC.prototype,"active",2),om([ej({reflect:!0})],iC.prototype,"placement",2),om([ej({reflect:!0})],iC.prototype,"strategy",2),om([ej({type:Number})],iC.prototype,"distance",2),om([ej({type:Number})],iC.prototype,"skidding",2),om([ej({type:Boolean})],iC.prototype,"arrow",2),om([ej({attribute:"arrow-placement"})],iC.prototype,"arrowPlacement",2),om([ej({attribute:"arrow-padding",type:Number})],iC.prototype,"arrowPadding",2),om([ej({type:Boolean})],iC.prototype,"flip",2),om([ej({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(e=>e.trim()).filter(e=>""!==e),toAttribute:e=>e.join(" ")}})],iC.prototype,"flipFallbackPlacements",2),om([ej({attribute:"flip-fallback-strategy"})],iC.prototype,"flipFallbackStrategy",2),om([ej({type:Object})],iC.prototype,"flipBoundary",2),om([ej({attribute:"flip-padding",type:Number})],iC.prototype,"flipPadding",2),om([ej({type:Boolean})],iC.prototype,"shift",2),om([ej({type:Object})],iC.prototype,"shiftBoundary",2),om([ej({attribute:"shift-padding",type:Number})],iC.prototype,"shiftPadding",2),om([ej({attribute:"auto-size"})],iC.prototype,"autoSize",2),om([ej()],iC.prototype,"sync",2),om([ej({type:Object})],iC.prototype,"autoSizeBoundary",2),om([ej({attribute:"auto-size-padding",type:Number})],iC.prototype,"autoSizePadding",2),om([ej({attribute:"hover-bridge",type:Boolean})],iC.prototype,"hoverBridge",2),iC.define("sl-popup");var ix=Object.defineProperty,ik=Object.getOwnPropertyDescriptor,iR=(e,t,r,n)=>{for(var o,i=n>1?void 0:n?ik(t,r):t,c=e.length-1;c>=0;c--)(o=e[c])&&(i=(n?o(t,r,i):o(i))||i);return n&&i&&ix(t,r,i),i};let iT=class extends GlElement{constructor(){super(),this.placement="bottom",this.disabled=!1,this.distance=8,this.open=!1,this.arrow=!0,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleTriggerBlur=e=>{this.open&&this.hasTrigger("focus")&&(e.relatedTarget&&this.contains(e.relatedTarget)||this.hide())},this.handleTriggerClick=e=>{if(this.hasTrigger("click"))if(this.open&&"hover"!==this._triggeredBy){if(this._skipHideOnClick){this._skipHideOnClick=!1;return}if(e.composedPath().includes(this.body))return;this.hide()}else this.show("click")},this._skipHideOnClick=!1,this.handleTriggerMouseDown=()=>{this.hasTrigger("click")&&this.hasTrigger("focus")&&!this.matches(":focus-within")?this._skipHideOnClick=!0:this._skipHideOnClick=!1},this.handleTriggerFocus=()=>{this.hasTrigger("focus")&&(this.open&&"hover"!==this._triggeredBy&&!this.hasPopupFocus()?this.hide():this.show("focus"))},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handlePopupBlur=e=>{let t=e.composedPath();t.includes(this)||t.includes(this.body)||this.hide()},this.handleWebviewBlur=()=>{this.hide()},this.handleWebviewMouseDown=e=>{let t=e.composedPath();t.includes(this)||t.includes(this.body)||this.hide()},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);let e=tF(getComputedStyle(this).getPropertyValue("--show-delay"));this.hoverTimeout=setTimeout(()=>this.show("hover"),e)}},this.handleMouseOut=e=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);let t=e.composedPath();if(t[t.length-2]===this||this.hasPopupFocus()||"hover"!==this._triggeredBy)return;let r=tF(getComputedStyle(this).getPropertyValue("--hide-delay"));this.hoverTimeout=setTimeout(()=>this.hide(),r)}},this.addEventListener("blur",this.handleTriggerBlur,!0),this.addEventListener("focus",this.handleTriggerFocus,!0),this.addEventListener("click",this.handleTriggerClick),this.addEventListener("mousedown",this.handleTriggerMouseDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}static closeOthers(e){for(let t of iT.openPopovers)t===e||t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINS||t.hide()}get currentPlacement(){return this.popup?.getAttribute("data-current-placement")??this.placement}disconnectedCallback(){this.closeWatcher?.destroy(),document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleWebviewMouseDown),iT.openPopovers.delete(this),super.disconnectedCallback()}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}render(){return eE`<sl-popup
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
		</sl-popup>`}async show(e){if((null==this._triggeredBy||"hover"!==e)&&(this._triggeredBy=e),!this.open)return iT.closeOthers(this),this.open=!0,iT.openPopovers.add(this),tB(this,"gl-popover-after-show")}async hide(){if(this._triggeredBy=void 0,this.open)return this.open=!1,iT.openPopovers.delete(this),tB(this,"gl-popover-after-hide")}hasPopupFocus(){return this.matches(':has([slot="content"]:focus-within)')}hasTrigger(e){return this.trigger.split(" ").includes(e)}handleOpenChange(){this.open?this.disabled||(this.emit("gl-popover-show"),"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>void this.hide()):document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("focusin",this.handlePopupBlur),window.addEventListener("webview-blur",this.handleWebviewBlur,!1),(this.hasTrigger("click")||this.hasTrigger("focus"))&&document.addEventListener("mousedown",this.handleWebviewMouseDown),this.body.hidden=!1,this.popup.active=!0,this.popup.reposition(),this.emit("gl-popover-after-show")):(document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("mousedown",this.handleWebviewMouseDown),this.emit("gl-popover-hide"),this.closeWatcher?.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),this.popup.active=!1,this.body.hidden=!0,this.emit("gl-popover-after-hide"))}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}};iT.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},iT.openPopovers=new Set,iT.styles=[nJ,B`
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
		`],iR([eq("#popover")],iT.prototype,"body",2),iR([eq("sl-popup")],iT.prototype,"popup",2),iR([ej({reflect:!0})],iT.prototype,"placement",2),iR([ej({type:Object})],iT.prototype,"anchor",2),iR([ej({reflect:!0,type:Boolean})],iT.prototype,"disabled",2),iR([ej({type:Number})],iT.prototype,"distance",2),iR([ej({reflect:!0,type:Boolean})],iT.prototype,"open",2),iR([ej({reflect:!0,type:Boolean})],iT.prototype,"arrow",2),iR([ej({type:Number})],iT.prototype,"skidding",2),iR([ej()],iT.prototype,"trigger",2),iR([ej({type:Boolean})],iT.prototype,"hoist",2),iR([ej({reflect:!0})],iT.prototype,"appearance",2),iR([tl("open",{afterFirstUpdate:!0})],iT.prototype,"handleOpenChange",1),iR([tl(["distance","hoist","placement","skidding"])],iT.prototype,"handleOptionsChange",1),iR([tl("disabled")],iT.prototype,"handleDisabledChange",1),iT=iR([eF("gl-popover")],iT);var iE=new Map,iO=new WeakMap;function iM(e,t){return"rtl"===t.toLowerCase()?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function iI(e,t){iE.set(e,null!=t?t:{keyframes:[],options:{duration:0}})}function iA(e,t,r){let n=iO.get(e);if(null==n?void 0:n[t])return iM(n[t],r.dir);let o=iE.get(t);return o?iM(o,r.dir):{keyframes:[],options:{duration:0}}}let unsafe_html_e=class unsafe_html_e extends directive_i{constructor(e){if(super(e),this.it=eA,2!==e.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===eA||null==e)return this._t=void 0,this.it=e;if(e===eI)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};unsafe_html_e.directiveName="unsafeHTML",unsafe_html_e.resultType=1;let iN=r9(unsafe_html_e);var iD=B`
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
`;function iz(e,t){return new Promise(r=>{e.addEventListener(t,function n(o){o.target===e&&(e.removeEventListener(t,n),r())})})}function i$(e,t,r){return new Promise(n=>{if((null==r?void 0:r.duration)===1/0)throw Error("Promise-based animations must be finite.");let o=e.animate(t,of(op({},r),{duration:window.matchMedia("(prefers-reduced-motion: reduce)").matches?0:r.duration}));o.addEventListener("cancel",n,{once:!0}),o.addEventListener("finish",n,{once:!0})})}function iP(e){return(e=e.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?1e3*parseFloat(e):parseFloat(e)}function iL(e){return Promise.all(e.getAnimations().map(e=>new Promise(t=>{e.cancel(),requestAnimationFrame(t)})))}function iH(e,t){let r=op({waitUntilFirstUpdate:!1},t);return(t,n)=>{let{update:o}=t,i=Array.isArray(e)?e:[e];t.update=function(e){i.forEach(t=>{if(e.has(t)){let o=e.get(t),i=this[t];o!==i&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[n](o,i)}}),o.call(this,e)}}}var iG=class extends o_{constructor(){super(),this.localize=new or(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){let e=iP(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){let e=iP(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;super.disconnectedCallback(),null==(e=this.closeWatcher)||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?(null==(e=this.closeWatcher)||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await iL(this.body),this.body.hidden=!1,this.popup.active=!0;let{keyframes:t,options:r}=iA(this,"tooltip.show",{dir:this.localize.dir()});await i$(this.popup.popup,t,r),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await iL(this.body);let{keyframes:e,options:r}=iA(this,"tooltip.hide",{dir:this.localize.dir()});await i$(this.popup.popup,e,r),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,iz(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,iz(this,"sl-after-hide")}render(){return eE`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${iw({tooltip:!0,"tooltip--open":this.open})}
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
    `}};iG.styles=[on,iD],iG.dependencies={"sl-popup":iC},om([eq("slot:not([name])")],iG.prototype,"defaultSlot",2),om([eq(".tooltip__body")],iG.prototype,"body",2),om([eq("sl-popup")],iG.prototype,"popup",2),om([ej()],iG.prototype,"content",2),om([ej()],iG.prototype,"placement",2),om([ej({type:Boolean,reflect:!0})],iG.prototype,"disabled",2),om([ej({type:Number})],iG.prototype,"distance",2),om([ej({type:Boolean,reflect:!0})],iG.prototype,"open",2),om([ej({type:Number})],iG.prototype,"skidding",2),om([ej()],iG.prototype,"trigger",2),om([ej({type:Boolean})],iG.prototype,"hoist",2),om([iH("open",{waitUntilFirstUpdate:!0})],iG.prototype,"handleOpenChange",1),om([iH(["content","distance","hoist","placement","skidding"])],iG.prototype,"handleOptionsChange",1),om([iH("disabled")],iG.prototype,"handleDisabledChange",1),iI("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),iI("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}}),iG.define("sl-tooltip");var iW=Object.defineProperty,iF=Object.getOwnPropertyDescriptor,iB=(e,t,r,n)=>{for(var o,i=n>1?void 0:n?iF(t,r):t,c=e.length-1;c>=0;c--)(o=e[c])&&(i=(n?o(t,r,i):o(i))||i);return n&&i&&iW(t,r,i),i};iI("tooltip.show",null),iI("tooltip.hide",null);let iU=class extends lit_element_i{constructor(){super(...arguments),this.placement="bottom",this.disabled=!1}firstUpdated(){this.observer=new MutationObserver(e=>{for(let t of e)if("attributes"===t.type&&"data-current-placement"===t.attributeName){let e=t.target.getAttribute("data-current-placement");e?this.setAttribute("data-current-placement",e):this.removeAttribute("data-current-placement")}});let e=this.shadowRoot?.querySelector("sl-tooltip")?.shadowRoot;e&&this.observer.observe(e,{attributes:!0,attributeFilter:["data-current-placement"],subtree:!0})}disconnectedCallback(){this.observer?.disconnect(),super.disconnectedCallback()}render(){var e;return eE`<sl-tooltip
			.placement=${this.placement}
			?disabled=${this.disabled}
			.distance=${this.distance??eA}
			hoist
		>
			<slot></slot>
			<div slot="content">
				<slot name="content">${e=this.content,e?.includes(`
`)?iN(e.replace(/\n\n/g,"<hr>").replace(/\n/g,"<br>")):e}</slot>
			</div>
		</sl-tooltip>`}};iU.styles=B`
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
	`,iB([ej()],iU.prototype,"content",2),iB([ej({reflect:!0})],iU.prototype,"placement",2),iB([ej({type:Boolean})],iU.prototype,"disabled",2),iB([ej({type:Number})],iU.prototype,"distance",2),iB([ej({type:Boolean})],iU.prototype,"hoist",2),iU=iB([eF("gl-tooltip")],iU);let private_async_helpers_s=class private_async_helpers_s{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}};let private_async_helpers_i=class private_async_helpers_i{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}};let ij=e=>!ne(e)&&"function"==typeof e.then;let until_c=class until_c extends async_directive_f{constructor(){super(...arguments),this._$Cwt=0x3fffffff,this._$Cbt=[],this._$CK=new private_async_helpers_s(this),this._$CX=new private_async_helpers_i}render(...e){return e.find(e=>!ij(e))??eI}update(e,t){let r=this._$Cbt,n=r.length;this._$Cbt=t;let o=this._$CK,i=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){let c=t[e];if(!ij(c))return this._$Cwt=e,c;e<n&&c===r[e]||(this._$Cwt=0x3fffffff,n=0,Promise.resolve(c).then(async e=>{for(;i.get();)await i.get();let t=o.deref();if(void 0!==t){let r=t._$Cbt.indexOf(c);r>-1&&r<t._$Cwt&&(t._$Cwt=r,t.setValue(e))}}))}return eI}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};let iZ=r9(until_c);var iV=Object.defineProperty,iq=Object.getOwnPropertyDescriptor,iY=(e,t,r,n)=>{for(var o,i=n>1?void 0:n?iq(t,r):t,c=e.length-1;c>=0;c--)(o=e[c])&&(i=(n?o(t,r,i):o(i))||i);return n&&i&&iV(t,r,i),i};let iK=class extends lit_element_i{constructor(){super(...arguments),this.type="info",this._hasPromo=!1}get hasPromo(){return this._hasPromo}set hasPromo(e){this._hasPromo=e}render(){return eE`${iZ(this.promoPromise?.then(e=>this.renderPromo(e)),eA)}`}renderPromo(e){if(!e?.content?.webview){this.hasPromo=!1;return}let t=e.content.webview;switch(this.type){case"info":if(t.info)return this.hasPromo=!0,eE`<p class="promo" part="text">${iN(t.info.html)}</p>`;break;case"link":if(t.link)return this.hasPromo=!0,eE`<a
						class="link"
						part="link"
						href="${this.getCommandUrl(e)}"
						title="${nH(t.link.title)}"
						>${iN(t.link.html)}</a
					>`}return this.hasPromo=!1,eA}getCommandUrl(e){let t;return e?.content?.webview?.link?.command?.startsWith("command:")&&(t=e.content.webview.link.command.substring(8)),nj(t??"gitlens.plus.upgrade",this.source)}focus(){this._focusable?.focus()}};iK.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},iK.styles=[B`
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
				${nV}
			}

			.link:hover {
				color: inherit;
				text-decoration: underline;
			}
		`],iY([eq('a,button,[tabindex="0"]')],iK.prototype,"_focusable",2),iY([ej({type:Object})],iK.prototype,"promoPromise",2),iY([ej({type:Object})],iK.prototype,"source",2),iY([ej({reflect:!0,type:String})],iK.prototype,"type",2),iY([ej({type:Boolean,reflect:!0,attribute:"has-promo"})],iK.prototype,"hasPromo",1),iK=iY([eF("gl-promo")],iK);var iQ=Object.defineProperty,iX=Object.getOwnPropertyDescriptor,iJ=(e,t,r,n)=>{for(var o,i=n>1?void 0:n?iX(t,r):t,c=e.length-1;c>=0;c--)(o=e[c])&&(i=(n?o(t,r,i):o(i))||i);return n&&i&&iQ(t,r,i),i};let i0=class extends lit_element_i{constructor(){super(...arguments),this.cloud=!1,this.placement="bottom",this.preview=!1}get daysRemaining(){var e,t,r,n;if(null==this.subscription)return 0;return e=this.subscription,t="days",r=e.plan.effective.expiresOn,n=t,(null!=r?function(e,t,r,n){let o=("number"==typeof t?t:t.getTime())-("number"==typeof e?e:e.getTime()),i=n??Math.floor;switch(r){case"days":return i(o/864e5);case"hours":return i(o/36e5);case"minutes":return i(o/6e4);case"seconds":return i(o/1e3);default:return o}}(Date.now(),new Date(r),n,Math.round):void 0)??0}get state(){return this.subscription?.state}render(){return eE`
			<gl-popover placement=${this.placement} hoist>
				<span slot="anchor" class="badge" tabindex="0">${this.renderBadge()}</span>
				<div slot="content" class="badge-popup" tabindex="-1">
					${this.renderPopoverHeader()}${this.renderPopoverContent()}
				</div>
			</gl-popover>
		`}renderBadge(){let e=this.preview?"Preview":"Pro";if(null!=this.subscription)if(this.state===nB.VerificationRequired)return eE`${e} <code-icon class="badge-icon" icon="warning" size="10"></code-icon>`;else{var t;if(nU(this.subscription)||this.cloud&&null!=this.subscription.account)return eE`${e} <code-icon class="badge-icon" icon="check" size="10"></code-icon>`;if(null!=(t=this.state)&&(t===nB.ProPreview||t===nB.ProTrial))return eE`${e} <code-icon class="badge-icon" icon="clock" size="10"></code-icon>`}return e}renderPopoverHeader(){let e=eE`<span class="popup-title">${this.preview?"Preview feature":"Pro feature"}</span>`;return this.state===nB.Paid?eE`<div class="popup-header">${e}</div>`:this.cloud?this.preview?eE`<div class="popup-header">
					${e}<span class="popup-subtitle"
						>Requires an account and may require GitLens Pro in the future</span
					>
				</div>`:eE`<div class="popup-header">
				${e}<span class="popup-subtitle"> Requires GitLens Pro</span>
			</div>`:this.preview?eE`<div class="popup-header">
				${e}<span class="popup-subtitle">May require GitLens Pro in the future</span>
			</div>`:eE`<div class="popup-header">
			${e}<span class="popup-subtitle"> Requires GitLens Pro for use on privately-hosted repos</span>
		</div>`}renderPopoverContent(){let e;if(null==this.subscription)return eA;switch(this.state){case nB.Paid:var t;e=eE`<p>
					Your
					<gl-tooltip hoist content="Show Account view">
						<a href="${nj("gitlens.showAccountView")}"
							>${t=this.subscription?.plan.actual.id??nF.Pro,`GitLens ${function(e){switch(e){case nF.Pro:return"Pro";case nF.Advanced:return"Advanced";case nF.Business:return"Business";case nF.Enterprise:return"Enterprise";default:return"Community"}}(t)}`}</a
						>
					</gl-tooltip>
					plan provides access to all Pro features.
				</p>`;break;case nB.VerificationRequired:e=eE`<p>You must verify your email before you can access Pro features.</p>
					<div class="actions">
						<gl-button
							density="tight"
							href="${nj("gitlens.plus.resendVerification",this.source)}"
							>Resend Email</gl-button
						>
						<gl-button
							appearance="secondary"
							density="tight"
							href="${nj("gitlens.plus.validate",this.source)}"
							><code-icon icon="refresh"></code-icon
						></gl-button>
					</div>`;break;case nB.ProTrial:{let t=this.daysRemaining;e=eE`<p>
						You have
						<strong>${t<1?"<1 day":tS("day",t,{infix:" more "})} left</strong>
						in your Pro trial. Once your trial ends, you will only be able to use Pro features on
						publicly-hosted repos.
					</p>
					${this.renderUpgradeActions()}`;break}case nB.ProTrialExpired:e=eE`<p>
						Your Pro trial has ended. You can now only use Pro features on publicly-hosted repos.
					</p>
					${this.renderUpgradeActions(eE`<p>Please upgrade for full access to all GitLens Pro features:</p>`)}`;break;case nB.ProTrialReactivationEligible:e=eE`<p>
						Reactivate your Pro trial and experience all the new Pro features — free for another
						${tS("day",14)}!
					</p>
					<div class="actions center">
						<gl-button
							density="tight"
							href="${nj("gitlens.plus.reactivateProTrial",this.source)}"
							tooltip="Reactivate your Pro trial for another ${tS("day",14)}"
							>Reactivate Pro Trial</gl-button
						>
					</div>`;break;default:if(!this.cloud&&this.state===nB.ProPreview){let t=this.daysRemaining;e=eE`<p>
							You have
							<strong>${t<1?"<1 day":tS("day",t,{infix:" more "})} left</strong>
							to preview
							<gl-tooltip hoist content="Pro features that do not require an account"
								><span class="hint">local</span></gl-tooltip
							>
							Pro features.
						</p>
						${this.renderStartTrialActions()}`;break}e=eE`<p>
						You only have access to
						<gl-tooltip hoist content="Pro features that do not require an account"
							><span class="hint">local</span></gl-tooltip
						>
						Pro features on publicly-hosted repos.
					</p>
					${this.renderStartTrialActions()}`}return eE`<div class="popup-content">${e}</div>`}renderStartTrialActions(){return eE`<div class="actions">
			<p>For access to all Pro features:</p>
			<gl-button density="tight" href="${nj("gitlens.plus.signUp",this.source)}"
				>Start ${14}-day Pro Trial</gl-button
			>
			&nbsp;or
			<a href="${nj("gitlens.plus.login",this.source)}" title="Sign In">sign in</a>
		</div>`}renderUpgradeActions(e){return eE`<div class="actions">
			${e??eA}
			<gl-button
				density="tight"
				href="${nj("gitlens.plus.upgrade",{plan:nF.Pro,...this.source??{source:"feature-badge"}})}"
				>Upgrade to Pro</gl-button
			>
			${this.renderPromo()}
		</div>`}renderPromo(){return eE`<gl-promo
			.promoPromise=${this.promos.getApplicablePromo("badge")}
			.source=${this.source}
		></gl-promo>`}};i0.styles=[nK,nQ,B`
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
				${F(nV)}
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
		`],iJ([ej({type:Boolean})],i0.prototype,"cloud",2),iJ([ej({reflect:!0})],i0.prototype,"placement",2),iJ([ej({type:Boolean})],i0.prototype,"preview",2),iJ([D({context:"promos"})],i0.prototype,"promos",2),iJ([ej({type:Object})],i0.prototype,"source",2),iJ([ej({attribute:!1})],i0.prototype,"subscription",2),i0=iJ([eF("gl-feature-badge")],i0);var i1=Object.defineProperty,i2=Object.getOwnPropertyDescriptor,i3=(e,t,r,n)=>{for(var o,i=n>1?void 0:n?i2(t,r):t,c=e.length-1;c>=0;c--)(o=e[c])&&(i=(n?o(t,r,i):o(i))||i);return n&&i&&i1(t,r,i),i};let i6=class extends lit_element_i{constructor(){super(...arguments),this.disabled=!1,this.full=!1,this.tooltipPlacement="bottom"}connectedCallback(){super.connectedCallback(),this.setAttribute("role",this.href?"link":"button"),this.disabled&&this.setAttribute("aria-disabled",this.disabled.toString())}willUpdate(e){if(e.has("href")&&this.setAttribute("role",this.href?"link":"button"),e.has("disabled")){let t=e.get("disabled");t?this.setAttribute("aria-disabled",t.toString()):this.removeAttribute("aria-disabled")}super.willUpdate(e)}render(){return this.tooltip?eE`<gl-tooltip .content=${this.tooltip} placement=${nH(this.tooltipPlacement)}
				>${this.renderControl()}</gl-tooltip
			>`:this.querySelectorAll('[slot="tooltip"]').length>0?eE`<gl-tooltip placement=${nH(this.tooltipPlacement)}>
				${this.renderControl()}
				<slot name="tooltip" slot="content"></slot>
			</gl-tooltip>`:this.renderControl()}renderControl(){return null!=this.href?eE`<a
				class="control"
				tabindex="${nH(!1===this.disabled?void 0:-1)}"
				href=${this.href}
				@keypress=${e=>this.onLinkKeypress(e)}
				><slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot
			></a>`:eE`<button
			class="control"
			role=${nH(this.role)}
			aria-checked=${nH(this.ariaChecked)}
			?disabled=${this.disabled}
		>
			<slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot>
		</button>`}onLinkKeypress(e){" "===e.key&&this.control.click()}focus(e){this.control.focus(e)}blur(){this.control.blur()}click(){this.control.click()}};i6.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},i6.styles=[nK,B`
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
				${nY}
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
		`],i3([eq(".control")],i6.prototype,"control",2),i3([ej({reflect:!0})],i6.prototype,"appearance",2),i3([ej({type:Boolean,reflect:!0})],i6.prototype,"disabled",2),i3([ej({reflect:!0})],i6.prototype,"density",2),i3([ej({type:Boolean,reflect:!0})],i6.prototype,"full",2),i3([ej()],i6.prototype,"href",2),i3([ej()],i6.prototype,"tooltip",2),i3([ej()],i6.prototype,"tooltipPlacement",2),i6=i3([eF("gl-button")],i6);var i4=Object.defineProperty,i8=Object.getOwnPropertyDescriptor,i9=(e,t,r,n)=>{for(var o,i=n>1?void 0:n?i8(t,r):t,c=e.length-1;c>=0;c--)(o=e[c])&&(i=(n?o(t,r,i):o(i))||i);return n&&i&&i4(t,r,i),i};let i7=class extends lit_element_i{firstUpdated(){"alert"===this.appearance&&queueMicrotask(()=>this.button.focus())}render(){let e=null==this.state;if(this.hidden=e,e)return;let t=(this.appearance??"alert")==="alert"?"alert":void 0;switch(this.state){case nB.VerificationRequired:return eE`
					<slot name="feature"></slot>
					<p class="actions">
						<gl-button
							class="inline"
							appearance="${nH(t)}"
							href="${nj("gitlens.plus.resendVerification",this.source)}"
							>Resend Email</gl-button
						>
						<gl-button
							class="inline"
							appearance="${nH(t)}"
							href="${nj("gitlens.plus.validate",this.source)}"
							><code-icon icon="refresh"></code-icon
						></gl-button>
					</p>
					<p>You must verify your email before you can continue.</p>
				`;case nB.Community:case nB.ProPreviewExpired:if(this.featurePreview&&"expired"!==function(e){let t=e?.usages;if(!t?.length)return"eligible";let r=(new Date(t[t.length-1].expiresOn).getTime()-new Date().getTime())/36e5;return t.length<=3&&r>0&&r<24?"active":"expired"}(this.featurePreview))return eE`${this.renderFeaturePreview(this.featurePreview)}`;return eE`<slot name="feature"></slot>
					<p>
						Use on privately-hosted repos requires
						<a href="${e0.communityVsPro}">GitLens Pro</a>.
					</p>
					<p class="actions-row">
						<gl-button
							class="inline"
							appearance="${nH(t)}"
							href="${nj("gitlens.plus.signUp",this.source)}"
							>&nbsp;Try GitLens Pro&nbsp;</gl-button
						><span
							>or
							<a href="${nj("gitlens.plus.login",this.source)}" title="Sign In"
								>sign in</a
							></span
						>
					</p>
					<p>
						Get ${tS("day",14)} of
						<a href="${e0.communityVsPro}">GitLens Pro</a> for free — no credit card required.
					</p>`;case nB.ProTrialExpired:return eE`<slot name="feature"></slot>
					<p>Use on privately-hosted repos requires <a href="${e0.communityVsPro}">GitLens Pro</a>.</p>
					<p class="actions-row">
						<gl-button
							class="inline"
							appearance="${nH(t)}"
							href="${nj("gitlens.plus.upgrade",{plan:nF.Pro,...this.source??{source:"feature-gate"}})}"
							>Upgrade to Pro</gl-button
						>
					</p>
					<p>${this.renderPromo()}</p>`;case nB.ProTrialReactivationEligible:return eE`<slot name="feature"></slot>
					<p class="actions-row">
						<gl-button
							class="inline"
							appearance="${nH(t)}"
							href="${nj("gitlens.plus.reactivateProTrial",this.source)}"
							>Continue</gl-button
						>
					</p>
					<p>
						Reactivate your GitLens Pro trial and experience
						${this.featureWithArticleIfNeeded?`${this.featureWithArticleIfNeeded} and `:""}all the new
						Pro features — free for another ${tS("day",14)}!
					</p> `}}renderFeaturePreview(e){let t=(this.appearance??"alert")==="alert"?"alert":void 0,r=e.usages.length;return 0===r?eE`<slot name="feature"></slot>
				<gl-button appearance="${nH(t)}" href="${nH(this.featurePreviewCommandLink)}"
					>Continue</gl-button
				>
				<p>
					Continue to preview
					${this.featureWithArticleIfNeeded?`${this.featureWithArticleIfNeeded} on`:""} privately-hosted
					repos, or
					<a href="${nj("gitlens.plus.login",this.source)}" title="Sign In">sign in</a
					>.<br />
					${"alert"!==t?eE`<br />`:""} For full access to all GitLens Pro features,
					<a href="${nj("gitlens.plus.signUp",this.source)}"
						>start your free ${14}-day Pro trial</a
					>
					— no credit card required.
				</p> `:eE`
			${this.renderFeaturePreviewStep(e,r)}
			<p class="actions-row">
				<gl-button
					class="inline"
					appearance="${nH(t)}"
					href="${nH(this.featurePreviewCommandLink)}"
					>Continue Preview</gl-button
				><span
					>or
					<a href="${nj("gitlens.plus.login",this.source)}" title="Sign In"
						>sign in</a
					></span
				>
			</p>
			<p>
				After continuing, you will have ${tS("day",3-r,{infix:" more "})} to preview
				${this.featureWithArticleIfNeeded?`${this.featureWithArticleIfNeeded} on`:""} privately-hosted
				repos.<br />
				${"alert"!==t?eE`<br />`:""} For full access to all GitLens Pro features,
				<a href="${nj("gitlens.plus.signUp",this.source)}"
					>start your free ${14}-day Pro trial</a
				>
				— no credit card required.
			</p>
		`}renderFeaturePreviewStep(e,t){if("graph"!==e.feature)return eE`<slot name="feature"></slot>`;switch(t){case 1:return eE`<p>Try Commit Search</p>
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
							</p> `;case 2:return eE`
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
						`;default:return eE`<slot name="feature"></slot>`}}renderPromo(){return eE`<gl-promo
			.promoPromise=${this.promos.getApplicablePromo("gate")}
			.source=${this.source}
		></gl-promo>`}};i7.styles=[nW,B`
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
		`],i9([eq("gl-button")],i7.prototype,"button",2),i9([ej({type:Object})],i7.prototype,"featurePreview",2),i9([ej({type:String})],i7.prototype,"featurePreviewCommandLink",2),i9([ej({type:String})],i7.prototype,"appearance",2),i9([ej()],i7.prototype,"featureWithArticleIfNeeded",2),i9([D({context:"promos"})],i7.prototype,"promos",2),i9([ej({type:Object})],i7.prototype,"source",2),i9([ej({attribute:!1,type:Number})],i7.prototype,"state",2),i9([ej({type:String})],i7.prototype,"webroot",2),i7=i9([eF("gl-feature-gate-plus-state")],i7);var st=Object.defineProperty,sn=Object.getOwnPropertyDescriptor,so=(e,t,r,n)=>{for(var o,i=n>1?void 0:n?sn(t,r):t,c=e.length-1;c>=0;c--)(o=e[c])&&(i=(n?o(t,r,i):o(i))||i);return n&&i&&st(t,r,i),i};let si=class extends lit_element_i{render(){var e;if(this.hidden||null!=(e=this.state)&&(e===nB.Paid||e===nB.ProPreview||e===nB.ProTrial))return;let t=this.appearance??(document.body.getAttribute("data-placement")??"editor")==="editor"?"alert":"welcome";return eE`
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
		`}};si.styles=[nW,B`
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
		`],so([ej({reflect:!0})],si.prototype,"appearance",2),so([ej({type:Object})],si.prototype,"featurePreview",2),so([ej({type:String})],si.prototype,"featurePreviewCommandLink",2),so([ej()],si.prototype,"featureWithArticleIfNeeded",2),so([ej({type:Object})],si.prototype,"source",2),so([ej({attribute:!1,type:Number})],si.prototype,"state",2),so([ej({type:String})],si.prototype,"webroot",2),si=so([eF("gl-feature-gate")],si);var ss=Object.defineProperty,sa=Object.getOwnPropertyDescriptor,sl=(e,t,r,n)=>{for(var o,i=n>1?void 0:n?sa(t,r):t,c=e.length-1;c>=0;c--)(o=e[c])&&(i=(n?o(t,r,i):o(i))||i);return n&&i&&ss(t,r,i),i};let sc=class extends GlElement{render(){return eE`<gl-feature-gate
			.featurePreview=${this.state.featurePreview}
			featurePreviewCommandLink=${nH(this.state.featurePreview?nG("gitlens.plus.continueFeaturePreview",this.state.webviewId,this.state.webviewInstanceId,{feature:this.state.featurePreview.feature}):void 0)}
			appearance="alert"
			featureWithArticleIfNeeded="the Commit Graph"
			?hidden=${!1!==this.state.allowed}
			.source=${{source:"graph",detail:"gate"}}
			.state=${this.state.subscription?.state}
			.webroot=${this.state.webroot}
		>
			<p slot="feature">
				<a href="https://help.gitkraken.com/gitlens/gitlens-features/#commit-graph-pro">Commit Graph</a>
				<gl-feature-badge
					.source=${{source:"graph",detail:"badge"}}
					subscription="{subscription}"
				></gl-feature-badge>
				&mdash; easily visualize your repository and keep track of all work in progress. Use the rich commit
				search to find a specific commit, message, author, a changed file or files, or even a specific code
				change.
			</p>
		</gl-feature-gate>`}};sc.styles=[nW,B`
			gl-feature-gate gl-feature-badge {
				vertical-align: super;
				margin-left: 0.4rem;
				margin-right: 0.4rem;
			}
		`],sl([D({context:"state",subscribe:!0}),eZ()],sc.prototype,"state",2),sc=sl([eF("gl-graph-gate")],sc);let su=e=>nr(e)?e._$litType$.h:e.strings,sh=r9(class extends directive_i{constructor(e){super(e),this.et=new WeakMap}render(e){return[e]}update(e,[t]){let r=nt(this.it)?su(this.it):null,n=nt(t)?su(t):null;if(null!==r&&(null===n||r!==n)){let t=nd(e).pop(),n=this.et.get(r);void 0===n&&((n=eH(eA,document.createDocumentFragment())).setConnected(!1),this.et.set(r,n)),nh(n,[t]),nl(n,void 0,t)}if(null!==n){if(null===r||r!==n){let t=this.et.get(n);if(void 0!==t){let r=nd(t).pop();nm(e),nl(e,void 0,r),nh(e,[r])}}this.it=t}else this.it=void 0;return this.render(t)}}),sd=(e,t,r)=>{let n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},sp=r9(class extends directive_i{constructor(e){if(super(e),2!==e.type)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let n;void 0===r?r=t:void 0!==t&&(n=t);let o=[],i=[],c=0;for(let t of e)o[c]=n?n(t,c):c,i[c]=r(t,c),c++;return{values:i,keys:o}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,n]){let o=nd(e),{values:i,keys:c}=this.dt(t,r,n);if(!Array.isArray(o))return this.ut=c,i;let u=this.ut??=[],h=[],d,p,m=0,g=o.length-1,b=0,v=i.length-1;for(;m<=g&&b<=v;)if(null===o[m])m++;else if(null===o[g])g--;else if(u[m]===c[b])h[b]=nc(o[m],i[b]),m++,b++;else if(u[g]===c[v])h[v]=nc(o[g],i[v]),g--,v--;else if(u[m]===c[v])h[v]=nc(o[m],i[v]),nl(e,h[v+1],o[m]),m++,v--;else if(u[g]===c[b])h[b]=nc(o[g],i[b]),nl(e,o[m],o[g]),g--,b++;else if(void 0===d&&(d=sd(c,b,v),p=sd(u,m,g)),d.has(u[m]))if(d.has(u[g])){let t=p.get(c[b]),r=void 0!==t?o[t]:null;if(null===r){let t=nl(e,o[m]);nc(t,i[b]),h[b]=t}else h[b]=nc(r,i[b]),nl(e,o[m],r),o[t]=null;b++}else np(o[g]),g--;else np(o[m]),m++;for(;b<=v;){let t=nl(e,h[v+1]);nc(t,i[b]),h[b++]=t}for(;m<=g;){let e=o[m++];null!==e&&np(e)}return this.ut=c,nh(e,h),eI}});function sf(e,t){return(r,n,o)=>{if("function"!=typeof o.value)throw Error(`@debounce can only be used on methods, not on ${typeof o.value}`);let i=o.value;return o.value=function(...r){let o=`__debounced_${n}`;return this[o]??=e9((...e)=>i.apply(this,e),e,t),this[o](...r)},o}}let sm=B`
	a {
		text-decoration: none;
	}

	a:focus {
		${nV}
	}

	a:hover {
		text-decoration: underline;
	}
`,sg=B`
	hr {
		border: none;
		border-top: 1px solid var(--color-foreground--25);
	}
`,sb=B`
	.action-button {
		position: relative;
		appearance: none;
		font-family: inherit;
		font-size: 1.2rem;
		line-height: 2.2rem;
		// background-color: var(--color-graph-actionbar-background);
		background-color: transparent;
		border: none;
		color: inherit;
		color: var(--color-foreground);
		padding: 0 0.75rem;
		cursor: pointer;
		border-radius: 3px;
		height: auto;

		display: grid;
		grid-auto-flow: column;
		grid-gap: 0.5rem;
		gap: 0.5rem;
		max-width: fit-content;
	}

	.action-button[disabled] {
		pointer-events: none;
		cursor: default;
		opacity: 1;
	}

	.action-button:hover {
		background-color: var(--color-graph-actionbar-selectedBackground);
		color: var(--color-foreground);
		text-decoration: none;
	}

	.action-button[aria-checked] {
		border: 1px solid transparent;
	}

	.action-button[aria-checked='true'] {
		background-color: var(--vscode-inputOption-activeBackground);
		color: var(--vscode-inputOption-activeForeground);
		border-color: var(--vscode-inputOption-activeBorder);
	}

	.action-button code-icon {
		line-height: 2.2rem;
		vertical-align: bottom;
	}
	.action-button code-icon[icon='graph-line'] {
		transform: translateY(1px);
	}

	.is-ahead .action-button__pill {
		background-color: var(--branch-status-ahead-pill-background);
	}
	.is-behind .action-button__pill {
		background-color: var(--branch-status-behind-pill-background);
	}
	.is-ahead.is-behind .action-button__pill {
		background-color: var(--branch-status-both-pill-background);
	}

	.action-button__more,
	.action-button__more.codicon[class*='codicon-'] {
		font-size: 1rem;
		margin-right: -0.25rem;
	}

	code-icon.action-button__more::before {
		margin-left: -0.25rem;
	}

	.action-button__indicator {
		margin-left: -0.2rem;
		--gl-indicator-color: green;
		--gl-indicator-size: 0.4rem;
	}

	.action-button__small {
		font-size: smaller;
		opacity: 0.6;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	.action-button__truncated {
		width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.action-button.is-ahead {
		background-color: var(--branch-status-ahead-background);
	}
	.action-button.is-ahead:hover {
		background-color: var(--branch-status-ahead-hover-background);
	}

	.action-button.is-behind {
		background-color: var(--branch-status-behind-background);
	}
	.action-button.is-behind:hover {
		background-color: var(--branch-status-behind-hover-background);
	}

	.action-button.is-ahead.is-behind {
		background-color: var(--branch-status-both-background);
	}
	.action-button.is-ahead.is-behind:hover {
		background-color: var(--branch-status-both-hover-background);
	}
`,sv=B`
	.jump-to-ref {
		--button-foreground: var(--color-foreground);
	}

	.merge-conflict-warning {
		flex: 0 0 100%;
		min-width: 0;
	}
`,sy=B`
	.progress-container {
		position: absolute;
		left: 0;
		bottom: 0;
		z-index: 5;
		height: 2px;
		width: 100%;
		overflow: hidden;
	}
	.progress-container .progress-bar {
		background-color: var(--vscode-progressBar-background);
		display: none;
		position: absolute;
		left: 0;
		width: 2%;
		height: 2px;
	}

	.progress-container.active .progress-bar {
		display: inherit;
	}

	.progress-container.discrete .progress-bar {
		left: 0;
		transition: width 0.1s linear;
	}

	.progress-container.discrete.done .progress-bar {
		width: 100%;
	}

	.progress-container.infinite .progress-bar {
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
`,sw=B`
	.titlebar {
		background: var(--titlebar-bg);
		color: var(--titlebar-fg);
		padding: 0.6rem 0.8rem;
		font-size: 1.3rem;
		flex-wrap: wrap;
	}
	.titlebar,
	.titlebar__row,
	.titlebar__group {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.5rem;
	}

	.titlebar > *,
	.titlebar__row > *,
	.titlebar__group > * {
		margin: 0;
	}

	.titlebar,
	.titlebar__row {
		justify-content: space-between;
	}

	.titlebar__row {
		flex: 0 0 100%;
	}
	.titlebar__row--wrap {
		display: grid;
		grid-auto-flow: column;
		justify-content: start;
		grid-template-columns: 1fr min-content;
	}

	.titlebar__group {
		flex: auto 1 1;
	}

	.titlebar__row--wrap .titlebar__group {
		white-space: nowrap;
	}
	.titlebar__row--wrap .titlebar__group:nth-child(odd) {
		min-width: 0;
	}

	.titlebar__debugging > * {
		display: inline-block;
	}

	.titlebar gl-feature-badge {
		color: var(--color-foreground);
	}
`,s_=B`
	.popover::part(body) {
		padding: 0;
		font-size: var(--vscode-font-size);
		background-color: var(--vscode-menu-background);
	}

	.shrink {
		max-width: fit-content;
		transition: all 0.2s;
	}
	.shrink.hidden {
		max-width: 0;
		overflow: hidden;
	}
	.titlebar__group .shrink.hidden:not(:first-child) {
		// compensate the parent gap
		margin-left: -0.5rem;
	}

	.branch-menu {
		display: flex;
		gap: 0.5em;
		align-items: center;
	}

	.branch-menu__avatar {
		width: 1.4rem;
		aspect-ratio: 1;
		vertical-align: text-bottom;
	}

	.action-divider {
		display: inline-block;
		width: 0.1rem;
		height: 2.2rem;
		vertical-align: middle;
		background-color: var(--titlebar-fg);
		opacity: 0.4;
		margin: {
			// left: 0.2rem;
			right: 0.2rem;
		}
	}

	.button-group {
		display: flex;
		flex-direction: row;
		align-items: stretch;
	}
	.button-group:hover,
	.button-group:focus-within {
		background-color: var(--color-graph-actionbar-selectedBackground);
		border-radius: 3px;
	}

	.button-group > *:not(:first-child),
	.button-group > *:not(:first-child) .action-button {
		display: flex;
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
	}
	.button-group > *:not(:first-child) .action-button {
		padding-left: 0.5rem;
		padding-right: 0.5rem;
		height: 100%;
	}

	.button-group:hover > *:not(:last-child),
	.button-group:active > *:not(:last-child),
	.button-group:focus-within > *:not(:last-child),
	.button-group:hover > *:not(:last-child) .action-button,
	.button-group:active > *:not(:last-child) .action-button,
	.button-group:focus-within > *:not(:last-child) .action-button {
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
	}

	.minimap-marker-swatch {
		display: inline-block;
		width: 1rem;
		height: 1rem;
		border-radius: 2px;
		transform: scale(1.6);
		margin-left: 0.3rem;
		margin-right: 1rem;
	}

	.minimap-marker-swatch[data-marker='localBranches'] {
		background-color: var(--color-graph-minimap-marker-local-branches);
	}

	.minimap-marker-swatch[data-marker='pullRequests'] {
		background-color: var(--color-graph-minimap-marker-pull-requests);
	}

	.minimap-marker-swatch[data-marker='remoteBranches'] {
		background-color: var(--color-graph-minimap-marker-remote-branches);
	}

	.minimap-marker-swatch[data-marker='stashes'] {
		background-color: var(--color-graph-minimap-marker-stashes);
	}

	.minimap-marker-swatch[data-marker='tags'] {
		background-color: var(--color-graph-minimap-marker-tags);
	}

	gl-search-box::part(search) {
		--gl-search-input-background: var(--color-graph-actionbar-background);
		--gl-search-input-border: var(--sl-input-border-color);
	}

	sl-option::part(base) {
		padding: 0.2rem 0.4rem;
	}

	sl-option[aria-selected='true']::part(base),
	sl-option:not([aria-selected='true']):hover::part(base),
	sl-option:not([aria-selected='true']):focus::part(base) {
		background-color: var(--vscode-list-activeSelectionBackground);
		color: var(--vscode-list-activeSelectionForeground);
	}

	sl-option::part(checked-icon) {
		display: none;
	}

	sl-select::part(listbox) {
		padding-block: 0.2rem 0;
		width: max-content;
	}

	sl-select::part(combobox) {
		--sl-input-background-color: var(--color-graph-actionbar-background);
		--sl-input-color: var(--color-foreground);
		--sl-input-color-hover: var(--color-foreground);
		padding: 0 0.75rem;
		color: var(--color-foreground);
		border-radius: var(--sl-border-radius-small);
	}

	sl-select::part(display-input) {
		field-sizing: content;
	}

	sl-select::part(expand-icon) {
		margin-inline-start: var(--sl-spacing-x-small);
	}

	sl-select[open]::part(combobox) {
		background-color: var(--color-graph-actionbar-background);
	}
	sl-select:hover::part(combobox),
	sl-select:focus::part(combobox) {
		background-color: var(--color-graph-actionbar-selectedBackground);
	}
`;var sS=B`
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,sC="",sx={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},sk=[{name:"default",resolver:e=>(function(e=""){if(!sC){let e=[...document.getElementsByTagName("script")],t=e.find(e=>e.hasAttribute("data-shoelace"));if(t)sC=t.getAttribute("data-shoelace");else{let t=e.find(e=>/shoelace(\.min)?\.js($|\?)/.test(e.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(e.src)),r="";t&&(r=t.getAttribute("src")),sC=r.split("/").slice(0,-1).join("/")}}return sC.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")})(`assets/icons/${e}.svg`)},{name:"system",resolver:e=>e in sx?`data:image/svg+xml,${encodeURIComponent(sx[e])}`:""}],sR=[];function sT(e){return sk.find(t=>t.name===e)}var sE=B`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,sO=Symbol(),sM=Symbol(),sI=new Map,sA=class extends o_{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var r;let n;if(null==t?void 0:t.spriteSheet)return this.svg=eE`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,this.svg;try{if(!(n=await fetch(e,{mode:"cors"})).ok)return 410===n.status?sO:sM}catch(e){return sM}try{let e=document.createElement("div");e.innerHTML=await n.text();let t=e.firstElementChild;if((null==(r=null==t?void 0:t.tagName)?void 0:r.toLowerCase())!=="svg")return sO;x||(x=new DOMParser);let o=x.parseFromString(t.outerHTML,"text/html").body.querySelector("svg");if(!o)return sO;return o.part.add("svg"),document.adoptNode(o)}catch(e){return sO}}connectedCallback(){super.connectedCallback(),sR.push(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){var e;super.disconnectedCallback(),e=this,sR=sR.filter(t=>t!==e)}getIconSource(){let e=sT(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){"string"==typeof this.label&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;let{url:t,fromLibrary:r}=this.getIconSource(),n=r?sT(this.library):void 0;if(!t){this.svg=null;return}let o=sI.get(t);if(o||(o=this.resolveIcon(t,n),sI.set(t,o)),!this.initialRender)return;let i=await o;if(i===sM&&sI.delete(t),t===this.getIconSource().url){if(nt(i)){if(this.svg=i,n){await this.updateComplete;let e=this.shadowRoot.querySelector("[part='svg']");"function"==typeof n.mutator&&e&&n.mutator(e)}return}switch(i){case sM:case sO:this.svg=null,this.emit("sl-error");break;default:this.svg=i.cloneNode(!0),null==(e=null==n?void 0:n.mutator)||e.call(n,this.svg),this.emit("sl-load")}}}render(){return this.svg}};sA.styles=[on,sE],om([eZ()],sA.prototype,"svg",2),om([ej({reflect:!0})],sA.prototype,"name",2),om([ej()],sA.prototype,"src",2),om([ej()],sA.prototype,"label",2),om([ej({reflect:!0})],sA.prototype,"library",2),om([iH("label")],sA.prototype,"handleLabelChange",1),om([iH(["name","src","library"])],sA.prototype,"setIcon",1);var sN=class extends o_{constructor(){super(...arguments),this.localize=new or(this),this.isInitialized=!1,this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){this.isInitialized?customElements.whenDefined("sl-select").then(()=>{let e=this.closest("sl-select");e&&e.handleDefaultSlotChange()}):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){"string"!=typeof this.value&&(this.value=String(this.value)),this.value.includes(" ")&&(this.value=this.value.replace(/ /g,"_"))}getTextLabel(){let e=this.childNodes,t="";return[...e].forEach(e=>{e.nodeType!==Node.ELEMENT_NODE||e.hasAttribute("slot")||(t+=e.textContent),e.nodeType===Node.TEXT_NODE&&(t+=e.textContent)}),t.trim()}render(){return eE`
      <div
        part="base"
        class=${iw({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};sN.styles=[on,sS],sN.dependencies={"sl-icon":sA},om([eq(".option__label")],sN.prototype,"defaultSlot",2),om([eZ()],sN.prototype,"current",2),om([eZ()],sN.prototype,"selected",2),om([eZ()],sN.prototype,"hasHover",2),om([ej({reflect:!0})],sN.prototype,"value",2),om([ej({type:Boolean,reflect:!0})],sN.prototype,"disabled",2),om([iH("disabled")],sN.prototype,"handleDisabledChange",1),om([iH("selected")],sN.prototype,"handleSelectedChange",1),om([iH("value")],sN.prototype,"handleValueChange",1),sN.define("sl-option");var sD=B`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,sz=B`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`;let s$=Symbol.for(""),sP=e=>{if(e?.r===s$)return e?._$litStatic$},sL=(e,...t)=>({_$litStatic$:t.reduce((t,r,n)=>t+(e=>{if(void 0!==e._$litStatic$)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+e[n+1],e[0]),r:s$}),sH=new Map,sG=e=>(t,...r)=>{let n,o,i=r.length,c=[],u=[],h,d=0,p=!1;for(;d<i;){for(h=t[d];d<i&&void 0!==(n=sP(o=r[d]));)h+=n+t[++d],p=!0;d!==i&&u.push(o),c.push(h),d++}if(d===i&&c.push(t[i]),p){let e=c.join("$$lit$$");void 0===(t=sH.get(e))&&(c.raw=c,sH.set(e,t=c)),r=u}return e(t,...r)},sW=sG(eE);sG(eO),sG(eM);var sF=class extends o_{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=!!this.href,t=e?sL`a`:sL`button`;return sW`
      <${t}
        part="base"
        class=${iw({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${nH(e?void 0:this.disabled)}
        type=${nH(e?void 0:"button")}
        href=${nH(e?this.href:void 0)}
        target=${nH(e?this.target:void 0)}
        download=${nH(e?this.download:void 0)}
        rel=${nH(e&&this.target?"noreferrer noopener":void 0)}
        role=${nH(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${nH(this.name)}
          library=${nH(this.library)}
          src=${nH(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};sF.styles=[on,sz],sF.dependencies={"sl-icon":sA},om([eq(".icon-button")],sF.prototype,"button",2),om([eZ()],sF.prototype,"hasFocus",2),om([ej()],sF.prototype,"name",2),om([ej()],sF.prototype,"library",2),om([ej()],sF.prototype,"src",2),om([ej()],sF.prototype,"href",2),om([ej()],sF.prototype,"target",2),om([ej()],sF.prototype,"download",2),om([ej()],sF.prototype,"label",2),om([ej({type:Boolean,reflect:!0})],sF.prototype,"disabled",2);var sB=class extends o_{constructor(){super(...arguments),this.localize=new or(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return eE`
      <span
        part="base"
        class=${iw({tag:!0,"tag--primary":"primary"===this.variant,"tag--success":"success"===this.variant,"tag--neutral":"neutral"===this.variant,"tag--warning":"warning"===this.variant,"tag--danger":"danger"===this.variant,"tag--text":"text"===this.variant,"tag--small":"small"===this.size,"tag--medium":"medium"===this.size,"tag--large":"large"===this.size,"tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?eE`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};sB.styles=[on,sD],sB.dependencies={"sl-icon-button":sF},om([ej({reflect:!0})],sB.prototype,"variant",2),om([ej({reflect:!0})],sB.prototype,"size",2),om([ej({type:Boolean,reflect:!0})],sB.prototype,"pill",2),om([ej({type:Boolean})],sB.prototype,"removable",2);var sU=B`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix and Suffix */
  .select__prefix,
  .select__suffix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-small);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    display: block;
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-2x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`,sj=B`
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
`,sZ=new WeakMap,sV=new WeakMap,sq=new WeakMap,sY=new WeakSet,sK=new WeakMap,sQ=class{constructor(e,t){this.handleFormData=e=>{let t=this.options.disabled(this.host),r=this.options.name(this.host),n=this.options.value(this.host),o="sl-button"===this.host.tagName.toLowerCase();this.host.isConnected&&!t&&!o&&"string"==typeof r&&r.length>0&&void 0!==n&&(Array.isArray(n)?n.forEach(t=>{e.formData.append(r,t.toString())}):e.formData.append(r,n.toString()))},this.handleFormSubmit=e=>{var t;let r=this.options.disabled(this.host),n=this.options.reportValidity;this.form&&!this.form.noValidate&&(null==(t=sZ.get(this.form))||t.forEach(e=>{this.setUserInteracted(e,!0)})),!this.form||this.form.noValidate||r||n(this.host)||(e.preventDefault(),e.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),sK.set(this.host,[])},this.handleInteraction=e=>{let t=sK.get(this.host);t.includes(e.type)||t.push(e.type),t.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){for(let e of this.form.querySelectorAll("*"))if("function"==typeof e.checkValidity&&!e.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){for(let e of this.form.querySelectorAll("*"))if("function"==typeof e.reportValidity&&!e.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=op({form:e=>{let t=e.form;if(t){let r=e.getRootNode().querySelector(`#${t}`);if(r)return r}return e.closest("form")},name:e=>e.name,value:e=>e.value,defaultValue:e=>e.defaultValue,disabled:e=>{var t;return null!=(t=e.disabled)&&t},reportValidity:e=>"function"!=typeof e.reportValidity||e.reportValidity(),checkValidity:e=>"function"!=typeof e.checkValidity||e.checkValidity(),setValue:(e,t)=>e.value=t,assumeInteractionOn:["sl-input"]},t)}hostConnected(){let e=this.options.form(this.host);e&&this.attachForm(e),sK.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),sK.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){let e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,sZ.has(this.form)?sZ.get(this.form).add(this.host):sZ.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),sV.has(this.form)||(sV.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),sq.has(this.form)||(sq.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;let e=sZ.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),sV.has(this.form)&&(this.form.reportValidity=sV.get(this.form),sV.delete(this.form)),sq.has(this.form)&&(this.form.checkValidity=sq.get(this.form),sq.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?sY.add(e):sY.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){let r=document.createElement("button");r.type=e,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",t&&(r.name=t.name,r.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(e=>{t.hasAttribute(e)&&r.setAttribute(e,t.getAttribute(e))})),this.form.append(r),r.click(),r.remove()}}getForm(){var e;return null!=(e=this.form)?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){let t=this.host,r=!!sY.has(t),n=!!t.required;t.toggleAttribute("data-required",n),t.toggleAttribute("data-optional",!n),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&r),t.toggleAttribute("data-user-valid",e&&r)}updateValidity(){let e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){let t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||null==e||e.preventDefault()}},sX=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(of(op({},sX),{valid:!1,valueMissing:!0})),Object.freeze(of(op({},sX),{valid:!1,customError:!0}));var sJ=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&""!==e.textContent.trim())return!0;if(e.nodeType===e.ELEMENT_NODE){if("sl-visually-hidden"===e.tagName.toLowerCase())return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return null!==this.host.querySelector(`:scope > [slot="${e}"]`)}test(e){return"[default]"===e?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}},s0=class extends o_{constructor(){super(...arguments),this.formControlController=new sQ(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new sJ(this,"help-text","label"),this.localize=new or(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=e=>eE`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${t=>this.handleTagRemove(t,e)}
      >
        ${e.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=e=>{let t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{let t=e.target,r=null!==t.closest(".select__clear"),n=null!==t.closest("sl-icon-button");if(!r&&!n){if("Escape"===e.key&&this.open&&!this.closeWatcher&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),"Enter"===e.key||" "===e.key&&""===this.typeToSelectString)return(e.preventDefault(),e.stopImmediatePropagation(),this.open)?void(this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))):void this.show();if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=this.getAllOptions(),r=t.indexOf(this.currentOption),n=Math.max(0,r);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;"ArrowDown"===e.key?(n=r+1)>t.length-1&&(n=0):"ArrowUp"===e.key?(n=r-1)<0&&(n=t.length-1):"Home"===e.key?n=0:"End"===e.key&&(n=t.length-1),this.setCurrentOption(t[n])}if(e.key&&1===e.key.length||"Backspace"===e.key){let t=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if("Backspace"===e.key)return;this.show()}for(let r of(e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),"Backspace"===e.key?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase(),t))if(r.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(r);break}}}},this.handleDocumentMouseDown=e=>{let t=e.composedPath();this&&!t.includes(this)&&this.hide()}}get value(){return this._value}set value(e){e=this.multiple?Array.isArray(e)?e:e.split(" "):Array.isArray(e)?e.join(" "):e,this._value!==e&&(this.valueHasChanged=!0,this._value=e)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){var e;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&(null==(e=this.closeWatcher)||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var e;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),null==(e=this.closeWatcher)||e.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(e){let t=e.composedPath().some(e=>e instanceof Element&&"sl-icon-button"===e.tagName.toLowerCase());this.disabled||t||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){"Tab"!==e.key&&(e.stopPropagation(),this.handleDocumentKeyDown(e))}handleClearClick(e){e.stopPropagation(),this.valueHasChanged=!0,""!==this.value&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){let t=e.target.closest("sl-option"),r=this.value;t&&!t.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(t):this.setSelectedOptions(t),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==r&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("sl-option")||customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange());let e=this.getAllOptions(),t=this.valueHasChanged?this.value:this.defaultValue,r=Array.isArray(t)?t:[t],n=[];e.forEach(e=>n.push(e.value)),this.setSelectedOptions(e.filter(e=>r.includes(e.value)))}handleTagRemove(e,t){e.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(t,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(e){this.getAllOptions().forEach(e=>{e.current=!1,e.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus())}setSelectedOptions(e){let t=this.getAllOptions(),r=Array.isArray(e)?e:[e];t.forEach(e=>e.selected=!1),r.length&&r.forEach(e=>e.selected=!0),this.selectionChanged()}toggleOptionSelection(e,t){!0===t||!1===t?e.selected=t:e.selected=!e.selected,this.selectionChanged()}selectionChanged(){var e,t,r;let n=this.getAllOptions();this.selectedOptions=n.filter(e=>e.selected);let o=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(e=>e.value),this.placeholder&&0===this.value.length?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{let n=this.selectedOptions[0];this.value=null!=(e=null==n?void 0:n.value)?e:"",this.displayLabel=null!=(r=null==(t=null==n?void 0:n.getTextLabel)?void 0:t.call(n))?r:""}this.valueHasChanged=o,this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((e,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){let r=this.getTag(e,t);return eE`<div @sl-remove=${t=>this.handleTagRemove(t,e)}>
          ${"string"==typeof r?iN(r):r}
        </div>`}return t===this.maxOptionsVisible?eE`<sl-tag size=${this.size}>+${this.selectedOptions.length-t}</sl-tag>`:eE``})}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(e,t,r){if(super.attributeChangedCallback(e,t,r),"value"===e){let e=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=e}}handleValueChange(){if(!this.valueHasChanged){let e=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=e}let e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(e.filter(e=>t.includes(e.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await iL(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});let{keyframes:e,options:t}=iA(this,"select.show",{dir:this.localize.dir()});await i$(this.popup.popup,e,t),this.currentOption&&function(e,t,r="vertical",n="smooth"){let o={top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)},i=o.top+t.scrollTop,c=o.left+t.scrollLeft,u=t.scrollLeft,h=t.scrollLeft+t.offsetWidth,d=t.scrollTop,p=t.scrollTop+t.offsetHeight;("horizontal"===r||"both"===r)&&(c<u?t.scrollTo({left:c,behavior:n}):c+e.clientWidth>h&&t.scrollTo({left:c-t.offsetWidth+e.clientWidth,behavior:n})),("vertical"===r||"both"===r)&&(i<d?t.scrollTo({top:i,behavior:n}):i+e.clientHeight>p&&t.scrollTo({top:i-t.offsetHeight+e.clientHeight,behavior:n}))}(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await iL(this);let{keyframes:e,options:t}=iA(this,"select.hide",{dir:this.localize.dir()});await i$(this.popup.popup,e,t),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,iz(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,iz(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(e){this.valueInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}render(){let e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=!!this.label||!!e,n=!!this.helpText||!!t,o=this.clearable&&!this.disabled&&this.value.length>0,i=this.placeholder&&this.value&&this.value.length<=0;return eE`
      <div
        part="form-control"
        class=${iw({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":r,"form-control--has-help-text":n})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${r?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${iw({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":i,"select--top":"top"===this.placement,"select--bottom":"bottom"===this.placement,"select--small":"small"===this.size,"select--medium":"medium"===this.size,"select--large":"large"===this.size})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?eE`<div part="tags" class="select__tags">${this.tags}</div>`:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${o?eE`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${n?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};s0.styles=[on,sj,sU],s0.dependencies={"sl-icon":sA,"sl-popup":iC,"sl-tag":sB},om([eq(".select")],s0.prototype,"popup",2),om([eq(".select__combobox")],s0.prototype,"combobox",2),om([eq(".select__display-input")],s0.prototype,"displayInput",2),om([eq(".select__value-input")],s0.prototype,"valueInput",2),om([eq(".select__listbox")],s0.prototype,"listbox",2),om([eZ()],s0.prototype,"hasFocus",2),om([eZ()],s0.prototype,"displayLabel",2),om([eZ()],s0.prototype,"currentOption",2),om([eZ()],s0.prototype,"selectedOptions",2),om([eZ()],s0.prototype,"valueHasChanged",2),om([ej()],s0.prototype,"name",2),om([eZ()],s0.prototype,"value",1),om([ej({attribute:"value"})],s0.prototype,"defaultValue",2),om([ej({reflect:!0})],s0.prototype,"size",2),om([ej()],s0.prototype,"placeholder",2),om([ej({type:Boolean,reflect:!0})],s0.prototype,"multiple",2),om([ej({attribute:"max-options-visible",type:Number})],s0.prototype,"maxOptionsVisible",2),om([ej({type:Boolean,reflect:!0})],s0.prototype,"disabled",2),om([ej({type:Boolean})],s0.prototype,"clearable",2),om([ej({type:Boolean,reflect:!0})],s0.prototype,"open",2),om([ej({type:Boolean})],s0.prototype,"hoist",2),om([ej({type:Boolean,reflect:!0})],s0.prototype,"filled",2),om([ej({type:Boolean,reflect:!0})],s0.prototype,"pill",2),om([ej()],s0.prototype,"label",2),om([ej({reflect:!0})],s0.prototype,"placement",2),om([ej({attribute:"help-text"})],s0.prototype,"helpText",2),om([ej({reflect:!0})],s0.prototype,"form",2),om([ej({type:Boolean,reflect:!0})],s0.prototype,"required",2),om([ej()],s0.prototype,"getTag",2),om([iH("disabled",{waitUntilFirstUpdate:!0})],s0.prototype,"handleDisabledChange",1),om([iH(["defaultValue","value"],{waitUntilFirstUpdate:!0})],s0.prototype,"handleValueChange",1),om([iH("open",{waitUntilFirstUpdate:!0})],s0.prototype,"handleOpenChange",1),iI("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}}),iI("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}}),s0.define("sl-select");let s1=B`
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
`,s2=Object.freeze({add:"\\ea60",plus:"\\ea60","gist-new":"\\ea60","repo-create":"\\ea60",lightbulb:"\\ea61","light-bulb":"\\ea61",repo:"\\ea62","repo-delete":"\\ea62","gist-fork":"\\ea63","repo-forked":"\\ea63","git-pull-request":"\\ea64","git-pull-request-abandoned":"\\ea64","record-keys":"\\ea65",keyboard:"\\ea65",tag:"\\ea66","git-pull-request-label":"\\ea66","tag-add":"\\ea66","tag-remove":"\\ea66",person:"\\ea67","person-follow":"\\ea67","person-outline":"\\ea67","person-filled":"\\ea67","git-branch":"\\ea68","git-branch-create":"\\ea68","git-branch-delete":"\\ea68","source-control":"\\ea68",mirror:"\\ea69","mirror-public":"\\ea69",star:"\\ea6a","star-add":"\\ea6a","star-delete":"\\ea6a","star-empty":"\\ea6a",comment:"\\ea6b","comment-add":"\\ea6b",alert:"\\ea6c",warning:"\\ea6c",search:"\\ea6d","search-save":"\\ea6d","log-out":"\\ea6e","sign-out":"\\ea6e","log-in":"\\ea6f","sign-in":"\\ea6f",eye:"\\ea70","eye-unwatch":"\\ea70","eye-watch":"\\ea70","circle-filled":"\\ea71","primitive-dot":"\\ea71","close-dirty":"\\ea71","debug-breakpoint":"\\ea71","debug-breakpoint-disabled":"\\ea71","debug-hint":"\\ea71","terminal-decoration-success":"\\ea71","primitive-square":"\\ea72",edit:"\\ea73",pencil:"\\ea73",info:"\\ea74","issue-opened":"\\ea74","gist-private":"\\ea75","git-fork-private":"\\ea75",lock:"\\ea75","mirror-private":"\\ea75",close:"\\ea76","remove-close":"\\ea76",x:"\\ea76","repo-sync":"\\ea77",sync:"\\ea77",clone:"\\ea78","desktop-download":"\\ea78",beaker:"\\ea79",microscope:"\\ea79",vm:"\\ea7a","device-desktop":"\\ea7a",file:"\\ea7b","file-text":"\\ea7b",more:"\\ea7c",ellipsis:"\\ea7c","kebab-horizontal":"\\ea7c","mail-reply":"\\ea7d",reply:"\\ea7d",organization:"\\ea7e","organization-filled":"\\ea7e","organization-outline":"\\ea7e","new-file":"\\ea7f","file-add":"\\ea7f","new-folder":"\\ea80","file-directory-create":"\\ea80",trash:"\\ea81",trashcan:"\\ea81",history:"\\ea82",clock:"\\ea82",folder:"\\ea83","file-directory":"\\ea83","symbol-folder":"\\ea83","logo-github":"\\ea84","mark-github":"\\ea84",github:"\\ea84",terminal:"\\ea85",console:"\\ea85",repl:"\\ea85",zap:"\\ea86","symbol-event":"\\ea86",error:"\\ea87",stop:"\\ea87",variable:"\\ea88","symbol-variable":"\\ea88",array:"\\ea8a","symbol-array":"\\ea8a","symbol-module":"\\ea8b","symbol-package":"\\ea8b","symbol-namespace":"\\ea8b","symbol-object":"\\ea8b","symbol-method":"\\ea8c","symbol-function":"\\ea8c","symbol-constructor":"\\ea8c","symbol-boolean":"\\ea8f","symbol-null":"\\ea8f","symbol-numeric":"\\ea90","symbol-number":"\\ea90","symbol-structure":"\\ea91","symbol-struct":"\\ea91","symbol-parameter":"\\ea92","symbol-type-parameter":"\\ea92","symbol-key":"\\ea93","symbol-text":"\\ea93","symbol-reference":"\\ea94","go-to-file":"\\ea94","symbol-enum":"\\ea95","symbol-value":"\\ea95","symbol-ruler":"\\ea96","symbol-unit":"\\ea96","activate-breakpoints":"\\ea97",archive:"\\ea98","arrow-both":"\\ea99","arrow-down":"\\ea9a","arrow-left":"\\ea9b","arrow-right":"\\ea9c","arrow-small-down":"\\ea9d","arrow-small-left":"\\ea9e","arrow-small-right":"\\ea9f","arrow-small-up":"\\eaa0","arrow-up":"\\eaa1",bell:"\\eaa2",bold:"\\eaa3",book:"\\eaa4",bookmark:"\\eaa5","debug-breakpoint-conditional-unverified":"\\eaa6","debug-breakpoint-conditional":"\\eaa7","debug-breakpoint-conditional-disabled":"\\eaa7","debug-breakpoint-data-unverified":"\\eaa8","debug-breakpoint-data":"\\eaa9","debug-breakpoint-data-disabled":"\\eaa9","debug-breakpoint-log-unverified":"\\eaaa","debug-breakpoint-log":"\\eaab","debug-breakpoint-log-disabled":"\\eaab",briefcase:"\\eaac",broadcast:"\\eaad",browser:"\\eaae",bug:"\\eaaf",calendar:"\\eab0","case-sensitive":"\\eab1",check:"\\eab2",checklist:"\\eab3","chevron-down":"\\eab4","chevron-left":"\\eab5","chevron-right":"\\eab6","chevron-up":"\\eab7","chrome-close":"\\eab8","chrome-maximize":"\\eab9","chrome-minimize":"\\eaba","chrome-restore":"\\eabb","circle-outline":"\\eabc",circle:"\\eabc","debug-breakpoint-unverified":"\\eabc","terminal-decoration-incomplete":"\\eabc","circle-slash":"\\eabd","circuit-board":"\\eabe","clear-all":"\\eabf",clippy:"\\eac0","close-all":"\\eac1","cloud-download":"\\eac2","cloud-upload":"\\eac3",code:"\\eac4","collapse-all":"\\eac5","color-mode":"\\eac6","comment-discussion":"\\eac7","credit-card":"\\eac9",dash:"\\eacc",dashboard:"\\eacd",database:"\\eace","debug-continue":"\\eacf","debug-disconnect":"\\ead0","debug-pause":"\\ead1","debug-restart":"\\ead2","debug-start":"\\ead3","debug-step-into":"\\ead4","debug-step-out":"\\ead5","debug-step-over":"\\ead6","debug-stop":"\\ead7",debug:"\\ead8","device-camera-video":"\\ead9","device-camera":"\\eada","device-mobile":"\\eadb","diff-added":"\\eadc","diff-ignored":"\\eadd","diff-modified":"\\eade","diff-removed":"\\eadf","diff-renamed":"\\eae0",diff:"\\eae1","diff-sidebyside":"\\eae1",discard:"\\eae2","editor-layout":"\\eae3","empty-window":"\\eae4",exclude:"\\eae5",extensions:"\\eae6","eye-closed":"\\eae7","file-binary":"\\eae8","file-code":"\\eae9","file-media":"\\eaea","file-pdf":"\\eaeb","file-submodule":"\\eaec","file-symlink-directory":"\\eaed","file-symlink-file":"\\eaee","file-zip":"\\eaef",files:"\\eaf0",filter:"\\eaf1",flame:"\\eaf2","fold-down":"\\eaf3","fold-up":"\\eaf4",fold:"\\eaf5","folder-active":"\\eaf6","folder-opened":"\\eaf7",gear:"\\eaf8",gift:"\\eaf9","gist-secret":"\\eafa",gist:"\\eafb","git-commit":"\\eafc","git-compare":"\\eafd","compare-changes":"\\eafd","git-merge":"\\eafe","github-action":"\\eaff","github-alt":"\\eb00",globe:"\\eb01",grabber:"\\eb02",graph:"\\eb03",gripper:"\\eb04",heart:"\\eb05",home:"\\eb06","horizontal-rule":"\\eb07",hubot:"\\eb08",inbox:"\\eb09","issue-reopened":"\\eb0b",issues:"\\eb0c",italic:"\\eb0d",jersey:"\\eb0e",json:"\\eb0f","kebab-vertical":"\\eb10",key:"\\eb11",law:"\\eb12","lightbulb-autofix":"\\eb13","link-external":"\\eb14",link:"\\eb15","list-ordered":"\\eb16","list-unordered":"\\eb17","live-share":"\\eb18",loading:"\\eb19",location:"\\eb1a","mail-read":"\\eb1b",mail:"\\eb1c",markdown:"\\eb1d",megaphone:"\\eb1e",mention:"\\eb1f",milestone:"\\eb20","git-pull-request-milestone":"\\eb20","mortar-board":"\\eb21",move:"\\eb22","multiple-windows":"\\eb23",mute:"\\eb24","no-newline":"\\eb25",note:"\\eb26",octoface:"\\eb27","open-preview":"\\eb28",package:"\\eb29",paintcan:"\\eb2a",pin:"\\eb2b",play:"\\eb2c",run:"\\eb2c",plug:"\\eb2d","preserve-case":"\\eb2e",preview:"\\eb2f",project:"\\eb30",pulse:"\\eb31",question:"\\eb32",quote:"\\eb33","radio-tower":"\\eb34",reactions:"\\eb35",references:"\\eb36",refresh:"\\eb37",regex:"\\eb38","remote-explorer":"\\eb39",remote:"\\eb3a",remove:"\\eb3b","replace-all":"\\eb3c",replace:"\\eb3d","repo-clone":"\\eb3e","repo-force-push":"\\eb3f","repo-pull":"\\eb40","repo-push":"\\eb41",report:"\\eb42","request-changes":"\\eb43",rocket:"\\eb44","root-folder-opened":"\\eb45","root-folder":"\\eb46",rss:"\\eb47",ruby:"\\eb48","save-all":"\\eb49","save-as":"\\eb4a",save:"\\eb4b","screen-full":"\\eb4c","screen-normal":"\\eb4d","search-stop":"\\eb4e",server:"\\eb50","settings-gear":"\\eb51",settings:"\\eb52",shield:"\\eb53",smiley:"\\eb54","sort-precedence":"\\eb55","split-horizontal":"\\eb56","split-vertical":"\\eb57",squirrel:"\\eb58","star-full":"\\eb59","star-half":"\\eb5a","symbol-class":"\\eb5b","symbol-color":"\\eb5c","symbol-constant":"\\eb5d","symbol-enum-member":"\\eb5e","symbol-field":"\\eb5f","symbol-file":"\\eb60","symbol-interface":"\\eb61","symbol-keyword":"\\eb62","symbol-misc":"\\eb63","symbol-operator":"\\eb64","symbol-property":"\\eb65",wrench:"\\eb65","wrench-subaction":"\\eb65","symbol-snippet":"\\eb66",tasklist:"\\eb67",telescope:"\\eb68","text-size":"\\eb69","three-bars":"\\eb6a",thumbsdown:"\\eb6b",thumbsup:"\\eb6c",tools:"\\eb6d","triangle-down":"\\eb6e","triangle-left":"\\eb6f","triangle-right":"\\eb70","triangle-up":"\\eb71",twitter:"\\eb72",unfold:"\\eb73",unlock:"\\eb74",unmute:"\\eb75",unverified:"\\eb76",verified:"\\eb77",versions:"\\eb78","vm-active":"\\eb79","vm-outline":"\\eb7a","vm-running":"\\eb7b",watch:"\\eb7c",whitespace:"\\eb7d","whole-word":"\\eb7e",window:"\\eb7f","word-wrap":"\\eb80","zoom-in":"\\eb81","zoom-out":"\\eb82","list-filter":"\\eb83","list-flat":"\\eb84","list-selection":"\\eb85",selection:"\\eb85","list-tree":"\\eb86","debug-breakpoint-function-unverified":"\\eb87","debug-breakpoint-function":"\\eb88","debug-breakpoint-function-disabled":"\\eb88","debug-stackframe-active":"\\eb89","circle-small-filled":"\\eb8a","debug-stackframe-dot":"\\eb8a","terminal-decoration-mark":"\\eb8a","debug-stackframe":"\\eb8b","debug-stackframe-focused":"\\eb8b","debug-breakpoint-unsupported":"\\eb8c","symbol-string":"\\eb8d","debug-reverse-continue":"\\eb8e","debug-step-back":"\\eb8f","debug-restart-frame":"\\eb90","debug-alt":"\\eb91","call-incoming":"\\eb92","call-outgoing":"\\eb93",menu:"\\eb94","expand-all":"\\eb95",feedback:"\\eb96","git-pull-request-reviewer":"\\eb96","group-by-ref-type":"\\eb97","ungroup-by-ref-type":"\\eb98",account:"\\eb99","git-pull-request-assignee":"\\eb99","bell-dot":"\\eb9a","debug-console":"\\eb9b",library:"\\eb9c",output:"\\eb9d","run-all":"\\eb9e","sync-ignored":"\\eb9f",pinned:"\\eba0","github-inverted":"\\eba1","server-process":"\\eba2","server-environment":"\\eba3",pass:"\\eba4","issue-closed":"\\eba4","stop-circle":"\\eba5","play-circle":"\\eba6",record:"\\eba7","debug-alt-small":"\\eba8","vm-connect":"\\eba9",cloud:"\\ebaa",merge:"\\ebab",export:"\\ebac","graph-left":"\\ebad",magnet:"\\ebae",notebook:"\\ebaf",redo:"\\ebb0","check-all":"\\ebb1","pinned-dirty":"\\ebb2","pass-filled":"\\ebb3","circle-large-filled":"\\ebb4","circle-large":"\\ebb5","circle-large-outline":"\\ebb5",combine:"\\ebb6",gather:"\\ebb6",table:"\\ebb7","variable-group":"\\ebb8","type-hierarchy":"\\ebb9","type-hierarchy-sub":"\\ebba","type-hierarchy-super":"\\ebbb","git-pull-request-create":"\\ebbc","run-above":"\\ebbd","run-below":"\\ebbe","notebook-template":"\\ebbf","debug-rerun":"\\ebc0","workspace-trusted":"\\ebc1","workspace-untrusted":"\\ebc2","workspace-unknown":"\\ebc3","terminal-cmd":"\\ebc4","terminal-debian":"\\ebc5","terminal-linux":"\\ebc6","terminal-powershell":"\\ebc7","terminal-tmux":"\\ebc8","terminal-ubuntu":"\\ebc9","terminal-bash":"\\ebca","arrow-swap":"\\ebcb",copy:"\\ebcc","person-add":"\\ebcd","filter-filled":"\\ebce",wand:"\\ebcf","debug-line-by-line":"\\ebd0",inspect:"\\ebd1",layers:"\\ebd2","layers-dot":"\\ebd3","layers-active":"\\ebd4",compass:"\\ebd5","compass-dot":"\\ebd6","compass-active":"\\ebd7",azure:"\\ebd8","issue-draft":"\\ebd9","git-pull-request-closed":"\\ebda","git-pull-request-draft":"\\ebdb","debug-all":"\\ebdc","debug-coverage":"\\ebdd","run-errors":"\\ebde","folder-library":"\\ebdf","debug-continue-small":"\\ebe0","beaker-stop":"\\ebe1","graph-line":"\\ebe2","graph-scatter":"\\ebe3","pie-chart":"\\ebe4",bracket:"\\eb0f","bracket-dot":"\\ebe5","bracket-error":"\\ebe6","lock-small":"\\ebe7","azure-devops":"\\ebe8","verified-filled":"\\ebe9",newline:"\\ebea",layout:"\\ebeb","layout-activitybar-left":"\\ebec","layout-activitybar-right":"\\ebed","layout-panel-left":"\\ebee","layout-panel-center":"\\ebef","layout-panel-justify":"\\ebf0","layout-panel-right":"\\ebf1","layout-panel":"\\ebf2","layout-sidebar-left":"\\ebf3","layout-sidebar-right":"\\ebf4","layout-statusbar":"\\ebf5","layout-menubar":"\\ebf6","layout-centered":"\\ebf7",target:"\\ebf8",indent:"\\ebf9","record-small":"\\ebfa","error-small":"\\ebfb","terminal-decoration-error":"\\ebfb","arrow-circle-down":"\\ebfc","arrow-circle-left":"\\ebfd","arrow-circle-right":"\\ebfe","arrow-circle-up":"\\ebff","layout-sidebar-right-off":"\\ec00","layout-panel-off":"\\ec01","layout-sidebar-left-off":"\\ec02",blank:"\\ec03","heart-filled":"\\ec04",map:"\\ec05","map-horizontal":"\\ec05","fold-horizontal":"\\ec05","map-filled":"\\ec06","map-horizontal-filled":"\\ec06","fold-horizontal-filled":"\\ec06","circle-small":"\\ec07","bell-slash":"\\ec08","bell-slash-dot":"\\ec09","comment-unresolved":"\\ec0a","git-pull-request-go-to-changes":"\\ec0b","git-pull-request-new-changes":"\\ec0c","search-fuzzy":"\\ec0d","comment-draft":"\\ec0e",send:"\\ec0f",sparkle:"\\ec10",insert:"\\ec11",mic:"\\ec12","thumbsdown-filled":"\\ec13","thumbsup-filled":"\\ec14",coffee:"\\ec15",snake:"\\ec16",game:"\\ec17",vr:"\\ec18",chip:"\\ec19",piano:"\\ec1a",music:"\\ec1b","mic-filled":"\\ec1c","repo-fetch":"\\ec1d",copilot:"\\ec1e","lightbulb-sparkle":"\\ec1f",robot:"\\ec20","sparkle-filled":"\\ec21","diff-single":"\\ec22","diff-multiple":"\\ec23","surround-with":"\\ec24",share:"\\ec25","git-stash":"\\ec26","git-stash-apply":"\\ec27","git-stash-pop":"\\ec28",vscode:"\\ec29","vscode-insiders":"\\ec2a","code-oss":"\\ec2b","run-coverage":"\\ec2c","run-all-coverage":"\\ec2d",coverage:"\\ec2e","github-project":"\\ec2f","map-vertical":"\\ec30","fold-vertical":"\\ec30","map-vertical-filled":"\\ec31","fold-vertical-filled":"\\ec31","go-to-search":"\\ec32",percentage:"\\ec33","sort-percentage":"\\ec33"}),s5=Object.freeze({"commit-horizontal":"\\f101",graph:"\\f102","next-commit":"\\f103","prev-commit-menu":"\\f104","prev-commit":"\\f105","compare-ref-working":"\\f106","branches-view":"\\f107","commit-view":"\\f108","commits-view":"\\f109","compare-view":"\\f10a","contributors-view":"\\f10b","history-view":"\\f10c",history:"\\f10c","remotes-view":"\\f10d","repositories-view":"\\f10e","search-view":"\\f10f","stashes-view":"\\f110",stashes:"\\f110","tags-view":"\\f111","worktrees-view":"\\f112",gitlens:"\\f113","stash-pop":"\\f114","stash-save":"\\f115",unplug:"\\f116","open-revision":"\\f117",switch:"\\f118",expand:"\\f119","list-auto":"\\f11a","pinned-filled":"\\f11c",clock:"\\f11d","provider-azdo":"\\f11e","provider-bitbucket":"\\f11f","provider-gerrit":"\\f120","provider-gitea":"\\f121","provider-github":"\\f122","provider-gitlab":"\\f123","gitlens-inspect":"\\f124","workspaces-view":"\\f125","confirm-checked":"\\f126","confirm-unchecked":"\\f127","cloud-patch":"\\f128","cloud-patch-share":"\\f129",inspect:"\\f12a","repository-filled":"\\f12b","gitlens-filled":"\\f12c","code-suggestion":"\\f12d","provider-jira":"\\f133","play-button":"\\f134","rocket-filled":"\\f135","branches-view-filled":"\\f136","commits-view-filled":"\\f137","contributors-view-filled":"\\f138","remotes-view-filled":"\\f139","repositories-view-filled":"\\f13a","search-view-filled":"\\f13b","stashes-view-filled":"\\f13c","tags-view-filled":"\\f13d","worktrees-view-filled":"\\f13e","launchpad-view":"\\f13f","launchpad-view-filled":"\\f140","merge-target":"\\f141","history-view-filled":"\\f142"});var s3=Object.defineProperty,s6=Object.getOwnPropertyDescriptor,s4=(e,t,r,n)=>{for(var o,i=n>1?void 0:n?s6(t,r):t,c=e.length-1;c>=0;c--)(o=e[c])&&(i=(n?o(t,r,i):o(i))||i);return n&&i&&s3(t,r,i),i};function s8(e,t=""){return F(Object.entries(e).map(([e,r])=>(function(e,t,r=""){return`:host([icon='${r}${e}'])::before { content: '${t}'; }`})(e,r,t)).join(""))}let s9=class extends lit_element_i{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=void 0}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};s9.styles=B`
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

		${s8(s2)}
		${s8(s5,"gl-")}

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
	`,s4([ej({reflect:!0})],s9.prototype,"icon",2),s4([ej({reflect:!0})],s9.prototype,"modifier",2),s4([ej({type:Number})],s9.prototype,"size",2),s4([ej({reflect:!0})],s9.prototype,"flip",2),s4([ej({reflect:!0})],s9.prototype,"rotate",2),s9=s4([eF("code-icon")],s9);var s7=Object.defineProperty,ae=Object.getOwnPropertyDescriptor,at=(e,t,r,n)=>{for(var o,i=n>1?void 0:n?ae(t,r):t,c=e.length-1;c>=0;c--)(o=e[c])&&(i=(n?o(t,r,i):o(i))||i);return n&&i&&s7(t,r,i),i};let ar=class extends GlElement{constructor(){super(),this.disabled=!1,this.value="",this._defaultChecked=!1,this.checked=!1,this._defaultChecked=this.checked}get defaultChecked(){return this._defaultChecked}handleChange(e){this.checked=e.target.checked;let t=new CustomEvent("gl-change-value");this.dispatchEvent(t)}renderCheck(){if(this.checked)return eE` <code-icon icon="check"></code-icon> `}render(){return eE`<label ?aria-disabled=${this.disabled}
			><input
				class="input"
				.disabled=${this.disabled}
				type="checkbox"
				.checked=${this.checked}
				@change=${this.handleChange}
			/>
			<div class="control">${this.renderCheck()}</div>
			<slot class="label-text"></slot>
		</label>`}};ar.shadowRootOptions={...GlElement.shadowRootOptions,delegatesFocus:!0},ar.styles=[s1],at([ej({type:Boolean,reflect:!0})],ar.prototype,"disabled",2),at([ej({type:String})],ar.prototype,"value",2),at([ej({type:Boolean})],ar.prototype,"defaultChecked",1),at([ej({type:Boolean,reflect:!0})],ar.prototype,"checked",2),ar=at([eF("gl-checkbox")],ar);let an=B`
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
`,ao=B`
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
`;var ai=Object.defineProperty,as=Object.getOwnPropertyDescriptor,aa=(e,t,r,n)=>{for(var o,i=n>1?void 0:n?as(t,r):t,c=e.length-1;c>=0;c--)(o=e[c])&&(i=(n?o(t,r,i):o(i))||i);return n&&i&&ai(t,r,i),i};let al=class extends lit_element_i{constructor(){super(...arguments),this.pulse=!1}render(){return eE`<slot class="indicator${this.pulse?" indicator--pulse":""}"></slot>`}};al.styles=[an,ao],aa([ej({type:Boolean})],al.prototype,"pulse",2),al=aa([eF("gl-indicator")],al);var ac=Object.defineProperty,au=Object.getOwnPropertyDescriptor;let ah=class extends lit_element_i{};ah.styles=[nK,B`
			:host {
				display: block;
				height: 0;
				margin: 0.6rem;
				border-top: 0.1rem solid var(--vscode-menu-separatorBackground);
			}
		`],ah=((e,t,r,n)=>{for(var o,i=n>1?void 0:n?au(t,r):t,c=e.length-1;c>=0;c--)(o=e[c])&&(i=(n?o(t,r,i):o(i))||i);return n&&i&&ac(t,r,i),i})([eF("menu-divider")],ah);var ad=Object.defineProperty,ap=Object.getOwnPropertyDescriptor,af=(e,t,r,n)=>{for(var o,i=n>1?void 0:n?ap(t,r):t,c=e.length-1;c>=0;c--)(o=e[c])&&(i=(n?o(t,r,i):o(i))||i);return n&&i&&ad(t,r,i),i};let am=class extends lit_element_i{constructor(){super(...arguments),this.disabled=!1,this.role="option"}updateInteractiveState(){this.tabIndex=this.disabled?-1:"option"===this.role?0:-1}updated(e){(e.has("disabled")||e.has("role"))&&this.updateInteractiveState()}render(){return this.href?eE`<a href=${this.href}><slot></slot></a>`:eE`<slot></slot>`}};am.styles=[nK,B`
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
				-webkit-font-smoothing: auto;
				border-radius: var(--menu-item-radius, 0.3rem);
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
		`],af([ej({type:Boolean,reflect:!0})],am.prototype,"disabled",2),af([ej({reflect:!0})],am.prototype,"href",2),af([ej({reflect:!0})],am.prototype,"role",2),am=af([eF("menu-item")],am);var ag=Object.defineProperty,ab=Object.getOwnPropertyDescriptor;let av=class extends lit_element_i{render(){return eE`<slot></slot>`}};av.styles=[nK,B`
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
		`],av=((e,t,r,n)=>{for(var o,i=n>1?void 0:n?ab(t,r):t,c=e.length-1;c>=0;c--)(o=e[c])&&(i=(n?o(t,r,i):o(i))||i);return n&&i&&ag(t,r,i),i})([eF("menu-label")],av);let ay=B`
	:host {
		--checkbox-radius: 50%;
		--checkbox-foreground: var(--vscode-radio-inactiveForeground);
		--checkbox-background: var(--vscode-radio-inactiveBackground);
		--checkbox-border: var(--vscode-radio-inactiveBorder);
		--checkbox-checked-foreground: var(--vscode-radio-activeForeground);
		--checkbox-checked-background: var(--vscode-radio-activeBackground);
		--checkbox-checked-border: var(--vscode-radio-activeBorder);
		--checkbox-hover-background: var(--vscode-radio-inactiveHoverBackground);
	}
`;var aw=Object.defineProperty,a_=Object.getOwnPropertyDescriptor,aS=(e,t,r,n)=>{for(var o,i=n>1?void 0:n?a_(t,r):t,c=e.length-1;c>=0;c--)(o=e[c])&&(i=(n?o(t,r,i):o(i))||i);return n&&i&&aw(t,r,i),i};let aC=class extends GlElement{constructor(){super(...arguments),this.disabled=!1,this.checked=!1,this._parentGroup=void 0}set parentGroup(e){this._parentGroup=e}get parentGroup(){return this._parentGroup}handleClick(){this.value&&this.parentGroup?.setValue(this.value)}renderCircle(){if(this.checked)return eE`<code-icon icon="circle-filled"></code-icon>`}render(){return eE`<label ?aria-disabled=${this.disabled}
			><button class="input" .disabled=${this.disabled} @click=${this.handleClick}></button>
			<div class="control">${this.renderCircle()}</div>
			<slot class="label-text"></slot>
		</label>`}};aC.shadowRootOptions={...GlElement.shadowRootOptions,delegatesFocus:!0},aC.styles=[s1,ay],aS([ej({type:Boolean,reflect:!0})],aC.prototype,"disabled",2),aS([ej({type:String})],aC.prototype,"value",2),aS([ej({type:String,reflect:!0})],aC.prototype,"name",2),aS([ej({type:Boolean,reflect:!0})],aC.prototype,"checked",2),aS([ej({type:Object,attribute:!1})],aC.prototype,"parentGroup",1),aC=aS([eF("gl-radio")],aC);var ax=Object.defineProperty,ak=Object.getOwnPropertyDescriptor,aR=(e,t,r,n)=>{for(var o,i=n>1?void 0:n?ak(t,r):t,c=e.length-1;c>=0;c--)(o=e[c])&&(i=(n?o(t,r,i):o(i))||i);return n&&i&&ax(t,r,i),i};let aT=class extends GlElement{constructor(){super(...arguments),this.disabled=!1}handleValueChange(){this.updateRadioElements()}firstUpdated(){this.role="group"}updateRadioElements(e=!1){this.radioEls.forEach(t=>{e&&(t.parentGroup=this),t.checked=t.value===this.value,t.disabled=this.disabled})}render(){return eE`<slot @slotchange=${()=>this.updateRadioElements(!0)}></slot>`}setValue(e){this.value=e;let t=new CustomEvent("gl-change-value");this.dispatchEvent(t)}};aT.styles=[ay],aR([ej({type:Boolean,reflect:!0})],aT.prototype,"disabled",2),aR([ej({type:String})],aT.prototype,"value",2),aR([tl(["value","disabled"])],aT.prototype,"handleValueChange",1),aR([eY({flatten:!0})],aT.prototype,"radioEls",2),aT=aR([eF("gl-radio-group")],aT);var aE=Object.defineProperty,aO=Object.getOwnPropertyDescriptor,aM=(e,t,r,n)=>{for(var o,i=n>1?void 0:n?aO(t,r):t,c=e.length-1;c>=0;c--)(o=e[c])&&(i=(n?o(t,r,i):o(i))||i);return n&&i&&aE(t,r,i),i};let aI=class extends lit_element_i{constructor(){super(...arguments),this.dateStyle="relative",this.date=new Date,this.tooltip=""}get absoluteDate(){return tg(this.date,this.format??"MMMM Do, YYYY h:mma")}get dateLabel(){return"relative"===this.dateStyle?tm(this.date):this.absoluteDate}render(){return eE`<gl-tooltip content="${this.tooltip} ${this.absoluteDate}"
			><time part="base" datetime="${this.date.toISOString()}">${this.dateLabel}</time></gl-tooltip
		>`}};aM([ej()],aI.prototype,"format",2),aM([ej({attribute:"date-style"})],aI.prototype,"dateStyle",2),aM([ej({converter:{toAttribute:e=>e.getTime(),fromAttribute:(e,t)=>new Date(parseInt(e,10))},reflect:!0})],aI.prototype,"date",2),aM([ej()],aI.prototype,"tooltip",2),aI=aM([eF("formatted-date")],aI);var aA=Object.defineProperty,aN=Object.getOwnPropertyDescriptor,aD=(e,t,r,n)=>{for(var o,i=n>1?void 0:n?aN(t,r):t,c=e.length-1;c>=0;c--)(o=e[c])&&(i=(n?o(t,r,i):o(i))||i);return n&&i&&aA(t,r,i),i};let az=class extends GlElement{constructor(){super(...arguments),this.url="",this.name="",this.status="merged",this.type="autolink",this.identifier="",this.details=!1}renderDate(){return this.date?eE`<formatted-date
			.date=${new Date(this.date)}
			.format=${this.dateFormat}
			.dateStyle=${this.dateStyle}
		></formatted-date>`:eA}render(){let{icon:e,modifier:t}=function(e="autolink",t="merged"){let r,n;switch(e){case"issue":n="closed"===t?"merged":"opened",r="closed"===t?"pass":"issues";break;case"pr":switch(n=t,t){case"merged":r="git-merge";break;case"closed":r="git-pull-request-closed";break;default:r="git-pull-request"}break;default:n="opened",r="link"}return{icon:r,modifier:n}}(this.type,this.status);return this.compact?eE`
				<span class="icon icon--${t}"><code-icon icon=${e}></code-icon></span>
				<p class="title">${this.identifier}</p>
			`:eE`
			<span class="icon icon--${t}"><code-icon icon=${e}></code-icon></span>
			<p class="title">
				<a href="${this.url}">${this.name}</a>
			</p>
			<p class="date">${this.identifier} ${this.status?this.status:eA} ${this.renderDate()}</p>
			${nP(!0===this.details,()=>eE`
					<p class="details">
						<gl-button appearance="toolbar" tooltip="Open Details" @click=${()=>this.onDetailsClicked()}
							><code-icon icon="eye"></code-icon
						></gl-button>
					</p>
				`)}
		`}onDetailsClicked(){this.emit("gl-issue-pull-request-details")}};az.styles=B`
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
	`,aD([ej()],az.prototype,"url",2),aD([ej()],az.prototype,"name",2),aD([ej()],az.prototype,"date",2),aD([ej()],az.prototype,"dateFormat",2),aD([ej()],az.prototype,"dateStyle",2),aD([ej()],az.prototype,"status",2),aD([ej()],az.prototype,"type",2),aD([ej()],az.prototype,"identifier",2),aD([ej({type:Boolean,reflect:!0})],az.prototype,"compact",2),aD([ej({type:Boolean})],az.prototype,"details",2),az=aD([eF("issue-pull-request")],az);let a$=navigator?.userAgentData?.platform,aP=navigator.userAgent,aL="Linux"===a$||aP.includes("Linux"),aH="macOS"===a$||aP.includes("Macintosh"),aG="Windows"===a$||aP.includes("Windows");var aW=Object.defineProperty,aF=Object.getOwnPropertyDescriptor,aB=(e,t,r,n)=>{for(var o,i=n>1?void 0:n?aF(t,r):t,c=e.length-1;c>=0;c--)(o=e[c])&&(i=(n?o(t,r,i):o(i))||i);return n&&i&&aW(t,r,i),i};let aU=class extends lit_element_i{constructor(){super(...arguments),this.mode="infinite",this.active=!1,this.position="bottom"}firstUpdated(){this.setAttribute("role","progressbar")}render(){return eE`<div class="progress-bar"></div>`}};aU.styles=B`
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
	`,aB([ej({reflect:!0})],aU.prototype,"mode",2),aB([ej({type:Boolean})],aU.prototype,"active",2),aB([ej()],aU.prototype,"position",2),aU=aB([eF("progress-indicator")],aU);let aj=new Map([["","message:"],["=:","message:"],["message:","message:"],["@:","author:"],["author:","author:"],["#:","commit:"],["commit:","commit:"],["?:","file:"],["file:","file:"],["~:","change:"],["change:","change:"],["is:","type:"],["type:","type:"]]),aZ=/(?:^|(\b|\s)*)((=:|message:|@:|author:|#:|commit:|\?:|file:|~:|change:|is:|type:)(?:"[^"]*"?|\w*))(?:$|(\b|\s))/g;var aV=Object.defineProperty,aq=Object.getOwnPropertyDescriptor,aY=(e,t,r,n)=>{for(var o,i=n>1?void 0:n?aq(t,r):t,c=e.length-1;c>=0;c--)(o=e[c])&&(i=(n?o(t,r,i):o(i))||i);return n&&i&&aV(t,r,i),i};let aK=class extends GlElement{constructor(){super(...arguments),this.errorMessage="",this.filter=!1,this.matchAll=!1,this.matchCase=!1,this.matchRegex=!0,this.debouncedOnSearchChanged=e9(this.onSearchChanged.bind(this),250),this.searchHistory=[],this.searchHistoryPos=0}get label(){return this.filter?"Filter":"Search"}get placeholder(){return`${this.label} commits (\u2191\u2193 for history), e.g. "Updates dependencies" author:eamodio`}get value(){return this._value}set value(e){void 0===this._value&&(this._value=e)}get matchCaseOverride(){return!this.matchRegex||this.matchCase}focus(e){this.input.focus(e)}handleFocus(e){this.popoverEl.hide()}handleClear(e){this.focus(),this._value="",this.debouncedOnSearchChanged()}updateHelpText(){null==this._updateHelpTextDebounced&&(this._updateHelpTextDebounced=e9(this.updateHelpTextCore.bind(this),200)),this._updateHelpTextDebounced()}updateHelpTextCore(){let e=this.input?.selectionStart,t=this.value;if(null!=e&&0!==t.length&&t.includes(":")){let r,n=RegExp(aZ,"g");for(;null!=(r=n.exec(t));){let[,,t,n]=r;if(e>r.index&&e<=r.index+(t?.trim().length??0)){this.helpType=aj.get(n);return}}}this.helpType=void 0}handleInputClick(e){this.updateHelpText()}handleInput(e){let t=e.target?.value;this._value=t,this.updateHelpText(),this.debouncedOnSearchChanged()}handleMatchAll(e){this.matchAll=!this.matchAll,this.debouncedOnSearchChanged()}handleMatchCase(e){this.matchCase=!this.matchCase,this.debouncedOnSearchChanged()}handleMatchRegex(e){this.matchRegex=!this.matchRegex,this.debouncedOnSearchChanged()}handleFilter(e){this.filter=!this.filter,this.emit("gl-search-modechange",{searchMode:this.filter?"filter":"normal"}),this.debouncedOnSearchChanged()}handleKeyup(e){this.updateHelpText()}handleShortcutKeys(e){if(!["Enter","ArrowUp","ArrowDown"].includes(e.key)||e.ctrlKey||e.metaKey||e.altKey)return!0;if(e.preventDefault(),"Enter"===e.key)this.emit("gl-search-navigate",{direction:e.shiftKey?"previous":"next"});else if(0!==this.searchHistory.length){let t="ArrowDown"===e.key?1:-1,r=this.searchHistoryPos+t;if(r>-1&&r<this.searchHistory.length){this.searchHistoryPos=r;let e=this.searchHistory[r];e!==this.value&&(this._value=e,this.updateHelpText(),this.debouncedOnSearchChanged())}}return!1}handleInsertToken(e){this._value+=`${this.value.length>0?" ":""}${e}`,window.requestAnimationFrame(()=>{this.updateHelpText(),("@me"===e||"is:stash"===e||"type:stash"===e)&&this.debouncedOnSearchChanged(),this.input.focus(),this.input.selectionStart=this.value.length})}onSearchChanged(){let e={query:this.value,filter:this.filter,matchAll:this.matchAll,matchCase:this.matchCase,matchRegex:this.matchRegex};this.emit("gl-search-inputchange",e)}setCustomValidity(e=""){this.errorMessage=e}logSearch(e){let t=this.searchHistory.length-1;this.searchHistoryPos<t||this.searchHistory[t]===e.query||(this.searchHistory.push(e.query),this.searchHistoryPos=this.searchHistory.length-1)}setSearchQuery(e){this._value=e}render(){return eE`<div class="field">
				<div class="controls controls__start">
					<gl-button
						appearance="input"
						role="checkbox"
						aria-checked="${this.filter}"
						tooltip="Filter Commits"
						aria-label="Filter Commits"
						@click="${this.handleFilter}"
						@focus="${this.handleFocus}"
					>
						<code-icon icon="list-filter"></code-icon>
					</gl-button>
					<gl-popover
						class="popover"
						trigger="click focus"
						hoist
						placement="bottom-start"
						.arrow=${!1}
						distance="0"
					>
						<gl-button
							slot="anchor"
							appearance="input"
							tooltip="${this.label} By"
							tooltipPlacement="top"
							aria-label="${this.label} By"
						>
							<code-icon icon="search" size="14" aria-hidden="true"></code-icon>
							<code-icon slot="suffix" icon="chevron-down" size="10" aria-hidden="true"></code-icon>
						</gl-button>
						<div slot="content">
							<menu-label>${this.label} By</menu-label>
							<menu-item role="none">
								<button
									class="menu-button"
									type="button"
									@click="${()=>this.handleInsertToken("@me")}"
								>
									My changes <small>@me</small>
								</button>
							</menu-item>
							<menu-item role="none">
								<button
									class="menu-button"
									type="button"
									@click="${()=>this.handleInsertToken("message:")}"
								>
									Message <small>message: or =:</small>
								</button>
							</menu-item>
							<menu-item role="none">
								<button
									class="menu-button"
									type="button"
									@click="${()=>this.handleInsertToken("author:")}"
								>
									Author <small>author: or @:</small>
								</button>
							</menu-item>
							<menu-item role="none">
								<button
									class="menu-button"
									type="button"
									@click="${()=>this.handleInsertToken("commit:")}"
								>
									Commit SHA <small>commit: or #:</small>
								</button>
							</menu-item>
							<menu-item role="none">
								<button
									class="menu-button"
									type="button"
									@click="${()=>this.handleInsertToken("file:")}"
								>
									File <small>file: or ?:</small>
								</button>
							</menu-item>
							<menu-item role="none">
								<button
									class="menu-button"
									type="button"
									@click="${()=>this.handleInsertToken("change:")}"
								>
									Change <small>change: or ~:</small>
								</button>
							</menu-item>
							<menu-item role="none">
								<button
									class="menu-button"
									type="button"
									@click="${()=>this.handleInsertToken("type:stash")}"
								>
									Type <small>type:stash or is:stash</small>
								</button>
							</menu-item>
						</div>
					</gl-popover>
				</div>
				<input
					id="search"
					part="search"
					type="text"
					spellcheck="false"
					placeholder="${this.placeholder}"
					.value="${this._value??""}"
					aria-valid="${!this.errorMessage}"
					aria-describedby="${""!==this.errorMessage||null!=this.helpType?"help-text":""}"
					@input="${this.handleInput}"
					@keydown="${this.handleShortcutKeys}"
					@keyup="${this.handleKeyup}"
					@click="${this.handleInputClick}"
					@focus="${this.handleFocus}"
				/>
				<div class="message" id="help-text" aria-live="polite">
					${""!==this.errorMessage?eE`${this.errorMessage}${this.helpType?eE`<br />`:""}`:""}
					${"message:"===this.helpType?eE`<span
								>Message: use quotes to search for phrases, e.g.
								<code>message:"Updates dependencies"</code></span
						  >`:""}
					${"author:"===this.helpType?eE`<span>Author: use a user's account, e.g. <code>author:eamodio</code></span>`:""}
					${"commit:"===this.helpType?eE`<span>Commit: use a full or short Commit SHA, e.g. <code>commit:4ce3a</code></span>`:""}
					${"file:"===this.helpType?eE`<span
								>File: use a filename with extension, e.g. <code>file:package.json</code>, or a glob
								pattern, e.g. <code>file:*graph*</code></span
						  >`:""}
					${"change:"===this.helpType?eE`<span>Change: use a regex pattern, e.g. <code>change:update&#92;(param</code></span>`:""}
					${"type:"===this.helpType?eE`<span
								>Type: use <code>stash</code> to search only stashes, e.g. <code>type:stash</code></span
						  >`:""}
				</div>
			</div>
			<div class="controls">
				<gl-button
					appearance="input"
					class="${this.value?"":" is-hidden"}"
					tooltip="Clear"
					aria-label="Clear"
					@click="${this.handleClear}"
					@focus="${this.handleFocus}"
				>
					<code-icon icon="close"></code-icon>
				</gl-button>
				<gl-button
					appearance="input"
					role="checkbox"
					aria-checked="${this.matchAll}"
					tooltip="Match All"
					aria-label="Match All"
					@click="${this.handleMatchAll}"
					@focus="${this.handleFocus}"
				>
					<code-icon icon="whole-word"></code-icon>
				</gl-button>
				<gl-button
					appearance="input"
					role="checkbox"
					aria-checked="${this.matchCaseOverride}"
					tooltip="Match Case${this.matchCaseOverride&&!this.matchCase?" (always on without regular expressions)":""}"
					aria-label="Match Case${this.matchCaseOverride&&!this.matchCase?" (always on without regular expressions)":""}"
					?disabled="${!this.matchRegex}"
					@click="${this.handleMatchCase}"
					@focus="${this.handleFocus}"
				>
					<code-icon icon="case-sensitive"></code-icon>
				</gl-button>
				<gl-button
					appearance="input"
					role="checkbox"
					aria-checked="${this.matchRegex}"
					tooltip="Use Regular Expression"
					aria-label="Use Regular Expression"
					@click="${this.handleMatchRegex}"
					@focus="${this.handleFocus}"
				>
					<code-icon icon="regex"></code-icon>
				</gl-button>
			</div>`}};aK.styles=B`
		* {
			box-sizing: border-box;
		}

		:host {
			--gl-search-input-background: var(--vscode-input-background);
			--gl-search-input-foreground: var(--vscode-input-foreground);
			--gl-search-input-border: var(--vscode-input-border);
			--gl-search-input-placeholder: var(
				--vscode-editor-placeholder\\\.foreground,
				var(--vscode-input-placeholderForeground)
			);

			display: inline-flex;
			flex-direction: row;
			align-items: center;
			gap: 0.4rem;
			position: relative;

			flex: auto 1 1;
		}

		label {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 0.2rem;
			width: 3.2rem;
			height: 2.4rem;
			color: var(--gl-search-input-foreground);
			cursor: pointer;
			border-radius: 3px;
		}
		label:hover {
			background-color: var(--vscode-toolbar-hoverBackground);
		}
		label:focus {
			outline: 1px solid var(--vscode-focusBorder);
			outline-offset: -1px;
		}

		.icon-small {
			font-size: 1rem;
		}

		.field {
			position: relative;
			flex: auto 1 1;
		}

		input {
			width: 100%;
			height: 2.4rem;
			background-color: var(--gl-search-input-background);
			color: var(--gl-search-input-foreground);
			border: 1px solid var(--gl-search-input-border);
			border-radius: 0.25rem;
			padding: 0 6.8rem 1px 5.6rem; /* Adjust padding to make space for the button */
			font-family: inherit;
			font-size: inherit;
		}
		input:focus {
			outline: 1px solid var(--vscode-focusBorder);
			outline-offset: -1px;
		}
		input::placeholder {
			color: var(--gl-search-input-placeholder);
		}

		input::-webkit-search-cancel-button {
			display: none;
		}

		input[aria-describedby='help-text'] {
			border-color: var(--vscode-inputValidation-infoBorder);
		}
		input[aria-describedby='help-text']:focus {
			outline-color: var(--vscode-inputValidation-infoBorder);
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		input[aria-valid='false'] {
			border-color: var(--vscode-inputValidation-errorBorder);
		}
		input[aria-valid='false']:focus {
			outline-color: var(--vscode-inputValidation-errorBorder);
		}

		.message {
			position: absolute;
			top: 100%;
			left: 0;
			width: 100%;
			padding: 0.4rem;
			transform: translateY(-0.1rem);
			z-index: 1000;
			background-color: var(--vscode-inputValidation-infoBackground);
			border: 1px solid var(--vscode-inputValidation-infoBorder);
			color: var(--gl-search-input-foreground);
			font-size: 1.2rem;
			line-height: 1.4;
		}

		input[aria-valid='false'] + .message {
			background-color: var(--vscode-inputValidation-errorBackground);
			border-color: var(--vscode-inputValidation-errorBorder);
		}

		input:not([aria-describedby='help-text']:focus) + .message {
			display: none;
		}

		.controls {
			position: absolute;
			top: 0.2rem;
			right: 0.2rem;
			display: inline-flex;
			flex-direction: row;
			gap: 0.1rem;
		}

		.controls.controls__start {
			--button-compact-padding: 0.4rem;
			--button-line-height: 1;

			left: 0.2rem;
			right: auto;
		}

		button {
			padding: 0;
			color: var(--gl-search-input-foreground);
			border: 1px solid transparent;
			background: none;
		}
		button:focus:not([disabled]) {
			outline: 1px solid var(--vscode-focusBorder);
			outline-offset: -1px;
		}
		button:not([disabled]) {
			cursor: pointer;
		}

		.is-hidden {
			display: none;
		}

		menu-item {
			padding: 0 0.5rem;
		}

		.menu-button {
			display: block;
			width: 100%;
			padding: 0.1rem 0.6rem 0 0.6rem;
			line-height: 2.2rem;
			text-align: left;
			color: var(--vscode-menu-foreground);
			border-radius: 3px;
		}

		.menu-button:hover {
			color: var(--vscode-menu-selectionForeground);
			background-color: var(--vscode-menu-selectionBackground);
		}

		code {
			display: inline-block;
			backdrop-filter: brightness(1.3);
			border-radius: 3px;
			padding: 0px 4px;
			font-family: var(--vscode-editor-font-family);
		}

		.popover {
			margin-left: -0.25rem;
		}
		.popover::part(body) {
			padding: 0 0 0.5rem 0;
			font-size: var(--vscode-font-size);
			background-color: var(--vscode-menu-background);
		}
	`,aY([eq("input")],aK.prototype,"input",2),aY([eq("gl-popover")],aK.prototype,"popoverEl",2),aY([eZ()],aK.prototype,"errorMessage",2),aY([eZ()],aK.prototype,"helpType",2),aY([eZ()],aK.prototype,"_value",2),aY([ej({type:String})],aK.prototype,"value",1),aY([ej({type:Boolean})],aK.prototype,"filter",2),aY([ej({type:Boolean})],aK.prototype,"matchAll",2),aY([ej({type:Boolean})],aK.prototype,"matchCase",2),aY([ej({type:Boolean})],aK.prototype,"matchRegex",2),aK=aY([eF("gl-search-input")],aK);var aQ=Object.defineProperty,aX=Object.getOwnPropertyDescriptor,aJ=(e,t,r,n)=>{for(var o,i=n>1?void 0:n?aX(t,r):t,c=e.length-1;c>=0;c--)(o=e[c])&&(i=(n?o(t,r,i):o(i))||i);return n&&i&&aQ(t,r,i),i};let a0=class extends GlElement{constructor(){super(...arguments),this.errorMessage="",this.matchAll=!1,this.matchCase=!1,this.matchRegex=!0,this.filter=!1,this.total=0,this.step=0,this.more=!1,this.searching=!1,this.valid=!1,this.resultsHidden=!1,this.resultsLabel="result",this.resultsLoaded=!1}get value(){return this._value}set value(e){void 0===this._value&&(this._value=e)}get hasResults(){return this.total>=1}connectedCallback(){super.connectedCallback(),this._disposable=_.on(window,"keydown",e=>this.handleShortcutKeys(e))}disconnectedCallback(){super.disconnectedCallback(),this._disposable?.dispose()}focus(e){this.searchInput?.focus(e)}navigate(e){this.emit("gl-search-navigate",{direction:e})}logSearch(e){this.searchInput?.logSearch(e)}setSearchQuery(e){this._value=e}handleShortcutKeys(e){if(!e.altKey){if("F3"===e.key&&!e.ctrlKey&&!e.metaKey||"g"===e.key&&e.metaKey&&!e.ctrlKey&&aH){e.preventDefault(),e.stopImmediatePropagation(),this.navigate(e.shiftKey?"previous":"next");return}"f"===e.key&&(e.metaKey&&!e.ctrlKey&&aH||e.ctrlKey&&!aH)&&(e.preventDefault(),e.stopImmediatePropagation(),this.focus())}}handlePrevious(e){e.stopImmediatePropagation(),this.navigate(e.shiftKey?"first":"previous")}handleNext(e){e.stopImmediatePropagation(),this.navigate(e.shiftKey?"last":"next")}handleOpenInView(e){e.stopImmediatePropagation(),this.emit("gl-search-openinview")}get resultsHtml(){if(this.searching)return eE`<gl-tooltip hoist placement="top" class="count"
				><code-icon icon="loading" modifier="spin"></code-icon><span slot="content">Searching...</span>
			</gl-tooltip>`;let e=tS(this.resultsLabel,this.total,{zero:"No",infix:this.more?"+ ":void 0}),t="",r=eE`<span>${e}</span>`;if(this.total>=1){t=this.resultsHidden?eE`${e} found &mdash; some results are hidden or unable to be shown on the Commit Graph`:`${e} found`;let n=`${this.total}${this.more?"+":""}`;r=eE`<span
				><span aria-current="step">${this.step}</span> of
				<span class="${this.resultsHidden?"sr-hidden":""}">${n}</span
				><span class="sr-only"> ${e}</span></span
			>`}else this.resultsLoaded&&(t=`${e} found`);return eE`<gl-tooltip
			hoist
			placement="top"
			?disabled="${!t}"
			class="count${this.total<1&&this.valid&&this.resultsLoaded?" error":""}"
			>${r}<span slot="content">${t}</span></gl-tooltip
		>`}render(){return eE`<gl-search-input
				id="search-input"
				exportparts="search: search"
				.errorMessage="${this.errorMessage}"
				.filter=${this.filter}
				.matchAll="${this.matchAll}"
				.matchCase="${this.matchCase}"
				.matchRegex="${this.matchRegex}"
				.value="${this._value??""}"
				@gl-search-navigate="${e=>{e.stopImmediatePropagation(),this.navigate(e.detail.direction)}}"
			></gl-search-input>
			<div class="search-navigation" aria-label="Search navigation">
				${this.resultsHtml}
				<gl-tooltip hoist>
					<button
						type="button"
						class="button"
						?disabled="${!this.hasResults}"
						@click="${this.handlePrevious}"
					>
						<code-icon
							icon="arrow-up"
							aria-label="Previous Match (Shift+Enter)&#10;First Match (Shift+Click)"
						></code-icon>
					</button>
					<span slot="content">Previous Match (Shift+Enter)<br />First Match (Shift+Click)</span>
				</gl-tooltip>
				<gl-tooltip hoist>
					<button type="button" class="button" ?disabled="${!this.hasResults}" @click="${this.handleNext}">
						<code-icon
							icon="arrow-down"
							aria-label="Next Match (Enter)&#10;Last Match (Shift+Click)"
						></code-icon>
					</button>
					<span slot="content">Next Match (Enter)<br />Last Match (Shift+Click)</span>
				</gl-tooltip>
				<gl-tooltip hoist content="Show Results in Side Bar">
					<button
						type="button"
						class="button"
						?disabled="${!this.hasResults}"
						@click="${this.handleOpenInView}"
					>
						<code-icon icon="link-external" aria-label="Show Results in Side Bar"></code-icon>
					</button>
				</gl-tooltip>
			</div>
			<progress-indicator ?active="${this.searching}"></progress-indicator>`}};a0.styles=B`
		:host {
			display: inline-flex;
			flex-direction: row;
			align-items: center;
			gap: 0.8rem;
			color: var(--color-foreground);
			flex: auto 1 1;
			position: relative;
		}
		:host(:focus) {
			outline: 0;
		}
		progress-indicator {
			top: -4px;
		}

		.search-navigation {
			display: inline-flex;
			flex-direction: row;
			align-items: center;
			gap: 0.3rem;
			color: var(--color-foreground);
		}
		.search-navigation:focus {
			outline: 0;
		}

		.count {
			flex: none;
			margin-right: 0.4rem;
			font-size: 1.2rem;
			min-width: 10ch;
		}

		.count.error {
			color: var(--vscode-errorForeground);
		}

		.button {
			width: 2.4rem;
			height: 2.4rem;
			padding: 0;
			color: inherit;
			border: none;
			border-radius: 3px;
			background: none;
			text-align: center;
		}
		.button[disabled] {
			color: var(--vscode-disabledForeground);
		}
		.button:focus {
			background-color: var(--vscode-toolbar-activeBackground);
			outline: 1px solid var(--vscode-focusBorder);
			outline-offset: -1px;
		}
		.button:not([disabled]) {
			cursor: pointer;
		}
		.button:hover:not([disabled]) {
			color: var(--vscode-foreground);
			background-color: var(--vscode-toolbar-hoverBackground);
		}
		.button > code-icon[icon='arrow-up'] {
			transform: translateX(-0.1rem);
		}

		.sr-hidden {
			color: var(--vscode-errorForeground);
		}

		.sr-only {
			clip: rect(0 0 0 0);
			clip-path: inset(50%);
			height: 1px;
			overflow: hidden;
			position: absolute;
			white-space: nowrap;
			width: 1px;
		}
	`,aJ([ej({type:String})],a0.prototype,"errorMessage",2),aJ([eZ()],a0.prototype,"_value",2),aJ([ej({type:String})],a0.prototype,"value",1),aJ([ej({type:Boolean})],a0.prototype,"matchAll",2),aJ([ej({type:Boolean})],a0.prototype,"matchCase",2),aJ([ej({type:Boolean})],a0.prototype,"matchRegex",2),aJ([ej({type:Boolean})],a0.prototype,"filter",2),aJ([ej({type:Number})],a0.prototype,"total",2),aJ([ej({type:Number})],a0.prototype,"step",2),aJ([ej({type:Boolean})],a0.prototype,"more",2),aJ([ej({type:Boolean})],a0.prototype,"searching",2),aJ([ej({type:Boolean})],a0.prototype,"valid",2),aJ([ej({type:Boolean})],a0.prototype,"resultsHidden",2),aJ([ej({type:String})],a0.prototype,"resultsLabel",2),aJ([ej({type:Boolean})],a0.prototype,"resultsLoaded",2),aJ([eq("gl-search-input")],a0.prototype,"searchInput",2),a0=aJ([eF("gl-search-box")],a0);let a1={"cherry-pick":{label:"Cherry picking",conflicts:"Resolve conflicts to continue cherry picking",directionality:"into"},merge:{label:"Merging",conflicts:"Resolve conflicts to continue merging",directionality:"into"},rebase:{label:"Rebasing",conflicts:"Resolve conflicts to continue rebasing",directionality:"onto",pending:"Pending rebase of"},revert:{label:"Reverting",conflicts:"Resolve conflicts to continue reverting",directionality:"in"}};function a2(e){return e.startsWith("remotes/")?e.indexOf("/",8):e.indexOf("/")}let a5=/^([\w\-/]+(?:\.[\w\-/]+)*)?(\.\.\.?)([\w\-/]+(?:\.[\w\-/]+)*)?$/,a3=/^([\w\-/]+(?:\.[\w\-/]+)*)(\.\.\.?)([\w\-/]+(?:\.[\w\-/]+)*)$/,a6=/^([\w\-/]+(?:\.[\w\-/]+)*)(\.\.)([\w\-/]+(?:\.[\w\-/]+)*)$/,a4=/^([\w\-/]+(?:\.[\w\-/]+)*)(\.\.\.)([\w\-/]+(?:\.[\w\-/]+)*)$/,a8=/(^[0-9a-f]{40})\^[0-3]?$/;function a9(e,t){var r,n,o;let i;if(null==e)return"";t=!1===t?{}:{expand:!0,icon:!0,label:t?.label??t?.expand??!0,...t};let c=t?.quoted?`'${e.name}'`:e.name;switch(e.refType){case"branch":{let o;e.remote&&(c=`${(r=c).substring(0,a2(r))}: ${(n=c).substring(a2(n)+1)}`,c=t?.quoted?`'${c}'`:c),o=t.label?t.capitalize&&t.expand?`${e.remote?"Remote ":""}Branch `:`${e.remote?"remote ":""}branch `:"",i=`${o}${t.icon?`$(git-branch)${eQ.Space}${c}`:c}`;break}case"tag":i=`${t.label?"tag ":""}${t.icon?`$(tag)${eQ.Space}${c}`:c}`;break;default:if(e?.refType==="stash"||e?.refType==="revision"&&e?.stashName){let r;t.expand&&e.message&&(r=`${null!=e.stashNumber?`#${e.stashNumber}: `:""}${e.message.length>20?`${e.message.substring(0,20).trimEnd()}${eQ.Ellipsis}`:e.message}`),i=`${t.label?"stash ":""}${t.icon?`$(archive)${eQ.Space}${r??e.name}`:r??(e.stashNumber?`#${e.stashNumber}`:e.name)}`}else if(function(e,t="any"){if(null==e)return!1;switch(t){case"qualified":return a3.test(e);case"qualified-double-dot":return a6.test(e);case"qualified-triple-dot":return a4.test(e);default:return a5.test(e)}}(e.ref))i=c;else{let r,n;(t.expand&&e.message&&(r=e.message.length>20?` (${e.message.substring(0,20).trimEnd()}${eQ.Ellipsis})`:` (${e.message})`),t.expand&&t.label&&(o=e.ref,o&&a8.test(o)))?(c=e.name.endsWith("^")?e.name.substring(0,e.name.length-1):e.name,t?.quoted&&(c=`'${c}'`),n="before "):n="",i=`${t.label?`${n}commit `:""}${t.icon?`$(git-commit)${eQ.Space}${c}${r??""}`:`${c}${r??""}`}`}}return t.capitalize&&t.expand&&!1!==t.label?tw(i):i}var a7=Object.defineProperty,le=Object.getOwnPropertyDescriptor,lt=(e,t,r,n)=>{for(var o,i=n>1?void 0:n?le(t,r):t,c=e.length-1;c>=0;c--)(o=e[c])&&(i=(n?o(t,r,i):o(i))||i);return n&&i&&a7(t,r,i),i};let lr=class extends lit_element_i{constructor(){super(...arguments),this.icon="",this.disabled=!1}render(){return eE`
			<gl-tooltip hoist content="${this.label??eA}">
				<a
					role="${!this.href?"button":eA}"
					type="${!this.href?"button":eA}"
					aria-label="${this.label??eA}"
					?disabled=${this.disabled}
					href=${this.href??eA}
				>
					<code-icon icon="${this.icon}"></code-icon>
				</a>
			</gl-tooltip>
		`}focus(e){this.defaultFocusEl.focus(e)}};lr.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},lr.styles=B`
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
			${nV}
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
	`,lt([ej()],lr.prototype,"href",2),lt([ej()],lr.prototype,"label",2),lt([ej()],lr.prototype,"icon",2),lt([ej({type:Boolean})],lr.prototype,"disabled",2),lt([eq("a")],lr.prototype,"defaultFocusEl",2),lr=lt([eF("action-item")],lr);var ln=Object.defineProperty,lo=Object.getOwnPropertyDescriptor,li=(e,t,r,n)=>{for(var o,i=n>1?void 0:n?lo(t,r):t,c=e.length-1;c>=0;c--)(o=e[c])&&(i=(n?o(t,r,i):o(i))||i);return n&&i&&ln(t,r,i),i};let ls=class extends lit_element_i{firstUpdated(){this.role="navigation"}disconnectedCallback(){this._slotSubscriptionsDisposer?.(),super.disconnectedCallback()}render(){return eE`<slot @slotchange=${this.handleSlotChange}></slot>`}handleSlotChange(e){if(this._slotSubscriptionsDisposer?.(),this.actionNodes.length<2)return;let t=this.handleKeydown.bind(this),r=`${this.actionNodes.length}`,n=this.actionNodes.map((e,n)=>(e.setAttribute("aria-posinset",`${n+1}`),e.setAttribute("aria-setsize",r),e.setAttribute("tabindex",0===n?"0":"-1"),e.addEventListener("keydown",t,!1),{dispose:()=>{e?.removeEventListener("keydown",t,!1)}}));this._slotSubscriptionsDisposer=()=>{n?.forEach(({dispose:e})=>e())}}handleKeydown(e){if(!e.target||null==this.actionNodes||this.actionNodes.length<2)return;let t=e.target,r=parseInt(t.getAttribute("aria-posinset")??"0",10),n=null;if("ArrowLeft"===e.key){let e=1===r?this.actionNodes.length-1:r-2;n=this.actionNodes[e]}else if("ArrowRight"===e.key){let e=r===this.actionNodes.length?0:r;n=this.actionNodes[e]}null!=n&&n!==t&&(t.setAttribute("tabindex","-1"),n.setAttribute("tabindex","0"),n.focus())}};ls.styles=B`
		:host {
			display: flex;
			align-items: center;
			user-select: none;
		}
	`,li([eY({flatten:!0})],ls.prototype,"actionNodes",2),ls=li([eF("action-nav")],ls);var la=Object.defineProperty,ll=Object.getOwnPropertyDescriptor,lc=(e,t,r,n)=>{for(var o,i=n>1?void 0:n?ll(t,r):t,c=e.length-1;c>=0;c--)(o=e[c])&&(i=(n?o(t,r,i):o(i))||i);return n&&i&&la(t,r,i),i};let lu=class extends lit_element_i{constructor(){super(...arguments),this.conflicts=!1,this.skipCommand="gitlens.home.skipPausedOperation",this.continueCommand="gitlens.home.continuePausedOperation",this.abortCommand="gitlens.home.abortPausedOperation",this.openEditorCommand="gitlens.home.openRebaseEditor"}get onSkipUrl(){return this.createCommandLink(this.skipCommand,this.pausedOpStatus)}get onContinueUrl(){return this.createCommandLink(this.continueCommand,this.pausedOpStatus)}get onAbortUrl(){return this.createCommandLink(this.abortCommand,this.pausedOpStatus)}get onOpenEditorUrl(){return this.createCommandLink(this.openEditorCommand,this.pausedOpStatus)}createCommandLink(e,t){return null!=this.webviewCommandContext&&(t=null==t?this.webviewCommandContext:{...t,...this.webviewCommandContext}),nj(e,t)}render(){return null==this.pausedOpStatus?eA:eE`
			<span class="status" part="base">
				<code-icon icon="warning" class="icon"></code-icon>
				${this.renderStatus(this.pausedOpStatus)}${this.renderActions()}
			</span>
		`}renderStatus(e){if("rebase"!==e.type){let t=a1[e.type];return eE`<span class="label"
				>${this.conflicts?t.conflicts:t.label}
				<code-icon
					icon="${"branch"===e.incoming.refType?"git-branch":"git-commit"}"
					class="icon"
				></code-icon>
				${a9(e.incoming,{expand:!1,icon:!1})} ${t.directionality}
				${a9(e.current,{expand:!1,icon:!1})}</span
			>`}let t=e.steps.total>0,r=a1[e.type];return eE`<span class="label"
				>${this.conflicts?r.conflicts:t?r.label:r.pending}
				<code-icon
					icon="${"branch"===e.incoming.refType?"git-branch":"git-commit"}"
					class="icon"
				></code-icon>
				${a9(e.incoming,{expand:!1,icon:!1})} ${r.directionality}
				${a9(e.current??e.onto,{expand:!1,icon:!1})}</span
			>${t?eE`<span class="steps"
						>(${e.steps.current.number}/${e.steps.total})</span
				  >`:eA}`}renderActions(){if(null==this.pausedOpStatus)return eA;let e=this.pausedOpStatus.type;return eE`<action-nav class="actions">
			${nP("revert"!==e&&!("rebase"===e&&this.conflicts),()=>eE`
					<action-item label="Continue" icon="debug-continue" href=${this.onContinueUrl}></action-item>
				`)}
			${nP("merge"!==e,()=>eE`<action-item label="Skip" icon="debug-step-over" href=${this.onSkipUrl}></action-item>`)}
			<action-item label="Abort" href=${this.onAbortUrl} icon="circle-slash"></action-item>
			${nP("rebase"===e,()=>eE`<action-item
						label="Open in Rebase Editor"
						href=${this.onOpenEditorUrl}
						icon="edit"
					></action-item>`)}
		</action-nav>`}};lu.styles=[B`
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
		`],lc([ej({type:Boolean,reflect:!0})],lu.prototype,"conflicts",2),lc([ej({type:Object})],lu.prototype,"pausedOpStatus",2),lc([ej()],lu.prototype,"skipCommand",2),lc([ej()],lu.prototype,"continueCommand",2),lc([ej()],lu.prototype,"abortCommand",2),lc([ej()],lu.prototype,"openEditorCommand",2),lc([ej({type:Object})],lu.prototype,"webviewCommandContext",2),lu=lc([eF("gl-merge-rebase-status")],lu);var lh=Object.defineProperty,ld=Object.getOwnPropertyDescriptor,lp=(e,t,r,n)=>{for(var o,i=n>1?void 0:n?ld(t,r):t,c=e.length-1;c>=0;c--)(o=e[c])&&(i=(n?o(t,r,i):o(i))||i);return n&&i&&lh(t,r,i),i};let lf=class extends lit_element_i{get fetchedText(){let e;if(this.lastFetched)return 0!==(e="string"==typeof this.lastFetched?new Date(this.lastFetched):this.lastFetched).getTime()?tm(e):void 0}render(){return eE`
			<gl-push-pull-button
				.branchState=${this.branchState}
				.state=${this.state}
				.fetchedText=${this.fetchedText}
				.branchName=${this.branchName}
			></gl-push-pull-button>
			<gl-fetch-button
				.branchState=${this.branchState}
				.fetchedText=${this.fetchedText}
				.state=${this.state}
			></gl-fetch-button>
		`}};lf.styles=B`
		:host {
			display: contents;
		}
	`,lp([ej({type:Object})],lf.prototype,"branchState",2),lp([ej({type:String})],lf.prototype,"branchName",2),lp([ej({type:Object})],lf.prototype,"lastFetched",2),lp([ej({type:Object})],lf.prototype,"state",2),lf=lp([eF("gl-git-actions-buttons")],lf);let lm=class extends lit_element_i{get upstream(){return this.branchState?.upstream?eE`<span class="inline-code">${this.branchState.upstream}</span>`:"remote"}render(){return eE`
			<gl-tooltip placement="bottom">
				<a
					href=${nG("gitlens.graph.fetch",this.state.webviewId,this.state.webviewInstanceId)}
					class="action-button"
				>
					<code-icon class="action-button__icon" icon="repo-fetch"></code-icon>
					Fetch
					${this.fetchedText?eE`<span class="action-button__small">(${this.fetchedText})</span>`:""}
				</a>
				<span slot="content">
					Fetch from ${this.upstream}
					${this.branchState?.provider?.name?eE` on ${this.branchState.provider.name}`:""}
					${this.fetchedText?eE`
								<hr />
								Last fetched ${this.fetchedText}
						  `:eA}
				</span>
			</gl-tooltip>
		`}};lm.styles=[sm,n0,sb,sg],lp([ej({type:Object})],lm.prototype,"state",2),lp([ej({type:String})],lm.prototype,"fetchedText",2),lp([ej({type:Object})],lm.prototype,"branchState",2),lm=lp([eF("gl-fetch-button")],lm);let lg=class extends lit_element_i{get isBehind(){return(this.branchState?.behind??0)>0}get isAhead(){return(this.branchState?.ahead??0)>0}get upstream(){return this.branchState?.upstream?eE`<span class="inline-code">${this.branchState.upstream}</span>`:"remote"}renderBranchPrefix(){return eE`<span class="inline-code">${this.branchName}</span> is`}renderTooltipContent(e){if(!this.branchState)return eA;let t=this.branchState.provider?.name?eE` on ${this.branchState.provider.name}`:"";if("pull"===e){let e=eE`Pull ${tS("commit",this.branchState.behind)} from
			${this.upstream}${t}`;return this.isAhead?eE`
					${e}
					<hr />
					${this.renderBranchPrefix()} ${tS("commit",this.branchState.behind)} behind and
					${tS("commit",this.branchState.ahead)} ahead of ${this.upstream}${t}
				`:eE`
				${e}
				<hr />
				${this.renderBranchPrefix()} ${tS("commit",this.branchState.behind)} behind
				${this.upstream}${t}
			`}return eE`
			Push ${tS("commit",this.branchState.ahead)} to ${this.upstream}${t}
			<hr />
			${this.renderBranchPrefix()} ${tS("commit",this.branchState.ahead)} ahead of ${this.upstream}
		`}render(){if(!this.branchState||!this.isAhead&&!this.isBehind)return eA;let e=this.isBehind?"pull":"push",t=this.isBehind?"repo-pull":"repo-push",r=this.isBehind?"Pull":"Push";return eE`
			<gl-tooltip placement="bottom">
				<a
					href=${nG(`gitlens.graph.${e}`,this.state.webviewId,this.state.webviewInstanceId)}
					class="action-button${this.isBehind?" is-behind":""}${this.isAhead?" is-ahead":""}"
				>
					<code-icon class="action-button__icon" icon=${t}></code-icon>
					${r}
					<span>
						<span class="pill action-button__pill">
							${this.isBehind?eE`
										<span>
											${this.branchState.behind}
											<code-icon icon="arrow-down"></code-icon>
										</span>
								  `:""}
							${this.isAhead?eE`
										<span>
											${this.isBehind?eE`&nbsp;&nbsp;`:""} ${this.branchState.ahead}
											<code-icon icon="arrow-up"></code-icon>
										</span>
								  `:""}
						</span>
					</span>
				</a>
				<div slot="content">
					${this.renderTooltipContent(e)}
					${this.fetchedText?eE`<hr />
								Last fetched ${this.fetchedText}`:""}
				</div>
			</gl-tooltip>
			${this.isAhead&&this.isBehind?eE`
						<gl-tooltip placement="top" slot="anchor">
							<a
								href=${nG("gitlens.graph.pushWithForce",this.state.webviewId,this.state.webviewInstanceId)}
								class="action-button"
								aria-label="Force Push"
							>
								<code-icon icon="repo-force-push" aria-hidden="true"></code-icon>
							</a>
							<span slot="content">
								Force Push ${tS("commit",this.branchState?.ahead)} to ${this.upstream}
								${this.branchState?.provider?.name?eE` on ${this.branchState.provider.name}`:""}
							</span>
						</gl-tooltip>
				  `:""}
		`}};lg.styles=[sm,n0,sb,sg,B`
			:host {
				display: contents;
			}

			.pill {
				display: inline-block;
				padding: 0.2rem 0.5rem;
				border-radius: 0.5rem;
				font-size: 1rem;
				font-weight: 500;
				line-height: 1.2;
				text-transform: uppercase;
				color: var(--vscode-foreground);
				background-color: var(--vscode-editorWidget-background);
			}
			.pill code-icon {
				font-size: inherit !important;
				line-height: inherit !important;
			}
		`],lp([ej({type:Object})],lg.prototype,"branchState",2),lp([ej({type:Object})],lg.prototype,"state",2),lp([ej({type:String})],lg.prototype,"fetchedText",2),lp([ej({type:String})],lg.prototype,"branchName",2),lg=lp([eF("gl-push-pull-button")],lg);var lb=Object.defineProperty,lv=Object.getOwnPropertyDescriptor,ly=(e,t,r,n)=>{for(var o,i=n>1?void 0:n?lv(t,r):t,c=e.length-1;c>=0;c--)(o=e[c])&&(i=(n?o(t,r,i):o(i))||i);return n&&i&&lb(t,r,i),i};let lw=class extends r8(lit_element_i){constructor(){super(...arguments),this._searchPositionSignal=nT(()=>{let{searchResults:e}=this.appState;if(e?.ids==null||!this.appState.filter.query)return 0;let t=this.getActiveRowInfo()?.id,r=t?e.ids[t]?.i:void 0;return null==r&&({index:r}=this.getClosestSearchResultIndex(e,{...this.appState.filter})),r<1?1:r+1}),this.ensuredIds=new Set,this.ensuredSkippedIds=new Set,this.pendingEnsureRequests=new Map}get hasFilters(){return!!this.hostState.config?.onlyFollowFirstParent||null!=this.hostState.excludeTypes&&Object.values(this.hostState.excludeTypes).includes(!0)}get excludeRefs(){return Object.values(this.hostState.excludeRefs??{}).sort(l_)}async onJumpToRefPromise(e){try{let t=await this._ipc.sendRequest(rl,{alt:e});return this._telemetry.sendEvent({name:"graph/action/jumpTo",data:{alt:e}}),t}catch{return}}async handleJumpToRef(e){let t=await this.onJumpToRefPromise(e.altKey);if(null!=t){let e=await this.ensureSearchResultRow(t.sha);if(null==e)return;this.dispatchEvent(new CustomEvent("gl-select-commits",{detail:e}))}}onOpenPullRequest(e){this._ipc.sendCommand(t7,{id:e.id})}onSearchOpenInView(){this._ipc.sendCommand(re,{search:{...this.appState.filter}})}onExcludeTypesChanged(e,t){this._ipc.sendCommand(rn,{key:e,value:t})}onRefIncludesChanged(e,t){this._ipc.sendCommand(rs,{branchesVisibility:e,refs:t})}getActiveRowInfo(){let{activeRow:e}=this.appState;if(null==e)return;if(this._activeRowInfoCache?.row===e)return this._activeRowInfoCache?.info;let t=e.indexOf("|"),r={date:Number(e.substring(t+1)),id:e.substring(0,t)};return this._activeRowInfoCache={row:e,info:r},r}getNextOrPreviousSearchResultIndex(e,t,r,n){return t?e<r.count-1?e++:e=null!=n&&r.paging?.hasMore?-1:0:e>0?e--:e=null!=n&&r.paging?.hasMore?-1:r.count-1,e}getClosestSearchResultIndex(e,t,r=!0){let n,o,i;if(null==e.ids)return{index:0,id:void 0};let c=this.getActiveRowInfo(),u=c?.id;if(null==u)return{index:0,id:void 0};let h=e.ids[u];if(null!=h&&(n=h.i,o=u,i=n),null==n){let t,u,h,d,p=c?.date!=null?c.date+(r?1:-1):void 0;if(null==p)return{index:0,id:void 0};let{ids:m}=e;for(let e in m)Object.hasOwn(m,e)&&(u=m[e],{date:t,i:h}=u,r?t<p&&(null==d||t>d)&&(o=e,d=t,i=h):t>p&&(null==d||t<=d)&&(o=e,d=t,i=h));n=null==i?e.count-1:i+(r?-1:1)}return(n=this.getNextOrPreviousSearchResultIndex(n,r,e,t))===i?{index:n,id:o}:{index:n,id:void 0}}get searchPosition(){return this._searchPositionSignal.get()}get searchValid(){return this.appState.filter.query.length>2}handleFilterChange(e){let t=e.target;if(null==t)return;let{checked:r}=t;switch(t.value){case"mergeCommits":this.changeGraphConfiguration({dimMergeCommits:r});break;case"onlyFollowFirstParent":this.changeGraphConfiguration({onlyFollowFirstParent:r});break;case"remotes":case"stashes":case"tags":{let e=t.value,n=this.hostState.excludeTypes?.[e];(null==n&&r||null!=n&&n!==r)&&this.onExcludeTypesChanged(e,r)}}}handleOnToggleRefsVisibilityClick(e,t,r){this._ipc.sendCommand(rr,{refs:t,visible:r})}handleBranchesVisibility(e){let t=e.target;null!=t&&this.onRefIncludesChanged(t.value)}async handleSearch(){this.appState.searching=this.searchValid,this.searchValid||(this.appState.searchResultsResponse=void 0);try{let e=await this._ipc.sendRequest(rd,{search:this.searchValid?{...this.appState.filter}:void 0});e.results&&this.appState.filter.query&&this.searchEl.logSearch({...this.appState.filter}),this.appState.searchResultsResponse=e.results,null!=e.selectedRows&&(this.appState.selectedRows=e.selectedRows)}catch{this.appState.searchResultsResponse=void 0}this.appState.searching=!1}handleSearchInput(e){this.appState.filter=e.detail,this.handleSearch()}async onSearchPromise(e,t){try{let r=await this._ipc.sendRequest(rd,{search:e,limit:t?.limit,more:t?.more});return this.appState.searchResultsResponse=r.results,null!=r.selectedRows&&(this.appState.selectedRows=r.selectedRows),r}catch{return}}async handleSearchNavigation(e){let t,r,n,{searchResults:o}=this.appState;if(null==o)return;let i=e.detail?.direction??"next",c=o.count;"first"===i?(n=!1,t=0):"last"===i?(n=!1,t=-1):(n="next"===i,{index:t,id:r}=this.getClosestSearchResultIndex(o,{...this.appState.filter},n));let u=0;for(;u<1e3;){if(u++,-1===t)if(n)if(this.appState.filter.query&&o?.paging?.hasMore){let e;this.appState.searching=!0;try{e=await this.onSearchPromise?.({...this.appState.filter},{more:!0})}finally{this.appState.searching=!1}e?.results==null||"error"in e.results?t=0:c<e.results.count?(o=e.results,t=c,c=o.count):t=0}else t=0;else if("last"===i&&null!=this.appState.filter&&o?.paging?.hasMore){let e;this.appState.searching=!0;try{e=await this.onSearchPromise({...this.appState.filter},{limit:0,more:!0})}finally{this.appState.searching=!1}e?.results==null||"error"in e.results||(c<e.results.count&&(c=(o=e.results).count),t=c)}else t=c-1;if(null!=(r=r??function(e,t){let{ids:r}=e;for(let e in r)if(Object.hasOwn(r,e)&&r[e].i===t)return e}(o,t))&&null!=(r=await this.ensureSearchResultRow(r)))break;this.appState.searchResultsHidden=!0,t=this.getNextOrPreviousSearchResultIndex(t,n,o,{...this.appState.filter})}null!=r&&this.dispatchEvent(new CustomEvent("gl-select-commits",{detail:r}))}async onEnsureRowPromise(e,t){try{return await this._ipc.sendRequest(rc,{id:e,select:t})}catch{return}}async ensureSearchResultRow(e){if(this.ensuredIds.has(e))return e;if(this.ensuredSkippedIds.has(e))return;let t=this.pendingEnsureRequests.get(e);if(null==t){let r=setTimeout(()=>{r=void 0,this.appState.loading=!0},500);(t=(async()=>{let t=await this.onEnsureRowPromise(e,!1);if(null==r?this.appState.loading=!1:clearTimeout(r),t?.id===e)return this.ensuredIds.add(e),e;null!=t&&this.ensuredSkippedIds.add(e)})()).finally(()=>this.pendingEnsureRequests.delete(e)),this.pendingEnsureRequests.set(e,t)}return t}handleSearchModeChanged(e){this._ipc.sendCommand(ri,{searchMode:e.detail.searchMode})}handleMinimapToggled(){this.changeGraphConfiguration({minimap:!this.hostState.config?.minimap})}changeGraphConfiguration(e){this._ipc.sendCommand(ro,{changes:e})}handleMinimapDataTypeChanged(e){if(null==this.hostState.config)return;let t="lines"===e.target.value?"lines":"commits";this.hostState.config.minimapDataType!==t&&this.changeGraphConfiguration({minimapDataType:t})}handleMinimapAdditionalTypesChanged(e){if(this.hostState.config?.minimapMarkerTypes==null)return;let t=e.target,r=t.value;if(t.checked){if(!this.hostState.config.minimapMarkerTypes.includes(r)){let e=[...this.hostState.config.minimapMarkerTypes,r];this.changeGraphConfiguration({minimapMarkerTypes:e})}}else{let e=this.hostState.config.minimapMarkerTypes.indexOf(r);if(-1!==e){let t=[...this.hostState.config.minimapMarkerTypes];t.splice(e,1),this.changeGraphConfiguration({minimapMarkerTypes:t})}}}handleChooseRepository(){this._ipc.sendCommand(t3)}renderBranchStateIcon(){let{branchState:e}=this.hostState;return e?.pr?eA:e?.worktree?eE`<code-icon icon="gl-worktrees-view" aria-hidden="true"></code-icon>`:eE`<code-icon icon="git-branch" aria-hidden="true"></code-icon>`}renderRepoControl(e){return eE`
			<gl-popover placement="bottom">
				<a
					href=${nH(e.provider.url)}
					class="action-button"
					style="margin-right: -0.5rem"
					aria-label=${`Open Repository on ${e.provider.name}`}
					slot="anchor"
					@click=${e=>nL(e.target,{name:"graph/action/openRepoOnRemote",data:{}})}
				>
					<span>
						<code-icon
							class="action-button__icon"
							icon=${"cloud"===e.provider.icon?"cloud":`gl-provider-${e.provider.icon}`}
							aria-hidden="true"
						></code-icon
						>${nP(e.provider.integration?.connected,()=>eE`<gl-indicator class="action-button__indicator"></gl-indicator>`)}
					</span>
				</a>
				<span slot="content">
					Open Repository on ${e.provider.name}
					<hr />
					${nP(e.provider.integration?.connected,()=>eE`
							<span>
								<code-icon style="margin-top: -3px" icon="check" aria-hidden="true"></code-icon>
								Connected to ${e.provider.name}
							</span>
						`,()=>e.provider.integration?.connected!==!1?eA:eE`
								<code-icon style="margin-top: -3px" icon="plug" aria-hidden="true"></code-icon>
								<a
									href=${nj("gitlens.plus.cloudIntegrations.connect",{integrationIds:[e.provider.integration.id],source:{source:"graph"}})}
								>
									Connect to ${e.provider.name}
								</a>
								<span>&mdash; not connected</span>
							`)}
				</span>
			</gl-popover>
			${nP(e?.provider?.integration?.connected===!1,()=>eE`
					<gl-button
						appearance="toolbar"
						href=${nj("gitlens.plus.cloudIntegrations.connect",{integrationIds:[e.provider.integration.id],source:{source:"graph"}})}
					>
						<code-icon icon="plug" style="color: var(--titlebar-fg)"></code-icon>
						<span slot="tooltip">
							Connect to ${e.provider.name}
							<hr />
							View pull requests and issues in the Commit Graph, Launchpad, autolinks, and more
						</span>
					</gl-button>
				`)}
		`}render(){let e=this.hostState.repositories?.find(e=>e.id===this.hostState.selectedRepository),{searchResults:t}=this.appState;return sh(eE`<header class="titlebar graph-app__header">
				<div class="titlebar__row titlebar__row--wrap">
					<div class="titlebar__group">
						${nP(e?.provider?.url,this.renderRepoControl.bind(this,e))}
						<gl-tooltip placement="bottom">
							<button
								type="button"
								class="action-button"
								aria-label="Switch to Another Repository..."
								?disabled=${!this.hostState.repositories||this.hostState.repositories.length<2}
								@click=${()=>this.handleChooseRepository()}
							>
								<span class="action-button__truncated">${e?.formattedName??"none selected"}</span
								>${nP(this.hostState.repositories&&this.hostState.repositories.length>1,()=>eE`
										<code-icon
											class="action-button__more"
											icon="chevron-down"
											aria-hidden="true"
										></code-icon>
									`)}
							</button>
							<span slot="content">Switch to Another Repository...</span>
						</gl-tooltip>
						${nP(this.hostState.allowed&&e,()=>eE`
								<span> <code-icon icon="chevron-right"></code-icon> </span>${nP(this.hostState.branchState?.pr,e=>eE`
										<gl-popover placement="bottom">
											<button slot="anchor" type="button" class="action-button">
												<issue-pull-request
													type="pr"
													identifier=${`#${e.id}`}
													status=${e.state}
													compact
												></issue-pull-request>
											</button>
											<div slot="content">
												<issue-pull-request
													type="pr"
													name=${e.title}
													url=${e.url}
													identifier=${`#${e.id}`}
													status=${e.state}
													.date=${e.updatedDate}
													.dateFormat=${this.hostState.config?.dateFormat}
													.dateStyle=${this.hostState.config?.dateStyle}
													details
													@gl-issue-pull-request-details=${()=>{this.onOpenPullRequest(e)}}
												>
												</issue-pull-request>
											</div>
										</gl-popover>
									`)}
								<gl-popover placement="bottom">
									<a
										slot="anchor"
										href=${nG("gitlens.graph.switchToAnotherBranch",this.hostState.webviewId,this.hostState.webviewInstanceId)}
										class="action-button"
										style=${this.hostState.branchState?.pr?{marginLeft:"-0.6rem"}:{}}
										aria-label="Switch to Another Branch..."
									>
										${this.renderBranchStateIcon()}
										<span class="action-button__truncated">${this.hostState.branch?.name}</span>
										<code-icon
											class="action-button__more"
											icon="chevron-down"
											aria-hidden="true"
										></code-icon>
									</a>
									<div slot="content">
										<span>
											Switch to Another Branch...
											<hr />
											<code-icon icon="git-branch" aria-hidden="true"></code-icon>
											<span class="inline-code">${this.hostState.branch?.name}</span>${nP(this.hostState.branchState?.worktree,()=>eE`<i> (in a worktree)</i> `)}
										</span>
									</div>
								</gl-popover>
								<gl-button class="jump-to-ref" appearance="toolbar" @click=${this.handleJumpToRef}>
									<code-icon icon="target"></code-icon>
									<span slot="tooltip">
										Jump to HEAD
										<br />
										[Alt] Jump to Reference...
									</span>
								</gl-button>
								<span>
									<code-icon icon="chevron-right"></code-icon>
								</span>
								<gl-git-actions-buttons
									.branchName=${this.hostState.branch?.name}
									.branchState=${this.hostState.branchState}
									.lastFetched=${this.hostState.lastFetched}
									.state=${this.hostState}
								></gl-git-actions-buttons>
							`)}
					</div>
					<div class="titlebar__group">
						<gl-tooltip placement="bottom">
							<a
								class="action-button"
								href=${nj("gitlens.gitCommands.branch",{state:{subcommand:"create",reference:this.hostState.branch},command:"branch",confirm:!0})}
							>
								<code-icon class="action-button__icon" icon="custom-start-work"></code-icon>
							</a>
							<span slot="content">
								Create New Branch from
								<code-icon icon="git-branch"></code-icon>
								<span class="inline-code">${this.hostState.branch?.name}</span>
							</span>
						</gl-tooltip>
						<gl-tooltip placement="bottom">
							<a
								href=${`command:gitlens.showLaunchpad?${encodeURIComponent(JSON.stringify({source:"graph"}))}`}
								class="action-button"
							>
								<code-icon icon="rocket"></code-icon>
							</a>
							<span slot="content">
								<strong>Launchpad</strong> &mdash; organizes your pull requests into actionable groups
								to help you focus and keep your team unblocked
							</span>
						</gl-tooltip>
						<gl-tooltip placement="bottom">
							<a
								href=${nG("gitlens.visualizeHistory.repo:graph",this.hostState.webviewId,this.hostState.webviewInstanceId)}
								class="action-button"
								aria-label=${"Open Visual History"}
							>
								<span>
									<code-icon
										class="action-button__icon"
										icon=${"graph-scatter"}
										aria-hidden="true"
									></code-icon>
								</span>
							</a>
							<span slot="content">
								<strong>Visual History</strong> — visualize the evolution of a repository, branch,
								folder, or file and identify when the most impactful changes were made and by whom
							</span>
						</gl-tooltip>
						<gl-tooltip placement="bottom">
							<a
								href=${"command:gitlens.views.home.focus"}
								class="action-button"
								aria-label=${"Open GitLens Home View"}
							>
								<span>
									<code-icon
										class="action-button__icon"
										icon=${"gl-gitlens"}
										aria-hidden="true"
									></code-icon>
								</span>
							</a>
							<span slot="content">
								<strong>GitLens Home</strong> — track, manage, and collaborate on your branches and pull
								requests, all in one intuitive hub
							</span>
						</gl-tooltip>
						${nP(null==this.hostState.subscription||!nU(this.hostState.subscription),()=>eE`
								<gl-feature-badge
									.source=${{source:"graph",detail:"badge"}}
									.subscription=${this.hostState.subscription}
								></gl-feature-badge>
							`)}
					</div>
				</div>

				${nP(this.hostState.allowed&&null!=this.hostState.workingTreeStats&&(this.hostState.workingTreeStats.hasConflicts||this.hostState.workingTreeStats.pausedOpStatus),()=>eE`
						<div class="merge-conflict-warning">
							<gl-merge-rebase-status
								class="merge-conflict-warning__content"
								?conflicts=${this.hostState.workingTreeStats?.hasConflicts}
								.pausedOpStatus=${this.hostState.workingTreeStats?.pausedOpStatus}
								skipCommand="gitlens.graph.skipPausedOperation"
								continueCommand="gitlens.graph.continuePausedOperation"
								abortCommand="gitlens.graph.abortPausedOperation"
								openEditorCommand="gitlens.graph.openRebaseEditor"
								.webviewCommandContext=${{webview:this.hostState.webviewId,webviewInstance:this.hostState.webviewInstanceId}}
							></gl-merge-rebase-status>
						</div>
					`)}
				${nP(this.hostState.allowed,()=>eE`
						<div class="titlebar__row">
							<div class="titlebar__group">
								<gl-tooltip placement="top" content="Branches Visibility">
									<sl-select
										value=${nH(this.hostState.branchesVisibility)}
										@sl-change=${this.handleBranchesVisibility}
										hoist
									>
										<code-icon icon="chevron-down" slot="expand-icon"></code-icon>
										<sl-option value="all" ?disabled=${e?.isVirtual}> All Branches </sl-option>
										<sl-option value="smart" ?disabled=${e?.isVirtual}>
											Smart Branches
											${nP(!e?.isVirtual,()=>eE`
													<gl-tooltip placement="right" slot="suffix">
														<code-icon icon="info"></code-icon>
														<span slot="content">
															Shows only relevant branches
															<br />
															<br />
															<i>
																Includes the current branch, its upstream, and its base
																or target branch
															</i>
														</span>
													</gl-tooltip>
												`,()=>eE` <code-icon icon="info" slot="suffix"></code-icon> `)}
										</sl-option>
										<sl-option value="current">Current Branch</sl-option>
									</sl-select>
								</gl-tooltip>
								<div
									class=${`shrink ${!Object.values(this.hostState.excludeRefs??{}).length&&"hidden"}`}
								>
									<gl-popover
										class="popover"
										placement="bottom-start"
										trigger="click focus"
										?arrow=${!1}
										distance=${0}
									>
										<gl-tooltip placement="top" slot="anchor">
											<button type="button" id="hiddenRefs" class="action-button">
												<code-icon icon=${"eye-closed"}></code-icon>
												${Object.values(this.hostState.excludeRefs??{}).length}
												<code-icon
													class="action-button__more"
													icon="chevron-down"
													aria-hidden="true"
												></code-icon>
											</button>
											<span slot="content">Hidden Branches / Tags</span>
										</gl-tooltip>
										<div slot="content">
											<menu-label>Hidden Branches / Tags</menu-label>
											${nP(this.excludeRefs.length>0,()=>eE`
													${sp(this.excludeRefs,e=>eE`
															<menu-item
																@click=${t=>{this.handleOnToggleRefsVisibilityClick(t,[e],!0)}}
																class="flex-gap"
															>
																${this.renderRemoteAvatarOrIcon(e)}
																<span>${e.name}</span>
															</menu-item>
														`)}
													<menu-item
														@click=${e=>{this.handleOnToggleRefsVisibilityClick(e,this.excludeRefs,!0)}}
													>
														Show All
													</menu-item>
												`)}
										</div>
									</gl-popover>
								</div>
								<gl-popover
									class="popover"
									placement="bottom-start"
									trigger="click focus"
									?arrow=${!1}
									distance=${0}
								>
									<gl-tooltip placement="top" slot="anchor">
										<button type="button" class="action-button">
											<code-icon icon=${`filter${this.hasFilters?"-filled":""}`}></code-icon>
											<code-icon
												class="action-button__more"
												icon="chevron-down"
												aria-hidden="true"
											></code-icon>
										</button>
										<span slot="content">Graph Filtering</span>
									</gl-tooltip>
									<div slot="content">
										<menu-label>Graph Filters</menu-label>
										${nP(e?.isVirtual!==!0,()=>eE`
												<menu-item role="none">
													<gl-tooltip
														placement="right"
														content="Only follow the first parent of merge commits to provide a more linear history"
													>
														<gl-checkbox
															value="onlyFollowFirstParent"
															@gl-change-value=${this.handleFilterChange}
															?checked=${this.hostState.config?.onlyFollowFirstParent??!1}
														>
															Simplify Merge History
														</gl-checkbox>
													</gl-tooltip>
												</menu-item>
												<menu-divider></menu-divider>
												<menu-item role="none">
													<gl-checkbox
														value="remotes"
														@gl-change-value=${this.handleFilterChange}
														?checked=${this.hostState.excludeTypes?.remotes??!1}
													>
														Hide Remote-only Branches
													</gl-checkbox>
												</menu-item>
												<menu-item role="none">
													<gl-checkbox
														value="stashes"
														@gl-change-value=${this.handleFilterChange}
														?checked=${this.hostState.excludeTypes?.stashes??!1}
													>
														Hide Stashes
													</gl-checkbox>
												</menu-item>
											`)}
										<menu-item role="none">
											<gl-checkbox
												value="tags"
												@gl-change-value=${this.handleFilterChange}
												?checked=${this.hostState.excludeTypes?.tags??!1}
											>
												Hide Tags
											</gl-checkbox>
										</menu-item>
										<menu-divider></menu-divider>
										<menu-item role="none">
											<gl-checkbox
												value="mergeCommits"
												@gl-change-value=${this.handleFilterChange}
												?checked=${this.hostState.config?.dimMergeCommits??!1}
											>
												Dim Merge Commit Rows
											</gl-checkbox>
										</menu-item>
									</div>
								</gl-popover>
								<span>
									<span class="action-divider"></span>
								</span>
								<gl-search-box
									step=${this.searchPosition}
									total=${t?.count??0}
									?valid=${this.searchValid}
									?more=${t?.paging?.hasMore??!1}
									?searching=${this.appState.searching}
									?filter=${"filter"===this.hostState.defaultSearchMode}
									value=${this.appState.filter.query}
									errorMessage=${this.appState.searchResultsError?.error??""}
									?resultsHidden=${this.appState.searchResultsHidden}
									?resultsLoaded=${null!=t}
									@gl-search-inputchange=${this.handleSearchInput}
									@gl-search-navigate=${this.handleSearchNavigation}
									@gl-search-openinview=${this.onSearchOpenInView}
									@gl-search-modechange=${this.handleSearchModeChanged}
								></gl-search-box>
								<span>
									<span class="action-divider"></span>
								</span>
								<span class="button-group">
									<gl-tooltip placement="bottom">
										<button
											type="button"
											role="checkbox"
											class="action-button"
											aria-label="Toggle Minimap"
											aria-checked=${this.hostState.config?.minimap??!1}
											@click=${()=>this.handleMinimapToggled()}
										>
											<code-icon class="action-button__icon" icon="graph-line"></code-icon>
										</button>
										<span slot="content">Toggle Minimap</span>
									</gl-tooltip>
									<gl-popover
										class="popover"
										placement="bottom-end"
										trigger="click focus"
										?arrow=${!1}
										distance=${0}
									>
										<gl-tooltip placement="top" distance=${7} slot="anchor">
											<button type="button" class="action-button" aria-label="Minimap Options">
												<code-icon
													class="action-button__more"
													icon="chevron-down"
													aria-hidden="true"
												></code-icon>
											</button>
											<span slot="content">Minimap Options</span>
										</gl-tooltip>
										<div slot="content">
											<menu-label>Minimap</menu-label>
											<menu-item role="none">
												<gl-radio-group
													value=${this.hostState.config?.minimapDataType??"commits"}
													@gl-change-value=${this.handleMinimapDataTypeChanged}
												>
													<gl-radio name="minimap-datatype" value="commits">
														Commits
													</gl-radio>
													<gl-radio name="minimap-datatype" value="lines">
														Lines Changed
													</gl-radio>
												</gl-radio-group>
											</menu-item>
											<menu-divider></menu-divider>
											<menu-label>Markers</menu-label>
											<menu-item role="none">
												<gl-checkbox
													value="localBranches"
													@gl-change-value=${this.handleMinimapAdditionalTypesChanged}
													?checked=${this.hostState.config?.minimapMarkerTypes?.includes("localBranches")??!1}
												>
													<span
														class="minimap-marker-swatch"
														data-marker="localBranches"
													></span>
													Local Branches
												</gl-checkbox>
											</menu-item>
											<menu-item role="none">
												<gl-checkbox
													value="remoteBranches"
													@gl-change-value=${this.handleMinimapAdditionalTypesChanged}
													?checked=${this.hostState.config?.minimapMarkerTypes?.includes("remoteBranches")??!0}
												>
													<span
														class="minimap-marker-swatch"
														data-marker="remoteBranches"
													></span>
													Remote Branches
												</gl-checkbox>
											</menu-item>
											<menu-item role="none">
												<gl-checkbox
													value="pullRequests"
													@gl-change-value=${this.handleMinimapAdditionalTypesChanged}
													?checked=${this.hostState.config?.minimapMarkerTypes?.includes("pullRequests")??!0}
												>
													<span
														class="minimap-marker-swatch"
														data-marker="pullRequests"
													></span>
													Pull Requests
												</gl-checkbox>
											</menu-item>
											<menu-item role="none">
												<gl-checkbox
													value="stashes"
													@gl-change-value=${this.handleMinimapAdditionalTypesChanged}
													?checked=${this.hostState.config?.minimapMarkerTypes?.includes("stashes")??!1}
												>
													<span class="minimap-marker-swatch" data-marker="stashes"></span>
													Stashes
												</gl-checkbox>
											</menu-item>
											<menu-item role="none">
												<gl-checkbox
													value="tags"
													@gl-change-value=${this.handleMinimapAdditionalTypesChanged}
													?checked=${this.hostState.config?.minimapMarkerTypes?.includes("tags")??!0}
												>
													<span class="minimap-marker-swatch" data-marker="tags"></span>
													Tags
												</gl-checkbox>
											</menu-item>
										</div>
									</gl-popover>
								</span>
							</div>
						</div>
					`)}
				<div
					class=${`progress-container infinite${this.hostState.loading||this.hostState.rowsStatsLoading||this.appState.loading?" active":""}`}
					role="progressbar"
				>
					<div class="progress-bar"></div>
				</div>
			</header>`)}renderRemoteAvatarOrIcon(e){return e.avatarUrl?eE`<img class="branch-menu__avatar" alt=${e.name} src=${e.avatarUrl} />`:eE`<code-icon class="branch-menu__icon" icon=${function(e){switch(e){case"head":return"vm";case"remote":return"cloud";case"tag":return"tag";default:return""}}(e.type)}></code-icon>`}};function l_(e,t){let r=e.name.localeCompare(t.name);return 0===r&&e.type===nz.refTypes.REMOTE?-1:r}lw.styles=[n0,sm,sg,sb,sw,sv,s_,sy],ly([D({context:"ipc"})],lw.prototype,"_ipc",2),ly([D({context:"telemetry"})],lw.prototype,"_telemetry",2),ly([D({context:"state",subscribe:!0})],lw.prototype,"hostState",2),ly([D({context:"graphState"})],lw.prototype,"appState",2),ly([sf(250)],lw.prototype,"handleSearchInput",1),ly([sf(250)],lw.prototype,"handleChooseRepository",1),ly([eq("gl-search-box")],lw.prototype,"searchEl",2),lw=ly([eF("gl-graph-header")],lw);var lS=O(975),lC=O(980);function lx(e){return e[Symbol.iterator]().next().value}function*lk(e,t){for(let r of e)yield*t(r)}function*lR(...e){for(let t of e)if(null!=t)for(let e of t)yield e}let lT=new Set(["children","localName","ref","style","className"]),lE=new WeakMap,lO=(e,t,r,n,o)=>{let i,c,u=o?.[t];void 0===u?(e[t]=r,null==r&&t in HTMLElement.prototype&&e.removeAttribute(t)):r!==n&&(void 0===(i=lE.get(e))&&lE.set(e,i=new Map),c=i.get(u),void 0!==r?void 0===c?(i.set(u,c={handleEvent:r}),e.addEventListener(u,c)):c.handleEvent=r:void 0!==c&&(i.delete(u),e.removeEventListener(u,c)))};function lM(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let lI=lM(),lA={exec:()=>null};function lN(e,t=""){let r="string"==typeof e?e:e.source,n={replace:(e,t)=>{let o="string"==typeof t?t:t.source;return o=o.replace(lD.caret,"$1"),r=r.replace(e,o),n},getRegex:()=>new RegExp(r,t)};return n}let lD={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i")},lz=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,l$=/(?:[*+-]|\d{1,9}[.)])/,lP=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,lL=lN(lP).replace(/bull/g,l$).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),lH=lN(lP).replace(/bull/g,l$).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),lG=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,lW=/(?!\s*\])(?:\\.|[^\[\]\\])+/,lF=lN(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",lW).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),lB=lN(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,l$).getRegex(),lU="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",lj=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,lZ=lN("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",lj).replace("tag",lU).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),lV=lN(lG).replace("hr",lz).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",lU).getRegex(),lq={blockquote:lN(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",lV).getRegex(),code:/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,def:lF,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,hr:lz,html:lZ,lheading:lL,list:lB,newline:/^(?:[ \t]*(?:\n|$))+/,paragraph:lV,table:lA,text:/^[^\n]+/},lY=lN("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",lz).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",lU).getRegex(),lK={...lq,lheading:lH,table:lY,paragraph:lN(lG).replace("hr",lz).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",lY).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",lU).getRegex()},lQ={...lq,html:lN("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",lj).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:lA,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:lN(lG).replace("hr",lz).replace("heading",` *#{1,6} *[^
]`).replace("lheading",lL).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},lX=/^( {2,}|\\)\n(?!\s*$)/,lJ=/[\p{P}\p{S}]/u,l0=/[\s\p{P}\p{S}]/u,l1=/[^\s\p{P}\p{S}]/u,l2=lN(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,l0).getRegex(),l5=/(?!~)[\p{P}\p{S}]/u,l3=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,l6=lN(l3,"u").replace(/punct/g,lJ).getRegex(),l4=lN(l3,"u").replace(/punct/g,l5).getRegex(),l8="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",l9=lN(l8,"gu").replace(/notPunctSpace/g,l1).replace(/punctSpace/g,l0).replace(/punct/g,lJ).getRegex(),l7=lN(l8,"gu").replace(/notPunctSpace/g,/(?:[^\s\p{P}\p{S}]|~)/u).replace(/punctSpace/g,/(?!~)[\s\p{P}\p{S}]/u).replace(/punct/g,l5).getRegex(),ce=lN("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,l1).replace(/punctSpace/g,l0).replace(/punct/g,lJ).getRegex(),ct=lN(/\\(punct)/,"gu").replace(/punct/g,lJ).getRegex(),cr=lN(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),cn=lN(lj).replace("(?:--\x3e|$)","--\x3e").getRegex(),co=lN("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",cn).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),ci=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,cs=lN(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",ci).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),ca=lN(/^!?\[(label)\]\[(ref)\]/).replace("label",ci).replace("ref",lW).getRegex(),cl=lN(/^!?\[(ref)\](?:\[\])?/).replace("ref",lW).getRegex(),cc=lN("reflink|nolink(?!\\()","g").replace("reflink",ca).replace("nolink",cl).getRegex(),cu={_backpedal:lA,anyPunctuation:ct,autolink:cr,blockSkip:/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,br:lX,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,del:lA,emStrongLDelim:l6,emStrongRDelimAst:l9,emStrongRDelimUnd:ce,escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,link:cs,nolink:cl,punctuation:l2,reflink:ca,reflinkSearch:cc,tag:co,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,url:lA},ch={...cu,link:lN(/^!?\[(label)\]\((.*?)\)/).replace("label",ci).getRegex(),reflink:lN(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",ci).getRegex()},cd={...cu,emStrongRDelimAst:l7,emStrongLDelim:l4,url:lN(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},cp={...cd,br:lN(lX).replace("{2,}","*").getRegex(),text:lN(cd.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},cf={normal:lq,gfm:lK,pedantic:lQ},cm={normal:cu,gfm:cd,breaks:cp,pedantic:ch},cg={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},cb=e=>cg[e];function cv(e,t){if(t){if(lD.escapeTest.test(e))return e.replace(lD.escapeReplace,cb)}else if(lD.escapeTestNoEncode.test(e))return e.replace(lD.escapeReplaceNoEncode,cb);return e}function cy(e){try{e=encodeURI(e).replace(lD.percentDecode,"%")}catch{return null}return e}function cw(e,t){let r=e.replace(lD.findPipe,(e,t,r)=>{let n=!1,o=t;for(;--o>=0&&"\\"===r[o];)n=!n;return n?"|":" |"}).split(lD.splitPipe),n=0;if(r[0].trim()||r.shift(),r.length>0&&!r.at(-1)?.trim()&&r.pop(),t)if(r.length>t)r.splice(t);else for(;r.length<t;)r.push("");for(;n<r.length;n++)r[n]=r[n].trim().replace(lD.slashPipe,"|");return r}function c_(e,t,r){let n=e.length;if(0===n)return"";let o=0;for(;o<n;)if(e.charAt(n-o-1)===t)o++;else break;return e.slice(0,n-o)}function cS(e,t,r,n,o){let i=t.href,c=t.title||null,u=e[1].replace(o.other.outputLinkReplace,"$1");n.state.inLink=!0;let h={type:"!"===e[0].charAt(0)?"image":"link",raw:r,href:i,title:c,text:u,tokens:n.inlineTokens(u)};return n.state.inLink=!1,h}let _Tokenizer=class _Tokenizer{options;rules;lexer;constructor(e){this.options=e||lI}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?e:c_(e,`
`)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],r=function(e,t,r){let n=e.match(r.other.indentCodeCompensation);if(null===n)return t;let o=n[1];return t.split(`
`).map(e=>{let t=e.match(r.other.beginningSpace);if(null===t)return e;let[n]=t;return n.length>=o.length?e.slice(o.length):e}).join(`
`)}(e,t[3]||"",this.rules);return{type:"code",raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:r}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=c_(e,"#");this.options.pedantic?e=t.trim():(!t||this.rules.other.endingSpaceChar.test(t))&&(e=t.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:c_(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=c_(t[0],`
`).split(`
`),r="",n="",o=[];for(;e.length>0;){let t,i=!1,c=[];for(t=0;t<e.length;t++)if(this.rules.other.blockquoteStart.test(e[t]))c.push(e[t]),i=!0;else if(i)break;else c.push(e[t]);e=e.slice(t);let u=c.join(`
`),h=u.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${u}`:u,n=n?`${n}
${h}`:h;let d=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(h,o,!0),this.lexer.state.top=d,0===e.length)break;let p=o.at(-1);if(p?.type==="code")break;if(p?.type==="blockquote"){let t=p.raw+`
`+e.join(`
`),i=this.blockquote(t);o[o.length-1]=i,r=r.substring(0,r.length-p.raw.length)+i.raw,n=n.substring(0,n.length-p.text.length)+i.text;break}if(p?.type==="list"){let t=p.raw+`
`+e.join(`
`),i=this.list(t);o[o.length-1]=i,r=r.substring(0,r.length-p.raw.length)+i.raw,n=n.substring(0,n.length-p.raw.length)+i.raw,e=t.substring(o.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:o,text:n}}}list(e){let t=this.rules.block.list.exec(e);if(t){let r=t[1].trim(),n=r.length>1,o={type:"list",raw:"",ordered:n,start:n?+r.slice(0,-1):"",loose:!1,items:[]};r=n?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=n?r:"[*+-]");let i=this.rules.other.listItemRegex(r),c=!1;for(;e;){let r,n=!1,u="",h="";if(!(t=i.exec(e))||this.rules.block.hr.test(e))break;u=t[0],e=e.substring(u.length);let d=t[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,e=>" ".repeat(3*e.length)),p=e.split(`
`,1)[0],m=!d.trim(),g=0;if(this.options.pedantic?(g=2,h=d.trimStart()):m?g=t[1].length+1:(g=(g=t[2].search(this.rules.other.nonSpaceChar))>4?1:g,h=d.slice(g),g+=t[1].length),m&&this.rules.other.blankLine.test(p)&&(u+=p+`
`,e=e.substring(p.length+1),n=!0),!n){let t=this.rules.other.nextBulletRegex(g),r=this.rules.other.hrRegex(g),n=this.rules.other.fencesBeginRegex(g),o=this.rules.other.headingBeginRegex(g),i=this.rules.other.htmlBeginRegex(g);for(;e;){let c,b=e.split(`
`,1)[0];if(p=b,c=this.options.pedantic?p=p.replace(this.rules.other.listReplaceNesting,"  "):p.replace(this.rules.other.tabCharGlobal,"    "),n.test(p)||o.test(p)||i.test(p)||t.test(p)||r.test(p))break;if(c.search(this.rules.other.nonSpaceChar)>=g||!p.trim())h+=`
`+c.slice(g);else{if(m||d.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||n.test(d)||o.test(d)||r.test(d))break;h+=`
`+p}m||p.trim()||(m=!0),u+=b+`
`,e=e.substring(b.length+1),d=c.slice(g)}}!o.loose&&(c?o.loose=!0:this.rules.other.doubleBlankLine.test(u)&&(c=!0));let b=null;this.options.gfm&&(b=this.rules.other.listIsTask.exec(h))&&(r="[ ] "!==b[0],h=h.replace(this.rules.other.listReplaceTask,"")),o.items.push({type:"list_item",raw:u,task:!!b,checked:r,loose:!1,text:h,tokens:[]}),o.raw+=u}let u=o.items.at(-1);if(!u)return;u.raw=u.raw.trimEnd(),u.text=u.text.trimEnd(),o.raw=o.raw.trimEnd();for(let e=0;e<o.items.length;e++)if(this.lexer.state.top=!1,o.items[e].tokens=this.lexer.blockTokens(o.items[e].text,[]),!o.loose){let t=o.items[e].tokens.filter(e=>"space"===e.type);o.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}if(o.loose)for(let e=0;e<o.items.length;e++)o.items[e].loose=!0;return o}}html(e){let t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:"pre"===t[1]||"script"===t[1]||"style"===t[1],text:t[0]}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),r=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",n=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:e,raw:t[0],href:r,title:n}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let r=cw(t[1]),n=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),o=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],i={type:"table",raw:t[0],header:[],align:[],rows:[]};if(r.length===n.length){for(let e of n)this.rules.other.tableAlignRight.test(e)?i.align.push("right"):this.rules.other.tableAlignCenter.test(e)?i.align.push("center"):this.rules.other.tableAlignLeft.test(e)?i.align.push("left"):i.align.push(null);for(let e=0;e<r.length;e++)i.header.push({text:r[e],tokens:this.lexer.inline(r[e]),header:!0,align:i.align[e]});for(let e of o)i.rows.push(cw(e,i.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:i.align[t]})));return i}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=`
`===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let t=c_(e.slice(0,-1),"\\");if((e.length-t.length)%2==0)return}else{let e=function(e,t){if(-1===e.indexOf(")"))return -1;let r=0;for(let n=0;n<e.length;n++)if("\\"===e[n])n++;else if("("===e[n])r++;else if(e[n]===t[1]&&--r<0)return n;return r>0?-2:-1}(t[2],"()");if(-2===e)return;if(e>-1){let r=(0===t[0].indexOf("!")?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,r).trim(),t[3]=""}}let r=t[2],n="";if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(r);e&&(r=e[1],n=e[3])}else n=t[3]?t[3].slice(1,-1):"";return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(r=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?r.slice(1):r.slice(1,-1)),cS(t,{href:r?r.replace(this.rules.inline.anyPunctuation,"$1"):r,title:n?n.replace(this.rules.inline.anyPunctuation,"$1"):n},t[0],this.lexer,this.rules)}}reflink(e,t){let r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){let e=t[(r[2]||r[1]).replace(this.rules.other.multipleSpaceGlobal," ").toLowerCase()];if(!e){let e=r[0].charAt(0);return{type:"text",raw:e,text:e}}return cS(r,e,r[0],this.lexer,this.rules)}}emStrong(e,t,r=""){let n=this.rules.inline.emStrongLDelim.exec(e);if(!(!n||n[3]&&r.match(this.rules.other.unicodeAlphaNumeric))&&(!(n[1]||n[2])||!r||this.rules.inline.punctuation.exec(r))){let r=[...n[0]].length-1,o,i,c=r,u=0,h="*"===n[0][0]?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(h.lastIndex=0,t=t.slice(-1*e.length+r);null!=(n=h.exec(t));){if(!(o=n[1]||n[2]||n[3]||n[4]||n[5]||n[6]))continue;if(i=[...o].length,n[3]||n[4]){c+=i;continue}if((n[5]||n[6])&&r%3&&!((r+i)%3)){u+=i;continue}if((c-=i)>0)continue;i=Math.min(i,i+c+u);let t=[...n[0]][0].length,h=e.slice(0,r+n.index+t+i);if(Math.min(r,i)%2){let e=h.slice(1,-1);return{type:"em",raw:h,text:e,tokens:this.lexer.inlineTokens(e)}}let d=h.slice(2,-2);return{type:"strong",raw:h,text:d,tokens:this.lexer.inlineTokens(d)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal," "),r=this.rules.other.nonSpaceChar.test(e),n=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return r&&n&&(e=e.substring(1,e.length-1)),{type:"codespan",raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){let t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,r;return r="@"===t[2]?"mailto:"+(e=t[1]):e=t[1],{type:"link",raw:t[0],text:e,href:r,tokens:[{type:"text",raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,r;if("@"===t[2])r="mailto:"+(e=t[0]);else{let n;do n=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??"";while(n!==t[0])e=t[0],r="www."===t[1]?"http://"+t[0]:t[0]}return{type:"link",raw:t[0],text:e,href:r,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:e}}}};let _Lexer=class _Lexer{tokens;options;state;tokenizer;inlineQueue;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||lI,this.options.tokenizer=this.options.tokenizer||new _Tokenizer,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:lD,block:cf.normal,inline:cm.normal};this.options.pedantic?(t.block=cf.pedantic,t.inline=cm.pedantic):this.options.gfm&&(t.block=cf.gfm,this.options.breaks?t.inline=cm.breaks:t.inline=cm.gfm),this.tokenizer.rules=t}static get rules(){return{block:cf,inline:cm}}static lex(e,t){return new _Lexer(t).lex(e)}static lexInline(e,t){return new _Lexer(t).inlineTokens(e)}lex(e){e=e.replace(lD.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],r=!1){for(this.options.pedantic&&(e=e.replace(lD.tabCharGlobal,"    ").replace(lD.spaceLine,""));e;){let n;if(this.options.extensions?.block?.some(r=>!!(n=r.call({lexer:this},e,t))&&(e=e.substring(n.raw.length),t.push(n),!0)))continue;if(n=this.tokenizer.space(e)){e=e.substring(n.raw.length);let r=t.at(-1);1===n.raw.length&&void 0!==r?r.raw+=`
`:t.push(n);continue}if(n=this.tokenizer.code(e)){e=e.substring(n.raw.length);let r=t.at(-1);r?.type==="paragraph"||r?.type==="text"?(r.raw+=`
`+n.raw,r.text+=`
`+n.text,this.inlineQueue.at(-1).src=r.text):t.push(n);continue}if((n=this.tokenizer.fences(e))||(n=this.tokenizer.heading(e))||(n=this.tokenizer.hr(e))||(n=this.tokenizer.blockquote(e))||(n=this.tokenizer.list(e))||(n=this.tokenizer.html(e))){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.def(e)){e=e.substring(n.raw.length);let r=t.at(-1);r?.type==="paragraph"||r?.type==="text"?(r.raw+=`
`+n.raw,r.text+=`
`+n.raw,this.inlineQueue.at(-1).src=r.text):this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title});continue}if((n=this.tokenizer.table(e))||(n=this.tokenizer.lheading(e))){e=e.substring(n.raw.length),t.push(n);continue}let o=e;if(this.options.extensions?.startBlock){let t,r=1/0,n=e.slice(1);this.options.extensions.startBlock.forEach(e=>{"number"==typeof(t=e.call({lexer:this},n))&&t>=0&&(r=Math.min(r,t))}),r<1/0&&r>=0&&(o=e.substring(0,r+1))}if(this.state.top&&(n=this.tokenizer.paragraph(o))){let i=t.at(-1);r&&i?.type==="paragraph"?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=i.text):t.push(n),r=o.length!==e.length,e=e.substring(n.raw.length);continue}if(n=this.tokenizer.text(e)){e=e.substring(n.raw.length);let r=t.at(-1);r?.type==="text"?(r.raw+=`
`+n.raw,r.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=r.text):t.push(n);continue}if(e){let t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent)break;throw Error(t)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let r=e,n=null;if(this.tokens.links){let e=Object.keys(this.tokens.links);if(e.length>0)for(;null!=(n=this.tokenizer.rules.inline.reflinkSearch.exec(r));)e.includes(n[0].slice(n[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,n.index)+"["+"a".repeat(n[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(n=this.tokenizer.rules.inline.anyPunctuation.exec(r));)r=r.slice(0,n.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;null!=(n=this.tokenizer.rules.inline.blockSkip.exec(r));)r=r.slice(0,n.index)+"["+"a".repeat(n[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let o=!1,i="";for(;e;){let n;if(o||(i=""),o=!1,this.options.extensions?.inline?.some(r=>!!(n=r.call({lexer:this},e,t))&&(e=e.substring(n.raw.length),t.push(n),!0)))continue;if((n=this.tokenizer.escape(e))||(n=this.tokenizer.tag(e))||(n=this.tokenizer.link(e))){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(n.raw.length);let r=t.at(-1);"text"===n.type&&r?.type==="text"?(r.raw+=n.raw,r.text+=n.text):t.push(n);continue}if((n=this.tokenizer.emStrong(e,r,i))||(n=this.tokenizer.codespan(e))||(n=this.tokenizer.br(e))||(n=this.tokenizer.del(e))||(n=this.tokenizer.autolink(e))||!this.state.inLink&&(n=this.tokenizer.url(e))){e=e.substring(n.raw.length),t.push(n);continue}let c=e;if(this.options.extensions?.startInline){let t,r=1/0,n=e.slice(1);this.options.extensions.startInline.forEach(e=>{"number"==typeof(t=e.call({lexer:this},n))&&t>=0&&(r=Math.min(r,t))}),r<1/0&&r>=0&&(c=e.substring(0,r+1))}if(n=this.tokenizer.inlineText(c)){e=e.substring(n.raw.length),"_"!==n.raw.slice(-1)&&(i=n.raw.slice(-1)),o=!0;let r=t.at(-1);r?.type==="text"?(r.raw+=n.raw,r.text+=n.text):t.push(n);continue}if(e){let t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent)break;throw Error(t)}}return t}};let _Renderer=class _Renderer{options;parser;constructor(e){this.options=e||lI}space(e){return""}code({text:e,lang:t,escaped:r}){let n=(t||"").match(lD.notSpaceStart)?.[0],o=e.replace(lD.endingNewline,"")+`
`;return n?'<pre><code class="language-'+cv(n)+'">'+(r?o:cv(o,!0))+`</code></pre>
`:"<pre><code>"+(r?o:cv(o,!0))+`</code></pre>
`}blockquote({tokens:e}){let t=this.parser.parse(e);return`<blockquote>
${t}</blockquote>
`}html({text:e}){return e}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,r=e.start,n="";for(let t=0;t<e.items.length;t++){let r=e.items[t];n+=this.listitem(r)}let o=t?"ol":"ul";return"<"+o+(t&&1!==r?' start="'+r+'"':"")+`>
`+n+"</"+o+`>
`}listitem(e){let t="";if(e.task){let r=this.checkbox({checked:!!e.checked});e.loose?e.tokens[0]?.type==="paragraph"?(e.tokens[0].text=r+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&"text"===e.tokens[0].tokens[0].type&&(e.tokens[0].tokens[0].text=r+" "+cv(e.tokens[0].tokens[0].text),e.tokens[0].tokens[0].escaped=!0)):e.tokens.unshift({type:"text",raw:r+" ",text:r+" ",escaped:!0}):t+=r+" "}return t+=this.parser.parse(e.tokens,!!e.loose),`<li>${t}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",r="";for(let t=0;t<e.header.length;t++)r+=this.tablecell(e.header[t]);t+=this.tablerow({text:r});let n="";for(let t=0;t<e.rows.length;t++){let o=e.rows[t];r="";for(let e=0;e<o.length;e++)r+=this.tablecell(o[e]);n+=this.tablerow({text:r})}return n&&(n=`<tbody>${n}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+n+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),r=e.header?"th":"td";return(e.align?`<${r} align="${e.align}">`:`<${r}>`)+t+`</${r}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${cv(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:r}){let n=this.parser.parseInline(r),o=cy(e);if(null===o)return n;let i='<a href="'+(e=o)+'"';return t&&(i+=' title="'+cv(t)+'"'),i+=">"+n+"</a>"}image({href:e,title:t,text:r,tokens:n}){n&&(r=this.parser.parseInline(n,this.parser.textRenderer));let o=cy(e);if(null===o)return cv(r);e=o;let i=`<img src="${e}" alt="${r}"`;return t&&(i+=` title="${cv(t)}"`),i+=">"}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:cv(e.text)}};let _TextRenderer=class _TextRenderer{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}};let _Parser=class _Parser{options;renderer;textRenderer;constructor(e){this.options=e||lI,this.options.renderer=this.options.renderer||new _Renderer,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new _TextRenderer}static parse(e,t){return new _Parser(t).parse(e)}static parseInline(e,t){return new _Parser(t).parseInline(e)}parse(e,t=!0){let r="";for(let n=0;n<e.length;n++){let o=e[n];if(this.options.extensions?.renderers?.[o.type]){let e=this.options.extensions.renderers[o.type].call({parser:this},o);if(!1!==e||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(o.type)){r+=e||"";continue}}switch(o.type){case"space":r+=this.renderer.space(o);continue;case"hr":r+=this.renderer.hr(o);continue;case"heading":r+=this.renderer.heading(o);continue;case"code":r+=this.renderer.code(o);continue;case"table":r+=this.renderer.table(o);continue;case"blockquote":r+=this.renderer.blockquote(o);continue;case"list":r+=this.renderer.list(o);continue;case"html":r+=this.renderer.html(o);continue;case"paragraph":r+=this.renderer.paragraph(o);continue;case"text":{let i=o,c=this.renderer.text(i);for(;n+1<e.length&&"text"===e[n+1].type;)i=e[++n],c+=`
`+this.renderer.text(i);t?r+=this.renderer.paragraph({type:"paragraph",raw:c,text:c,tokens:[{type:"text",raw:c,text:c,escaped:!0}]}):r+=c;continue}default:{let e='Token with "'+o.type+'" type was not found.';if(this.options.silent)return"";throw Error(e)}}}return r}parseInline(e,t=this.renderer){let r="";for(let n=0;n<e.length;n++){let o=e[n];if(this.options.extensions?.renderers?.[o.type]){let e=this.options.extensions.renderers[o.type].call({parser:this},o);if(!1!==e||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){r+=e||"";continue}}switch(o.type){case"escape":case"text":r+=t.text(o);break;case"html":r+=t.html(o);break;case"link":r+=t.link(o);break;case"image":r+=t.image(o);break;case"strong":r+=t.strong(o);break;case"em":r+=t.em(o);break;case"codespan":r+=t.codespan(o);break;case"br":r+=t.br(o);break;case"del":r+=t.del(o);break;default:{let e='Token with "'+o.type+'" type was not found.';if(this.options.silent)return"";throw Error(e)}}}return r}};let _Hooks=class _Hooks{options;block;constructor(e){this.options=e||lI}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?_Lexer.lex:_Lexer.lexInline}provideParser(){return this.block?_Parser.parse:_Parser.parseInline}};let Marked=class Marked{defaults=lM();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=_Parser;Renderer=_Renderer;TextRenderer=_TextRenderer;Lexer=_Lexer;Tokenizer=_Tokenizer;Hooks=_Hooks;constructor(...e){this.use(...e)}walkTokens(e,t){let r=[];for(let n of e)switch(r=r.concat(t.call(this,n)),n.type){case"table":for(let e of n.header)r=r.concat(this.walkTokens(e.tokens,t));for(let e of n.rows)for(let n of e)r=r.concat(this.walkTokens(n.tokens,t));break;case"list":r=r.concat(this.walkTokens(n.items,t));break;default:{let e=n;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(n=>{let o=e[n].flat(1/0);r=r.concat(this.walkTokens(o,t))}):e.tokens&&(r=r.concat(this.walkTokens(e.tokens,t)))}}return r}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let r={...e};if(r.async=this.defaults.async||r.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error("extension name required");if("renderer"in e){let r=t.renderers[e.name];r?t.renderers[e.name]=function(...t){let n=e.renderer.apply(this,t);return!1===n&&(n=r.apply(this,t)),n}:t.renderers[e.name]=e.renderer}if("tokenizer"in e){if(!e.level||"block"!==e.level&&"inline"!==e.level)throw Error("extension level must be 'block' or 'inline'");let r=t[e.level];r?r.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&("block"===e.level?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:"inline"===e.level&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}"childTokens"in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),r.extensions=t),e.renderer){let t=this.defaults.renderer||new _Renderer(this.defaults);for(let r in e.renderer){if(!(r in t))throw Error(`renderer '${r}' does not exist`);if(["options","parser"].includes(r))continue;let n=e.renderer[r],o=t[r];t[r]=(...e)=>{let r=n.apply(t,e);return!1===r&&(r=o.apply(t,e)),r||""}}r.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new _Tokenizer(this.defaults);for(let r in e.tokenizer){if(!(r in t))throw Error(`tokenizer '${r}' does not exist`);if(["options","rules","lexer"].includes(r))continue;let n=e.tokenizer[r],o=t[r];t[r]=(...e)=>{let r=n.apply(t,e);return!1===r&&(r=o.apply(t,e)),r}}r.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new _Hooks;for(let r in e.hooks){if(!(r in t))throw Error(`hook '${r}' does not exist`);if(["options","block"].includes(r))continue;let n=e.hooks[r],o=t[r];_Hooks.passThroughHooks.has(r)?t[r]=e=>{if(this.defaults.async)return Promise.resolve(n.call(t,e)).then(e=>o.call(t,e));let r=n.call(t,e);return o.call(t,r)}:t[r]=(...e)=>{let r=n.apply(t,e);return!1===r&&(r=o.apply(t,e)),r}}r.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,n=e.walkTokens;r.walkTokens=function(e){let r=[];return r.push(n.call(this,e)),t&&(r=r.concat(t.call(this,e))),r}}this.defaults={...this.defaults,...r}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return _Lexer.lex(e,t??this.defaults)}parser(e,t){return _Parser.parse(e,t??this.defaults)}parseMarkdown(e){return(t,r)=>{let n={...r},o={...this.defaults,...n},i=this.onError(!!o.silent,!!o.async);if(!0===this.defaults.async&&!1===n.async)return i(Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(null==t)return i(Error("marked(): input parameter is undefined or null"));if("string"!=typeof t)return i(Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));o.hooks&&(o.hooks.options=o,o.hooks.block=e);let c=o.hooks?o.hooks.provideLexer():e?_Lexer.lex:_Lexer.lexInline,u=o.hooks?o.hooks.provideParser():e?_Parser.parse:_Parser.parseInline;if(o.async)return Promise.resolve(o.hooks?o.hooks.preprocess(t):t).then(e=>c(e,o)).then(e=>o.hooks?o.hooks.processAllTokens(e):e).then(e=>o.walkTokens?Promise.all(this.walkTokens(e,o.walkTokens)).then(()=>e):e).then(e=>u(e,o)).then(e=>o.hooks?o.hooks.postprocess(e):e).catch(i);try{o.hooks&&(t=o.hooks.preprocess(t));let e=c(t,o);o.hooks&&(e=o.hooks.processAllTokens(e)),o.walkTokens&&this.walkTokens(e,o.walkTokens);let r=u(e,o);return o.hooks&&(r=o.hooks.postprocess(r)),r}catch(e){return i(e)}}}onError(e,t){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e="<p>An error occurred:</p><pre>"+cv(r.message+"",!0)+"</pre>";return t?Promise.resolve(e):e}if(t)return Promise.reject(r);throw r}}};let cC=new Marked;function cx(e,t){return cC.parse(e,t)}cx.options=cx.setOptions=function(e){return cC.setOptions(e),cx.defaults=cC.defaults,lI=cx.defaults,cx},cx.getDefaults=lM,cx.defaults=lI,cx.use=function(...e){return cC.use(...e),cx.defaults=cC.defaults,lI=cx.defaults,cx},cx.walkTokens=function(e,t){return cC.walkTokens(e,t)},cx.parseInline=cC.parseInline,cx.Parser=_Parser,cx.parser=_Parser.parse,cx.Renderer=_Renderer,cx.TextRenderer=_TextRenderer,cx.Lexer=_Lexer,cx.lexer=_Lexer.lex,cx.Tokenizer=_Tokenizer,cx.Hooks=_Hooks,cx.parse=cx,cx.options,cx.setOptions,cx.use,cx.walkTokens,cx.parseInline,_Parser.parse,_Lexer.lex;var ck=Object.defineProperty,cR=Object.getOwnPropertyDescriptor,cT=(e,t,r,n)=>{for(var o,i=n>1?void 0:n?cR(t,r):t,c=e.length-1;c>=0;c--)(o=e[c])&&(i=(n?o(t,r,i):o(i))||i);return n&&i&&ck(t,r,i),i};let cE=class extends lit_element_i{constructor(){super(...arguments),this.markdown=""}render(){return eE`${this.markdown?iZ(this.renderMarkdown(this.markdown),"Loading..."):""}`}async renderMarkdown(e){cx.setOptions({gfm:!0}),cx.use({renderer:{image:function({href:e,title:t,text:r}){let n=[],o=[];return e&&({href:e,dimensions:n}=function(e){let t=[],r=e.split("|").map(e=>e.trim());e=r[0];let n=r[1];if(n){let e=/height=(\d+)/.exec(n),r=/width=(\d+)/.exec(n),o=e?e[1]:"",i=r?r[1]:"",c=isFinite(parseInt(i)),u=isFinite(parseInt(o));c&&t.push(`width="${i}"`),u&&t.push(`height="${o}"`)}return{href:e,dimensions:t}}(e),o.push(`src="${cz(e)}"`)),r&&o.push(`alt="${cz(r)}"`),t&&o.push(`title="${cz(t)}"`),n.length&&(o=o.concat(n)),`<img ${o.join(" ")}>`},paragraph:function({tokens:e}){let t=this.parser.parseInline(e);return`<p>${t}</p>`},link:function({href:e,title:t,tokens:r}){if("string"!=typeof e)return"";let n=this.parser.parseInline(r);return e===n&&(n=c$(n)),t="string"==typeof t?cz(c$(t)):"",e=c$(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),`<a href="${e}" title="${t||e}" draggable="false">${n}</a>`},code:function({text:e,lang:t}){return e=e.replace(/</g,"&lt;"),`<pre class="language-${t}"><code>${e}</code></pre>`},codespan:function({text:e}){return e=e.replace(/</g,"&lt;"),`<code>${e}</code>`}}});let t=await cx.parse(e.replace(cN,e=>`\\${e}`));return iN(t=function(e){let t,r=[],n=0,o=0;for(;null!==(t=cD.exec(e));){n<(o=t.index||0)&&r.push(e.substring(n,o)),n=(t.index||0)+t[0].length;let[,i,c]=t;r.push(i?`$(${c})`:function(e){let[,t,r]=cI.exec(e.id)??[void 0,"error",void 0];return t.startsWith("gitlens-")&&(t=`gl-${t.substring(8)}`),`<code-icon icon="${t}"${r?` modifier="${r}"`:""}></code-icon>`}({id:c}))}return n<e.length&&r.push(e.substring(n)),r.join("")}(t))}};cE.styles=B`
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
	`,cT([ej({type:String})],cE.prototype,"markdown",2),cE=cT([eF("gl-markdown")],cE);let cO="[A-Za-z0-9-]+",cM="~[A-Za-z]+",cI=RegExp(`^(${cO})(${cM})?$`),cA=RegExp(`\\$\\(${cO}(?:${cM})?\\)`,"g"),cN=RegExp(`\\\\${cA.source}`,"g"),cD=RegExp(`(\\\\)?\\$\\((${cO}(?:${cM})?)\\)`,"g");function cz(e){return e.replace(/"/g,"&quot;")}function c$(e){return e?e.replace(/\\([\\`*_{}[\]()#+\-.!~])/g,"$1"):e}let cP=(({react:e,tagName:t,elementClass:r,events:n,displayName:o})=>{let i=new Set(Object.keys(n??{})),c=e.forwardRef((o,c)=>{let u=e.useRef(new Map),h=e.useRef(null),d={},p={};for(let[e,t]of Object.entries(o))lT.has(e)?d["className"===e?"class":e]=t:i.has(e)||e in r.prototype?p[e]=t:d[e]=t;return e.useLayoutEffect(()=>{if(null===h.current)return;let e=new Map;for(let t in p)lO(h.current,t,o[t],u.current.get(t),n),u.current.delete(t),e.set(t,o[t]);for(let[e,t]of u.current)lO(h.current,e,void 0,t,n);u.current=e}),e.useLayoutEffect(()=>{h.current?.removeAttribute("defer-hydration")},[]),d.suppressHydrationWarning=!0,e.createElement(t,{...d,ref:e.useCallback(e=>{h.current=e,"function"==typeof c?c(e):null!==c&&(c.current=e)},[c])})});return c.displayName=o??r.name,c})({tagName:"gl-markdown",elementClass:cE,react:lS}),cL=e=>(t,r)=>(function(e,t="absolute",r="short+short",n){switch(n){case nz.CommitDateTimeSources.Tooltip:return`${tg(e,r)} (${tm(e)})`;case nz.CommitDateTimeSources.RowEntry:default:return"relative"===t?tm(e):tg(e,r)}})(t,e.dateStyle,e.dateFormat,r),cH=(()=>{let e={};return["head","filter","remote","remote-github","remote-githubEnterprise","remote-gitlab","remote-gitlabSelfHosted","remote-bitbucket","remote-bitbucketServer","remote-azureDevops","tag","stash","check","loading","warning","added","modified","deleted","renamed","resolved","pull-request","show","hide","branch","graph","commit","author","datetime","message","changes","files","worktree","issue-github","issue-githubEnterprise","issue-gitlab","issue-gitlabSelfHosted","issue-jiraCloud","issue-jiraServer","issue-azureDevops","issue-bitbucket","undefined-icon"].forEach(t=>{e[t]=(0,lS.createElement)("span",{className:`graph-icon icon--${t}`})}),["upstream-ahead","upstream-behind"].forEach(t=>{e[t]=(0,lS.createElement)("span",{className:`graph-icon mini-icon icon--${t}`})}),e.settings=(0,lS.createElement)("span",{className:"graph-icon icon--settings",style:{fontSize:"1.1rem",right:"0px",top:"-1px"}}),e})(),cG=e=>{let t=e in cH?e:"undefined-icon";return cH[t]},cW=(()=>{switch(aG?"web-windows":aH?"web-macOS":aL?"web-linux":"web"){case"web-macOS":return"darwin";case"web-windows":return"win32";default:return"linux"}})(),cF={listDoubleSelection:!1,listMultiSelection:!1,webviewItems:void 0,webviewItemsValues:void 0},cB=[],cU=(0,lS.memo)(e=>{let[t,r]=(0,lS.useState)(null),[n,o]=(0,lS.useState)(e.context),[i,c]=(0,lS.useState)(e),[u,h]=(0,lS.useState)();(0,lS.useEffect)(()=>i.subscriber?.(e=>{c(t=>({...t,...e}))}),[i.subscriber]),(0,lS.useEffect)(()=>{o(i.context)},[i.context]);let d=(0,lS.useCallback)(e=>{r(e),i.setRef(e)},[i.setRef]),p=r=>{if("Enter"===r.key||" "===r.key){let n=function(e){if(null==e)return;let[t,r]=e.split("|");return{id:t,date:Number(r)}}(i.activeRow)?.id;if(null==n)return;let o=t?.graphContainerRef.current;if(!r.composedPath().some(e=>e===o))return;let c=i.rows?.find(e=>e.sha===n);null!=c&&e.onRowDoubleClick?.({row:c,preserveFocus:"Enter"!==r.key})}};(0,lS.useEffect)(()=>(window.addEventListener("keydown",p),()=>{window.removeEventListener("keydown",p)}),[i.activeRow]);let m=()=>{document.querySelector(".graph-header .resizable.resizing")&&document.dispatchEvent(new MouseEvent("mouseup",{view:window,bubbles:!0,cancelable:!0}))},g=(0,lS.useMemo)(()=>i.excludeRefs?{...i.excludeRefs}:void 0,[i.excludeRefs]),b=e=>{if(e.length<=1){null!=u&&h(void 0);return}let t=new Set;for(let r of e)t.add(r.sha);let r=function(e,t,r){let n=new Map;for(let o of e){let e=r(o);if(null==e)continue;let i=t(o),c=n.get(i);null==c?n.set(i,[e]):c.push(e)}return n}(e,e=>e.type,e=>e.contexts?.row!=null?"string"==typeof e.contexts.row?JSON.parse(e.contexts.row):e.contexts.row:void 0),n=new Map;for(let[e,t]of r){let r,o=new Set;for(let e of t)o.add(e.webviewItem);if(1===o.size)r=lx(o);else if(o.size>1){let e=new Map;for(let t of o){let[r,...n]=t.split("+"),o=e.get(r);if(null==o&&(o=new Map,e.set(r,o)),0===n.length){o.clear();break}for(let e of n)o.set(e,(o.get(e)??0)+1)}if(1===e.size){let n;if([r,n]=lx(e),n.size>0){let e=function(e,t){let r=e[Symbol.iterator](),n=r.next();if(n.done)return"";let o=String(n.value);for(;!(n=r.next()).done;)o+=`+${n.value}`;return o}(function*(e,t){for(let r of e){let e=t(r);null!=e&&(yield e)}}(n,([e,r])=>r===t.length?e:void 0),0);e&&(r+=`+${e}`)}}else r=void 0,t=[]}let i=t.length;n.set(e,{listDoubleSelection:2===i,listMultiSelection:i>1,webviewItems:r,webviewItemsValues:i>1?t:void 0})}h({contexts:n,selectedShas:t})},v=i.config??{};return lS.createElement(n$(),{ref:d,avatarUrlByEmail:i.avatars,columnsSettings:i.columns,contexts:n,formatCommitMessage:e=>lS.createElement(cP,{markdown:e}),cssVariables:i.theming?.cssVariables,dimMergeCommits:v.dimMergeCommits,downstreamsByUpstream:i.downstreams,enabledRefMetadataTypes:v.enabledRefMetadataTypes,enabledScrollMarkerTypes:v.scrollMarkerTypes,enableShowHideRefsOptions:!0,enableMultiSelection:v.enableMultiSelection,excludeRefsById:i.excludeRefs,excludeByType:i.excludeTypes,formatCommitDateTime:cL(v),getExternalIcon:cG,graphRows:i.rows??cB,hasMoreCommits:i.paging?.hasMore,highlightedShas:i.searchResults?.ids,highlightRowsOnRefHover:v.highlightRowsOnRefHover,includeOnlyRefsById:i.includeOnlyRefs,scrollRowPadding:v.scrollRowPadding,showGhostRefsOnRowHover:v.showGhostRefsOnRowHover,showRemoteNamesOnRefs:v.showRemoteNamesOnRefs,isContainerWindowFocused:i.windowFocused,isLoadingRows:i.loading,isSelectedBySha:i.selectedRows,nonce:i.nonce,onColumnResized:(t,r)=>{r.width&&e.onChangeColumns?.({[t]:{width:r.width,isHidden:r.isHidden,mode:r.mode,order:r.order}})},onDoubleClickGraphRow:(t,r,n)=>{r!==nz.refZone&&e.onRowDoubleClick?.({row:n,preserveFocus:!0})},onDoubleClickGraphRef:(t,r,n,o)=>{r.length>0&&e.onRefDoubleClick?.({ref:r[0],metadata:o})},onGraphColumnsReOrdered:t=>{let r={};for(let[e,n]of Object.entries(t))r[e]={...n};e.onChangeColumns?.(r)},onGraphMouseLeave:t=>{e.onMouseLeave?.(),m()},onGraphRowHovered:(t,r,n)=>e.onRowHover?.({clientX:t.clientX,currentTarget:t.currentTarget,graphRow:n,graphZoneType:r}),onGraphRowUnhovered:(t,r,n)=>e.onRowUnhover?.({relatedTarget:t.nativeEvent.relatedTarget??t.relatedTarget,graphRow:n,graphZoneType:r}),onRowContextMenu:(t,r,i)=>{if(r===nz.refZone)return;let c=u?.selectedShas.has(i.sha)?u.contexts.get(i.type):cF;o({...n,graph:{...n?.graph!=null&&"string"==typeof n.graph?JSON.parse(n.graph):n?.graph,...c}}),e.onRowContextMenu?.({graphZoneType:r,graphRow:i})},onSettingsClick:e=>{let t=e.nativeEvent,r=new MouseEvent("contextmenu",{bubbles:!0,clientX:t.clientX,clientY:t.clientY});t.target?.dispatchEvent(r),t.stopImmediatePropagation()},onSelectGraphRows:t=>{t.length>1?b(t):null!=u&&h(void 0),e.onChangeSelection?.(t)},onToggleRefsVisibilityClick:(t,r,n)=>{n||document.getElementById("hiddenRefs")?.animate([{offset:0,background:"transparent"},{offset:.4,background:"var(--vscode-statusBarItem-warningBackground)"},{offset:1,background:"transparent"}],{duration:1e3,iterations:Object.keys(g??{}).length?1:2}),e.onChangeRefsVisibility?.({refs:r,visible:n})},onEmailsMissingAvatarUrls:t=>{e.onMissingAvatars?.(t)},onRefsMissingMetadata:t=>{e.onMissingRefsMetadata?.(t)},onShowMoreCommits:()=>{e.onMoreRows?.()},onGraphVisibleRowsChanged:(t,r)=>{e.onChangeVisibleDays?.({top:new Date(t.date).setHours(23,59,59,999),bottom:new Date(r.date).setHours(0,0,0,0)})},platform:cW,refMetadataById:i.refsMetadata,rowsStats:i.rowsStats,rowsStatsLoading:i.rowsStatsLoading,searchMode:i.filter?.filter?"filter":"normal",shaLength:v.idLength,shiftSelectMode:"simple",suppressNonRefRowTooltips:!0,themeOpacityFactor:i.theming?.themeOpacityFactor,useAuthorInitialsForAvatars:!v.avatars,workDirStats:i.workingTreeStats})});var cj=Object.defineProperty,cZ=Object.getOwnPropertyDescriptor,cV=(e,t,r,n)=>{for(var o,i=n>1?void 0:n?cZ(t,r):t,c=e.length-1;c>=0;c--)(o=e[c])&&(i=(n?o(t,r,i):o(i))||i);return n&&i&&cj(t,r,i),i};let cq=class extends lit_element_i{constructor(){super(...arguments),this.reactRoot=null,this.provideReactState=null,this.setReactStateProvider=e=>{this.provideReactState=e},this.changedProps=new Map,this.updateScheduled=!1,this.handleChangeColumns=e9(e=>{this.dispatchEvent(new CustomEvent("changecolumns",{detail:{settings:e}}))},250),this.handleChangeRefsVisibility=e=>{this.dispatchEvent(new CustomEvent("changerefsvisibility",{detail:e}))},this.handleChangeSelection=e9(e=>void this.dispatchEvent(new CustomEvent("changeselection",{detail:e})),250,{edges:"both"}),this.handleChangeVisibleDays=e=>{this.dispatchEvent(new CustomEvent("changevisibledays",{detail:e}))},this.handleMissingAvatars=e=>{this.dispatchEvent(new CustomEvent("missingavatars",{detail:e}))},this.handleMissingRefsMetadata=e=>{this.dispatchEvent(new CustomEvent("missingrefsmetadata",{detail:e}))},this.handleMoreRows=e=>{this.dispatchEvent(new CustomEvent("morerows",{detail:e}))},this.handleMouseLeave=()=>{this.dispatchEvent(new CustomEvent("graphmouseleave"))},this.handleRefDoubleClick=e=>{this.dispatchEvent(new CustomEvent("refdoubleclick",{detail:e}))},this.handleRowContextMenu=e=>{this.dispatchEvent(new CustomEvent("rowcontextmenu",{detail:e}))},this.handleRowDoubleClick=e=>{this.dispatchEvent(new CustomEvent("rowdoubleclick",{detail:e}))},this.handleRowHover=e=>{this.dispatchEvent(new CustomEvent("rowhover",{detail:e}))},this.handleRowUnhover=e=>{this.dispatchEvent(new CustomEvent("rowunhover",{detail:e}))}}createRenderRoot(){return this}disconnectedCallback(){this.reactRoot&&(this.reactRoot.unmount(),this.reactRoot=null),super.disconnectedCallback()}shouldUpdate(e){if(!this.provideReactState)return null==this.reactRoot;for(let t of e.keys())this.changedProps.set(t,this[t]);if(this.updateScheduled)return null==this.reactRoot;this.updateScheduled=!0;let{provideReactState:t}=this;return requestAnimationFrame(()=>{this.updateScheduled=!1,this.changedProps.size>0&&(t(Object.fromEntries(this.changedProps)),this.changedProps.clear())}),null==this.reactRoot}firstUpdated(){this.reactRoot=(0,lC.createRoot)(this.querySelector(".graph__graph-root")),this.reactRoot.render((0,lS.createElement)(cU,{setRef:this.setRef,subscriber:this.setReactStateProvider,activeRow:this.activeRow,avatars:this.avatars,columns:this.columns,config:this.config,context:this.context,downstreams:this.downstreams,excludeRefs:this.excludeRefs,excludeTypes:this.excludeTypes,filter:this.filter,includeOnlyRefs:this.includeOnlyRefs,loading:this.loading,nonce:this.nonce,paging:this.paging,refsMetadata:this.refsMetadata,rows:this.rows,rowsStats:this.rowsStats,rowsStatsLoading:this.rowsStatsLoading,searchResults:this.searchResults,selectedRows:this.selectedRows,theming:this.theming,windowFocused:this.windowFocused,workingTreeStats:this.workingTreeStats,onChangeColumns:this.handleChangeColumns,onChangeRefsVisibility:this.handleChangeRefsVisibility,onChangeSelection:this.handleChangeSelection,onChangeVisibleDays:this.handleChangeVisibleDays,onMissingAvatars:this.handleMissingAvatars,onMissingRefsMetadata:this.handleMissingRefsMetadata,onMoreRows:this.handleMoreRows,onMouseLeave:this.handleMouseLeave,onRefDoubleClick:this.handleRefDoubleClick,onRowContextMenu:this.handleRowContextMenu,onRowDoubleClick:this.handleRowDoubleClick,onRowHover:this.handleRowHover,onRowUnhover:this.handleRowUnhover}))}render(){return eE`<div class="graph__graph-root"></div>`}};cV([ej({type:String})],cq.prototype,"activeRow",2),cV([ej({type:Object})],cq.prototype,"avatars",2),cV([ej({type:Object})],cq.prototype,"columns",2),cV([ej({type:Object})],cq.prototype,"context",2),cV([ej({type:Object})],cq.prototype,"config",2),cV([ej({type:Object})],cq.prototype,"downstreams",2),cV([ej({type:Array})],cq.prototype,"rows",2),cV([ej({type:Object})],cq.prototype,"excludeRefs",2),cV([ej({type:Object})],cq.prototype,"excludeTypes",2),cV([ej({type:Object})],cq.prototype,"paging",2),cV([ej({type:Boolean})],cq.prototype,"loading",2),cV([ej({type:Object})],cq.prototype,"selectedRows",2),cV([ej({type:Boolean})],cq.prototype,"windowFocused",2),cV([ej({type:Object})],cq.prototype,"refsMetadata",2),cV([ej({type:Object})],cq.prototype,"includeOnlyRefs",2),cV([ej({type:Object})],cq.prototype,"rowsStats",2),cV([ej({type:Boolean})],cq.prototype,"rowsStatsLoading",2),cV([ej({type:Object})],cq.prototype,"workingTreeStats",2),cV([ej({type:Object})],cq.prototype,"theming",2),cV([ej({type:Object})],cq.prototype,"searchResults",2),cV([ej({type:Object})],cq.prototype,"filter",2),cV([ej({attribute:!1})],cq.prototype,"setRef",2),cq=cV([eF("gl-graph")],cq);var cY=Object.defineProperty,cK=Object.getOwnPropertyDescriptor,cQ=(e,t,r,n)=>{for(var o,i=n>1?void 0:n?cK(t,r):t,c=e.length-1;c>=0;c--)(o=e[c])&&(i=(n?o(t,r,i):o(i))||i);return n&&i&&cY(t,r,i),i};let cX=class extends r8(lit_element_i){constructor(){super(...arguments),this.onSetRef=e=>{this.ref=e}}createRenderRoot(){return this}render(){let{graphAppState:e,hostState:t}=this;return eE`<gl-graph
			.setRef=${this.onSetRef}
			.activeRow=${e.activeRow}
			.avatars=${t.avatars}
			.columns=${t.columns}
			.config=${t.config}
			.context=${t.context}
			.downstreams=${t.downstreams}
			.excludeRefs=${t.excludeRefs}
			.excludeTypes=${t.excludeTypes}
			.filter=${e.filter}
			.includeOnlyRefs=${t.includeOnlyRefs}
			?loading=${e.loading}
			nonce=${nH(t.nonce)}
			.paging=${t.paging}
			.refsMetadata=${t.refsMetadata}
			.rows=${t.rows}
			.rowsStats=${t.rowsStats}
			.searchResults=${e.searchResults}
			.selectedRows=${e.selectedRows}
			.theming=${e.theming}
			?windowFocused=${t.windowFocused}
			.workingTreeStats=${t.workingTreeStats}
			@changecolumns=${this.onColumnsChanged}
			@changerefsvisibility=${this.onRefsVisibilityChanged}
			@changeselection=${this.onSelectionChanged}
			@changevisibledays=${this.onVisibleDaysChanged}
			@missingavatars=${this.onMissingAvatars}
			@missingrefsmetadata=${this.onMissingRefsMetadata}
			@morerows=${this.onGetMoreRows}
			@graphmouseleave=${this.onMouseLeave}
			@refdoubleclick=${this.onRefDoubleClick}
			@rowcontextmenu=${this.onRowContextMenu}
			@rowdoubleclick=${this.onRowDoubleClick}
			@rowhover=${this.onRowHover}
			@rowunhover=${this.onRowUnhover}
		></gl-graph>`}selectCommits(e,t,r){this.ref?.selectCommits(e,t,r)}onColumnsChanged(e){this._ipc.sendCommand(rt,{config:e.detail.settings})}onGetMoreRows({detail:e}){this.graphAppState.loading=!0,this._ipc.sendCommand(t9,{id:e})}onMouseLeave(){this.dispatchEvent(new CustomEvent("gl-graph-mouse-leave"))}onMissingAvatars({detail:e}){this._ipc.sendCommand(t4,{emails:e})}onMissingRefsMetadata({detail:e}){this._ipc.sendCommand(t8,{metadata:e})}onRefDoubleClick({detail:{ref:e,metadata:t}}){this._ipc.sendCommand(t6,{type:"ref",ref:e,metadata:t})}onRefsVisibilityChanged({detail:e}){this._ipc.sendCommand(rr,e)}onRowContextMenu({detail:{graphRow:e,graphZoneType:t}}){this.dispatchEvent(new CustomEvent("gl-graph-row-context-menu",{detail:{graphZoneType:t,graphRow:e}}))}onRowDoubleClick({detail:{row:e,preserveFocus:t}}){this._ipc.sendCommand(t6,{type:"row",row:{id:e.sha,type:e.type},preserveFocus:t})}onRowHover({detail:e}){this.dispatchEvent(new CustomEvent("gl-graph-row-hover",{detail:e}))}onRowUnhover({detail:e}){this.dispatchEvent(new CustomEvent("gl-graph-row-unhover",{detail:e}))}onSelectionChanged({detail:e}){var t;let r,n=(t=e=>null!=e?{id:e.sha,type:e.type}:void 0,r=0,e.reduce((e,n)=>{let o=t(n,r++);return null!=o&&e.push(o),e},[])),o=e[e.length-1],i=null!=o?`${o.sha}|${o.date}`:void 0;this.graphAppState.activeRow=i,this.graphAppState.activeDay=o?.date,this.dispatchEvent(new CustomEvent("gl-graph-change-selection",{detail:{selection:n}})),this._ipc.sendCommand(ra,{selection:n})}onVisibleDaysChanged({detail:e}){this.dispatchEvent(new CustomEvent("gl-graph-change-visible-days",{detail:e}))}};cQ([D({context:"graphState"})],cX.prototype,"graphAppState",2),cQ([D({context:"state",subscribe:!0})],cX.prototype,"hostState",2),cQ([D({context:"ipc"})],cX.prototype,"_ipc",2),cQ([D({context:"telemetry"})],cX.prototype,"_telemetry",2),cQ([eq("gl-graph")],cX.prototype,"graph",2),cX=cQ([eF("gl-graph-wrapper")],cX);var cJ=Object.defineProperty,c0=Object.getOwnPropertyDescriptor,c1=(e,t,r,n)=>{for(var o,i=n>1?void 0:n?c0(t,r):t,c=e.length-1;c>=0;c--)(o=e[c])&&(i=(n?o(t,r,i):o(i))||i);return n&&i&&cJ(t,r,i),i};let c2=class extends GlElement{constructor(){super(...arguments),this.open=!1,this.placement="bottom-start",this.hoverMarkdownCache=new Map,this.recalculated=!1,this.onParentMouseLeave=()=>{this.hide()},this._showCoreDebounced=void 0,this.onWindowKeydown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())}}render(){return this.markdown?eE`<gl-popover
			?open=${this.open}
			.anchor=${this.anchor}
			.distance=${this.distance}
			.skidding=${this.skidding}
			.placement=${this.placement}
			trigger="manual"
			@gl-popover-hide=${()=>this.hide()}
			@sl-reposition=${()=>this.onReposition()}
		>
			<div slot="content">
				<gl-markdown .markdown=${iZ(this.markdown,"Loading...")}></gl-markdown>
			</div>
		</gl-popover>`:void this.hide()}onReposition(){if(null!=this.skidding&&("bottom-start"===this.placement||"top-start"===this.placement))switch(this.popup?.currentPlacement){case"bottom-end":case"top-end":this.recalculated||null!=this.previousSkidding||(this.previousSkidding=this.skidding,this.skidding=-(5*this.skidding),this.recalculated=!0);break;default:null!=this.previousSkidding&&(this.skidding=this.previousSkidding,this.previousSkidding=void 0)}}reset(){this.recalculated=!1,this.hoverMarkdownCache.clear()}onRowHovered(e,t){if(clearTimeout(this.unhoverTimer),null==this.requestMarkdown||this.hoveredSha===e.sha&&this.open)return;this.hoveredSha=e.sha;let r=this.hoverMarkdownCache.get(e.sha);if(null==r){let t="work-dir-changes"!==e.type;r=this.requestMarkdown(e).then(r=>("fulfilled"===r.markdown.status&&t?this.hoverMarkdownCache.set(e.sha,r.markdown):"rejected"===r.markdown.status&&this.hoverMarkdownCache.delete(e.sha),r.markdown)),t&&this.hoverMarkdownCache.set(e.sha,r)}this.open?this.showCore(t,r):(this._showCoreDebounced??=e9(this.showCore.bind(this),500),this._showCoreDebounced(t,r))}onRowUnhovered(e,t){this.recalculated=!1,clearTimeout(this.unhoverTimer),null!=t&&"closest"in t&&t.closest("gl-graph-hover")||(this.unhoverTimer=setTimeout(()=>this.hide(),250))}showCore(e,t){if("string"==typeof t)this.markdown=t;else if(tG(t)){let e=this.hoveredSha;t.then(t=>{e===this.hoveredSha&&(this.markdown=tH(t),t||this.hide())}).catch(()=>{})}else this.markdown=tH(t);this.anchor=e,this.open=!0,this.parentElement?.addEventListener("mouseleave",this.onParentMouseLeave),window.addEventListener("keydown",this.onWindowKeydown)}hide(){this._showCoreDebounced?.cancel(),clearTimeout(this.unhoverTimer),this.parentElement?.removeEventListener("mouseleave",this.onParentMouseLeave),window.removeEventListener("keydown",this.onWindowKeydown),this.hoveredSha=void 0,this.markdown=void 0,this.open=!1}};c2.styles=B`
		gl-popover::part(body) {
			--max-width: min(92vw, 45rem);
			max-height: 50vh;
			width: clamp(min(30rem, 92vw), min-content, max-content);
			overflow-x: hidden;
			overflow-y: auto;
		}
	`,c1([ej({type:Object})],c2.prototype,"anchor",2),c1([ej({reflect:!0,type:Number})],c2.prototype,"distance",2),c1([ej({reflect:!0,type:Boolean})],c2.prototype,"open",2),c1([ej({reflect:!0})],c2.prototype,"placement",2),c1([ej({type:Object})],c2.prototype,"markdown",2),c1([ej({reflect:!0,type:Number})],c2.prototype,"skidding",2),c1([ej({type:Function})],c2.prototype,"requestMarkdown",2),c1([eq("gl-popover")],c2.prototype,"popup",2),c2=c1([eF("gl-graph-hover")],c2);var c5=Object.defineProperty,c3=Object.getOwnPropertyDescriptor,c6=(e,t,r,n)=>{for(var o,i=n>1?void 0:n?c3(t,r):t,c=e.length-1;c>=0;c--)(o=e[c])&&(i=(n?o(t,r,i):o(i))||i);return n&&i&&c5(t,r,i),i};let c4=["marker-result","marker-head-arrow-left","marker-head-arrow-right","marker-head","marker-upstream","marker-pull-request","marker-branch","marker-stash","marker-remote","marker-tag","visible-area"],c8=class extends GlElement{constructor(){super(...arguments),this.dataType="commits"}onActiveDayChanged(){this.select(this.activeDay)}onDataChanged(){this.handleDataChanged(!1)}onMarkersChanged(){this.handleDataChanged(!0)}onSearchResultsChanged(){this._chart?.regions.remove({classes:["marker-result"]}),null!=this.searchResults&&this._chart?.regions.add([...this.getSearchResultsRegions(this.searchResults)])}onVisibleDaysChanged(){this._chart?.regions.remove({classes:["visible-area"]}),null!=this.visibleDays&&this._chart?.regions.add(this.getVisibleAreaRegion(this.visibleDays))}connectedCallback(){super.connectedCallback(),this.handleDataChanged(!1)}disconnectedCallback(){super.disconnectedCallback(),this._chart?.destroy(),this._chart=void 0}handleDataChanged(e){this._loadTimer&&(clearTimeout(this._loadTimer),this._loadTimer=void 0),e&&(this._regions=void 0,this._markerRegions=void 0),this._loadTimer=setTimeout(()=>this.loadChart(),150)}getInternalChart(){try{let e=this._chart?.internal;return this._chart,e}catch{return}}select(e,t=!1){if(null==e)return void this.unselect();let r=this.getDataPoint(e);if(null==r)return;let n=this.getInternalChart();if(null!=n&&(n.showGridFocus([r]),!t)){let{index:e}=r;null!=e&&this._chart.$.main.selectAll(`.bb-shape-${e}`).each(function(t){n.toggleShape?.(this,t,e)})}}unselect(e,t=!1){if(t)return void this.getInternalChart()?.hideGridFocus();if(null!=e){let t=this.getIndex(e);if(null==t)return;this._chart?.unselect(void 0,[t])}else this._chart?.unselect()}getDataPoint(e){let t=new Date(e).setHours(0,0,0,0);return this._chart?.data()[0]?.values.find(e=>("number"==typeof e.x?e.x:e.x.getTime())===t)}getIndex(e){return this.getDataPoint(e)?.index}getMarkerRegions(){if(null==this._markerRegions)if(null!=this.markers){let e=lk(this.markers,([e,t])=>lk(t,t=>t.current&&"branch"===t.type?[{axis:"x",start:e,end:e,class:"marker-head"},{axis:"x",start:e,end:e,class:"marker-head-arrow-left"},{axis:"x",start:e,end:e,class:"marker-head-arrow-right"}]:[{axis:"x",start:e,end:e,class:t.current&&"remote"===t.type?"marker-upstream":`marker-${t.type}`}]));this._markerRegions=e}else this._markerRegions=[];return this._markerRegions}getAllRegions(){if(null==this._regions){let e=this.getMarkerRegions();null!=this.visibleDays&&(e=lR([this.getVisibleAreaRegion(this.visibleDays)],e)),null!=this.searchResults&&(e=lR(e,this.getSearchResultsRegions(this.searchResults))),this._regions=[...e].sort((e,t)=>c4.indexOf(t.class??"")-c4.indexOf(e.class??""))}return this._regions}getSearchResultsRegions(e){return function*(e,t){for(let r of e)yield t(r)}(e.keys(),e=>({axis:"x",start:e,end:e,class:"marker-result"}))}getVisibleAreaRegion(e){return{axis:"x",start:e.top,end:e.bottom,class:"visible-area"}}loadChart(){this._loading??=this.loadChartCore().finally(()=>this._loading=void 0)}async loadChartCore(){let e,t,r;if(!this.data?.size){this.spinner.setAttribute("aria-hidden","false"),this._chart?.destroy(),this._chart=void 0;return}let n="lines"===this.dataType,o=[],i=[],c=lx(this.data.keys()),u=new Date,h=new Date(c),d=0;for(;u>=h;)e=c9(u),t=this.data.get(e),o.push(e),d=Math.max(d,r=n?(t?.activity?.additions??0)+(t?.activity?.deletions??0):t?.commits??0),i.push(r),u.setDate(u.getDate()-1);let p=this.getAllRegions(),m=[],g=0,b=0;for(let e of i)0!==e&&(m.push(e),g+=e,b+=e**2);m.sort((e,t)=>e-t);let v=m.length,w=g/v,_=Math.sqrt(b/v-w**2),S=-1;for(let e=v-1;e>=0;e--)if(3>=Math.abs((m[e]-w)/_)){S=e;break}let C=m[Math.floor(.25*v)],x=m[Math.floor(.75*v)],T=m[v-1],E=x+3*(x-C),A=m[S],D=Math.floor(Math.min(T,E>T-E?A:E+(A-E)/2)+.1*E);if(null==this._chart){let{bb:e,selection:t,spline:r,zoom:n}=await O.e(162).then(O.bind(O,644));this._chart=e.generate({bindto:this.chartContainer,data:{x:"date",axes:{activity:"y"},columns:[["date",...o],["activity",...i]],names:{activity:"Activity"},onclick:e=>{if("activity"!==e.id)return;let t=new Date(e.x),r=c9(t),n=this.searchResults?.get(r)?.sha??this.data?.get(r)?.sha;queueMicrotask(()=>{this.emit("gl-graph-minimap-selected",{date:t,sha:n})})},selection:{enabled:t(),grouped:!0,multiple:!1},colors:{activity:"var(--color-graph-minimap-line0)"},types:{activity:r()}},axis:{x:{inverted:!0,localtime:!0,type:"timeseries"},y:{min:0,max:D}},clipPath:!1,grid:{front:!1,focus:{show:!0}},legend:{show:!1},line:{point:!0,zerobased:!0},padding:{mode:"fit",bottom:-8,left:0,right:0,top:0},point:{show:!0,select:{r:5},focus:{only:!0,expand:{enabled:!0,r:3}},sensitivity:100},regions:p,resize:{auto:!0},spline:{interpolation:{type:"monotone-x"}},tooltip:{contents:(e,t,r,n)=>{let o,i,c,u,h=new Date(e[0].x),d=c9(h),p=this.data?.get(d),m=this.markers?.get(d),g=this.searchResults?.get(d);m?.length&&(o=function(e,t,r){let n=new Map,o=(void 0)??!1;for(let r of e){let e=t(r);if(null==e&&o)continue;let i=n.get(e);null==i?n.set(e,[r]):i.push(r)}return n}(m,e=>e.type));let b=o?.get("stash")?.length??0,v=o?.get("pull-request")?.length??0;return p?.commits?(i=tS("commit",p.commits,{format:e=>tv(void 0,void 0)(e)}),g?.count&&(u=tS("matching commit",g.count)),"lines"===this.dataType&&(c=`${tS("file",p?.files??0,{format:e=>tv(void 0,void 0)(e),zero:"No"})}, ${tS("line",(p?.activity?.additions??0)+(p?.activity?.deletions??0),{format:e=>tv(void 0,void 0)(e),zero:"No"})} changed`)):i="No commits",`<div class="bb-tooltip">
						<div class="header">
							<span class="header--title">${tg(h,"MMMM Do, YYYY")}</span>
							<span class="header--description">(${tw(tm(h))})</span>
						</div>
						<div class="changes">
							<span>${i}${c?`, ${c}`:""}</span>
						</div>
						${u?`<div class="results"><span class="result">${u}</span></div>`:""}
						${null!=o?`
						<div class="refs">${b?`<span class="stash">${tS("stash",b,{plural:"stashes"})}</span>`:""}${o?.get("branch")?.sort((e,t)=>(e.current?-1:1)-(t.current?-1:1)).map(e=>`<span class="branch${e.current?" current":""}">${e.name}</span>`).join("")??""}</div>
						<div class="refs">${v?`<span class="pull-request">${tS("pull request",v,{plural:"pull requests"})}</span>`:""}${o?.get("remote")?.sort((e,t)=>(e.current?-1:1)-(t.current?-1:1))?.map(e=>`<span class="remote${e.current?" current":""}">${e.name}</span>`).join("")??""}${o?.get("tag")?.map(e=>`<span class="tag">${e.name}</span>`).join("")??""}</div>`:""}
					</div>`},grouped:!0,position:(e,t,r,n,o)=>{let{x:i}=o,c=n.getBoundingClientRect();return i+t>c.right&&(i=c.right-t),{top:0,left:i}}},transition:{duration:0},zoom:{enabled:n(),rescale:!1,type:"wheel",onzoom:e9(()=>this.onActiveDayChanged(),250)},onafterinit:function(){let e=this.$.main.selectAll(".bb-axis-x").node();e?.remove();let t=this.$.main.selectAll(".bb-axis-y").node();t?.remove();let r=this.$.main.selectAll(".bb-grid").node();try{r?.removeAttribute("clip-path")}catch{}let n=this.$.main.selectAll(".bb-regions").node(),o=this.$.main.selectAll(".bb-chart").node();null!=n&&null!=o&&o.insertAdjacentElement("afterend",n)}})}else this._chart.load({columns:[["date",...o],["activity",...i]]}),this._chart.axis.max({y:D}),this._chart.regions(p);this.spinner.setAttribute("aria-hidden","true"),this.onActiveDayChanged()}render(){return eE`
			<div id="spinner"><code-icon icon="loading" modifier="spin"></code-icon></div>
			<div id="chart"></div>
			<gl-tooltip>
				<div class="legend">
					<code-icon icon="${"lines"===this.dataType?"request-changes":"git-commit"}"></code-icon>
				</div>
				<div slot="content">
					${"lines"===this.dataType?"Showing lines changed per day":"Showing commits per day"}
				</div>
			</gl-tooltip>
		`}};function c9(e){return new Date(e).setHours(0,0,0,0)}c8.styles=B`
		:host {
			display: flex;
			position: relative;
			width: 100%;
			min-height: 24px;
			height: 40px;
			background: var(--color-background);
		}

		#chart {
			height: 100%;
			width: calc(100% - 1rem);
			overflow: hidden;
			position: initial !important;
		}

		#spinner {
			position: absolute;
			inset: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			z-index: 1;
		}

		#spinner[aria-hidden='true'] {
			display: none;
		}

		.legend {
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			display: flex;
			align-items: center;
			z-index: 1;
			opacity: 0.7;
			cursor: help;
		}

		.bb svg {
			font: 10px var(--font-family);
			-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		}

		.bb-chart {
			width: 100%;
			height: 100%;
		}

		.bb-event-rect {
			height: calc(100% + 2px);
			transform: translateY(-5px);
		}

		/*-- Grid --*/
		.bb-grid {
			pointer-events: none;
		}

		.bb-xgrid-focus line {
			stroke: var(--color-graph-minimap-focusLine);
		}

		/*-- Line --*/
		.bb path,
		.bb line {
			fill: none;
		}

		/*-- Point --*/
		.bb-circle._expanded_ {
			fill: var(--color-background);
			opacity: 1 !important;
			fill-opacity: 1 !important;
			stroke-opacity: 1 !important;
			stroke-width: 1px;
		}

		.bb-selected-circle {
			fill: var(--color-background);
			opacity: 1 !important;
			fill-opacity: 1 !important;
			stroke-opacity: 1 !important;
			stroke-width: 2px;
		}

		/*-- Bar --*/
		.bb-bar {
			stroke-width: 0;
		}
		.bb-bar._expanded_ {
			fill-opacity: 0.75;
		}

		/*-- Regions --*/

		.bb-regions {
			pointer-events: none;
		}

		.bb-region > rect:not([x]) {
			display: none;
		}

		.bb-region.visible-area {
			fill: var(--color-graph-minimap-visibleAreaBackground);
			/* transform: translateY(-4px); */
		}
		.bb-region.visible-area > rect {
			height: 100%;
		}

		.bb-region.marker-result {
			fill: var(--color-graph-minimap-marker-highlights);
			transform: translateX(-1px);
			z-index: 10;
		}
		.bb-region.marker-result > rect {
			width: 2px;
			height: 100%;
		}

		.bb-region.marker-head {
			fill: var(--color-graph-minimap-marker-head);
			stroke: var(--color-graph-minimap-marker-head);
			transform: translateX(-1px);
		}
		.bb-region.marker-head > rect {
			width: 1px;
			height: 100%;
		}

		.bb-region.marker-head-arrow-left {
			fill: var(--color-graph-minimap-marker-head);
			stroke: var(--color-graph-minimap-marker-head);
			transform: translate(-5px, -1px) skewX(45deg);
		}
		.bb-region.marker-head-arrow-left > rect {
			width: 3px;
			height: 3px;
		}

		.bb-region.marker-head-arrow-right {
			fill: var(--color-graph-minimap-marker-head);
			stroke: var(--color-graph-minimap-marker-head);
			transform: translate(1px, -1px) skewX(-45deg);
		}
		.bb-region.marker-head-arrow-right > rect {
			width: 3px;
			height: 3px;
		}

		.bb-region.marker-upstream {
			fill: var(--color-graph-minimap-marker-upstream);
			stroke: var(--color-graph-minimap-marker-upstream);
			transform: translateX(-1px);
		}
		.bb-region.marker-upstream > rect {
			width: 1px;
			height: 100%;
		}

		.bb-region.marker-pull-request {
			fill: var(--color-graph-minimap-marker-pull-requests);
			stroke: var(--color-graph-minimap-marker-pull-requests);
			transform: translate(-2px, 29px);
		}
		.bb-region.marker-pull-request > rect {
			width: 3px;
			height: 3px;
		}

		.bb-region.marker-branch {
			fill: var(--color-graph-minimap-marker-local-branches);
			stroke: var(--color-graph-minimap-marker-local-branches);
			transform: translate(-2px, 35px);
		}
		.bb-region.marker-branch > rect {
			width: 3px;
			height: 3px;
		}

		.bb-region.marker-remote {
			fill: var(--color-graph-minimap-marker-remote-branches);
			stroke: var(--color-graph-minimap-marker-remote-branches);
			transform: translate(-2px, 29px);
		}
		.bb-region.marker-remote > rect {
			width: 3px;
			height: 3px;
		}

		.bb-region.marker-stash {
			fill: var(--color-graph-minimap-marker-stashes);
			stroke: var(--color-graph-minimap-marker-stashes);
			transform: translate(-2px, 35px);
		}
		.bb-region.marker-stash > rect {
			width: 3px;
			height: 3px;
		}

		.bb-region.marker-tag {
			fill: var(--color-graph-minimap-marker-tags);
			stroke: var(--color-graph-minimap-marker-tags);
			transform: translate(-2px, 29px);
		}
		.bb-region.marker-tag > rect {
			width: 3px;
			height: 3px;
		}

		/*-- Zoom region --*/
		/*
	:host-context(.vscode-dark) .bb-zoom-brush {
		fill: white;
		fill-opacity: 0.2;
	}
	:host-context(.vscode-light) .bb-zoom-brush {
		fill: black;
		fill-opacity: 0.1;
	}
	*/

		/*-- Brush --*/
		/*
	.bb-brush .extent {
		fill-opacity: 0.1;
	}
	*/

		/*-- Button --*/
		/*
	.bb-button {
		position: absolute;
		top: 2px;
		right: 0;

		color: var(--color-button-foreground);

		font-size: var(--font-size);
		font-family: var(--font-family);
	}
	.bb-button .bb-zoom-reset {
		display: inline-block;
		padding: 0.1rem 0.3rem;
		cursor: pointer;
		font-family: 'codicon';
		font-display: block;

		background-color: var(--color-button-background);

		border: 1px solid var(--color-button-background);
		border-radius: 3px;
	}
	*/

		/*-- Tooltip --*/
		.bb-tooltip-container {
			top: unset !important;
			z-index: 10;
			user-select: none;
			min-width: 300px;
		}

		.bb-tooltip {
			display: flex;
			flex-direction: column;
			padding: 0.5rem 1rem;
			background-color: var(--color-hover-background);
			color: var(--color-hover-foreground);
			border: 1px solid var(--color-hover-border);
			box-shadow: 0 2px 8px var(--vscode-widget-shadow);
			font-size: var(--font-size);
			opacity: 1;
			white-space: nowrap;
		}

		.bb-tooltip .header {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			gap: 1rem;
		}

		.bb-tooltip .header--title {
			font-weight: 600;
		}

		.bb-tooltip .header--description {
			font-weight: normal;
			font-style: italic;
		}

		.bb-tooltip .changes {
			margin: 0.5rem 0;
		}

		.bb-tooltip .results {
			display: flex;
			font-size: 12px;
			gap: 0.5rem;
			flex-direction: row;
			flex-wrap: wrap;
			margin: 0.5rem 0;
			max-width: fit-content;
		}

		.bb-tooltip .results .result {
			border-radius: 3px;
			padding: 0 4px;
			background-color: var(--color-graph-minimap-tip-highlightBackground);
			border: 1px solid var(--color-graph-minimap-tip-highlightBorder);
			color: var(--color-graph-minimap-tip-highlightForeground);
		}

		.bb-tooltip .refs {
			display: flex;
			font-size: 12px;
			gap: 0.5rem;
			flex-direction: row;
			flex-wrap: wrap;
			margin: 0.5rem 0;
			max-width: fit-content;
		}
		.bb-tooltip .refs:empty {
			margin: 0;
		}

		.bb-tooltip .refs .branch {
			border-radius: 3px;
			padding: 0 4px;
			background-color: var(--color-graph-minimap-tip-branchBackground);
			border: 1px solid var(--color-graph-minimap-tip-branchBorder);
			color: var(--color-graph-minimap-tip-branchForeground);
		}
		.bb-tooltip .refs .branch.current {
			background-color: var(--color-graph-minimap-tip-headBackground);
			border: 1px solid var(--color-graph-minimap-tip-headBorder);
			color: var(--color-graph-minimap-tip-headForeground);
		}
		.bb-tooltip .refs .remote {
			border-radius: 3px;
			padding: 0 4px;
			background-color: var(--color-graph-minimap-tip-remoteBackground);
			border: 1px solid var(--color-graph-minimap-tip-remoteBorder);
			color: var(--color-graph-minimap-tip-remoteForeground);
		}
		.bb-tooltip .refs .remote.current {
			background-color: var(--color-graph-minimap-tip-upstreamBackground);
			border: 1px solid var(--color-graph-minimap-tip-upstreamBorder);
			color: var(--color-graph-minimap-tip-upstreamForeground);
		}
		.bb-tooltip .refs .stash {
			border-radius: 3px;
			padding: 0 4px;
			background-color: var(--color-graph-minimap-tip-stashBackground);
			border: 1px solid var(--color-graph-minimap-tip-stashBorder);
			color: var(--color-graph-minimap-tip-stashForeground);
		}
		.bb-tooltip .refs .pull-request {
			border-radius: 3px;
			padding: 0 4px;
			background-color: var(--color-graph-minimap-pullRequestBackground);
			border: 1px solid var(--color-graph-minimap-pullRequestBorder);
			color: var(--color-graph-minimap-pullRequestForeground);
		}
		.bb-tooltip .refs .tag {
			border-radius: 3px;
			padding: 0 4px;
			background-color: var(--color-graph-minimap-tip-tagBackground);
			border: 1px solid var(--color-graph-minimap-tip-tagBorder);
			color: var(--color-graph-minimap-tip-tagForeground);
		}

		.bb-event-rects,
		.bb-event-rect {
			cursor: pointer !important;
		}
		.bb-event-rects:active,
		.bb-event-rect:active {
			cursor: ew-resize !important;
		}
	`,c6([eq("#chart")],c8.prototype,"chartContainer",2),c6([eq("#spinner")],c8.prototype,"spinner",2),c6([ej({type:Number})],c8.prototype,"activeDay",2),c6([tl("activeDay")],c8.prototype,"onActiveDayChanged",1),c6([ej({type:Object})],c8.prototype,"data",2),c6([ej({type:String})],c8.prototype,"dataType",2),c6([tl(["data","dataType"])],c8.prototype,"onDataChanged",1),c6([ej({type:Object})],c8.prototype,"markers",2),c6([tl("markers")],c8.prototype,"onMarkersChanged",1),c6([ej({type:Object})],c8.prototype,"searchResults",2),c6([tl("searchResults")],c8.prototype,"onSearchResultsChanged",1),c6([ej({type:Object})],c8.prototype,"visibleDays",2),c6([tl("visibleDays")],c8.prototype,"onVisibleDaysChanged",1),c6([tW({singleLine:!0})],c8.prototype,"handleDataChanged",1),c6([tW({singleLine:!0})],c8.prototype,"loadChartCore",1),c8=c6([eF("gl-graph-minimap")],c8);var c7=Object.defineProperty,ue=Object.getOwnPropertyDescriptor,ut=(e,t,r,n)=>{for(var o,i=n>1?void 0:n?ue(t,r):t,c=e.length-1;c>=0;c--)(o=e[c])&&(i=(n?o(t,r,i):o(i))||i);return n&&i&&c7(t,r,i),i};let ur=class extends GlElement{constructor(){super(...arguments),this.disabled=!1,this.dataType="commits",this.markerTypes=[],this.rows=[],this.markersByDay=new Map,this.searchResultsByDay=new Map,this.statsByDay=new Map,this.pendingDataChange=!1,this.pendingSearchResultsChange=!1}onDisabledChanged(){!this.disabled&&(this.pendingDataChange&&this.processRows(),this.pendingSearchResultsChange&&this.processSearchResults())}handleDataChanged(e){(1!==e.length||"rowsStats"!==e[0]||"lines"===this.dataType)&&(this.pendingDataChange=!0,this.disabled||this.processRows())}handleSearchResultsChanged(){this.pendingSearchResultsChange=!0,this.disabled||this.processSearchResults()}render(){return this.disabled?eA:eE`<gl-graph-minimap
			id="minimap"
			.activeDay=${this.activeDay}
			.data=${this.statsByDay}
			.dataType=${this.dataType}
			.markers=${this.markersByDay}
			.searchResults=${this.searchResultsByDay}
			.visibleDays=${this.visibleDays}
		></gl-graph-minimap>`}select(e,t=!1){this.disabled||this.minimap?.select(e,t)}unselect(e,t=!1){this.disabled||this.minimap?.unselect(e,t)}processRows(){let e,t,r,n,o,i,c,u,h,d,p;this.pendingDataChange=!1;let m=new Map,g=new Map,b="lines"===this.dataType;if(!this.rows?.length||b&&null==this.rowsStats){this.statsByDay=m,this.markersByDay=g;return}let v={head:void 0,branch:void 0,remote:void 0,tag:void 0},w=this.rows??[];for(let _=w.length-1;_>=0;_--)h=w[_],o=[],(e=un(h.date))!==t&&(t=e,v={head:void 0,branch:void 0,remote:void 0,tag:void 0}),h.heads?.length&&(this.markerTypes.includes("head")||this.markerTypes.includes("localBranches")||this.markerTypes.includes("pullRequests"))&&(v.branch=h.sha,n=[],h.heads.forEach(e=>{if(e.isCurrentHead&&(v.head=h.sha),(this.markerTypes.includes("localBranches")||this.markerTypes.includes("head")&&e.isCurrentHead)&&n.push({type:"branch",name:e.name,current:e.isCurrentHead&&this.markerTypes.includes("head")}),this.markerTypes.includes("pullRequests")&&null!=e.id&&this.refMetadata?.[e.id]?.pullRequest?.length)for(let t of this.refMetadata?.[e.id]?.pullRequest??[])o.push({type:"pull-request",name:t.title})}),null==(r=g.get(e))?g.set(e,n):r.push(...n)),h.remotes?.length&&(this.markerTypes.includes("upstream")||this.markerTypes.includes("remoteBranches")||this.markerTypes.includes("localBranches")||this.markerTypes.includes("pullRequests"))&&(v.remote=h.sha,i=[],h.remotes.forEach(e=>{let t=!1,r=this.downstreams?.[`${e.owner}/${e.name}`]?.length;if(e.current&&(v.remote=h.sha,t=!0),(this.markerTypes.includes("remoteBranches")||this.markerTypes.includes("upstream")&&t||this.markerTypes.includes("localBranches")&&r)&&i.push({type:"remote",name:`${e.owner}/${e.name}`,current:t&&this.markerTypes.includes("upstream")}),this.markerTypes.includes("pullRequests")&&null!=e.id&&this.refMetadata?.[e.id]?.pullRequest?.length)for(let t of this.refMetadata?.[e.id]?.pullRequest??[])o.push({type:"pull-request",name:t.title})}),null==(r=g.get(e))?g.set(e,i):r.push(...i)),"stash-node"===h.type&&this.markerTypes.includes("stashes")&&(c={type:"stash",name:h.message},null==(r=g.get(e))?g.set(e,[c]):r.push(c)),h.tags?.length&&this.markerTypes.includes("tags")&&(v.tag=h.sha,u=h.tags.map(e=>({type:"tag",name:e.name})),null==(r=g.get(e))?g.set(e,u):r.push(...u)),null==(r=g.get(e))?g.set(e,o):r.push(...o),null==(d=m.get(e))?b?null!=(p=this.rowsStats?.[h.sha])&&(d={activity:{additions:p.additions,deletions:p.deletions},commits:1,files:p.files,sha:h.sha},m.set(e,d)):(d={commits:1,sha:h.sha},m.set(e,d)):(d.commits++,d.sha=v.head??v.branch??v.remote??v.tag??d.sha,b&&null!=(p=this.rowsStats?.[h.sha])&&(null==d.activity?d.activity={additions:p.additions,deletions:p.deletions}:(d.activity.additions+=p.additions,d.activity.deletions+=p.deletions),d.files=(d.files??0)+p.files));this.statsByDay=m,this.markersByDay=g}processSearchResults(){this.pendingSearchResultsChange=!1;let e=new Map;if(null!=this.searchResults&&"error"in this.searchResults){this.searchResultsByDay=e;return}if(this.searchResults?.ids!=null){let t,r,n,o;for([r,n]of Object.entries(this.searchResults.ids))t=un(n.date),null==(o=e.get(t))?e.set(t,{type:"search-result",sha:r,count:1}):o.count++}this.searchResultsByDay=e}};function un(e){return new Date(e).setHours(0,0,0,0)}ut([ej({type:Number})],ur.prototype,"activeDay",2),ut([ej({type:Boolean})],ur.prototype,"disabled",2),ut([tl("disabled")],ur.prototype,"onDisabledChanged",1),ut([ej({type:String})],ur.prototype,"dataType",2),ut([ej({type:Object})],ur.prototype,"downstreams",2),ut([ej({type:Array})],ur.prototype,"markerTypes",2),ut([ej({type:Object})],ur.prototype,"refMetadata",2),ut([ej({type:Array})],ur.prototype,"rows",2),ut([ej({type:Object})],ur.prototype,"rowsStats",2),ut([ej({type:Object})],ur.prototype,"searchResults",2),ut([ej({type:Object})],ur.prototype,"visibleDays",2),ut([eZ()],ur.prototype,"markersByDay",2),ut([eZ()],ur.prototype,"searchResultsByDay",2),ut([eZ()],ur.prototype,"statsByDay",2),ut([tl(["dataType","downstreams","markerTypes","refMetadata","rows","rowsStats"])],ur.prototype,"handleDataChanged",1),ut([tl(["markerTypes","searchResults"])],ur.prototype,"handleSearchResultsChanged",1),ut([eq("#minimap")],ur.prototype,"minimap",2),ur=ut([eF("gl-graph-minimap-container")],ur);let uo=Symbol();let task_h=class task_h{get taskComplete(){return this.t||(1===this.i?this.t=new Promise((e,t)=>{this.o=e,this.h=t}):3===this.i?this.t=Promise.reject(this.l):this.t=Promise.resolve(this.u)),this.t}constructor(e,t,r){this.p=0,this.i=0,(this._=e).addController(this);let n="object"==typeof t?t:{task:t,args:r};this.v=n.task,this.j=n.args,this.m=n.argsEqual??ui,this.k=n.onComplete,this.A=n.onError,this.autoRun=n.autoRun??!0,"initialValue"in n&&(this.u=n.initialValue,this.i=2,this.O=this.T?.())}hostUpdate(){!0===this.autoRun&&this.S()}hostUpdated(){"afterUpdate"===this.autoRun&&this.S()}T(){if(void 0===this.j)return;let e=this.j();if(!Array.isArray(e))throw Error("The args function must return an array");return e}async S(){let e=this.T(),t=this.O;this.O=e,e===t||void 0===e||void 0!==t&&this.m(t,e)||await this.run(e)}async run(e){let t,r;e??=this.T(),this.O=e,1===this.i?this.q?.abort():(this.t=void 0,this.o=void 0,this.h=void 0),this.i=1,"afterUpdate"===this.autoRun?queueMicrotask(()=>this._.requestUpdate()):this._.requestUpdate();let n=++this.p;this.q=new AbortController;let o=!1;try{t=await this.v(e,{signal:this.q.signal})}catch(e){o=!0,r=e}if(this.p===n){if(t===uo)this.i=0;else{if(!1===o){try{this.k?.(t)}catch{}this.i=2,this.o?.(t)}else{try{this.A?.(r)}catch{}this.i=3,this.h?.(r)}this.u=t,this.l=r}this._.requestUpdate()}}abort(e){1===this.i&&this.q?.abort(e)}get value(){return this.u}get error(){return this.l}get status(){return this.i}render(e){switch(this.i){case 0:return e.initial?.();case 1:return e.pending?.();case 2:return e.complete?.(this.value);case 3:return e.error?.(this.error);default:throw Error("Unexpected status: "+this.i)}}};let ui=(e,t)=>e===t||e.length===t.length&&e.every((e,r)=>!ei(e,t[r]));var us=Object.defineProperty,ua=Object.getOwnPropertyDescriptor,ul=(e,t,r,n)=>{for(var o,i=n>1?void 0:n?ua(t,r):t,c=e.length-1;c>=0;c--)(o=e[c])&&(i=(n?o(t,r,i):o(i))||i);return n&&i&&us(t,r,i),i};let uc=[{type:"branches",icon:"gl-branches-view",command:"gitlens.showBranchesView",tooltip:"Branches"},{type:"remotes",icon:"gl-remotes-view",command:"gitlens.showRemotesView",tooltip:"Remotes"},{type:"stashes",icon:"gl-stashes-view",command:"gitlens.showStashesView",tooltip:"Stashes"},{type:"tags",icon:"gl-tags-view",command:"gitlens.showTagsView",tooltip:"Tags"},{type:"worktrees",icon:"gl-worktrees-view",command:"gitlens.showWorktreesView",tooltip:"Worktrees"}],uu=class extends lit_element_i{constructor(){super(...arguments),this._countsTask=new task_h(this,{args:()=>[this.fetchCounts()],task:([e])=>e,autoRun:!1})}get include(){let e=this._state.repositories?.find(e=>e.path===this._state.selectedRepository);return e?.isVirtual?["branches","remotes","tags"]:["branches","remotes","tags","stashes","worktrees"]}connectedCallback(){super.connectedCallback(),this._disposable=this._ipc.onReceiveMessage(e=>{switch(!0){case rf.is(e):this._counts=void 0,this.requestUpdate();break;case ru.response.is(e):this._counts=Promise.resolve(e.params),this.requestUpdate()}})}disconnectedCallback(){super.disconnectedCallback(),this._disposable?.dispose()}async fetchCounts(){if(null==this._counts){let t=this._ipc;if(null!=t){async function e(){return await t.sendRequest(ru,void 0)}this._counts=e()}else this._counts=Promise.resolve(void 0)}return this._counts}render(){return null==this._counts&&this._countsTask.run(),eE`<section class="sidebar">
			${sp(uc,e=>e,e=>this.renderIcon(e))}
		</section>`}renderIcon(e){if(null==this.include||this.include.includes(e.type))return eE`<gl-tooltip placement="right" content="${e.tooltip}">
			<a class="item" href="command:${e.command}" @click=${()=>this.sendTelemetry(e.command)}>
				<code-icon icon="${e.icon}"></code-icon>
				${this._countsTask.render({pending:()=>eE`<span class="count"
							><code-icon icon="loading" modifier="spin" size="9"></code-icon
						></span>`,complete:t=>{var r;return null==(r=t?.[e.type])?eA:eE`<span class="count">${r>999?"1K+":String(r)}</span>`},error:()=>eE`<span class="count error"><code-icon icon="warning" size="9"></code-icon></span>`})}
			</a>
		</gl-tooltip>`}sendTelemetry(e){nL(this,{name:"graph/action/sidebar",data:{action:e}})}};uu.styles=B`
		.sidebar {
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 1.4rem;
			background-color: var(--color-graph-background);
			color: var(--titlebar-fg);
			width: 2.6rem;
			font-size: 9px;
			font-weight: 600;
			height: 100%;
			padding: 3rem 0;
			z-index: 1040;
		}

		.item {
			color: inherit;
			text-decoration: none;
			display: flex;
			flex-direction: column;
			align-items: center;
			cursor: pointer;
		}

		.item:hover {
			color: var(--color-foreground);
			text-decoration: none;
		}

		.count {
			color: var(--color-foreground--50);
			/* color: var(--color-highlight); */
			margin-top: 0.4rem;
		}

		.count.error {
			color: var(--vscode-errorForeground);
			opacity: 0.6;
		}
	`,ul([D({context:"ipc"})],uu.prototype,"_ipc",2),ul([D({context:"state",subscribe:!0})],uu.prototype,"_state",2),uu=ul([eF("gl-graph-sidebar")],uu);var uh=Object.defineProperty,ud=Object.getOwnPropertyDescriptor,up=(e,t,r,n)=>{for(var o,i=n>1?void 0:n?ud(t,r):t,c=e.length-1;c>=0;c--)(o=e[c])&&(i=(n?o(t,r,i):o(i))||i);return n&&i&&uh(t,r,i),i};let uf=class extends r8(lit_element_i){constructor(){super(...arguments),this._hoverTrackingCounter=tM(),this._selectionTrackingCounter=tM()}createRenderRoot(){return this}onWebviewVisibilityChanged(e){e&&(this._hoverTrackingCounter.reset(),this._selectionTrackingCounter.reset())}resetHover(){this.graphHover.reset()}render(){return eE`
			<div class="graph">
				<gl-graph-header
					class="graph__header"
					@gl-select-commits=${this.handleHeaderSearchNavigation}
				></gl-graph-header>
				<div class="graph__workspace">
					${nP(!this.state.allowed,()=>eE`<gl-graph-gate class="graph__gate"></gl-graph-gate>`)}
					<main id="main" class="graph__panes">
						<div class="graph__graph-pane">
							${nP(this.state.config?.minimap!==!1,()=>eE`
									<gl-graph-minimap-container
										.activeDay=${this.graphApp.activeDay}
										.disabled=${!this.state.config?.minimap}
										.rows=${this.state.rows??[]}
										.rowsStats=${this.state.rowsStats}
										.dataType=${this.state.config?.minimapDataType??"commits"}
										.markerTypes=${this.state.config?.minimapMarkerTypes??[]}
										.refMetadata=${this.state.refsMetadata}
										.searchResults=${this.graphApp.searchResults}
										.visibleDays=${this.graphApp.visibleDays}
										@gl-graph-minimap-selected=${this.handleMinimapDaySelected}
									></gl-graph-minimap-container>
								`)}
							${nP(this.state.config?.sidebar,()=>eE`<gl-graph-sidebar></gl-graph-sidebar>`)}
							<gl-graph-hover id="commit-hover" distance=${0} skidding=${15}></gl-graph-hover>
							<gl-graph-wrapper
								@gl-graph-change-selection=${this.handleGraphSelectionChanged}
								@gl-graph-change-visible-days=${this.handleGraphVisibleDaysChanged}
								@gl-graph-mouse-leave=${this.handleGraphMouseLeave}
								@gl-graph-row-context-menu=${this.handleGraphRowContextMenu}
								@gl-graph-row-hover=${this.handleGraphRowHover}
								@gl-graph-row-unhover=${this.handleGraphRowUnhover}
							></gl-graph-wrapper>
						</div>
						<!-- future: commit details -->
					</main>
				</div>
			</div>
		`}handleHeaderSearchNavigation(e){this.graph.selectCommits([e.detail],!1,!0)}handleMinimapDaySelected(e){if(!this.state.rows)return;let{sha:t}=e.detail;if(null==t){let r=e.detail.date?.getTime();if(null==r)return;t=this.state.rows.reduce((e,t)=>Math.abs(t.date-r)<Math.abs(e.date-r)?t:e).sha}if(this.graph.selectCommits([t],!1,!0),null!=e.target){let{target:t}=e;queueMicrotask(()=>nL(t,{name:"graph/minimap/day/selected",data:{}}))}}handleGraphSelectionChanged(e){this.graphHover.hide();let t=this._selectionTrackingCounter.next();(1===t||t%100==0)&&queueMicrotask(()=>this._telemetry.sendEvent({name:"graph/row/selected",data:{rows:e.detail.selection.length,count:t}}))}handleGraphVisibleDaysChanged({detail:e}){this.graphApp.visibleDays=e}handleGraphRowContextMenu(e){this.graphHover.hide()}handleGraphRowHover({detail:{graphZoneType:e,graphRow:t,clientX:r,currentTarget:n}}){if(e===nz.refZone)return;let o=this.graphHover;if(null==o)return;let i=n.getBoundingClientRect(),c=i.top,u=i.height;o.requestMarkdown??=this.getRowHoverPromise.bind(this),o.onRowHovered(t,{getBoundingClientRect:function(){return{width:60,height:u,x:r,y:c,top:c,left:r,right:r+60,bottom:c+u}}}),this.minimapEl?.select(t.date,!0)}handleGraphRowUnhover({detail:{graphZoneType:e,graphRow:t,relatedTarget:r}}){e!==nz.refZone&&this.graphHover.onRowUnhovered(t,r)}async getRowHoverPromise(e){try{let t=await this._ipc.sendRequest(rh,{type:e.type,id:e.sha}),r=this._hoverTrackingCounter.next();return(1===r||r%100==0)&&queueMicrotask(()=>this._telemetry.sendEvent({name:"graph/row/hovered",data:{count:r}})),t}catch(t){return{id:e.sha,markdown:{status:"rejected",reason:t}}}}handleGraphMouseLeave(){this.minimapEl?.unselect(void 0,!0)}};up([D({context:"state",subscribe:!0})],uf.prototype,"state",2),up([D({context:"graphState",subscribe:!0})],uf.prototype,"graphApp",2),up([D({context:"ipc"})],uf.prototype,"_ipc",2),up([D({context:"telemetry"})],uf.prototype,"_telemetry",2),up([eq("gl-graph-wrapper")],uf.prototype,"graph",2),up([eq("gl-graph-hover#commit-hover")],uf.prototype,"graphHover",2),up([eq("gl-graph-minimap-container")],uf.prototype,"minimapEl",2),uf=up([eF("gl-graph-app")],uf);var um=Object.defineProperty,ug=Object.getOwnPropertyDescriptor,ub=(e,t,r,n)=>{for(var o,i=n>1?void 0:n?ug(t,r):t,c=e.length-1;c>=0;c--)(o=e[c])&&(i=(n?o(t,r,i):o(i))||i);return n&&i&&um(t,r,i),i};let uv=new Map([["--vscode-gitlens-graphLane1Color","#15a0bf"],["--vscode-gitlens-graphLane2Color","#0669f7"],["--vscode-gitlens-graphLane3Color","#8e00c2"],["--vscode-gitlens-graphLane4Color","#c517b6"],["--vscode-gitlens-graphLane5Color","#d90171"],["--vscode-gitlens-graphLane6Color","#cd0101"],["--vscode-gitlens-graphLane7Color","#f25d2e"],["--vscode-gitlens-graphLane8Color","#f2ca33"],["--vscode-gitlens-graphLane9Color","#7bd938"],["--vscode-gitlens-graphLane10Color","#2ece9d"]]),uy=class extends GlAppHost{constructor(){super(...arguments),this._graphState=new GraphAppState,this.searching=""}createRenderRoot(){return this}get hasFilters(){return!!this.state.config?.onlyFollowFirstParent||null!=this.state.excludeTypes&&Object.values(this.state.excludeTypes).includes(!0)}render(){return eE`<gl-graph-app></gl-graph-app>`}createStateProvider(e,t){return new GraphStateProvider(this,e,t,this._logger,{onStateUpdate:e=>{"loading"in e&&(this._graphState.loading=e.loading??!1),"rows"in e&&this.appElement.resetHover(),"selectedRows"in e&&(this._graphState.selectedRows=e.selectedRows),"searchResults"in e&&(this._graphState.searchResultsResponse=e.searchResults)}})}onThemeUpdated(e){let t=document.documentElement.style,r=Color.from(e.colors.background),n=Color.from(e.colors.foreground),o=r.getRelativeLuminance(),i=n.getRelativeLuminance(),c=e=>{let t,r;return i>o?(r=i,t=o):(t=i,r=o),e/1*(r-t)+t},u=Color.fromCssVariable("--vscode-scrollbarSlider-background",e.computedStyle);if(t.setProperty("--color-graph-minimap-visibleAreaBackground",u.luminance(c(e.isLightTheme?.6:.1)).toString()),!e.isLightTheme){u=Color.fromCssVariable("--color-graph-scroll-marker-local-branches",e.computedStyle),t.setProperty("--color-graph-minimap-tip-branchBackground",u.luminance(c(.55)).toString()),u=Color.fromCssVariable("--color-graph-scroll-marker-local-branches",e.computedStyle),t.setProperty("--color-graph-minimap-tip-branchBorder",u.luminance(c(.55)).toString());let r=(u=Color.fromCssVariable("--vscode-editor-foreground",e.computedStyle)).isLighter()?u.luminance(.01).toString():u.luminance(.99).toString();t.setProperty("--color-graph-minimap-tip-headForeground",r),t.setProperty("--color-graph-minimap-tip-upstreamForeground",r),t.setProperty("--color-graph-minimap-tip-highlightForeground",r),t.setProperty("--color-graph-minimap-tip-branchForeground",r)}let h=c(e.isLightTheme?.72:.064),d=c(e.isLightTheme?.64:.076),p=c(e.isLightTheme?.92:.02);u=Color.fromCssVariable("--branch-status-ahead-foreground",e.computedStyle),t.setProperty("--branch-status-ahead-background",u.luminance(h).toString()),t.setProperty("--branch-status-ahead-hover-background",u.luminance(d).toString()),t.setProperty("--branch-status-ahead-pill-background",u.luminance(p).toString()),u=Color.fromCssVariable("--branch-status-behind-foreground",e.computedStyle),t.setProperty("--branch-status-behind-background",u.luminance(h).toString()),t.setProperty("--branch-status-behind-hover-background",u.luminance(d).toString()),t.setProperty("--branch-status-behind-pill-background",u.luminance(p).toString()),u=Color.fromCssVariable("--branch-status-both-foreground",e.computedStyle),t.setProperty("--branch-status-both-background",u.luminance(h).toString()),t.setProperty("--branch-status-both-hover-background",u.luminance(d).toString()),t.setProperty("--branch-status-both-pill-background",u.luminance(p).toString());let m=this.getGraphTheming();Object.entries(m.cssVariables).forEach(([e,r])=>{t.setProperty(e,r.toString())}),this.applyTheme(m)}onWebviewVisibilityChanged(e){this.appElement?.onWebviewVisibilityChanged(e)}applyTheme(e){this._graphState.theming=e}getGraphTheming(){let e,t=window.getComputedStyle(document.documentElement),r=e2("--color-background",t),n={},o=0;for(let[i,c]of uv){for(let u of(e=e2(i,t)||c,n[`--column-${o}-color`]=e,n[`--graph-color-${o}`]=e,[15,25,45,50]))n[`--graph-color-${o}-bg${u}`]=function(e,t,r){let n=Color.from(e),o=Color.from(t);return null==n||null==o?e:n.mix(o,r/100).toString()}(r,e,u);for(let t of[10,50])n[`--graph-color-${o}-f${t}`]=function(e,t){let r=Color.from(e);return null==r?e:r.transparent(t/100).toString()}(e,t);o++}let i=document.body.classList.contains("vscode-high-contrast")||document.body.classList.contains("vscode-high-contrast-light");return{cssVariables:{"--app__bg0":r,"--panel__bg0":e2("--color-graph-background",t),"--panel__bg1":e2("--color-graph-background2",t),"--section-border":e2("--color-graph-background2",t),"--selected-row":e2("--color-graph-selected-row",t),"--selected-row-border":i?`1px solid ${e2("--color-graph-contrast-border",t)}`:"none","--hover-row":e2("--color-graph-hover-row",t),"--hover-row-border":i?`1px dashed ${e2("--color-graph-contrast-border",t)}`:"none","--scrollable-scrollbar-thickness":e2("--graph-column-scrollbar-thickness",t),"--scroll-thumb-bg":e2("--vscode-scrollbarSlider-background",t),"--scroll-marker-head-color":e2("--color-graph-scroll-marker-head",t),"--scroll-marker-upstream-color":e2("--color-graph-scroll-marker-upstream",t),"--scroll-marker-highlights-color":e2("--color-graph-scroll-marker-highlights",t),"--scroll-marker-local-branches-color":e2("--color-graph-scroll-marker-local-branches",t),"--scroll-marker-remote-branches-color":e2("--color-graph-scroll-marker-remote-branches",t),"--scroll-marker-stashes-color":e2("--color-graph-scroll-marker-stashes",t),"--scroll-marker-tags-color":e2("--color-graph-scroll-marker-tags",t),"--scroll-marker-selection-color":e2("--color-graph-scroll-marker-selection",t),"--scroll-marker-pull-requests-color":e2("--color-graph-scroll-marker-pull-requests",t),"--stats-added-color":e2("--color-graph-stats-added",t),"--stats-deleted-color":e2("--color-graph-stats-deleted",t),"--stats-files-color":e2("--color-graph-stats-files",t),"--stats-bar-border-radius":e2("--graph-stats-bar-border-radius",t),"--stats-bar-height":e2("--graph-stats-bar-height",t),"--text-selected":e2("--color-graph-text-selected",t),"--text-selected-row":e2("--color-graph-text-selected-row",t),"--text-hovered":e2("--color-graph-text-hovered",t),"--text-dimmed-selected":e2("--color-graph-text-dimmed-selected",t),"--text-dimmed":e2("--color-graph-text-dimmed",t),"--text-normal":e2("--color-graph-text-normal",t),"--text-secondary":e2("--color-graph-text-secondary",t),"--text-disabled":e2("--color-graph-text-disabled",t),"--text-accent":e2("--color-link-foreground",t),"--text-inverse":e2("--vscode-input-background",t),"--text-bright":e2("--vscode-input-background",t),...n},themeOpacityFactor:parseInt(e2("--graph-theme-opacity-factor",t))||1}}};ub([eq("gl-graph-app")],uy.prototype,"appElement",2),ub([A({context:"graphState"})],uy.prototype,"_graphState",2),ub([eZ()],uy.prototype,"searching",2),uy=ub([eF("gl-graph-apphost")],uy);export{uy as GraphAppHost};