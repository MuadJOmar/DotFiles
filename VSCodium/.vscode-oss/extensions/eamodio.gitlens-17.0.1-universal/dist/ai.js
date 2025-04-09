exports.id=53,exports.ids=[53],exports.modules={884:(e,t,n)=>{n.r(t),n.d(t,{GitKrakenProvider:()=>GitKrakenProvider});var i=n(1220),a=n(5580),o=n(8336),r=n(4342),s=n(7005),d=n(5419),l=n(5848),c=n(2906),u=n(5167),p=Object.defineProperty,m=Object.getOwnPropertyDescriptor;let GitKrakenProvider=class GitKrakenProvider extends c.G{id=a.jh.id;name=a.jh.name;descriptor=a.jh;config={};_disposable;_promptTemplates=new l.o({createTTL:432e5,expireOnError:!0});constructor(e,t){super(e,t),this._disposable=this.container.subscription.onDidChange(()=>this._promptTemplates.clear())}dispose(){this._disposable.dispose()}async getModels(){let e=(0,d.dQ)();try{let e=this.container.urls.getGkAIApiUrl("providers/message-prompt"),t=await (0,i.hd)(e,{headers:await this.connection.getGkHeaders(void 0,void 0,{Accept:"application/json"})});if(!t.ok)throw Error(`Getting models (${e}) failed: ${t.status} (${t.statusText})`);let n=await t.json();if(null!=n.error)throw Error(`Getting models (${e}) failed: ${String(n.error)}`);return n.data.map(e=>({id:e.modelId,name:e.modelName,maxTokens:{input:e.maxInputTokens,output:e.maxOutputTokens},provider:a.jh,default:e.preferred,temperature:null}))}catch(t){t instanceof o.WT||s.Vy.error(t,e,"Unable to get models")}return[]}async getPromptTemplate(e,t){let n=(0,d.dQ)();try{return await this._promptTemplates.get(e,async()=>{let t=this.container.urls.getGkAIApiUrl(`templates/message-prompt/${e}`),n=await (0,i.hd)(t,{headers:await this.connection.getGkHeaders(void 0,void 0,{Accept:"application/json"})});if(!n.ok)throw Error(`Getting prompt template (${t}) failed: ${n.status} (${n.statusText})`);let a=await n.json();if(null!=a.error)throw Error(`Getting prompt template (${t}) failed: ${String(a.error)}`);return{id:a.data.id,name:(0,u.u5)(e),template:a.data.template,variables:a.data.variables}})}catch(t){t instanceof o.WT||s.Vy.error(t,n,`Unable to get prompt template for '${e}'`)}return super.getPromptTemplate(e,t)}async getApiKey(e){let t=await this.container.subscription.getAuthenticationSession();return t?.accessToken?t.accessToken:e?void 0:await (0,u.G5)(this.container,e)?(t=await this.container.subscription.getAuthenticationSession(),t?.accessToken):void 0}getUrl(e){return this.container.urls.getGkAIApiUrl("chat/completions")}getHeaders(e,t,n,i){return this.connection.getGkHeaders(i,void 0,{Accept:"application/json","GK-Action":e})}async handleFetchFailure(e,t,n,i,a){let r,s,d;try{r=await e.json()}catch{}let l=r?.error?.message||e.statusText;switch([s,d]=r?.error?.code?.split(".")??[],s=s?parseInt(s,10):e.status,d=d?parseInt(d,10):0,s){case 400:case 404:case 408:case 499:case 500:default:throw Error(`(${this.name}) ${s}.${d}: ${l}`);case 401:throw new o.WT;case 403:if(2===d){let e=r?.error?.data,t=e?.entitlementId;throw null!=t&&(l+=`; entitlement=${e.entitlementId} ${JSON.stringify(e)}`),new o.V9("ai.tokens.weekly"===t?o.zK.UserQuotaExceeded:o.zK.Entitlement,Error(`(${this.name}) ${s}.${d}: ${l}`))}throw Error(`(${this.name}) ${s}.${d}: ${l}`);case 413:if(1===d){if(i<2)return{retry:!0,maxCodeCharacters:a-500};throw new o.V9(o.zK.RequestTooLarge,Error(`(${this.name}) ${s}.${d}: ${l}`))}throw Error(`(${this.name}) ${s}.${d}: ${l}`);case 429:if(1===d)throw new o.V9(o.zK.RateLimitExceeded,Error(`(${this.name}) ${s}.${d}: ${l}`));throw Error(`(${this.name}) ${s}.${d}: ${l}`);case 503:if(1===d&&"Agent Error: too many requests"===l)throw new o.V9(o.zK.ServiceCapacityExceeded,Error(`(${this.name}) ${s}.${d}: ${l}`));throw Error(`(${this.name}) ${s}.${d}: ${l}`)}}};((e,t,n,i)=>{for(var a,o=m(t,n),r=e.length-1;r>=0;r--)(a=e[r])&&(o=(i?a(t,n,o):a(o))||o);return i&&o&&p(t,n,o)})([(0,r.Yz)()],GitKrakenProvider.prototype,"getModels",1)},2012:(e,t,n)=>{n.r(t),n.d(t,{DeepSeekProvider:()=>DeepSeekProvider});var i=n(5580),a=n(2906);let o=[{id:"deepseek-chat",name:"DeepSeek-V3",maxTokens:{input:65536,output:8192},provider:i.Fv,default:!0,temperature:0},{id:"deepseek-reasoner",name:"DeepSeek-R1",maxTokens:{input:65536,output:8192},provider:i.Fv,temperature:0}];let DeepSeekProvider=class DeepSeekProvider extends a.G{id=i.Fv.id;name=i.Fv.name;descriptor=i.Fv;config={keyUrl:"https://platform.deepseek.com/api_keys",keyValidator:/(?:sk-)?[a-zA-Z0-9]{32,}/};getModels(){return Promise.resolve(o)}getUrl(e){return"https://api.deepseek.com/v1/chat/completions"}}},2241:(e,t,n)=>{n.r(t),n.d(t,{GeminiProvider:()=>GeminiProvider});var i=n(5580),a=n(2906);let o=[{id:"gemini-2.5-pro-exp-03-25",name:"Gemini 2.5 Pro (Experimental)",maxTokens:{input:1e6,output:64e3},provider:i.mJ},{id:"gemini-2.0-flash",name:"Gemini 2.0 Flash",maxTokens:{input:1048576,output:8192},provider:i.mJ,default:!0},{id:"gemini-2.0-flash-001",name:"Gemini 2.0 Flash",maxTokens:{input:1048576,output:8192},provider:i.mJ,hidden:!0},{id:"gemini-2.0-flash-lite",name:"Gemini 2.0 Flash-Lite",maxTokens:{input:1048576,output:8192},provider:i.mJ},{id:"gemini-2.0-flash-lite-001",name:"Gemini 2.0 Flash-Lite",maxTokens:{input:1048576,output:8192},provider:i.mJ,hidden:!0},{id:"gemini-2.0-flash-lite-preview-02-05",name:"Gemini 2.0 Flash-Lite (Preview)",maxTokens:{input:1048576,output:8192},provider:i.mJ,hidden:!0},{id:"gemini-2.0-pro-exp-02-05",name:"Gemini 2.0 Pro (Experimental)",maxTokens:{input:2097152,output:8192},provider:i.mJ},{id:"gemini-2.0-flash-thinking-exp-01-21",name:"Gemini 2.0 Flash Thinking (Experimental)",maxTokens:{input:1048576,output:8192},provider:i.mJ},{id:"gemini-2.0-flash-exp",name:"Gemini 2.0 Flash (Experimental)",maxTokens:{input:1048576,output:8192},provider:i.mJ},{id:"gemini-exp-1206",name:"Gemini Experimental 1206",maxTokens:{input:2097152,output:8192},provider:i.mJ,hidden:!0},{id:"gemini-exp-1121",name:"Gemini Experimental 1121",maxTokens:{input:2097152,output:8192},provider:i.mJ,hidden:!0},{id:"gemini-1.5-pro",name:"Gemini 1.5 Pro",maxTokens:{input:2097152,output:8192},provider:i.mJ},{id:"gemini-1.5-flash",name:"Gemini 1.5 Flash",maxTokens:{input:1048576,output:8192},provider:i.mJ},{id:"gemini-1.5-flash-8b",name:"Gemini 1.5 Flash 8B",maxTokens:{input:1048576,output:8192},provider:i.mJ}];let GeminiProvider=class GeminiProvider extends a.G{id=i.mJ.id;name=i.mJ.name;descriptor=i.mJ;config={keyUrl:"https://aistudio.google.com/app/apikey"};getModels(){return Promise.resolve(o)}getUrl(e){return"https://generativelanguage.googleapis.com/v1beta/chat/completions"}fetchCore(e,t,n,i,a){if("max_completion_tokens"in i){let{max_completion_tokens:e,...t}=i;i=e?{max_tokens:e,...t}:t}return super.fetchCore(e,t,n,i,a)}}},2724:(e,t,n)=>{n.r(t),n.d(t,{HuggingFaceProvider:()=>HuggingFaceProvider});var i=n(1220),a=n(5580),o=n(2906);let HuggingFaceProvider=class HuggingFaceProvider extends o.G{id=a.xS.id;name=a.xS.name;descriptor=a.xS;config={keyUrl:"https://huggingface.co/settings/tokens",keyValidator:/(?:hf_)?[a-zA-Z0-9]{32,}/};async getModels(){let e=new URLSearchParams({filter:"text-generation,conversational",inference:"warm",sort:"trendingScore",limit:"30"}),t=await (0,i.hd)(`https://huggingface.co/api/models?${e.toString()}`,{headers:{Accept:"application/json","Content-Type":"application/json"},method:"GET"});return(await t.json()).map(e=>({id:e.id,name:e.id.split("/").pop(),maxTokens:{input:4096,output:4096},provider:a.xS,temperature:null}))}getUrl(e){return`https://api-inference.huggingface.co/models/${e.id}/v1/chat/completions`}}},2906:(e,t,n)=>{n.d(t,{G:()=>OpenAICompatibleProvider});var i=n(1220),a=n(8336),o=n(7005),r=n(5419),s=n(5167),d=n(9549),l=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),c=e=>{throw TypeError(e)},u=(e,t,n)=>{if(null!=t){var i,a;"object"!=typeof t&&"function"!=typeof t&&c("Object expected"),n&&(i=t[l("asyncDispose")]),void 0===i&&(i=t[l("dispose")],n&&(a=i)),"function"!=typeof i&&c("Object not disposable"),a&&(i=function(){try{a.call(this)}catch(e){return Promise.reject(e)}}),e.push([n,i,t])}else n&&e.push([n]);return t},p=(e,t,n)=>{var i="function"==typeof SuppressedError?SuppressedError:function(e,t,n,i){return(i=Error(n)).name="SuppressedError",i.error=e,i.suppressed=t,i},a=e=>t=n?new i(e,t,"An error was suppressed during disposal"):(n=!0,e),o=i=>{for(;i=e.pop();)try{var r=i[1]&&i[1].call(i[2]);if(i[0])return Promise.resolve(r).then(o,e=>(a(e),o()))}catch(e){a(e)}if(n)throw t};return o()};let OpenAICompatibleProvider=class OpenAICompatibleProvider{constructor(e,t){this.container=e,this.connection=t}dispose(){}async configured(e){return await this.getApiKey(e)!=null}async getPromptTemplate(e,t){return Promise.resolve((0,d.W)(e,t))}async getApiKey(e){let{keyUrl:t,keyValidator:n}=this.config;return(0,s.Hi)(this.container,{id:this.id,name:this.name,requiresAccount:this.descriptor.requiresAccount,validator:null!=n?e=>n.test(e):()=>!0,url:t},e)}getHeaders(e,t,n,i){return{Accept:"application/json","Content-Type":"application/json",Authorization:`Bearer ${i}`}}async sendRequest(e,t,n,i,l){var c=[];try{let p=u(c,(0,r.bP)(`${(0,o.zu)(this)}.sendRequest`,!1)),m=await this.getApiKey(!1);if(null==m)return;let h=await this.getPromptTemplate(e,n);if(null==h){o.Vy.error(void 0,p,`Unable to find prompt template for '${e}'`);return}try{let a=!1,[o,r]=await this.fetch(e,n,m,async(n,o)=>{let r;return{prompt:r,truncated:a}=await (0,d.J)(e,h,t,n,o,i),[{role:"user",content:r}]},l?.outputTokens??4096,l?.cancellation);return a&&(0,s.Xs)(r,n),o}catch(e){if(e instanceof a.AL)throw o.Vy.error(e,p,`Cancelled request to ${h.name}: (${n.provider.name})`),e;if(o.Vy.error(e,p,`Unable to ${h.name}: (${n.provider.name})`),e instanceof a.V9)throw e;throw Error(`Unable to ${h.name}: (${n.provider.name}) ${e.message}`)}}catch(e){var m=e,h=!0}finally{p(c,m,h)}}async fetch(e,t,n,i,a,o){let r=0,d=(0,s.pn)(t,2600);for(;;){let l={model:t.id,messages:await i(d,r),stream:!1,max_completion_tokens:Math.min(a,t.maxTokens.output),temperature:(0,s.dj)(t.temperature)},c=await this.fetchCore(e,t,n,l,o);if(!c.ok){let n=await this.handleFetchFailure(c,e,t,r,d);if(n.retry){d=n.maxCodeCharacters,r++;continue}}let u=await c.json();return[{id:u.id,content:u.choices?.[0].message.content?.trim()??u.content?.[0]?.text?.trim()??"",model:t,usage:{promptTokens:u.usage?.prompt_tokens??u.usage?.input_tokens,completionTokens:u.usage?.completion_tokens??u.usage?.output_tokens,totalTokens:u.usage?.total_tokens,limits:u?.usage?.gk!=null?{used:u.usage.gk.used,limit:u.usage.gk.limit,resetsOn:new Date(u.usage.gk.resets_on)}:void 0}},d]}}async handleFetchFailure(e,t,n,i,a){let o;if(404===e.status)throw Error(`Your API key doesn't seem to have access to the selected '${n.id}' model`);if(429===e.status)throw Error(`(${this.name}) ${e.status}: Too many requests (rate limit exceeded) or your account is out of funds`);try{o=await e.json()}catch{}if(i<2&&o?.error?.code==="context_length_exceeded")return{retry:!0,maxCodeCharacters:a-500};throw Error(`(${this.name}) ${e.status}: ${o?.error?.message||e.statusText}`)}async fetchCore(e,t,n,o,r){let s;null!=r&&(s=new AbortController,r.onCancellationRequested(()=>s?.abort()));let d=this.getUrl(t);try{return await (0,i.hd)(d,{headers:await this.getHeaders(e,t,d,n),method:"POST",body:JSON.stringify(o),signal:s?.signal})}catch(e){if("AbortError"===e.name)throw new a.AL(e);throw e}}}},3215:(e,t,n)=>{n.r(t),n.d(t,{GitHubModelsProvider:()=>GitHubModelsProvider});var i=n(1220),a=n(5580),o=n(2906),r=n(5167);let GitHubModelsProvider=class GitHubModelsProvider extends o.G{id=a.ej.id;name=a.ej.name;descriptor=a.ej;config={keyUrl:"https://github.com/settings/tokens",keyValidator:/(?:ghp-)?[a-zA-Z0-9]{32,}/};async getModels(){let e=await (0,i.hd)("https://github.com/marketplace?category=All&task=chat-completion&type=models",{headers:{Accept:"application/json","Content-Type":"application/json"}});return(await e.json()).results.map(e=>({id:e.name,name:e.friendly_name,maxTokens:{input:e.max_input_tokens,output:e.max_output_tokens},provider:a.ej,temperature:null}))}getUrl(e){return"https://models.inference.ai.azure.com/chat/completions"}async handleFetchFailure(e,t,n,i,a){if(404!==e.status&&429!==e.status){let t;try{t=await e.json()}catch{}if(i<2&&t?.error?.code==="tokens_limit_reached"){let e=/Max size: (\d+) tokens/.exec(t?.error?.message);if(e?.[1]!=null)return{retry:!0,maxCodeCharacters:a=(0,r.pn)(n,2600,parseInt(e[1],10))}}}return super.handleFetchFailure(e,t,n,i,a)}}},4254:(e,t,n)=>{n.r(t),n.d(t,{AnthropicProvider:()=>AnthropicProvider});var i=n(5580),a=n(2906);let o=[{id:"claude-3-7-sonnet-latest",name:"Claude 3.7 Sonnet",maxTokens:{input:204800,output:8192},provider:i.FH},{id:"claude-3-7-sonnet-20250219",name:"Claude 3.7 Sonnet",maxTokens:{input:204800,output:8192},provider:i.FH,hidden:!0},{id:"claude-3-5-sonnet-latest",name:"Claude 3.5 Sonnet",maxTokens:{input:204800,output:8192},provider:i.FH},{id:"claude-3-5-sonnet-20241022",name:"Claude 3.5 Sonnet",maxTokens:{input:204800,output:8192},provider:i.FH,hidden:!0},{id:"claude-3-5-sonnet-20240620",name:"Claude 3.5 Sonnet",maxTokens:{input:204800,output:8192},provider:i.FH,hidden:!0},{id:"claude-3-5-haiku-latest",name:"Claude 3.5 Haiku",maxTokens:{input:204800,output:8192},provider:i.FH,default:!0},{id:"claude-3-5-haiku-20241022",name:"Claude 3.5 Haiku",maxTokens:{input:204800,output:8192},provider:i.FH,hidden:!0},{id:"claude-3-opus-latest",name:"Claude 3 Opus",maxTokens:{input:204800,output:4096},provider:i.FH},{id:"claude-3-opus-20240229",name:"Claude 3 Opus",maxTokens:{input:204800,output:4096},provider:i.FH,hidden:!0},{id:"claude-3-sonnet-latest",name:"Claude 3 Sonnet",maxTokens:{input:204800,output:4096},provider:i.FH,hidden:!0},{id:"claude-3-sonnet-20240229",name:"Claude 3 Sonnet",maxTokens:{input:204800,output:4096},provider:i.FH,hidden:!0},{id:"claude-3-haiku-latest",name:"Claude 3 Haiku",maxTokens:{input:204800,output:4096},provider:i.FH},{id:"claude-3-haiku-20240307",name:"Claude 3 Haiku",maxTokens:{input:204800,output:4096},provider:i.FH,hidden:!0},{id:"claude-2.1",name:"Claude 2.1",maxTokens:{input:204800,output:4096},provider:i.FH,hidden:!0}];let AnthropicProvider=class AnthropicProvider extends a.G{id=i.FH.id;name=i.FH.name;descriptor=i.FH;config={keyUrl:"https://console.anthropic.com/account/keys",keyValidator:/(?:sk-)?[a-zA-Z0-9-_]{32,}/};getModels(){return Promise.resolve(o)}getUrl(e){return"https://api.anthropic.com/v1/messages"}getHeaders(e,t,n,i){return{Accept:"application/json","Content-Type":"application/json",Authorization:`Bearer ${i}`,"x-api-key":i,"anthropic-version":"2023-06-01"}}fetchCore(e,t,n,i,a){if("max_completion_tokens"in i){let{max_completion_tokens:e,...t}=i;i=e?{max_tokens:e,...t}:t}return super.fetchCore(e,t,n,i,a)}async handleFetchFailure(e,t,n,i,a){let o;if(404===e.status)throw Error(`Your API key doesn't seem to have access to the selected '${n.id}' model`);if(429===e.status)throw Error(`(${this.name}) ${e.status}: Too many requests (rate limit exceeded) or your account is out of funds`);try{o=await e.json()}catch{}if(i++<2&&o?.error?.type==="invalid_request_error"&&o?.error?.message?.includes("prompt is too long"))return{retry:!0,maxCodeCharacters:a-500*i};throw Error(`(${this.name}) ${e.status}: ${o?.error?.message||e.statusText})`)}}},4912:(e,t,n)=>{n.r(t),n.d(t,{XAIProvider:()=>XAIProvider});var i=n(5580),a=n(2906);let o=[{id:"grok-beta",name:"Grok Beta",maxTokens:{input:131072,output:4096},provider:i.zJ,default:!0}];let XAIProvider=class XAIProvider extends a.G{id=i.zJ.id;name=i.zJ.name;descriptor=i.zJ;config={keyUrl:"https://console.x.ai/",keyValidator:/(?:xai-)?[a-zA-Z0-9]{32,}/};getModels(){return Promise.resolve(o)}getUrl(e){return"https://api.x.ai/v1/chat/completions"}}},5167:(e,t,n)=>{n.d(t,{G5:()=>c,Hi:()=>h,PR:()=>p,Vt:()=>f,Xs:()=>v,dj:()=>g,pn:()=>m,u5:()=>u});var i=n(1398),a=n(6613),o=n(1078),r=n(6612),s=n(4941),d=n(3934),l=n(6103);function c(e,t){return(0,l.e2)(e,(0,a.Du)(a.WL.Noop,void 0,{label:"Use AI-powered GitLens features like Generate Commit Message, Explain Commit, and more",iconPath:new i.ThemeIcon("sparkle")}),{source:"ai"},t)}function u(e){switch(e){case"generate-commitMessage":return"Generate Commit Message";case"generate-stashMessage":return"Generate Stash Message";case"generate-changelog":return"Generate Changelog (Preview)";case"generate-create-cloudPatch":return"Create Cloud Patch Details";case"generate-create-codeSuggestion":return"Create Code Suggestion Details";case"generate-create-pullRequest":return"Create Pull Request Details (Preview)";case"explain-changes":return"Explain Changes";default:return"Unknown Action"}}let p=3.1;function m(e,t,n){let i=(n??e.maxTokens.input)*p-t/p;return Math.floor(i-.1*i)}async function h(e,t,n){let a=await e.storage.getSecret(`gitlens.${t.id}.key`);if(a)return a;if(n||t.requiresAccount&&!await c(e,!1))return;let o=i.window.createInputBox();o.ignoreFocusOut=!0;let r=[];try{let e={iconPath:new i.ThemeIcon("link-external"),tooltip:`Open the ${t.name} API Key Page`};a=await new Promise(n=>{r.push(o.onDidHide(()=>n(void 0)),o.onDidChangeValue(e=>{if(e&&!t.validator(e)){o.validationMessage=`Please enter a valid ${t.name} API key`;return}o.validationMessage=void 0}),o.onDidAccept(()=>{let e=o.value.trim();if(!e||!t.validator(e)){o.validationMessage=`Please enter a valid ${t.name} API key`;return}n(e)}),o.onDidTriggerButton(n=>{n===e&&t.url&&i.env.openExternal(i.Uri.parse(t.url))})),o.password=!0,o.title=`Connect to ${t.name}`,o.placeholder=`Please enter your ${t.name} API key to use this feature`,o.prompt=`Enter your [${t.name} API Key](${t.url} "Get your ${t.name} API key")`,t.url&&(o.buttons=[e]),o.show()})}finally{o.dispose(),r.forEach(e=>void e.dispose())}if(a)return e.storage.storeSecret(`gitlens.${t.id}.key`,a).catch(),a}function g(e){if(null!==e)return null!=e?e:Math.max(0,Math.min(o.H.get("ai.modelOptions.temperature"),2))}async function f(e,t){let n={title:"Continue"},a={title:"Change Threshold"},o=await i.window.showWarningMessage(`This request will use approximately ${(0,d.td)("token",e)}, which exceeds the configured ${(0,s.bH)(t)} token threshold for large prompts.

Do you want to continue?`,{modal:!0},n,a,{title:"Cancel",isCloseAffordance:!0});return o===a&&(0,r.P9)({query:"gitlens.ai.largePromptWarningThreshold"}),o===n}function v(e,t){i.window.showWarningMessage(`The prompt was truncated to ${(0,s.bH)(e)} characters to fit within the ${(0,d.Lu)(t.provider.name)} limits.`)}},6560:(e,t,n)=>{n.r(t),n.d(t,{VSCodeAIProvider:()=>VSCodeAIProvider});var i=n(1398),a=n(5580),o=n(8336),r=n(7005),s=n(5419),d=n(3934),l=n(5167),c=n(9549),u=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),p=e=>{throw TypeError(e)},m=(e,t,n)=>{if(null!=t){var i,a;"object"!=typeof t&&"function"!=typeof t&&p("Object expected"),n&&(i=t[u("asyncDispose")]),void 0===i&&(i=t[u("dispose")],n&&(a=i)),"function"!=typeof i&&p("Object not disposable"),a&&(i=function(){try{a.call(this)}catch(e){return Promise.reject(e)}}),e.push([n,i,t])}else n&&e.push([n]);return t},h=(e,t,n)=>{var i="function"==typeof SuppressedError?SuppressedError:function(e,t,n,i){return(i=Error(n)).name="SuppressedError",i.error=e,i.suppressed=t,i},a=e=>t=n?new i(e,t,"An error was suppressed during disposal"):(n=!0,e),o=i=>{for(;i=e.pop();)try{var r=i[1]&&i[1].call(i[2]);if(i[0])return Promise.resolve(r).then(o,e=>(a(e),o()))}catch(e){a(e)}if(n)throw t};return o()};let g=a.jI;let VSCodeAIProvider=class VSCodeAIProvider{constructor(e,t){this.container=e,this.connection=t,this._disposable=i.Disposable.from(this._onDidChange,i.lm.onDidChangeChatModels(()=>this._onDidChange.fire()))}id=g.id;_name;get name(){return this._name??g.name}_onDidChange=new i.EventEmitter;get onDidChange(){return this._onDidChange.event}_disposable;dispose(){this._disposable.dispose()}async configured(e){return 0!==(await this.getModels()).length}async getModels(){return(await i.lm.selectChatModels()).map(f)}async getPromptTemplate(e,t){return Promise.resolve((0,c.W)(e,t))}async getChatModel(e){let t=await i.lm.selectChatModels(e.selector);return t?.[0]}async sendRequest(e,t,n,a,d){var u=[];try{let p,h,g=m(u,(0,s.bP)(`${(0,r.zu)(this)}.sendRequest`,!1)),f=await this.getChatModel(n);if(null==f)return;p=d?.cancellation==null?(h=new i.CancellationTokenSource).token:d.cancellation;let v=await this.getPromptTemplate(e,n);if(null==v){r.Vy.error(void 0,g,`Unable to find prompt template for '${e}'`);return}let y=0,w=(0,l.pn)(n,2600)-1e3;try{let s=!1;for(;;){let d;({prompt:d,truncated:s}=await (0,c.J)(e,v,t,w,y,a));let u=[i.LanguageModelChatMessage.User(d)];try{let e=await f.sendRequest(u,{justification:"GitLens leverages Copilot for AI-powered features to improve your workflow and development experience.",modelOptions:{temperature:(0,l.dj)(n.temperature)}},p);s&&(0,l.Xs)(w,n);let t="";for await(let n of e.text)t+=n;return{content:t.trim(),model:n}}catch(t){if(t instanceof o.AL)throw r.Vy.error(t,g,`Cancelled request to ${v.name}: (${n.provider.name})`),t;let e=t instanceof Error?t.message:String(t);if(t instanceof Error&&"code"in t&&"NoPermissions"===t.code)throw r.Vy.error(t,g,`User denied access to ${n.provider.name}`),Error(`User denied access to ${n.provider.name}`);if(t instanceof Error&&"cause"in t&&t.cause instanceof Error&&(e+=`
${t.cause.message}`,y++<2&&t.cause.message.includes("exceeds token limit"))){w-=500*y;continue}throw r.Vy.error(t,g,`Unable to ${v.name}: (${n.provider.name})`),Error(`Unable to ${v.name}: (${n.provider.name}${t.code?`:${t.code}`:""}) ${e}`)}}}finally{h?.dispose()}}catch(e){var p=e,g=!0}finally{h(u,p,g)}}};function f(e){return{id:`${e.vendor}:${e.family}`,name:"copilot"===e.vendor?e.name:`${(0,d.ZH)(e.vendor)} ${e.name}`,vendor:e.vendor,selector:{vendor:e.vendor,family:e.family},maxTokens:{input:e.maxInputTokens,output:4096},provider:{id:g.id,name:(0,d.ZH)(e.vendor)}}}},6940:(e,t,n)=>{n.r(t),n.d(t,{OpenAIProvider:()=>OpenAIProvider});var i=n(5580),a=n(1078),o=n(2906);let r=[{id:"o3-mini",name:"o3 mini",maxTokens:{input:2e5,output:1e5},provider:i.lh,temperature:null},{id:"o3-mini-2025-01-31",name:"o3 mini",maxTokens:{input:2e5,output:1e5},provider:i.lh,temperature:null,hidden:!0},{id:"o1",name:"o1",maxTokens:{input:2e5,output:1e5},provider:i.lh,temperature:null},{id:"o1-2024-12-17",name:"o1",maxTokens:{input:2e5,output:1e5},provider:i.lh,temperature:null,hidden:!0},{id:"o1-preview",name:"o1 preview",maxTokens:{input:128e3,output:32768},provider:i.lh,temperature:null,hidden:!0},{id:"o1-preview-2024-09-12",name:"o1 preview",maxTokens:{input:128e3,output:32768},provider:i.lh,temperature:null,hidden:!0},{id:"o1-mini",name:"o1 mini",maxTokens:{input:128e3,output:65536},provider:i.lh,temperature:null},{id:"o1-mini-2024-09-12",name:"o1 mini",maxTokens:{input:128e3,output:65536},provider:i.lh,temperature:null,hidden:!0},{id:"gpt-4o",name:"GPT-4o",maxTokens:{input:128e3,output:16384},provider:i.lh,default:!0},{id:"gpt-4o-2024-11-20",name:"GPT-4o",maxTokens:{input:128e3,output:16384},provider:i.lh,hidden:!0},{id:"gpt-4o-2024-08-06",name:"GPT-4o",maxTokens:{input:128e3,output:16384},provider:i.lh,hidden:!0},{id:"gpt-4o-2024-05-13",name:"GPT-4o",maxTokens:{input:128e3,output:4096},provider:i.lh,hidden:!0},{id:"chatgpt-4o-latest",name:"GPT-4o",maxTokens:{input:128e3,output:16384},provider:i.lh,hidden:!0},{id:"gpt-4o-mini",name:"GPT-4o mini",maxTokens:{input:128e3,output:16384},provider:i.lh},{id:"gpt-4o-mini-2024-07-18",name:"GPT-4o mini",maxTokens:{input:128e3,output:16384},provider:i.lh,hidden:!0},{id:"gpt-4-turbo",name:"GPT-4 Turbo",maxTokens:{input:128e3,output:4096},provider:i.lh,hidden:!0},{id:"gpt-4-turbo-2024-04-09",name:"GPT-4 Turbo preview (2024-04-09)",maxTokens:{input:128e3,output:4096},provider:i.lh,hidden:!0},{id:"gpt-4-turbo-preview",name:"GPT-4 Turbo preview",maxTokens:{input:128e3,output:4096},provider:i.lh,hidden:!0},{id:"gpt-4-0125-preview",name:"GPT-4 0125 preview",maxTokens:{input:128e3,output:4096},provider:i.lh,hidden:!0},{id:"gpt-4-1106-preview",name:"GPT-4 1106 preview",maxTokens:{input:128e3,output:4096},provider:i.lh,hidden:!0},{id:"gpt-4",name:"GPT-4",maxTokens:{input:8192,output:4096},provider:i.lh,hidden:!0},{id:"gpt-4-0613",name:"GPT-4 0613",maxTokens:{input:8192,output:4096},provider:i.lh,hidden:!0},{id:"gpt-4-32k",name:"GPT-4 32k",maxTokens:{input:32768,output:4096},provider:i.lh,hidden:!0},{id:"gpt-4-32k-0613",name:"GPT-4 32k 0613",maxTokens:{input:32768,output:4096},provider:i.lh,hidden:!0},{id:"gpt-3.5-turbo",name:"GPT-3.5 Turbo",maxTokens:{input:16385,output:4096},provider:i.lh,hidden:!0},{id:"gpt-3.5-turbo-0125",name:"GPT-3.5 Turbo 0125",maxTokens:{input:16385,output:4096},provider:i.lh,hidden:!0},{id:"gpt-3.5-turbo-1106",name:"GPT-3.5 Turbo 1106",maxTokens:{input:16385,output:4096},provider:i.lh,hidden:!0},{id:"gpt-3.5-turbo-16k",name:"GPT-3.5 Turbo 16k",maxTokens:{input:16385,output:4096},provider:i.lh,hidden:!0}];let OpenAIProvider=class OpenAIProvider extends o.G{id=i.lh.id;name=i.lh.name;descriptor=i.lh;config={keyUrl:"https://platform.openai.com/account/api-keys",keyValidator:/(?:sk-)?[a-zA-Z0-9]{32,}/};getModels(){return Promise.resolve(r)}getUrl(e){return a.H.get("ai.openai.url")||"https://api.openai.com/v1/chat/completions"}getHeaders(e,t,n,i){return n.includes(".azure.com")?{Accept:"application/json","Content-Type":"application/json","api-key":i}:super.getHeaders(e,t,n,i)}}},9549:(e,t,n)=>{n.d(t,{W:()=>g,J:()=>v});var i=n(8336),a=n(1078),o=n(7747),r=n(3934);let s=`You are an advanced AI programming assistant and are tasked with summarizing code changes into a concise but meaningful commit message. You will be provided with a code diff and optional additional context. Your goal is to analyze the changes and create a clear, informative commit message that accurately represents the modifications made to the code.

First, examine the following code changes provided in Git diff format:
<~~diff~~>
\${diff}
</~~diff~~>

Now, if provided, use this context to understand the motivation behind the changes and any relevant background information:
<~~additional-context~~>
\${context}
</~~additional-context~~>

To create an effective commit message, follow these steps:

1. Carefully analyze the diff and context, focusing on:
   - The purpose and rationale of the changes
   - Any problems addressed or benefits introduced
   - Any significant logic changes or algorithmic improvements
2. Ensure the following when composing the commit message:
   - Emphasize the 'why' of the change, its benefits, or the problem it addresses
   - Use an informal yet professional tone
   - Use a future-oriented manner, third-person singular present tense (e.g., 'Fixes', 'Updates', 'Improves', 'Adds', 'Removes')
   - Be clear and concise
   - Synthesize only meaningful information from the diff and context
   - Avoid outputting code, specific code identifiers, names, or file names unless crucial for understanding
   - Avoid repeating information, broad generalities, and unnecessary phrases like "this", "this commit", or "this change"
3. Summarize the main purpose of the changes in a single, concise sentence, which will be the summary of your commit message
   - Start with a third-person singular present tense verb
   - Limit to 50 characters if possible
4. If necessary, provide a brief explanation of the changes, which will be the body of your commit message
   - Add line breaks for readability and to separate independent ideas
   - Focus on the "why" rather than the "what" of the changes.
5. If the changes are related to a specific issue or ticket, include the reference (e.g., "Fixes #123" or "Relates to JIRA-456") at the end of the commit message.

Don't over explain and write your commit message summary inside <summary> tags and your commit message body inside <body> tags and include no other text:

<summary>
Implements user authentication feature
</summary>
<body>
Adds login and registration endpoints
Updates user model to include password hashing
Integrates JWT for secure token generation

Fixes #789
</body>

\${instructions}

Based on the provided code diff and any additional context, create a concise but meaningful commit message following the instructions above.`,d=`You are an advanced AI programming assistant and are tasked with summarizing code changes into a concise but meaningful pull request title and description. You will be provided with a code diff and a list of commits. Your goal is to analyze the changes and create a clear, informative title and description that accurately represents the modifications made to the code.
First, examine the following code changes provided in Git diff format:
<~~diff~~>
\${diff}
</~~diff~~>

Then, review the list of commits to help understand the motivation behind the changes and any relevant background information:
<~~data~~>
\${data}
</~~data~~>

Now, if provided, use this context to understand the motivation behind the changes and any relevant background information:
<~~additional-context~~>
\${context}
</~~additional-context~~>

To create an effective pull request title and description, follow these steps:

1. Carefully analyze the diff, commit messages, context, focusing on:
   - The purpose and rationale of the changes
   - Any problems addressed or benefits introduced
   - Any significant logic changes or algorithmic improvements
2. Ensure the following when composing the pull request title and description:
   - Emphasize the 'why' of the change, its benefits, or the problem it addresses
   - Use an informal yet professional tone
   - Use a future-oriented manner, third-person singular present tense (e.g., 'Fixes', 'Updates', 'Improves', 'Adds', 'Removes')
   - Be clear and concise
   - Synthesize only meaningful information from the diff and context
   - Avoid outputting code, specific code identifiers, names, or file names unless crucial for understanding
   - Avoid repeating information, broad generalities, and unnecessary phrases like "this", "this commit", or "this change"
3. Summarize the main purpose of the changes in a single, concise sentence, which will be the title of your pull request message
   - Start with a third-person singular present tense verb
   - Limit to 50 characters if possible
4. If necessary, provide a brief explanation of the changes, which will be the body of your pull request message
   - Add line breaks for readability and to separate independent ideas
   - Focus on the "why" rather than the "what" of the changes.
   - Structure the body with markdown bullets and headings for clarity
5. If the changes are related to a specific issue or ticket, include the reference (e.g., "Fixes #123" or "Relates to JIRA-456") at the end of the pull request message.

Write your title inside <summary> tags and your description inside <body> tags and include no other text:

<summary>
Implements user authentication feature
</summary>
<body>
Adds login and registration endpoints:
- Updates user model to include password hashing
- Integrates JWT for secure token generation

Fixes #789
</body>
\${instructions}

Based on the provided code diff, commit list, and any additional context, create a concise but meaningful pull request title and body following the instructions above.`,l=`You are an advanced AI programming assistant and are tasked with creating a concise but descriptive stash message. You will be provided with a code diff of uncommitted changes. Your goal is to analyze the changes and create a clear, single-line stash message that accurately represents the work in progress being stashed.

First, examine the following code changes provided in Git diff format:
<~~diff~~>
\${diff}
</~~diff~~>

To create an effective stash message, follow these steps:

1. Analyze the changes and focus on:
   - The primary feature or bug fix was being worked on
   - The overall intent of the changes
   - Any notable file or areas being modified
2. Create a single-line message that:
   - Briefly describes the changes being stashed but must be descriptive enough to identify later
   - Prioritizes the most significant change if multiple changes are present. If multiple related changes are significant, try to summarize them concisely
   - Use a future-oriented manner, third-person singular present tense (e.g., 'Fixes', 'Updates', 'Improves', 'Adds', 'Removes')

Write your stash message inside <summary> tags and include no other text:

<summary>
Adds new awesome feature
</summary>

\${instructions}

Based on the provided code diff, create a concise but descriptive stash message following the instructions above.`,c=`You are an advanced AI programming assistant and are tasked with summarizing code changes into a concise and meaningful title and description. You will be provided with a code diff and optional additional context. Your goal is to analyze the changes and create a clear, informative title and description that accurately represents the modifications made to the code.

First, examine the following code changes provided in Git diff format:
<~~diff~~>
\${diff}
</~~diff~~>

Now, if provided, use this context to understand the motivation behind the changes and any relevant background information:
<~~additional-context~~>
\${context}
</~~additional-context~~>

To create an effective title and description, follow these steps:

1. Carefully analyze the diff and context, focusing on:
   - The purpose and rationale of the changes
   - Any problems addressed or benefits introduced
   - Any significant logic changes or algorithmic improvements
2. Ensure the following when composing the title and description:
   - Emphasize the 'why' of the change, its benefits, or the problem it addresses
   - Use an informal yet professional tone
   - Use a future-oriented manner, third-person singular present tense (e.g., 'Fixes', 'Updates', 'Improves', 'Adds', 'Removes')
   - Be clear and concise
   - Synthesize only meaningful information from the diff and context
   - Avoid outputting code, specific code identifiers, names, or file names unless crucial for understanding
   - Avoid repeating information, broad generalities, and unnecessary phrases like "this", "this commit", or "this change"
3. Summarize the main purpose of the changes in a single, concise sentence, which will be the title.
4. If necessary, provide a brief explanation of the changes, which will be the description.
   - Add line breaks for readability and to separate independent ideas
   - Focus on the "why" rather than the "what" of the changes.

Write your title inside <summary> tags and your description inside <body> tags and include no other text:

<summary>
Implements user authentication feature
</summary>
<body>
Adds login and registration endpoints
Updates user model to include password hashing
Integrates JWT for secure token generation
</body>

\${instructions}

Based on the provided code diff and any additional context, create a concise but meaningful title and description following the instructions above.`,u=`You are an advanced AI programming assistant and are tasked with summarizing code changes into a concise and meaningful code review title and description. You will be provided with a code diff and optional additional context. Your goal is to analyze the changes and create a clear, informative code review title and description that accurately represents the modifications made to the code.

First, examine the following code changes provided in Git diff format:
<~~diff~~>
\${diff}
</~~diff~~>

Now, if provided, use this context to understand the motivation behind the changes and any relevant background information:
<~~additional-context~~>
\${context}
</~~additional-context~~>

To create an effective title and description, follow these steps:

1. Carefully analyze the diff and context, focusing on:
   - The purpose and rationale of the changes
   - Any problems addressed or benefits introduced
   - Any significant logic changes or algorithmic improvements
2. Ensure the following when composing the title and description:
   - Emphasize the 'why' of the change, its benefits, or the problem it addresses
   - Use an informal yet professional tone
   - Use a future-oriented manner, third-person singular present tense (e.g., 'Fixes', 'Updates', 'Improves', 'Adds', 'Removes')
   - Be clear and concise
   - Synthesize only meaningful information from the diff and context
   - Avoid outputting code, specific code identifiers, names, or file names unless crucial for understanding
   - Avoid repeating information, broad generalities, and unnecessary phrases like "this", "this commit", or "this change"
3. Summarize the main purpose of the changes in a single, concise sentence, which will be the title.
4. If necessary, provide a brief explanation of the changes, which will be the description.
   - Add line breaks for readability and to separate independent ideas
   - Focus on the "why" rather than the "what" of the changes.

Write your title inside <summary> tags and your description inside <body> tags and include no other text:

<summary>
Implements user authentication feature
</summary>
<body>
Adds login and registration endpoints
Updates user model to include password hashing
Integrates JWT for secure token generation
</body>

\${instructions}

Based on the provided code diff and any additional context, create a concise but meaningful code review title and description following the instructions above.`,p=`You are an advanced AI programming assistant and are tasked with creating clear, technical summaries of code changes that help reviewers understand the modifications and their implications. You will analyze a code diff and the author-provided message to produce a structured summary that captures the essential aspects of the changes.

First, examine the following code changes provided in Git diff format:
<~~diff~~>
\${diff}
</~~diff~~>

Now, review the author-provided message to help understand the motivation behind the changes and any relevant background information:
<~~message~~>
\${message}
</~~message~~>

Analysis Instructions:
1. Examine the technical changes and their direct implications
2. Consider the scope of changes (small fix vs. major modification)
3. Identify any structural or behavioral changes
4. Look for potential side effects or dependencies
5. Note any obvious testing implications

Write your summary inside <summary> and <body> tags in the following structured markdown format, text in [] brackets should be replaced with your own text, if applicable, not including the brackets:

<summary>
[Concise, one-line description of the change]

[2-3 sentences explaining the core changes and their purpose]
</summary>
<body>
### Changes
- [Key technical modifications]
- [Important structural changes]
- [Modified components/files]

### Impact
- [Behavioral changes]
- [Dependencies affected]
- [Breaking changes, if any]
- [Performance implications, if apparent]
</body>

Guidelines:
- Keep the initial description under 80 characters
- Use clear, technical language
- Focus on observable changes from the diff
- Highlight significant code structure changes
- Base conclusions only on the code diff and message
- Avoid assumptions about business context
- Include specific file/component names only when relevant

\${instructions}

Based on the provided code diff and message, create a focused technical summary following the format above.`,m=`You are an expert at creating changelogs in the "Keep a Changelog" format (https://keepachangelog.com). Your task is to create a set of clear, informative changelog entries.

First, carefully examine the following JSON data containing commit messages and associated issues. The data is structured as an array of "change" objects. Each "change" contains a \`message\` (the commit message) and an \`issues\` array. The \`issues\` array contains objects representing associated issues, each with an \`id\`, \`url\`, and optional \`title\`.

<~~data~~>
\${data}
</~~data~~>

Guidelines for creating the changelog:

1. Analyze the commit messages and associated issue titles (if available) to understand the changes made. Be sure to read every commit message and associated issue titles to understand the purpose of each change.
2. Group changes into these categories (only include categories with actual changes):
   - Added: New features or capabilities
   - Changed: Changes to existing functionality
   - Deprecated: Features that will be removed in upcoming releases
   - Removed: Features that were removed
   - Fixed: Bug fixes
   - Security: Security-related changes
3. Order entries by importance within each category
4. Write a clear, concise, user-friendly descriptions for each change that focuses on the impact to users
   - Follow the example structure below of the Keep a Changelog format for each entry
   - Start with a third-person singular present tense verb (e.g., "Adds", "Changes", "Improves", "Removes", "Deprecates", "Fixes", etc.)
   - Avoid technical implementation details unless directly relevant to users
   - Combine related changes into single entries when appropriate, grouping the associated issues together as well
   - Focus on the what and why, not the how. One sentence is often sufficient, though bullets can be used for multiple related points
5. Prioritize user-facing changes. If a commit message describes internal refactoring or implementation details, try to infer the user-facing impact (if any) from the issue titles or other commits. If there's no user-facing impact, and no clear external benefit, omit the change
6. Use Markdown headings, links, and bullet points, adhering to Keep a Changelog structure
7. Provide only the changelog entry\u2014no additional text or commentary outside of the changelog

Example output structure:

### Added
- Adds brief description of the added feature ([#Issue-ID](Issue-URL))

### Changed
- Changes brief description of how something changed ([#Issue-ID](Issue-URL))
- Improves brief description of how something improved ([#Issue-ID](Issue-URL))

### Fixed
- Fixes Issue Title or brief description if no title ([#Issue-ID](Issue-URL))

\${instructions}

Based on the provided commit messages and associated issues, create a set of markdown changelog entries following the instructions above. Do not include any explanatory text or metadata`;var h=n(5167);function g(e,t){switch(e){case"generate-commitMessage":return{name:"Generate Commit Message",template:s,variables:["diff","context","instructions"]};case"generate-stashMessage":return{name:"Generate Stash Message",template:l,variables:["diff","context","instructions"]};case"generate-changelog":return{name:"Generate Changelog (Preview)",template:m,variables:["data","instructions"]};case"generate-create-cloudPatch":return{name:"Create Cloud Patch Details",template:c,variables:["diff","context","instructions"]};case"generate-create-codeSuggestion":return{name:"Create Code Suggestion Details",template:u,variables:["diff","context","instructions"]};case"generate-create-pullRequest":return{name:"Generate Pull Request Details (Preview)",template:d,variables:["diff","data","context","instructions"]};case"explain-changes":return{name:"Explain Changes",template:p,variables:["diff","message","instructions"]};default:return}}let f=["diff"];async function v(e,t,n,s,d,l){n.instructions&&(l["config.usedCustomInstructions"]=!0);let c=Object.entries(n).filter(([e])=>t.variables.includes(e)),u=t.template.length+(0,o.cz)(c,([,e])=>e.length),p=n,m=!1;for(let e of(u>s&&(m=!0,c=c.map(([e,n])=>{if(!f.includes(e))return[e,n];let a=s-(u-n.length);if(a>n.length)throw new i.V9(i.zK.RequestTooLarge,Error(`Unable to truncate context to fit within the ${t.name} limits`));return[e,n.substring(0,a)]})),t.variables))c.some(([t])=>t===e)||c.push([e,""]);p=Object.fromEntries(c);let g=(0,r.GW)(t.template,p),v=Math.ceil(g.length/h.PR),y=a.H.get("ai.largePromptWarningThreshold",void 0,1e4);if(l["retry.count"]=d,l["input.length"]=g.length,l["config.largePromptThreshold"]=y,0===d&&(l["warning.promptTruncated"]=m,v>y&&(l["warning.exceededLargePromptThreshold"]=!0,!await (0,h.Vt)(100*Math.ceil(v/100),y))))throw l["failed.reason"]="user-cancelled",l["failed.cancelled.reason"]="large-prompt",new i.AL;return{prompt:g,truncated:m}}}};