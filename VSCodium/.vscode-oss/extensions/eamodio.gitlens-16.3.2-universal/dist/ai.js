exports.id=53,exports.ids=[53],exports.modules={556:(e,t,n)=>{n.r(t),n.d(t,{AIProviderService:()=>AIProviderService,getMaxCharacters:()=>j,getOrPromptApiKey:()=>R,getValidatedTemperature:()=>L,showDiffTruncationWarning:()=>Y});var i=n(1398),a=n(4039),o=n(315),r=n(4931),s=n(9189),d=n(2251),l=n(156),c=n(5487);async function u(e,t){let n;let a=await (await e.ai)?.getModels()??[],o=[];for(let e of a){if(e.hidden)continue;n!==e.provider.id&&(n=e.provider.id,o.push({label:e.provider.name,kind:i.QuickPickItemKind.Separator}));let a=e.provider.id===t?.provider&&e.id===t?.model;o.push({label:e.name,iconPath:new i.ThemeIcon(a?"check":"blank"),model:e,picked:a})}let r=i.window.createQuickPick();r.ignoreFocusOut=(0,c.dW)();let s=[],u={iconPath:new i.ThemeIcon("clear-all"),tooltip:"Reset AI Keys..."};try{return await new Promise(e=>{s.push(r.onDidHide(()=>e(void 0)),r.onDidAccept(()=>{0!==r.activeItems.length&&e(r.activeItems[0])}),r.onDidTriggerButton(e=>{e===u&&(0,l.RS)(d.d.ResetAIKey)})),r.title="Select AI Model",r.placeholder="Choose an AI model to use",r.matchOnDescription=!0,r.matchOnDetail=!0,r.buttons=[u],r.items=o,r.show()})}finally{r.dispose(),s.forEach(e=>void e.dispose())}}var m=n(4143),p=n(212),h=n(471),g=n(7603),f=n(7223),v=n(5270);let y=`You are an advanced AI programming assistant and are tasked with summarizing code changes into a concise but meaningful commit message. You will be provided with a code diff and optional additional context. Your goal is to analyze the changes and create a clear, informative commit message that accurately represents the modifications made to the code.

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

Based on the provided code diff and any additional context, create a concise but meaningful commit message following the instructions above.`,w=`You are an advanced AI programming assistant and are tasked with creating a concise but descriptive stash message. You will be provided with a code diff of uncommitted changes. Your goal is to analyze the changes and create a clear, single-line stash message that accurately represents the work in progress being stashed.

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

Based on the provided code diff, create a concise but descriptive stash message following the instructions above.`,x=`You are an advanced AI programming assistant and are tasked with summarizing code changes into a concise and meaningful title and description. You will be provided with a code diff and optional additional context. Your goal is to analyze the changes and create a clear, informative title and description that accurately represents the modifications made to the code.

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

Based on the provided code diff and any additional context, create a concise but meaningful title and description following the instructions above.`,k=`You are an advanced AI programming assistant and are tasked with summarizing code changes into a concise and meaningful code review title and description. You will be provided with a code diff and optional additional context. Your goal is to analyze the changes and create a clear, informative code review title and description that accurately represents the modifications made to the code.

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

Based on the provided code diff and any additional context, create a concise but meaningful code review title and description following the instructions above.`,b=`You are an advanced AI programming assistant and are tasked with creating clear, technical summaries of code changes that help reviewers understand the modifications and their implications. You will analyze a code diff and the author-provided message to produce a structured summary that captures the essential aspects of the changes.

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

Based on the provided code diff and message, create a focused technical summary following the format above.`;let OpenAICompatibleProvider=class OpenAICompatibleProvider{constructor(e){this.container=e}dispose(){}async getApiKey(){let{keyUrl:e,keyValidator:t}=this.config;return R(this.container.storage,{id:this.id,name:this.name,validator:null!=t?e=>t.test(e):()=>!0,url:e})}getHeaders(e,t,n){return{Accept:"application/json","Content-Type":"application/json",Authorization:`Bearer ${n}`}}async generateMessage(e,t,n,i,a){let o=await this.getApiKey();if(null!=o)try{let[r,s]=await this.fetch(e,o,(e,o)=>{let r=[{role:"user",content:(0,g.GW)(i.userPrompt,{diff:t.substring(0,e),context:a?.context??"",instructions:i.customInstructions??""})}];return n["retry.count"]=o,n["input.length"]=(n["input.length"]??0)+(0,v.cz)(r,e=>e.content.length),r},4096,a?.cancellation);return t.length>s&&Y(s,e),r}catch(e){throw Error(`Unable to generate ${i.type} message: ${e.message}`)}}async generateDraftMessage(e,t,n,i){let a;return null!=i&&({codeSuggestion:a,...i}=i??{}),this.generateMessage(e,t,n,a?{type:"code-suggestion",userPrompt:k,customInstructions:m.H.get("ai.generateCodeSuggestMessage.customInstructions")}:{type:"cloud-patch",userPrompt:x,customInstructions:m.H.get("ai.generateCloudPatchMessage.customInstructions")},i)}async generateCommitMessage(e,t,n,i){return this.generateMessage(e,t,n,{type:"commit",userPrompt:y,customInstructions:m.H.get("ai.generateCommitMessage.customInstructions")},i)}async generateStashMessage(e,t,n,i){return this.generateMessage(e,t,n,{type:"stash",userPrompt:w,customInstructions:m.H.get("ai.generateStashMessage.customInstructions")},i)}async explainChanges(e,t,n,i,a){let o=await this.getApiKey();if(null!=o)try{let[r,s]=await this.fetch(e,o,(e,a)=>{let o=[{role:"user",content:(0,g.GW)(b,{diff:n.substring(0,e),message:t,instructions:m.H.get("ai.explainChanges.customInstructions")??""})}];return i["retry.count"]=a,i["input.length"]=(i["input.length"]??0)+(0,v.cz)(o,e=>e.content.length),o},4096,a?.cancellation);return n.length>s&&Y(s,e),r}catch(e){throw Error(`Unable to explain changes: ${e.message}`)}}async fetch(e,t,n,i,a){let o=0,r=j(e,2600);for(;;){let s={model:e.id,messages:n(r,o),stream:!1,max_completion_tokens:Math.min(i,e.maxTokens.output),temperature:L(e.temperature)},d=await this.fetchCore(e,t,s,a);if(!d.ok){let t=await this.handleFetchFailure(d,e,o,r);if(t.retry){r=t.maxCodeCharacters,o++;continue}}let l=await d.json();return[l.choices?.[0].message.content?.trim()??l.content?.[0]?.text?.trim()??"",r]}}async handleFetchFailure(e,t,n,i){let a;if(404===e.status)throw Error(`Your API key doesn't seem to have access to the selected '${t.id}' model`);if(429===e.status)throw Error(`(${this.name}) ${e.status}: Too many requests (rate limit exceeded) or your account is out of funds`);try{a=await e.json()}catch{}if(n<2&&a?.error?.code==="context_length_exceeded")return{retry:!0,maxCodeCharacters:i-500};throw Error(`(${this.name}) ${e.status}: ${a?.error?.message||e.statusText}`)}async fetchCore(e,t,n,i){let o;null!=i&&(o=new AbortController,i.onCancellationRequested(()=>o?.abort()));let r=this.getUrl(e);try{return await (0,f.hd)(r,{headers:{Accept:"application/json","Content-Type":"application/json",...this.getHeaders(e,r,t)},method:"POST",body:JSON.stringify(n),signal:o?.signal})}catch(e){if("AbortError"===e.name)throw new a.AL(e);throw e}}};let T={id:"anthropic",name:"Anthropic"},A=[{id:"claude-3-5-sonnet-latest",name:"Claude 3.5 Sonnet",maxTokens:{input:204800,output:8192},provider:T},{id:"claude-3-5-sonnet-20240620",name:"Claude 3.5 Sonnet",maxTokens:{input:204800,output:8192},provider:T,hidden:!0},{id:"claude-3-5-haiku-latest",name:"Claude 3.5 Haiku",maxTokens:{input:204800,output:8192},provider:T},{id:"claude-3-5-haiku-20241022",name:"Claude 3.5 Haiku",maxTokens:{input:204800,output:8192},provider:T,hidden:!0},{id:"claude-3-opus-latest",name:"Claude 3 Opus",maxTokens:{input:204800,output:4096},provider:T},{id:"claude-3-opus-20240229",name:"Claude 3 Opus",maxTokens:{input:204800,output:4096},provider:T,hidden:!0},{id:"claude-3-sonnet-20240229",name:"Claude 3 Sonnet",maxTokens:{input:204800,output:4096},provider:T},{id:"claude-3-haiku-20240307",name:"Claude 3 Haiku",maxTokens:{input:204800,output:4096},provider:T,default:!0},{id:"claude-2.1",name:"Claude 2.1",maxTokens:{input:204800,output:4096},provider:T}];let AnthropicProvider=class AnthropicProvider extends OpenAICompatibleProvider{id=T.id;name=T.name;config={keyUrl:"https://console.anthropic.com/account/keys",keyValidator:/(?:sk-)?[a-zA-Z0-9-_]{32,}/};getModels(){return Promise.resolve(A)}getUrl(e){return"https://api.anthropic.com/v1/messages"}getHeaders(e,t,n){return{Accept:"application/json","Content-Type":"application/json",Authorization:`Bearer ${n}`,"x-api-key":n,"anthropic-version":"2023-06-01"}}fetchCore(e,t,n,i){if("max_completion_tokens"in n){let{max_completion_tokens:e,...t}=n;n=e?{max_tokens:e,...t}:t}return super.fetchCore(e,t,n,i)}async handleFetchFailure(e,t,n,i){let a;if(404===e.status)throw Error(`Your API key doesn't seem to have access to the selected '${t.id}' model`);if(429===e.status)throw Error(`(${this.name}) ${e.status}: Too many requests (rate limit exceeded) or your account is out of funds`);try{a=await e.json()}catch{}if(n++<2&&a?.error?.type==="invalid_request_error"&&a?.error?.message?.includes("prompt is too long"))return{retry:!0,maxCodeCharacters:i-500*n};throw Error(`(${this.name}) ${e.status}: ${a?.error?.message||e.statusText})`)}};let P={id:"deepseek",name:"DeepSeek"},C=[{id:"deepseek-chat",name:"DeepSeek-V3",maxTokens:{input:65536,output:8192},provider:P,default:!0,temperature:0},{id:"deepseek-reasoner",name:"DeepSeek-R1",maxTokens:{input:65536,output:8192},provider:P,temperature:0}];let DeepSeekProvider=class DeepSeekProvider extends OpenAICompatibleProvider{id=P.id;name=P.name;config={keyUrl:"https://platform.deepseek.com/api_keys",keyValidator:/(?:sk-)?[a-zA-Z0-9]{32,}/};getModels(){return Promise.resolve(C)}getUrl(e){return"https://api.deepseek.com/v1/chat/completions"}};let I={id:"gemini",name:"Google"},M=[{id:"gemini-2.0-flash",name:"Gemini 2.0 Flash",maxTokens:{input:1048576,output:8192},provider:I},{id:"gemini-2.0-flash-001",name:"Gemini 2.0 Flash",maxTokens:{input:1048576,output:8192},provider:I,hidden:!0},{id:"gemini-2.0-flash-lite-preview-02-05",name:"Gemini 2.0 Flash-Lite (Preview)",maxTokens:{input:1048576,output:8192},provider:I},{id:"gemini-2.0-pro-exp-02-05",name:"Gemini 2.0 Pro (Experimental)",maxTokens:{input:2097152,output:8192},provider:I},{id:"gemini-2.0-flash-thinking-exp-01-21",name:"Gemini 2.0 Flash Thinking (Experimental)",maxTokens:{input:1048576,output:8192},provider:I},{id:"gemini-2.0-flash-exp",name:"Gemini 2.0 Flash (Experimental)",maxTokens:{input:1048576,output:8192},provider:I},{id:"gemini-exp-1206",name:"Gemini Experimental 1206",maxTokens:{input:2097152,output:8192},provider:I},{id:"gemini-exp-1121",name:"Gemini Experimental 1121",maxTokens:{input:2097152,output:8192},provider:I},{id:"gemini-1.5-pro-latest",name:"Gemini 1.5 Pro",maxTokens:{input:2097152,output:8192},provider:I,default:!0},{id:"gemini-1.5-flash-latest",name:"Gemini 1.5 Flash",maxTokens:{input:1048576,output:8192},provider:I},{id:"gemini-1.5-flash-8b",name:"Gemini 1.5 Flash 8B",maxTokens:{input:1048576,output:8192},provider:I}];let GeminiProvider=class GeminiProvider extends OpenAICompatibleProvider{id=I.id;name=I.name;config={keyUrl:"https://aistudio.google.com/app/apikey"};getModels(){return Promise.resolve(M)}getUrl(e){return"https://generativelanguage.googleapis.com/v1beta/chat/completions"}fetchCore(e,t,n,i){if("max_completion_tokens"in n){let{max_completion_tokens:e,...t}=n;n=e?{max_tokens:e,...t}:t}return super.fetchCore(e,t,n,i)}};let $={id:"github",name:"GitHub Models"};let GitHubModelsProvider=class GitHubModelsProvider extends OpenAICompatibleProvider{id=$.id;name=$.name;config={keyUrl:"https://github.com/settings/tokens",keyValidator:/(?:ghp-)?[a-zA-Z0-9]{32,}/};async getModels(){let e=await (0,f.hd)("https://github.com/marketplace?category=All&task=chat-completion&type=models",{headers:{Accept:"application/json","Content-Type":"application/json"}});return(await e.json()).results.map(e=>({id:e.name,name:e.friendly_name,maxTokens:{input:e.max_input_tokens,output:e.max_output_tokens},provider:$,temperature:null}))}getUrl(e){return"https://models.inference.ai.azure.com/chat/completions"}async handleFetchFailure(e,t,n,i){if(404!==e.status&&429!==e.status){let a;try{a=await e.json()}catch{}if(n<2&&a?.error?.code==="tokens_limit_reached"){let e=/Max size: (\d+) tokens/.exec(a?.error?.message);if(e?.[1]!=null)return{retry:!0,maxCodeCharacters:i=j(t,2600,parseInt(e[1],10))}}}return super.handleFetchFailure(e,t,n,i)}};let E={id:"huggingface",name:"Hugging Face"};let HuggingFaceProvider=class HuggingFaceProvider extends OpenAICompatibleProvider{id=E.id;name=E.name;config={keyUrl:"https://huggingface.co/settings/tokens",keyValidator:/(?:hf_)?[a-zA-Z0-9]{32,}/};async getModels(){let e=new URLSearchParams({filter:"text-generation,conversational",inference:"warm",sort:"trendingScore",limit:"30"}),t=await (0,f.hd)(`https://huggingface.co/api/models?${e.toString()}`,{headers:{Accept:"application/json","Content-Type":"application/json"},method:"GET"});return(await t.json()).map(e=>({id:e.id,name:e.id.split("/").pop(),maxTokens:{input:4096,output:4096},provider:E,temperature:null}))}getUrl(e){return`https://api-inference.huggingface.co/models/${e.id}/v1/chat/completions`}};let S={id:"openai",name:"OpenAI"},G=[{id:"o3-mini",name:"o3 mini",maxTokens:{input:2e5,output:1e5},provider:S,temperature:null},{id:"o1",name:"o1",maxTokens:{input:2e5,output:1e5},provider:S,temperature:null},{id:"o1-2024-12-17",name:"o1",maxTokens:{input:2e5,output:1e5},provider:S,temperature:null,hidden:!0},{id:"o1-preview",name:"o1 preview",maxTokens:{input:128e3,output:32768},provider:S,temperature:null},{id:"o1-preview-2024-09-12",name:"o1 preview",maxTokens:{input:128e3,output:32768},provider:S,temperature:null,hidden:!0},{id:"o1-mini",name:"o1 mini",maxTokens:{input:128e3,output:65536},provider:S,temperature:null},{id:"o1-mini-2024-09-12",name:"o1 mini",maxTokens:{input:128e3,output:65536},provider:S,temperature:null,hidden:!0},{id:"gpt-4o",name:"GPT-4o",maxTokens:{input:128e3,output:16384},provider:S,default:!0},{id:"gpt-4o-2024-08-06",name:"GPT-4o",maxTokens:{input:128e3,output:16384},provider:S,hidden:!0},{id:"gpt-4o-2024-05-13",name:"GPT-4o",maxTokens:{input:128e3,output:4096},provider:S,hidden:!0},{id:"chatgpt-4o-latest",name:"GPT-4o",maxTokens:{input:128e3,output:16384},provider:S,hidden:!0},{id:"gpt-4o-mini",name:"GPT-4o mini",maxTokens:{input:128e3,output:16384},provider:S},{id:"gpt-4o-mini-2024-07-18",name:"GPT-4o mini",maxTokens:{input:128e3,output:16384},provider:S,hidden:!0},{id:"gpt-4-turbo",name:"GPT-4 Turbo",maxTokens:{input:128e3,output:4096},provider:S},{id:"gpt-4-turbo-2024-04-09",name:"GPT-4 Turbo preview (2024-04-09)",maxTokens:{input:128e3,output:4096},provider:S,hidden:!0},{id:"gpt-4-turbo-preview",name:"GPT-4 Turbo preview",maxTokens:{input:128e3,output:4096},provider:S},{id:"gpt-4-0125-preview",name:"GPT-4 0125 preview",maxTokens:{input:128e3,output:4096},provider:S,hidden:!0},{id:"gpt-4-1106-preview",name:"GPT-4 1106 preview",maxTokens:{input:128e3,output:4096},provider:S,hidden:!0},{id:"gpt-4",name:"GPT-4",maxTokens:{input:8192,output:4096},provider:S},{id:"gpt-4-0613",name:"GPT-4 0613",maxTokens:{input:8192,output:4096},provider:S,hidden:!0},{id:"gpt-4-32k",name:"GPT-4 32k",maxTokens:{input:32768,output:4096},provider:S,hidden:!0},{id:"gpt-4-32k-0613",name:"GPT-4 32k 0613",maxTokens:{input:32768,output:4096},provider:S,hidden:!0},{id:"gpt-3.5-turbo",name:"GPT-3.5 Turbo",maxTokens:{input:16385,output:4096},provider:S},{id:"gpt-3.5-turbo-0125",name:"GPT-3.5 Turbo 0125",maxTokens:{input:16385,output:4096},provider:S,hidden:!0},{id:"gpt-3.5-turbo-1106",name:"GPT-3.5 Turbo 1106",maxTokens:{input:16385,output:4096},provider:S,hidden:!0},{id:"gpt-3.5-turbo-16k",name:"GPT-3.5 Turbo 16k",maxTokens:{input:16385,output:4096},provider:S,hidden:!0}];let OpenAIProvider=class OpenAIProvider extends OpenAICompatibleProvider{id=S.id;name=S.name;config={keyUrl:"https://platform.openai.com/account/api-keys",keyValidator:/(?:sk-)?[a-zA-Z0-9]{32,}/};getModels(){return Promise.resolve(G)}getUrl(e){return m.H.get("ai.openai.url")||"https://api.openai.com/v1/chat/completions"}getHeaders(e,t,n){return t.includes(".azure.com")?{Accept:"application/json","Content-Type":"application/json","api-key":n}:super.getHeaders(e,t,n)}};let _={id:"vscode",name:"VS Code Provided"},U="GitLens leverages Copilot for AI-powered features to improve your workflow and development experience.";let VSCodeAIProvider=class VSCodeAIProvider{constructor(e){this.container=e}id=_.id;_name;get name(){return this._name??_.name}dispose(){}async getModels(){return(await i.lm.selectChatModels()).map(D)}async getChatModel(e){let t=await i.lm.selectChatModels(e.selector);return t?.[0]}async generateMessage(e,t,n,a,o){let r,s;let d=await this.getChatModel(e);if(null==d)return;r=o?.cancellation==null?(s=new i.CancellationTokenSource).token:o.cancellation;let l=0,c=j(e,2600)-1e3;try{for(;;){let s=[i.LanguageModelChatMessage.User((0,g.GW)(a.userPrompt,{diff:t.substring(0,c),context:o?.context??"",instructions:a.customInstructions??""}))];n["retry.count"]=l,n["input.length"]=(n["input.length"]??0)+(0,v.cz)(s,e=>e.content.length);try{let n=await d.sendRequest(s,{justification:U,modelOptions:{temperature:L(e.temperature)}},r);t.length>c&&Y(c,e);let i="";for await(let e of n.text)i+=e;return i.trim()}catch(n){let t=n instanceof Error?n.message:String(n);if(n instanceof Error&&"code"in n&&"NoPermissions"===n.code)throw Error(`User denied access to ${e.provider.name}`);if(n instanceof Error&&"cause"in n&&n.cause instanceof Error&&(t+=`
${n.cause.message}`,l++<2&&n.cause.message.includes("exceeds token limit"))){c-=500*l;continue}throw Error(`Unable to generate ${a.type} message: (${e.provider.name}${n.code?`:${n.code}`:""}) ${t}`)}}}finally{s?.dispose()}}async generateDraftMessage(e,t,n,i){let a;return null!=i&&({codeSuggestion:a,...i}=i??{}),this.generateMessage(e,t,n,a?{type:"code-suggestion",userPrompt:k,customInstructions:m.H.get("ai.generateCodeSuggestMessage.customInstructions")}:{type:"cloud-patch",userPrompt:x,customInstructions:m.H.get("ai.generateCloudPatchMessage.customInstructions")},i)}async generateCommitMessage(e,t,n,i){return this.generateMessage(e,t,n,{type:"commit",userPrompt:y,customInstructions:m.H.get("ai.generateCommitMessage.customInstructions")},i)}async generateStashMessage(e,t,n,i){return this.generateMessage(e,t,n,{type:"stash",userPrompt:w,customInstructions:m.H.get("ai.generateStashMessage.customInstructions")},i)}async explainChanges(e,t,n,a,o){let r,s;let d=await this.getChatModel(e);if(null==d)return;r=o?.cancellation==null?(s=new i.CancellationTokenSource).token:o.cancellation;let l=0,c=j(e,3e3)-1e3;try{for(;;){let o=n.substring(0,c),s=[i.LanguageModelChatMessage.User((0,g.GW)(b,{diff:o,message:t,instructions:m.H.get("ai.explainChanges.customInstructions")??""}))];a["retry.count"]=l,a["input.length"]=(a["input.length"]??0)+(0,v.cz)(s,e=>e.content.length);try{let t=await d.sendRequest(s,{justification:U,modelOptions:null!=e.temperature?{temperature:e.temperature}:void 0},r);n.length>c&&Y(c,e);let i="";for await(let e of t.text)i+=e;return i.trim()}catch(n){let t=n instanceof Error?n.message:String(n);if(n instanceof Error&&"code"in n&&"NoPermissions"===n.code)throw Error(`User denied access to ${e.provider.name}`);if(n instanceof Error&&"cause"in n&&n.cause instanceof Error&&(t+=`
${n.cause.message}`,l++<2&&n.cause.message.includes("exceeds token limit"))){c-=500*l;continue}throw Error(`Unable to explain changes: (${e.provider.name}${n.code?`:${n.code}`:""}) ${t}`)}}}finally{s?.dispose()}}};function D(e){return{id:`${e.vendor}:${e.family}`,name:`${(0,g.ZH)(e.vendor)} ${e.name}`,vendor:e.vendor,selector:{vendor:e.vendor,family:e.family},maxTokens:{input:e.maxInputTokens,output:4096},provider:{id:_.id,name:(0,g.ZH)(e.vendor)}}}let F={id:"xai",name:"xAI"},z=[{id:"grok-beta",name:"Grok Beta",maxTokens:{input:131072,output:4096},provider:F,default:!0}];let xAIProvider=class xAIProvider extends OpenAICompatibleProvider{id=F.id;name=F.name;config={keyUrl:"https://console.x.ai/",keyValidator:/(?:xai-)?[a-zA-Z0-9]{32,}/};getModels(){return Promise.resolve(z)}getUrl(e){return"https://api.x.ai/v1/chat/completions"}};let H=new Map([...(0,c.Av)("language-models")?[["vscode",VSCodeAIProvider]]:[],["openai",OpenAIProvider],["anthropic",AnthropicProvider],["gemini",GeminiProvider],["deepseek",DeepSeekProvider],["xai",xAIProvider],["github",GitHubModelsProvider],["huggingface",HuggingFaceProvider]]);let AIProviderService=class AIProviderService{constructor(e){this.container=e}_provider;_model;dispose(){this._provider?.dispose()}get currentProviderId(){return this._provider?.id}getConfiguredModel(){let e=m.H.get("ai.model")??void 0;if(null!=e){let[t,n]=e.split(":");if(null!=t&&this.supports(t)&&(null!=n||"vscode"===t&&null!=(n=m.H.get("ai.vscode.model"))&&/^(.+):(.+)$/.test(n)))return{provider:t,model:n}}}async getModels(){let e=[...H.values()].map(e=>new e(this.container));return(await Promise.allSettled(e.map(e=>e.getModels()))).flatMap(e=>(0,h.Ro)(e,[]))}async getModel(e){let t=this.getConfiguredModel();if(!e?.force&&t?.provider!=null&&t?.model!=null){let e=await this.getOrUpdateModel(t.provider,t.model);if(null!=e)return e}if(e?.silent)return;let n=await u(this.container,t);if(null!=n)return this.getOrUpdateModel(n.model)}async getOrUpdateModel(e,t){let n,i;n="string"==typeof e?e:(i=e).provider.id;let a=!1;if(n!==this._provider?.id){a=!0,this._provider?.dispose();let e=H.get(n);if(null==e){this._provider=void 0,this._model=void 0;return}this._provider=new e(this.container)}if(null==i){if(null!=t&&t===this._model?.id)i=this._model;else if(a=!0,null==(i=(await this._provider.getModels())?.find(e=>e.id===t))){this._model=void 0;return}}else i.id!==this._model?.id&&(a=!0);return a&&(i.provider.id===_.id?(await m.H.updateEffective("ai.model","vscode"),await m.H.updateEffective("ai.vscode.model",i.id)):await m.H.updateEffective("ai.model",`${i.provider.id}:${i.id}`)),this._model=i,i}async generateCommitMessage(e,t,n){let o=await this.getChanges(e);if(null==o)return;let{confirmed:r,model:s}=await O(this,this.container.storage);if(null==s){n?.generating?.cancel();return}let d={type:"commitMessage","model.id":s.id,"model.provider.id":s.provider.id,"model.provider.name":s.provider.name,"retry.count":0},l={source:t.source};if(!r){this.container.telemetry.sendEvent("ai/generate",{...d,"failed.reason":"user-declined"},l),n?.generating?.cancel();return}if(n?.cancellation?.isCancellationRequested){this.container.telemetry.sendEvent("ai/generate",{...d,"failed.reason":"user-cancelled"},l),n?.generating?.cancel();return}let c=this._provider.generateCommitMessage(s,o,d,{cancellation:n?.cancellation,context:n?.context});n?.generating?.fulfill(s);let u=Date.now();try{let e=await (n?.progress!=null?i.window.withProgress({...n.progress,title:`Generating commit message with ${s.name}...`},()=>c):c);if(d["output.length"]=e?.length,this.container.telemetry.sendEvent("ai/generate",{...d,duration:Date.now()-u},l),null==e)return;return W(e)}catch(e){throw this.container.telemetry.sendEvent("ai/generate",{...d,duration:Date.now()-u,...e instanceof a.AL?{"failed.reason":"user-cancelled"}:{"failed.reason":"error","failed.error":String(e)}},l),e}}async generateDraftMessage(e,t,n){let o=await this.getChanges(e);if(null==o)return;let{confirmed:r,model:s}=await O(this,this.container.storage);if(null==s){n?.generating?.cancel();return}let d={type:"draftMessage",draftType:t.type,"model.id":s.id,"model.provider.id":s.provider.id,"model.provider.name":s.provider.name,"retry.count":0},l={source:t.source};if(!r){this.container.telemetry.sendEvent("ai/generate",{...d,"failed.reason":"user-declined"},l),n?.generating?.cancel();return}if(n?.cancellation?.isCancellationRequested){this.container.telemetry.sendEvent("ai/generate",{...d,"failed.reason":"user-cancelled"},l),n?.generating?.cancel();return}let c=this._provider.generateDraftMessage(s,o,d,{cancellation:n?.cancellation,context:n?.context,codeSuggestion:n?.codeSuggestion});n?.generating?.fulfill(s);let u=Date.now();try{let e=await (n?.progress!=null?i.window.withProgress(n.progress,()=>c):c);if(d["output.length"]=e?.length,this.container.telemetry.sendEvent("ai/generate",{...d,duration:Date.now()-u},l),null==e)return;return W(e)}catch(e){throw this.container.telemetry.sendEvent("ai/generate",{...d,duration:Date.now()-u,...e instanceof a.AL?{"failed.reason":"user-cancelled"}:{"failed.reason":"error","failed.error":String(e)}},l),e}}async generateStashMessage(e,t,n){let o=await this.getChanges(e);if(null==o){n?.generating?.cancel();return}let{confirmed:r,model:s}=await O(this,this.container.storage);if(null==s){n?.generating?.cancel();return}let d={type:"stashMessage","model.id":s.id,"model.provider.id":s.provider.id,"model.provider.name":s.provider.name,"retry.count":0},l={source:t.source};if(!r){this.container.telemetry.sendEvent("ai/generate",{...d,"failed.reason":"user-declined"},l),n?.generating?.cancel();return}if(n?.cancellation?.isCancellationRequested){this.container.telemetry.sendEvent("ai/generate",{...d,"failed.reason":"user-cancelled"},l),n?.generating?.cancel();return}let c=this._provider.generateStashMessage(s,o,d,{cancellation:n?.cancellation,context:n?.context});n?.generating?.fulfill(s);let u=Date.now();try{let e=await (n?.progress!=null?i.window.withProgress({...n.progress,title:`Generating stash message with ${s.name}...`},()=>c):c);if(d["output.length"]=e?.length,this.container.telemetry.sendEvent("ai/generate",{...d,duration:Date.now()-u},l),null==e)return;return W(e)}catch(e){throw this.container.telemetry.sendEvent("ai/generate",{...d,duration:Date.now()-u,...e instanceof a.AL?{"failed.reason":"user-cancelled"}:{"failed.reason":"error","failed.error":String(e)}},l),e}}async getChanges(e,t){let n;if("string"==typeof e)n=e;else if(Array.isArray(e))n=e.join("\n");else{let i=await this.container.git.getDiff(e.uri,r.id);if(!i?.contents&&(i=await this.container.git.getDiff(e.uri,r.SU),!i?.contents))throw Error("No changes to generate a commit message from.");if(t?.cancellation?.isCancellationRequested)return;n=i.contents}return n}async explainCommit(e,t,n){let r=await this.container.git.getDiff(e.repoPath,e.ref);if(!r?.contents)throw Error("No changes found to explain.");let{confirmed:d,model:l}=await O(this,this.container.storage);if(null==l)return;let c={type:"change",changeType:t.type,"model.id":l.id,"model.provider.id":l.provider.id,"model.provider.name":l.provider.name,"retry.count":0},u={source:t.source};if(!d){this.container.telemetry.sendEvent("ai/explain",{...c,"failed.reason":"user-declined"},u);return}let m=(0,o.WM)(e)?e:await this.container.git.commits(e.repoPath).getCommit(e.ref);if(null==m)throw Error("Unable to find commit");if(m.hasFullDetails()||(await m.ensureFullDetails(),(0,s.aQ)(m)),n?.cancellation?.isCancellationRequested){this.container.telemetry.sendEvent("ai/explain",{...c,"failed.reason":"user-cancelled"},u);return}let p=this._provider.explainChanges(l,m.message,r.contents,c,{cancellation:n?.cancellation}),h=Date.now();try{let e=await (n?.progress!=null?i.window.withProgress(n.progress,()=>p):p);if(c["output.length"]=e?.length,this.container.telemetry.sendEvent("ai/explain",{...c,duration:Date.now()-h},u),null==e)return;return W(e)}catch(e){throw this.container.telemetry.sendEvent("ai/explain",{...c,duration:Date.now()-h,...e instanceof a.AL?{"failed.reason":"user-cancelled"}:{"failed.reason":"error","failed.error":String(e)}},u),e}}async reset(e){let t,{_provider:n}=this;null==n&&(await this.getModel({silent:!0}),n=this._provider);let a={title:"Reset Current"},o={title:"Reset All"},r={title:"Cancel",isCloseAffordance:!0};if(t=e?o:null==n?await i.window.showInformationMessage("Do you want to reset all of the stored AI keys?",{modal:!0},o,r):await i.window.showInformationMessage(`Do you want to reset the stored key for the current provider (${n.name}) or reset all of the stored AI keys?`,{modal:!0},a,o,r),null!=n&&t===a)i.env.clipboard.writeText(await this.container.storage.getSecret(`gitlens.${n.id}.key`)??""),this.container.storage.deleteSecret(`gitlens.${n.id}.key`),this.container.storage.delete(`confirm:ai:tos:${n.id}`),this.container.storage.deleteWorkspace(`confirm:ai:tos:${n.id}`);else if(t===o){let e=[];for(let[t]of H)e.push(await this.container.storage.getSecret(`gitlens.${t}.key`));for(let[t]of(i.env.clipboard.writeText(e.join("\n")),H))this.container.storage.deleteSecret(`gitlens.${t}.key`);this.container.storage.deleteWithPrefix("confirm:ai:tos"),this.container.storage.deleteWorkspaceWithPrefix("confirm:ai:tos")}}supports(e){return H.has(e)}switchModel(){return this.getModel({force:!0})}};async function O(e,t){let n=await e.getModel();for(;;){if(null==n)return{confirmed:!1,model:n};if(t.get(`confirm:ai:tos:${n.provider.id}`,!1)||t.getWorkspace(`confirm:ai:tos:${n.provider.id}`,!1))return{confirmed:!0,model:n};let a={title:"Continue"},o={title:"Switch Model"},r={title:"Always for this Workspace"},s={title:"Always"},d={title:"Cancel",isCloseAffordance:!0},l=await i.window.showInformationMessage(`GitLens AI features require sending a diff of the code changes to ${n.provider.name} for analysis. This may contain sensitive information.

Do you want to continue?`,{modal:!0},a,o,r,s,d);if(l===o){n=await e.switchModel();continue}if(l===a)return{confirmed:!0,model:n};if(l===r)return t.storeWorkspace(`confirm:ai:tos:${n.provider.id}`,!0).catch(),{confirmed:!0,model:n};if(l===s)return t.store(`confirm:ai:tos:${n.provider.id}`,!0).catch(),{confirmed:!0,model:n};return{confirmed:!1,model:n}}}function j(e,t,n){let i=(n??e.maxTokens.input)*3.1-t/3.1;return Math.floor(i-.1*i)}async function R(e,t){let n=await e.getSecret(`gitlens.${t.id}.key`);if(!n){let a=i.window.createInputBox();a.ignoreFocusOut=!0;let o=[];try{let e={iconPath:new i.ThemeIcon("link-external"),tooltip:`Open the ${t.name} API Key Page`};n=await new Promise(n=>{o.push(a.onDidHide(()=>n(void 0)),a.onDidChangeValue(e=>{if(e&&!t.validator(e)){a.validationMessage=`Please enter a valid ${t.name} API key`;return}a.validationMessage=void 0}),a.onDidAccept(()=>{let e=a.value.trim();if(!e||!t.validator(e)){a.validationMessage=`Please enter a valid ${t.name} API key`;return}n(e)}),a.onDidTriggerButton(n=>{n===e&&i.env.openExternal(i.Uri.parse(t.url))})),a.password=!0,a.title=`Connect to ${t.name}`,a.placeholder=`Please enter your ${t.name} API key to use this feature`,a.prompt=`Enter your [${t.name} API Key](${t.url} "Get your ${t.name} API key")`,a.buttons=[e],a.show()})}finally{a.dispose(),o.forEach(e=>void e.dispose())}if(!n)return;e.storeSecret(`gitlens.${t.id}.key`,n).catch()}return n}function W(e){e=e.trim();let t=e.match(/<summary>\s?([\s\S]*?)\s?(<\/summary>|$)/)?.[1]?.trim()??"",n=e.match(/<body>\s?([\s\S]*?)\s?(<\/body>|$)/)?.[1]?.trim()??"";if(!t&&!n)return B(e);if(t&&!n){if(!(n=e.replace(/<summary>[\s\S]*?<\/summary>/,"")?.trim()??""))return B(t)}else if(!t&&n&&!(t=e.replace(/<body>[\s\S]*?<\/body>/,"").trim()??""))return B(n);return{summary:t,body:n}}function B(e){let t=e.indexOf("\n");return -1===t?{summary:e,body:""}:{summary:e.substring(0,t).trim(),body:e.substring(t+1).trim()}}function Y(e,t){i.window.showWarningMessage(`The diff of the changes had to be truncated to ${(0,p.bH)(e)} characters to fit within the ${(0,g.Lu)(t.provider.name)} limits.`)}function L(e){if(null!==e)return null!=e?e:Math.max(0,Math.min(m.H.get("ai.modelOptions.temperature"),2))}}};