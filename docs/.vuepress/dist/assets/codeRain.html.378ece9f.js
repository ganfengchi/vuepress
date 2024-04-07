import{_ as n,o as s,c as a,b as t}from"./app.a3a9c1c7.js";var p="/myblog/assets/code_rain_01.d2748c13.png",o="/myblog/assets/code_rain_02.58ca3c29.png";const e={},c=t('<h1 id="\u4EE3\u7801\u96E8\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u96E8\u6548\u679C" aria-hidden="true">#</a> \u4EE3\u7801\u96E8\u6548\u679C</h1><h3 id="\u6700\u7EC8\u5B9E\u73B0\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#\u6700\u7EC8\u5B9E\u73B0\u6548\u679C" aria-hidden="true">#</a> \u6700\u7EC8\u5B9E\u73B0\u6548\u679C</h3><p><img src="'+p+'" alt="alt "><img src="'+o+`" alt="alt "></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        <span class="token comment">//\u83B7\u53D6canvas\u539F\u751F</span>
        <span class="token keyword">const</span> cvs <span class="token operator">=</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;bg&#39;</span><span class="token punctuation">)</span>
        <span class="token comment">//\u83B7\u53D6\u7A97\u53E3\u5C3A\u5BF8</span>
        <span class="token keyword">const</span> width <span class="token operator">=</span>window<span class="token punctuation">.</span>innerWidth<span class="token punctuation">,</span>
        height <span class="token operator">=</span> window<span class="token punctuation">.</span>innerHeight<span class="token punctuation">;</span>
        <span class="token comment">//\u8BBE\u7F6Ecanvas\u5C3A\u5BF8</span>
        cvs<span class="token punctuation">.</span>width <span class="token operator">=</span>width
        cvs<span class="token punctuation">.</span>height <span class="token operator">=</span>height

        <span class="token comment">//\u83B7\u53D6\u7ED8\u5236\u4E0A\u4E0B\u6587</span>
        <span class="token keyword">const</span>  ctx <span class="token operator">=</span> cvs<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&quot;2d&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//\u5217\u5BBD</span>
        <span class="token keyword">const</span> columnWidth <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>

        <span class="token comment">// \u5217\u6570</span>
        <span class="token keyword">const</span> cloumnCount <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>innerWidth <span class="token operator">/</span> columnWidth<span class="token punctuation">)</span>

        <span class="token comment">//\u8BB0\u5F55\u6BCF\u5217\u5199\u5230\u4E86\u7B2C\u51E0\u4E2A\u6587\u5B57</span>
        <span class="token keyword">const</span> columnNextIndexs  <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>cloumnCount<span class="token punctuation">)</span>
        columnNextIndexs<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
        
        <span class="token comment">//\u7ED8\u5236\u51FD\u6570</span>
        <span class="token keyword">function</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
             <span class="token comment">//\u6BCF\u6B21\u7ED8\u5236\u524D\u8BBE\u7F6E\u900F\u660E\u8272</span>
            ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">&#39;rgba(240,240,240,.1)&#39;</span>
            <span class="token comment">//\u7ED8\u5236\u77E9\u5F62\u586B\u5145\u6574\u4E2A\u5C4F\u5E55</span>
            ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span>width<span class="token punctuation">,</span>height<span class="token punctuation">)</span>
            <span class="token comment">//\u5B57\u4F53\u5927\u5C0F\u8BBE\u7F6E</span>
            <span class="token keyword">const</span> fz <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
            <span class="token comment">//\u586B\u5145\u968F\u673A\u989C\u8272</span>
            ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token function">getRandomColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token comment">//\u8BBE\u7F6E\u5B57\u4F53</span>
            ctx<span class="token punctuation">.</span>font <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>fz<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px &quot;Roboto Mono&quot;</span><span class="token template-punctuation string">\`</span></span>
            <span class="token comment">//\u5FAA\u73AF\u7ED8\u5236\u6587\u5B57</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span>cloumnCount<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">//\u5750\u6807x \u7B49\u4E8E i * \u884C\u5BBD</span>
                <span class="token keyword">const</span> x <span class="token operator">=</span> i <span class="token operator">*</span> columnWidth
                <span class="token comment">// \u5750\u6807y \u7B49\u4E8E \u5B57\u4F53\u5927\u5C0F * \u5F53\u524D\u884C\u7684\u7B2Ci\u4E2A \u4E0B\u6807</span>
                <span class="token keyword">const</span> y <span class="token operator">=</span> fz <span class="token operator">*</span> columnNextIndexs<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
                <span class="token comment">//   \u586B\u5145\u6587\u672C</span>
                ctx<span class="token punctuation">.</span><span class="token function">fillText</span><span class="token punctuation">(</span><span class="token function">getRandomChar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>x<span class="token punctuation">,</span>y<span class="token punctuation">)</span>
                <span class="token comment">// \u5F53\u524D\u884C\u7B2Ci\u4E2A++</span>
                columnNextIndexs<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">++</span>
                <span class="token comment">// \u5F53 \u5750\u6807y\u7684\u9AD8\u5EA6\u5927\u4E8E \u5C4F\u5E55\u544A\u8BC9 &amp;&amp; \u968F\u673A\u6570\u5927\u4E8E0.99 \u5C31\u8BA9 \u5F53\u524D\u884C\u7684\u7B2Ci\u4E2A\u4E0B\u8868\u8BBE\u7F6E\u4E3A 0 \u5426\u5219 ++</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>y <span class="token operator">&gt;</span>height <span class="token operator">&amp;&amp;</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">&gt;</span><span class="token number">0.99</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
                    columnNextIndexs<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span>
                <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                    columnNextIndexs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">++</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>   

        <span class="token comment">//\u968F\u673A\u989C\u8272</span>
        <span class="token keyword">function</span>  <span class="token function">getRandomColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">const</span>  fontColors<span class="token operator">=</span> <span class="token punctuation">[</span>
                <span class="token string">&#39;#33B5E5&#39;</span><span class="token punctuation">,</span>
                <span class="token string">&#39;#0099CC&#39;</span><span class="token punctuation">,</span>
                <span class="token string">&#39;#AA66CC&#39;</span><span class="token punctuation">,</span>
                <span class="token string">&#39;#9933CC&#39;</span><span class="token punctuation">,</span>
                <span class="token string">&#39;#99CC00&#39;</span><span class="token punctuation">,</span>
                <span class="token string">&#39;#669900&#39;</span><span class="token punctuation">,</span>
                <span class="token string">&#39;#FFBB33&#39;</span><span class="token punctuation">,</span>
                <span class="token string">&#39;#FF8800&#39;</span><span class="token punctuation">,</span>
                <span class="token string">&#39;#FF4444&#39;</span><span class="token punctuation">,</span>
                <span class="token string">&#39;#CC0000&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span>
            <span class="token keyword">return</span> fontColors<span class="token punctuation">[</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> fontColors<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//\u968F\u673A\u6587\u5B57</span>
        <span class="token keyword">function</span>  <span class="token function">getRandomChar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">const</span> str <span class="token operator">=</span><span class="token string">&#39;ABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890abcdefghijklmnopqrstuvwxyz&#39;</span>
            <span class="token keyword">return</span> str<span class="token punctuation">[</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">*</span>str<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token function">setInterval</span><span class="token punctuation">(</span>draw<span class="token punctuation">,</span><span class="token number">40</span><span class="token punctuation">)</span>

    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),l=[c];function i(u,k){return s(),a("div",null,l)}var d=n(e,[["render",i],["__file","codeRain.html.vue"]]);export{d as default};
