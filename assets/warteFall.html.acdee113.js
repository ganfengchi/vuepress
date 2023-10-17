import{_ as n,o as s,c as a,b as t}from"./app.306cf4b6.js";var p="/myblog/assets/wartefall_01.f573135f.png";const o={},e=t('<h1 id="\u7011\u5E03\u6D41\u5E03\u5C40\u7684\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u7011\u5E03\u6D41\u5E03\u5C40\u7684\u5B9E\u73B0" aria-hidden="true">#</a> \u7011\u5E03\u6D41\u5E03\u5C40\u7684\u5B9E\u73B0</h1><p><img src="'+p+`" alt="atl wartefall_01"></p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span>
      <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(item, index) in list<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.topicid + index<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.imgsrc<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&quot;axios&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted<span class="token punctuation">,</span> ref<span class="token punctuation">,</span> watch<span class="token punctuation">,</span> nextTick <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> list <span class="token operator">=</span> ref<span class="token operator">&lt;</span>any<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">getListData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  axios
    <span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;https://c.m.163.com/nc/auto/list/6YOR5bee/0-100.html&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>list<span class="token punctuation">,</span> <span class="token string">&quot;xxxxxxxxxxxxxxxxxx&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      list<span class="token punctuation">.</span>value <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>list<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">getListData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">cal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token literal-property property">divContainer</span><span class="token operator">:</span> any <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;container&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> imgWidth <span class="token operator">=</span> <span class="token number">220</span><span class="token punctuation">;</span>
  <span class="token comment">//\u5BB9\u5668\u7684\u5BBD\u5EA6</span>
  <span class="token keyword">var</span> <span class="token literal-property property">containerWidth</span><span class="token operator">:</span> any <span class="token operator">=</span> divContainer<span class="token operator">?.</span>clientWidth<span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>containerWidth<span class="token punctuation">,</span> <span class="token string">&quot;containerWidth&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">//\u8BA1\u7B97\u5217\u7684\u6570\u91CF</span>
  <span class="token keyword">var</span> columns <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>containerWidth <span class="token operator">/</span> imgWidth<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>columns<span class="token punctuation">,</span> <span class="token string">&quot;columns&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">//\u8BA1\u7B97\u95F4\u9699</span>
  <span class="token keyword">var</span> spaceNumber <span class="token operator">=</span> columns <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token comment">//\u8BA1\u7B97\u5269\u4F59\u7A7A\u95F4</span>
  <span class="token keyword">var</span> leftSpace <span class="token operator">=</span> containerWidth <span class="token operator">-</span> columns <span class="token operator">*</span> imgWidth<span class="token punctuation">;</span>
  <span class="token comment">// \u6BCF\u4E2A\u95F4\u9699\u7684\u7A7A\u95F4</span>

  <span class="token keyword">var</span> space <span class="token operator">=</span> leftSpace <span class="token operator">/</span> spaceNumber<span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    space<span class="token punctuation">,</span>
    columns<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u8BBE\u7F6E\u6BCF\u5F20\u56FE\u7247\u7684\u4F4D\u7F6E</span>
<span class="token keyword">function</span> <span class="token function">setPoisions</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token literal-property property">divContainer</span><span class="token operator">:</span> any <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;container&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> imgWidth <span class="token operator">=</span> <span class="token number">220</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> info <span class="token operator">=</span> <span class="token function">cal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u5F97\u5230\u5217\u6570\u548C\u95F4\u9699\u7684\u7A7A\u95F4</span>
  <span class="token keyword">var</span> nextTops <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>info<span class="token punctuation">.</span>columns<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8BE5\u6570\u7EC4\u7684\u957F\u5EA6\u4E3A\u5217\u6570\uFF0C\u6BCF\u4E00\u9879\u8868\u793A\u8BE5\u5217\u7684\u4E0B\u4E00\u4E2A\u56FE\u7247\u7684\u7EB5\u5750\u6807</span>

  nextTops<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u5C06\u6570\u7EC4\u7684\u6BCF\u4E00\u9879\u586B\u5145\u4E3A0</span>
   <span class="token comment">//\u52A0\u5B9A\u65F6\u5668\u662F\u4E3A\u4E86    </span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> divContainer<span class="token operator">?.</span>children<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> img <span class="token operator">=</span> divContainer<span class="token punctuation">.</span>children<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>img<span class="token punctuation">,</span><span class="token string">&#39;img&#39;</span><span class="token punctuation">)</span>
    <span class="token comment">//\u627E\u5230nextTops\u4E2D\u6700\u5C0F\u7684\u503C\u4F5C\u4E3A\u5F53\u524D\u56FE\u7247\u7684\u7EB5\u5750\u6807</span>
    <span class="token keyword">var</span> minTop <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> nextTops<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>minTop<span class="token punctuation">,</span><span class="token string">&#39;minTop&#39;</span><span class="token punctuation">)</span>
    img<span class="token punctuation">.</span>style<span class="token punctuation">.</span>top <span class="token operator">=</span> minTop <span class="token operator">+</span> <span class="token string">&quot;px&quot;</span><span class="token punctuation">;</span>
    <span class="token comment">//\u91CD\u65B0\u8BBE\u7F6E\u6570\u7EC4\u8FD9\u4E00\u9879\u7684\u4E0B\u4E00\u4E2Atop\u503C</span>
    <span class="token keyword">var</span> index <span class="token operator">=</span> nextTops<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>minTop<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u5F97\u5230\u5F97\u4F7F\u7528\u7B2C\u51E0\u5217top\u503C</span>
    nextTops<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">+=</span> img<span class="token punctuation">.</span>height <span class="token operator">+</span> info<span class="token punctuation">.</span>space<span class="token punctuation">;</span>
    <span class="token comment">//\u6A2A\u5750\u6807</span>
    <span class="token keyword">var</span> left <span class="token operator">=</span> <span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> info<span class="token punctuation">.</span>space <span class="token operator">+</span> index <span class="token operator">*</span> imgWidth<span class="token punctuation">;</span>
    img<span class="token punctuation">.</span>style<span class="token punctuation">.</span>left <span class="token operator">=</span> left <span class="token operator">+</span> <span class="token string">&quot;px&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>nextTops<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> max <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> nextTops<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u6C42\u6700\u5927\u503C</span>
  divContainer<span class="token punctuation">.</span>style<span class="token punctuation">.</span>height <span class="token operator">=</span> max <span class="token operator">+</span> <span class="token string">&quot;px&quot;</span><span class="token punctuation">;</span> <span class="token comment">//\u8BBE\u7F6E\u5BB9\u5668\u7684\u9AD8\u5EA6</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token punctuation">}</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setPoisions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">watch</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> list<span class="token punctuation">.</span>value<span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">newV</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newV<span class="token punctuation">,</span> <span class="token string">&quot;newV&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 90%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 2px solid<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token selector">img</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 220px<span class="token punctuation">;</span>
    <span class="token property">transition</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7B80\u5355\u7684\u5B9E\u73B0\u7011\u5E03\u6D41 \u8FD8\u53EF\u4EE5\u76D1\u542Conresize\u65B9\u6CD5 \u65B9\u6CD5\u7F29\u5C0F\u65F6\u89E6\u53D1\u8BBE\u7F6E\u6BCF\u5F20\u56FE\u7247\u5927\u5C0F\u7684\u4F4D\u7F6E \uFF0C \u522B\u5FD8\u4E86\u52A0\u4E0A\u9632\u6296\u989D</p>`,4),c=[e];function l(i,u){return s(),a("div",null,c)}var r=n(o,[["render",l],["__file","warteFall.html.vue"]]);export{r as default};
