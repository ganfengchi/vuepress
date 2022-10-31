import{_ as n,o as s,c as a,b as t}from"./app.6dbf2532.js";const p={},e=t(`<h1 id="axios-\u5C01\u88C5" tabindex="-1"><a class="header-anchor" href="#axios-\u5C01\u88C5" aria-hidden="true">#</a> axios \u5C01\u88C5</h1><p>\u4E3A\u4EC0\u4E48\u8981\u5C01\u88C5axios\u5462,\u56E0\u4E3A\u9875\u9762\u4E5F\u53EF\u592A\u591A \uFF0C\u592A\u5206\u6563\u4E0D\u592A\u597D\u7BA1\u7406 http.js</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&quot;axios&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> baseURL<span class="token punctuation">;</span>

<span class="token comment">// \u73AF\u5883\u7684\u5207\u6362</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">==</span> <span class="token string">&quot;development&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// baseURL = &#39;http://172.24.148.199:7003&#39;;</span>
  baseURL <span class="token operator">=</span> <span class="token string">&quot;http://172.24.152.247:7070&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">==</span> <span class="token string">&quot;production&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  baseURL <span class="token operator">=</span> <span class="token string">&quot;http://172.24.148.199:5000&quot;</span><span class="token punctuation">;</span>
  <span class="token comment">// axios.defaults.baseURL = &#39;http://172.24.148.199:7003&#39;;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> request <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// API \u8BF7\u6C42\u7684\u9ED8\u8BA4\u524D\u7F00</span>
  <span class="token comment">// baseURL: p<wbr>rocess.env.VUE_APP_API_BASE_URL,</span>
  baseURL<span class="token punctuation">,</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">30000</span><span class="token punctuation">,</span> <span class="token comment">// \u8BF7\u6C42\u8D85\u65F6\u65F6\u95F4</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u5F02\u5E38\u62E6\u622A\u5904\u7406\u5668</span>
<span class="token keyword">const</span> <span class="token function-variable function">errorHandler</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
    <span class="token comment">// \u4ECE localstorage \u83B7\u53D6 token</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">403</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      notification<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&quot;Forbidden&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">description</span><span class="token operator">:</span> data<span class="token punctuation">.</span>message<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>
      error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">401</span> <span class="token operator">&amp;&amp;</span>
      <span class="token operator">!</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>result <span class="token operator">&amp;&amp;</span> data<span class="token punctuation">.</span>result<span class="token punctuation">.</span>isLogin<span class="token punctuation">)</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      notification<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&quot;Unauthorized&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&quot;Authorization verification failed&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// if (token) {</span>
      <span class="token comment">//   store.dispatch(&#39;Logout&#39;).then(() =&gt; {</span>
      <span class="token comment">//     setTimeout(() =&gt; {</span>
      <span class="token comment">//       window.location.reload()</span>
      <span class="token comment">//     }, 1500)</span>
      <span class="token comment">//   })</span>
      <span class="token comment">// }</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u53D6\u6D88\u8BF7\u6C42</span>
<span class="token keyword">const</span> CancelToken <span class="token operator">=</span> axios<span class="token punctuation">.</span>CancelToken<span class="token punctuation">;</span>
<span class="token keyword">let</span> axiosCancel <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">//\u5B9A\u4E49\u5B58\u653E\u53D6\u6D88\u7684\u8BF7\u6C42\u65B9\u6CD5</span>
<span class="token keyword">let</span> requestText<span class="token punctuation">;</span>
<span class="token keyword">let</span> responseText<span class="token punctuation">;</span>

<span class="token comment">// request interceptor</span>
request<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>params <span class="token operator">&amp;&amp;</span> config<span class="token punctuation">.</span>params<span class="token punctuation">.</span>searchingText<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u6A21\u7CCA\u67E5\u8BE2\u7684\u65F6\u5019\u907F\u514D\u8F93\u5165\u592A\u5FEB\uFF0C\u76F4\u63A5\u53D6\u6700\u540E\u4E00\u6B21\u8BF7\u6C42\u8FD4\u56DE\u7684\u7ED3\u679C</span>
    requestText <span class="token operator">=</span> config<span class="token punctuation">.</span>params<span class="token punctuation">.</span>searchingText<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> axiosCancel <span class="token operator">===</span> <span class="token string">&quot;function&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//\u5728\u8BF7\u6C42\u53D1\u51FA\u524D\u53D6\u6D88\u4E0A\u4E00\u6B21\u672A\u5B8C\u6210\u7684\u8BF7\u6C42</span>
      <span class="token function">axiosCancel</span><span class="token punctuation">(</span><span class="token string">&quot;\u7EC8\u6B62\u8BF7\u6C42&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u53D6\u6D88\u8BF7\u6C42</span>
    <span class="token punctuation">}</span>
    config<span class="token punctuation">.</span>cancelToken <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CancelToken</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">executor</span><span class="token punctuation">(</span><span class="token parameter">c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      axiosCancel <span class="token operator">=</span> c<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> requestText <span class="token operator">||</span> config<span class="token punctuation">;</span>
  <span class="token comment">// return config</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> errorHandler<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// response interceptor</span>
request<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>config<span class="token punctuation">.</span>params <span class="token operator">&amp;&amp;</span> response<span class="token punctuation">.</span>config<span class="token punctuation">.</span>params<span class="token punctuation">.</span>searchingText<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      responseText <span class="token operator">=</span> response<span class="token punctuation">.</span>config<span class="token punctuation">.</span>params<span class="token punctuation">.</span>searchingText<span class="token punctuation">;</span>
      axiosCancel <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> responseText <span class="token operator">||</span> response<span class="token punctuation">;</span>
    <span class="token comment">// return response</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>axios<span class="token punctuation">.</span><span class="token function">isCancel</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Rquest canceled\uFF1A&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u8BF7\u6C42\u5982\u679C\u88AB\u53D6\u6D88\uFF0C\u8FD9\u91CC\u662F\u8FD4\u56DE\u53D6\u6D88\u7684message</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>err <span class="token operator">&amp;&amp;</span> err<span class="token punctuation">.</span>response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> installer <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">vm</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">install</span><span class="token punctuation">(</span><span class="token parameter">Vue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueAxios<span class="token punctuation">,</span> request<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> request<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>api.js</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> request <span class="token keyword">from</span> <span class="token string">&#39;./http&#39;</span>


<span class="token doc-comment comment">/**
 * login func
 * parameter: <span class="token punctuation">{</span>
 *     username: &#39;&#39;,
 *     password: &#39;&#39;,
 *     remember_me: true,
 *     captcha: &#39;12345&#39;
 * <span class="token punctuation">}</span>
 * <span class="token keyword">@param</span> <span class="token parameter">parameter</span>
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">const</span> Api <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">getListTableData</span><span class="token operator">:</span> <span class="token string">&#39;api/tpl&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">getTypeData</span><span class="token operator">:</span> <span class="token string">&quot;/api/type&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">deleteLog</span><span class="token operator">:</span> <span class="token string">&quot;/api/tpl&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">putLog</span><span class="token operator">:</span><span class="token string">&quot;/api/tpl&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">postLog</span><span class="token operator">:</span><span class="token string">&quot;/api/tpl&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// getAllHistoryTime: &#39;/visualAll/getAllHistoryTime&#39;, //\u83B7\u53D6\u538B\u6D4B\u65F6\u95F4</span>
  <span class="token comment">// leftMainBusiness: &#39;/visual/leftMainBusiness&#39;, //\u83B7\u53D6\u5DE6\u4FA7\u5BFC\u822A\u680F</span>
  <span class="token comment">// clusterTps: &quot;/visualAll/clusterTps&quot;, //\u83B7\u53D6\u538B\u6D4B\u603B\u89C8 \u91D1\u6865\uFF0C\u798F\u7530\uFF0C\u4E1C\u839E\u5927\u6982</span>
  <span class="token comment">// getPandectList: &#39;/visualAll/list&#39;, //\u83B7\u53D6\u538B\u6D4B\u603B\u89C8list</span>
  <span class="token comment">// searchChildBusiness: &quot;/visual/searchChildBusiness&quot;, //\u4EA4\u6613\u9875\u9762 \u4E0B\u62C9\u83DC\u5355\u4E1A\u52A1\u6570\u636E</span>
  <span class="token comment">// visualSearchUrl: &quot;/visual/searchUrl&quot;, //\u4EA4\u6613\u9875\u9762 \u4E0B\u62C9\u83DC\u5355 url\u6570\u636E </span>
  <span class="token comment">// visualList: &#39;/visual/list&#39;, //\u4EA4\u6613\u9875\u9762 \u67E5\u8BE2\u6240\u6709list</span>
  <span class="token comment">// newVisualList: &quot;/visual/listPage&quot;, //\u4EA4\u6613\u9875\u9762  \u5206\u9875\u67E5\u8BE2\u6240\u6709list</span>
  <span class="token comment">// getToolUrl: &quot;/common/getToolUrl&quot;, // \u83B7\u53D6\u914D\u7F6E\u7CFB\u7EDFurl</span>
  <span class="token comment">// getChartsUrl: &quot;/testData&quot;, // \u83B7\u53D6\u56FE\u8868\u6570\u636E</span>
  <span class="token comment">// searchUrl: &quot;/visual/searchUrlJump&quot;, // \u6A21\u7CCA\u5339\u914D\u67E5\u627Eurl\u5217\u8868</span>
<span class="token punctuation">}</span>


<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">ListTableData</span><span class="token punctuation">(</span><span class="token parameter">current<span class="token punctuation">,</span> pageSize</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> Api<span class="token punctuation">.</span>getListTableData <span class="token operator">+</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">?current=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>current<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&amp;pageSize=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>pageSize<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getTypeData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> Api<span class="token punctuation">.</span>getTypeData<span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">deleteLog</span><span class="token punctuation">(</span><span class="token parameter">_self</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> Api<span class="token punctuation">.</span>deleteLog<span class="token operator">+</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>_self<span class="token punctuation">.</span>dellogData<span class="token punctuation">.</span>template_type<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>_self<span class="token punctuation">.</span>dellogData<span class="token punctuation">.</span>servicename<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;delete&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">putLog</span><span class="token punctuation">(</span><span class="token parameter">_self<span class="token punctuation">,</span>data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> Api<span class="token punctuation">.</span>putLog<span class="token operator">+</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>_self<span class="token punctuation">.</span>template_typeData<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>_self<span class="token punctuation">.</span>servicenameData<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;put&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span>data<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">postLog</span><span class="token punctuation">(</span><span class="token parameter">_self<span class="token punctuation">,</span>data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">///api/tpl/\${this.template_typeData}/\${this.servicenameData}</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> Api<span class="token punctuation">.</span>postLog<span class="token operator">+</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>_self<span class="token punctuation">.</span>template_typeData<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>_self<span class="token punctuation">.</span>servicenameData<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span>data<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[e];function c(i,l){return s(),a("div",null,o)}var r=n(p,[["render",c],["__file","axios.html.vue"]]);export{r as default};
