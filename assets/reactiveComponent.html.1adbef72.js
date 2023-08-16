import{_ as n,o as s,c as a,b as t}from"./app.45bd6076.js";const p={},o=t(`<h1 id="vue-\u7EC4\u4EF6\u5C01\u88C5" tabindex="-1"><a class="header-anchor" href="#vue-\u7EC4\u4EF6\u5C01\u88C5" aria-hidden="true">#</a> vue \u7EC4\u4EF6\u5C01\u88C5</h1><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment">//children</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
  export <span class="token keyword">default</span> <span class="token punctuation">{</span>
    methos<span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token function">refresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">handleSubmit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">changeActive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token comment">//parent</span>

<span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div ref<span class="token operator">=</span><span class="token string double-quoted-string">&quot;mainComponent&quot;</span> <span class="token punctuation">:</span>is<span class="token operator">=</span><span class="token string double-quoted-string">&quot;XXXXXX&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
  export <span class="token keyword">default</span> <span class="token punctuation">{</span>
    methos<span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token function">refresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        this<span class="token operator">.</span><span class="token variable">$nextTaick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          let func <span class="token operator">=</span> this<span class="token operator">.</span><span class="token variable">$refs</span><span class="token operator">.</span>mainComponent<span class="token operator">.</span>refresh<span class="token punctuation">;</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>typeof func <span class="token operator">===</span> <span class="token string double-quoted-string">&quot;function&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token function">handleSubmit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        let func <span class="token operator">=</span> this<span class="token operator">.</span><span class="token variable">$refs</span><span class="token operator">.</span>mainComponent<span class="token operator">.</span>refresh<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>typeof func <span class="token operator">===</span> <span class="token string double-quoted-string">&quot;function&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token comment">//Next Prev</span>
      <span class="token function">changeActive</span><span class="token punctuation">(</span>diff<span class="token punctuation">,</span> loadingName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        this<span class="token punctuation">[</span>loading<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token constant boolean">true</span><span class="token punctuation">;</span><span class="token comment">//\u6309\u94AEloading</span>
        let funcName <span class="token operator">=</span> diff <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">?</span> <span class="token string double-quoted-string">&quot;beforeNext&quot;</span> <span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;beforePrve&quot;</span><span class="token punctuation">;</span>
        let funcObj <span class="token operator">=</span> this<span class="token operator">.</span><span class="token variable">$refs</span><span class="token operator">.</span>mainComponent<span class="token punctuation">[</span>funcName<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>typeof funcObj <span class="token operator">===</span> <span class="token string double-quoted-string">&quot;function&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token comment">//\u8C03\u7528\u67D0\u4E9B\u65B9\u6CD5</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
            this<span class="token punctuation">[</span>loading<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token constant boolean">false</span><span class="token punctuation">;</span>
            <span class="token comment">//err \u64CD\u4F5C</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),e=[o];function c(i,l){return s(),a("div",null,e)}var r=n(p,[["render",c],["__file","reactiveComponent.html.vue"]]);export{r as default};
