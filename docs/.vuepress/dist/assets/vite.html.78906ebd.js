import{_ as n,o as s,c as a,b as p}from"./app.a3a9c1c7.js";const t={},e=p(`<h1 id="vite-\u7684\u57FA\u672C\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#vite-\u7684\u57FA\u672C\u914D\u7F6E" aria-hidden="true">#</a> vite \u7684\u57FA\u672C\u914D\u7F6E</h1><h3 id="vite-\u521B\u5EFA\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#vite-\u521B\u5EFA\u9879\u76EE" aria-hidden="true">#</a> vite \u521B\u5EFA\u9879\u76EE</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npm init vite

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// vite.config.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vite&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> postcssPxToViewport <span class="token keyword">from</span> <span class="token string">&quot;postcss-px-to-viewport&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">&quot;path&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&quot;@vitejs/plugin-vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> viteMockServe <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vite-plugin-mock&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> AutoImport <span class="token keyword">from</span> <span class="token string">&quot;unplugin-auto-import/vite&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Components <span class="token keyword">from</span> <span class="token string">&quot;unplugin-vue-components/vite&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ElementPlusResolver <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;unplugin-vue-components/resolvers&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">esbuild</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">pure</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;console.log&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u5220\u9664 console.log</span>
    <span class="token literal-property property">drop</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;debugger&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u5220\u9664 debugger</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">MODE</span> <span class="token operator">===</span> <span class="token string">&quot;development&quot;</span> <span class="token operator">?</span> <span class="token string">&quot;development&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;production&quot;</span><span class="token punctuation">,</span>

  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">viteMockServe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">//\u9875\u9762\u81EA\u52A8\u5F15\u5165vue \u63D2\u4EF6</span>
    <span class="token function">AutoImport</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">imports</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;vue&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">dts</span><span class="token operator">:</span> <span class="token string">&quot;src/auto-import.d.ts&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">//element plus\u6309\u9700\u81EA\u52A8\u5F15\u5165</span>
    <span class="token function">AutoImport</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">resolvers</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">ElementPlusResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">//element plus\u6309\u9700\u81EA\u52A8\u5F15\u5165</span>
    <span class="token function">Components</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">resolvers</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">ElementPlusResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">//\u63D2\u4EF6</span>

  <span class="token literal-property property">optimizeDeps</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">force</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u5F3A\u5236\u8FDB\u884C\u4F9D\u8D56\u9884\u6784\u5EFA</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;.js&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.ts&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.json&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u5BFC\u5165\u65F6\u60F3\u8981\u7701\u7565\u7684\u6269\u5C55\u540D\u5217\u8868</span>
    <span class="token comment">//\u8DEF\u5F84\u522B\u540D</span>
    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">find</span><span class="token operator">:</span> <span class="token string">&quot;@&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u522B\u540D</span>
        <span class="token literal-property property">replacement</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;src&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// \u522B\u540D\u5BF9\u5E94\u5730\u5740</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">find</span><span class="token operator">:</span> <span class="token string">&quot;components&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">replacement</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;src/components&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u4EE3\u7406\u670D\u52A1</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;/api&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&quot;http url&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token function-variable function">rewrite</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">path</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\/api</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">preprocessorOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">scss</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">additionalData</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">@import &#39;/src/assets/styles/variables.scss&#39;;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token comment">// \u5F15\u5165\u5168\u5C40\u53D8\u91CF\u6587\u4EF6</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">postcss</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">//postcss</span>
      <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">// viewport \u5E03\u5C40\u9002\u914D</span>
        <span class="token function">postcssPxToViewport</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">viewportWidth</span><span class="token operator">:</span> <span class="token number">375</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token literal-property property">build</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">minify</span><span class="token operator">:</span> <span class="token string">&quot;terser&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5FC5\u987B\u5F00\u542F\uFF1A\u4F7F\u7528terserOptions\u624D\u6709\u6548\u679C</span>
    <span class="token literal-property property">terserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">compress</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u751F\u4EA7\u73AF\u5883\u65F6\u79FB\u9664console</span>
        <span class="token literal-property property">drop_console</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">drop_debugger</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">outDir</span><span class="token operator">:</span> <span class="token string">&quot;dist&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u6253\u5305\u6587\u4EF6\u7684\u8F93\u51FA\u76EE\u5F55</span>
    <span class="token literal-property property">assetsDir</span><span class="token operator">:</span> <span class="token string">&quot;static&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u9759\u6001\u8D44\u6E90\u7684\u5B58\u653E\u76EE\u5F55</span>
    <span class="token literal-property property">assetsInlineLimit</span><span class="token operator">:</span> <span class="token number">4096</span><span class="token punctuation">,</span> <span class="token comment">// \u56FE\u7247\u8F6C base64 \u7F16\u7801\u7684\u9608\u503C</span>
    <span class="token literal-property property">reportCompressedSize</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//\u542F\u7528/\u7981\u7528 gzip \u538B\u7F29\u5927\u5C0F\u62A5\u544A\u3002\u538B\u7F29\u5927\u578B\u8F93\u51FA\u6587\u4EF6\u53EF\u80FD\u4F1A\u5F88\u6162\uFF0C\u56E0\u6B64\u7981\u7528\u8BE5\u529F\u80FD\u53EF\u80FD\u4F1A\u63D0\u9AD8\u5927\u578B\u9879\u76EE\u7684\u6784\u5EFA\u6027\u80FD\u3002</span>
    <span class="token literal-property property">chunkSizeWarningLimit</span><span class="token operator">:</span> <span class="token number">1024</span><span class="token punctuation">,</span> <span class="token comment">//\u89C4\u5B9A\u89E6\u53D1\u8B66\u544A\u7684 chunk \u5927\u5C0F</span>
    <span class="token literal-property property">commonjsOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">ignoreTryCatch</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sourcemap</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u6784\u5EFA\u540E\u662F\u5426\u751F\u6210 source map \u6587\u4EF6</span>
    <span class="token literal-property property">rollupOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// \u81EA\u5B9A\u4E49\u5E95\u5C42\u7684 Rollup \u6253\u5305\u914D\u7F6E</span>
      <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">chunkFileNames</span><span class="token operator">:</span> <span class="token string">&quot;js/[name]-[hash].js&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5F15\u5165\u6587\u4EF6\u540D\u7684\u540D\u79F0</span>
        <span class="token literal-property property">entryFileNames</span><span class="token operator">:</span> <span class="token string">&quot;js/[name]-[hash].js&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5305\u7684\u5165\u53E3\u6587\u4EF6\u540D\u79F0</span>
        <span class="token literal-property property">assetFileNames</span><span class="token operator">:</span> <span class="token string">&quot;[ext]/[name]-[hash].[ext]&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u8D44\u6E90\u6587\u4EF6\u50CF \u5B57\u4F53\uFF0C\u56FE\u7247\u7B49</span>
        <span class="token function">manualChunks</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>id<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&quot;node_modules&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> id
              <span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
              <span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;node_modules/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
              <span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
              <span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[e];function c(l,i){return s(),a("div",null,o)}var u=n(t,[["render",c],["__file","vite.html.vue"]]);export{u as default};
